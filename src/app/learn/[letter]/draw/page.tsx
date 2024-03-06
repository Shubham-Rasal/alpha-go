"use client";
import ConfettiComponent from "@/app/components/confetti";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import {
  Tldraw,
  useEditor,
  createShapeId,
  Editor,
  AssetRecordType,
  TLComponents,
  useValue,
  hardResetEditor,
} from "tldraw";

const DrawPage = () => {
  const [editor, setEditor] = useState<Editor | null>(null);

  const currentToolId = useValue(
    "current tool id",
    () => editor?.getCurrentToolId(),
    [editor]
  );

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
      // Let's center the image in the editor
      x: (window.innerWidth - imageWidth) / 2,
      y: (window.innerHeight - imageHeight) / 2,
      isLocked: true,
      props: {
        assetId,
        w: imageWidth,
        h: imageHeight,
      },
    });
  }, []);

  const components: TLComponents = {
    // SharePanel: CustomShareZone,
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
      <div style={{ height: 750 }}>
        <Tldraw
          onMount={(editor) => {
            setEditor(editor);
            handleMount(editor);
          }}
          components={components}
        />
      </div>
      {/* [3] */}
      <div className="flex justify-center w-full bg-white h-16">
        <button
          className="bg-blue-500 hover:bg-blue-700 w-1/2 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            if (editor) {
              // hardResetEditor();
              // handleMount(editor);
            }
          }}
        >
          Check
        </button>
        <button className="bg-slate-900 hover:bg-slate-700 w-1/2 text-white font-bold py-2 px-4 rounded-full">
          <Link href="/learn">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default DrawPage;
