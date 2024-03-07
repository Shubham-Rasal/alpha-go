import ConfettiComponent from "@/app/components/confetti";
import Link from "next/link";
import React from "react";

const SayPage = () => {
  return (
    <div
      className="h-screen justify-between flex flex-col items-center pb-2 mx-auto w-full 
    
    opacity-90
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
      <img
        loading="lazy"
        src="/sound.svg"
        className="mt-0 max-w-full aspect-[0.99] w-[86px]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/57b3c53788718b83e32021628d4411d1569ad7e0d396a469cfcf9e6fe8ab3e16?"
        className="mt-0 max-w-full aspect-[0.99] w-[136px]"
      />

      {/* <ConfettiComponent /> */}
    </div>
  );
};

export default SayPage;
