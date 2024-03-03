import React from 'react'

const SayPage = () => {
  return (
    <div className="h-screen justify-between flex flex-col items-center pb-2 mx-auto w-full bg-white max-w-[480px]">
      <div className="flex gap-5 justify-between mt-1.5 w-full max-w-[363px]">
        {/* <div className="flex gap-2 justify-between px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8394af19724ee7c63ab121f166270cb40bab481b65ea2d97042b2cfccbd6859?"
            className="my-auto aspect-square w-[21px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/496d0b396c8273d742ae18ada14ee37fcaa6dff82f34d45a104e76272c679c78?"
            className="self-start aspect-[1.03] w-[33px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/288de1c992715d23ff43b5931684ed337e774df4439a936d07e0844a6fcdd060?"
            className="aspect-square w-[33px]"
          />
        </div> */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e2a0aa7f4e07c8074a27f807b3a34e8056ac0054e13269100e4c1495bda2831?"
          className="my-auto w-8 aspect-[1.1]"
        />
      </div>
      <img
        loading="lazy"
        src='/apple.svg'
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
     
    </div>
  )
}

export default SayPage




