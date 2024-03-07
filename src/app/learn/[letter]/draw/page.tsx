"use client";
import ConfettiComponent from "@/app/components/confetti";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import initialSnapshot from "./snapshot.json";
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

  const [snapshot, setSnapshot] =
    useState<StoreSnapshot<TLRecord>>(initialSnapshot);
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
          <div className="flex justify-center">
            <TldrawImage
              //[1]
              snapshot={snapshot}
              // [2]
              pageId={currentPageId}
              // [3]
              padding={30}
              scale={0.5}
            />
            <ConfettiComponent />
          </div>
        )}
      </div>
      {/* [3] */}
      <div
        className="
      flex justify-between p-1 w-full bg-white h-16"
      >
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 w-fit text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              if (isEditing) {
                if (!editor) return;
                setCurrentPageId(editor.getCurrentPageId());
                setSnapshot(editor.store.getSnapshot());

                //get the image of the canvas
                const container = editor.getContainer();
                const canvas = container.querySelector("canvas");
                // console.log(canvas?.toDataURL());

                // const image = new Image();
                // image.src = canvas?.toDataURL() || "";

                if ("createHandwritingRecognizer" in navigator) {
                  // 🎉 The Handwriting Recognition API is supported!
                  console.log("Handwriting Recognition API is supported");
                }

                setIsEditing(false);
              } else {
                setIsEditing(true);
              }
            }}
          >
            {isEditing ? "Save" : "Reset"}
          </button>
          <button className="bg-slate-900 hover:bg-slate-700 w-fit text-white font-bold py-2 px-4 rounded-full">
            <Link href="/learn">Back</Link>
          </button>
        </div>
        <button
          onClick={() => {
            const audio = document.getElementById(
              "audio_tag"
            ) as HTMLAudioElement;
            audio.play();
          }}
        >
          <img src="/sound.svg" className="size-16" alt="" />
        </button>
      </div>
      {/* <div className="mt-4 flex justify-center gap-2 w-full h-16 items-center">
        <img className="w-16 h-16" src="/right.svg" alt="" />
        <h1 className="text-4xl font-bold text-green-500">Correct!</h1>

      </div> */}
      {isEditing ? null : (
        <div className="mt-4 flex justify-center gap-2 w-full h-16 items-center">
          <img className="w-16 h-16" src="/right.svg" alt="" />
          <h1 className="text-4xl font-bold text-green-500">Correct!</h1>
        </div>
      )}

      <audio id="audio_tag" src="/sounds/a.mp3" />
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
    ></div>
  );
}
