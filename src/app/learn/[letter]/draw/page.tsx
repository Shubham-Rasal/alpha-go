"use client";
import ConfettiComponent from "@/app/components/confetti";
import React, { useCallback } from "react";
import {
  Tldraw,
  useEditor,
  createShapeId,
  Editor,
  AssetRecordType,
  TLComponents,
} from "tldraw";

const DrawPage = () => {
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
    SharePanel: CustomShareZone,
    TopPanel: ConfirmButton,
    Background: () => (
      <img
        src="/grid.svg"
        alt="grid"
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "lightgray",
          width: "100%",
          height: "100vh",
        }}
      />
    ),
    NavigationPanel: null,
    MainMenu: null,
    ActionsMenu: null,
    PageMenu: null,
  };

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw onMount={handleMount} components={components} />
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
      {/* <ConfettiComponent /> */}
    </div>
  );
}

//creaet a big blue confirm button just above the drawing area
function ConfirmButton() {
  return (
    <div className="flex justify-center items-center w-full h-16 bg-blue-500 text-white text-2xl
    fixed top-0 left-0 z-50
    ">
      👍
    </div>
  );
}
