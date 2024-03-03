import * as React from "react";
import Link from "next/link";
export default function MainScreen() {
  return (
    <div className="h-screen flex flex-col items-center mx-auto w-full bg-white max-w-[480px] max-sm:max-w-[524px]">
      <img
        loading="lazy"
        src="/splash.png"
        className="self-stretch w-full aspect-[1.23] fill-cyan-300"
      />
      <div className="mt-12 text-5xl font-bold text-black">
        Let’s learn
        <br />
        Alphabet!!
      </div>
      <Link href="/learn">
        <div className="flex gap-2.5 px-14 py-5 mt-12 max-w-full text-5xl font-extrabold text-white whitespace-nowrap bg-sky-300 border-2 border-sky-400 border-solid rounded-[80px] w-[209px]">
          <div className="my-auto">Go</div>
          <img
            loading="lazy"
            src="/arrow.svg"
            className="flex-1 shrink-0 w-full aspect-[1.05]"
          />
        </div>
      </Link>
    </div>
  );
}
