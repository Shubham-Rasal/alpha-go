import Link from "next/link";
import React from "react";

const LearningPage = () => {
  return (
    <div
      className="flex flex-col items-center mx-auto w-full 
    bg-white
    
    
    max-w-[480px]"
    >

      <div className="flex gap-5 justify-between mt-1 w-full max-w-[363px]">
        <img
          loading="lazy"
          src="/icon.svg"
          className="aspect-[1.09] w-[61px]"
        />
        {/* <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fc985d3d07efed81984e8faaaf44b9091d017a80ac74acfdcc3978d2e1afef2?"
                className="self-start mt-2 max-w-full aspect-[2.56] w-[123px]"
            /> */}
      </div>
      <div className="flex gap-2.5 mt-7 w-full text-7xl text-black whitespace-nowrap max-w-[372px]">
      
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/a/draw">A</Link>
                </div>

              </div>
              <Link href="/learn/a/pronouce">
              <img
              className="w-10 h-10 mx-auto"
              src="/sound.svg" alt="" />
              </Link>
            </div>
          </div>
        </div>
       
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/b/draw">B</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-7 w-full text-7xl text-black whitespace-nowrap max-w-[372px]">
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/c/draw">C</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/d/draw">D</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-7 w-full text-7xl text-black whitespace-nowrap max-w-[372px]">
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/c/draw">E</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/d/draw">F</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex gap-2.5 mt-7 w-full text-7xl text-black whitespace-nowrap max-w-[372px]">
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/g/draw">G</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/h/draw">H</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 mt-7 w-full text-7xl text-black whitespace-nowrap max-w-[372px]">
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/i/draw">I</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 pt-5">
          <div className="flex flex-col justify-center bg-sky-300 rounded-lg">
            <div className="flex flex-col px-3 pt-5 pb-12 bg-sky-300 rounded-lg">
              <div className="flex flex-col justify-center mb-6 bg-white rounded-full stroke-[4px]">
                <div className="p-10 text-center bg-white rounded-full stroke-[4px]">
                  <Link href="/learn/j/draw">J</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-2.5 w-full max-w-[372px]">
        <div className="flex-1 shrink-0 h-[17px]" />
        <div className="flex-1 shrink-0 h-[17px]" />
      </div>
    </div>
  );
};

export default LearningPage;
