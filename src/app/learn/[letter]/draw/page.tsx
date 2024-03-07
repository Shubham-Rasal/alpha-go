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
  const [isError, setIsError] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

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

  function convertToGrayscale(imageData: ImageData) {
    const grayscaleData = new Uint8ClampedArray(
      imageData.width * imageData.height
    );
    for (let i = 0; i < imageData.data.length; i += 4) {
      const average =
        (imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2]) / 3;
      grayscaleData[i / 4] = average;
    }
    return grayscaleData;
  }

  function compareImages(
    imageData1: Uint8ClampedArray,
    imageData2: Uint8ClampedArray
  ) {
    let errorCount = 0;
    for (let i = 0; i < imageData1.length; i++) {
      // If the difference is greater than 10, consider it an error
      if (Math.abs(imageData1[i] - imageData2[i]) > 10) {
        errorCount++;
      }
    }
    return (errorCount / imageData1.length) * 100;
  }

  return (
    <div className="flex flex-col h-full bg-white">
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
          <div id="canvasImage" className="flex justify-center">
            <TldrawImage
              //[1]
              snapshot={snapshot}
              // [2]
              pageId={currentPageId}
              // [3]
              padding={30}
              scale={0.5}
            />
            {/* <ConfettiComponent /> */}
            {isError ? null : <ConfettiComponent />}
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
                setIsCalculating(true);
                setCurrentPageId(editor.getCurrentPageId());
                setSnapshot(editor.store.getSnapshot());

                // Define the stencil image: Have the stencil image as a reference.
                const stensilImage = new Image();
                stensilImage.src = "/letter.svg";

                console.log(stensilImage);

                //wait for image to render
                setTimeout(() => {
                  //get the image of the canvas
                  const images = document
                    .getElementsByClassName("tl-container")[0]
                    .getElementsByTagName("img");
                  console.log(images);
                  const canvasImage = images[0];
                  console.log(canvasImage);

                  //calcualte

                  //put both on canvas
                  const stencilCanvas = document.createElement("canvas");
                  stencilCanvas.width = stensilImage.width;
                  stencilCanvas.height = stensilImage.height;
                  const stencilCtx = stencilCanvas.getContext("2d");
                  if (!stencilCtx) return;
                  stencilCtx.drawImage(stensilImage, 0, 0);
                  const stencilImageData = stencilCtx.getImageData(
                    0,
                    0,
                    stencilCanvas.width,
                    stencilCanvas.height
                  );
                  const stencilGrayscaleData =
                    convertToGrayscale(stencilImageData);

                  const canvas = document.createElement("canvas");
                  canvas.width = canvasImage.width;
                  canvas.height = canvasImage.height;
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return;
                  ctx.drawImage(canvasImage, 0, 0);
                  const imageData = ctx.getImageData(
                    0,
                    0,
                    canvas.width,
                    canvas.height
                  );
                  const grayscaleData = convertToGrayscale(imageData);
                  const errorPercentage = compareImages(
                    grayscaleData,
                    stencilGrayscaleData
                  );
                  console.log(errorPercentage);
                  if (errorPercentage < 11) {
                    setIsError(false);
                  } else {
                    setIsError(true);
                  }
                }, 500);

                // Check if the error percentage is within the tolerance: If the error percentage is less than or equal to 10%, consider the answer correct; otherwise, consider it wrong.
                setIsCalculating(false);
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

      {isEditing ? (
        <div className="flex text-black">
          <img src="/apple.svg" alt="" />
          <p className="text-4xl font-bold flex items-center justify-center h-full w-full bg-white">
            Apple
          </p>
        </div>
      ) : isCalculating ? (
        <div className="flex justify-center items-center h-full">
          Calculating...
        </div>
      ) : isError ? (
        <div className="mt-4 flex justify-center gap-2 w-full h-16 items-center">
          <img className="w-16 h-16" src="/wrong.svg" alt="" />
          <h1 className="text-4xl font-bold text-red-500">Wrong!</h1>
        </div>
      ) : (
        <div className="mt-4 flex justify-center gap-2 w-full h-16 items-center">
          <img className="w-16 h-16" src="/right.svg" alt="" />
          <h1 className="text-4xl font-bold text-green-500">Correct!</h1>
        </div>
      )}

      <iframe
        className="w-full h-96"
        src="https://www.youtube.com/embed/n5gPlhG_d1E?si=3RrkQtTNabh6OOsR"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

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
