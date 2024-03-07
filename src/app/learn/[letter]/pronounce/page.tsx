"use client";
import ConfettiComponent from "@/app/components/confetti";
import Link from "next/link";
import React from "react";

const SayPage = () => {
  return (
    <div
      className="h-screen justify-between flex flex-col items-center pb-2 mx-auto w-full 
    
    opacity-80
    h-screen bg-white max-w-[480px]"
    >
      <div className="flex gap-5 justify-between mt-1.5 w-full max-w-[363px]">
        <Link href="/learn">
          <img src="/home.svg" alt="" />
        </Link>
      </div>
      <img
        loading="lazy"
        src="/apple.svg"
        className="mt-3 max-w-full aspect-[1.05] w-[166px]"
      />
      <div className="mt-4 text-black text-[200px]">A</div>
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

      {/* <ConfettiComponent /> */}
      <audio id="audio_tag" src="/sounds/a.mp3" />
    </div>
  );
};

export default SayPage;
