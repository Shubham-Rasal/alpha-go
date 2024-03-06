"use client";
import ConfettiComponent from "@/app/components/confetti";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import initialSnapshot from './snapshot.json'
import {
  Tldraw,
  useEditor,
  createShapeId,
  Editor,
  AssetRecordType,
  TLComponents,
  useValue,
  hardResetEditor,
  TLRecord,
  StoreSnapshot,
  TLPageId,
  TldrawImage,
  TLUnknownShape,
} from "tldraw";

const DrawPage = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  const currentToolId = useValue(
    "current tool id",
    () => editor?.getCurrentToolId(),
    [editor]
  );

  const [snapshot, setSnapshot] = useState<StoreSnapshot<TLRecord>>(initialSnapshot)
  const [currentPageId, setCurrentPageId] = useState<TLPageId | undefined>();
  const [isEditing, setIsEditing] = useState(true);

  const handleMount = useCallback((editor: Editor) => {
    //[2]
    const assetId = AssetRecordType.createId();
    const imageWidth = 150;
    const imageHeight = 150;
    //[2]
    editor.createAssets([
      {
        id: assetId,
        type: "image",
        typeName: "asset",
        props: {
          name: "letter.svg",
          src: "/letter.svg", // You could also use a base64 encoded string here
          w: imageWidth,
          h: imageHeight,
          mimeType: "image/svg",
          isAnimated: false,
        },
        meta: {},
      },
    ]);

    editor.updateInstanceState({ canMoveCamera: false });

    //[3]
    editor.createShape({
      type: "image",
      id: createShapeId("letter"),
      // Let's center the image in the editor
      x: (window.innerWidth - imageWidth) / 2,
      y: (window.innerHeight - imageHeight) / 4,
      isLocked: true,
      props: {
        assetId,
        w: imageWidth,
        h: imageHeight,
      },
    });
  }, []);

  const components: TLComponents = {
    SharePanel: CustomShareZone,
    Background: () => (
      <img
        src="/grid.svg"
        alt="grid"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "lightgray",
          width: "100%",
          height: "82vh",
        }}
      />
    ),
    NavigationPanel: null,
    MainMenu: null,
    ActionsMenu: null,
    PageMenu: null,
    DebugMenu: null,
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div style={{ height: 500 }}>
        {isEditing ? (
          <Tldraw
            onMount={(editor) => {
              setEditor(editor);
              handleMount(editor);
            }}
            components={components}
          />
        ) : (
          <TldrawImage
            //[1]
            snapshot={snapshot}
            // [2]
            pageId={currentPageId}
            // [3]
            padding={0}
            scale={1}
          />
        )}
      </div>

      {/* [3] */}
      <div className="flex justify-center w-full bg-white h-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            if (isEditing) {
              if (!editor) return;
              setCurrentPageId(editor.getCurrentPageId());
              setSnapshot(editor.store.getSnapshot());

              //remove the shape before hard reset
              

              setIsEditing(false);
            } else {
              setIsEditing(true);
            }
          }}
        >
          {isEditing ? "Save" : "Reset"}
        </button>
        <button className="bg-slate-900 hover:bg-slate-700 w-1/2 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/learn">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default DrawPage;

function CustomShareZone() {
  return (
    <div
      style={{
        backgroundColor: "thistle",
        width: "100%",
        textAlign: "center",
        minWidth: "80px",
      }}
    >
      <ConfettiComponent />
    </div>
  );
}
