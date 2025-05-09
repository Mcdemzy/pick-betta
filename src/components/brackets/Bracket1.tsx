"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* <SideBar /> */}

        {/* Navbar Section */}
        <section></section>

        {/* Bracket Section */}
        <section className="flex flex-col gap-y-3 ml-10 my-10">
          <div className="w-[243px] min-h-[81px] rounded border border-[#E4E7EC]">
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-fit rounded-tl-[5px]">
                <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                />
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5">
                New Orleans Pelicans
              </p>
              <div className="bg-[#A6F4C5] w-10 h-10 text-xl leading-6 text-[#667085] px-4 py-2 rounded-tr-[5px]">
                1
              </div>
            </div>
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-fit rounded-bl-[5px]">
                <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                />
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5">
                New Orleans Pelicans
              </p>
              <div className="bg-[#06543C] w-10 h-10 text-xl leading-6 text-white px-4 py-2 rounded-br-[5px]">
                1
              </div>
            </div>
          </div>
          <div className="bg-[#D0D0D0B2] w-[200px] absolute h-[2px] left-70 top-[84px]">
            <div className="h-[8px] w-[2px] bg-[#D0D0D0B2] relative left-50 top-0"></div>
          </div>

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="w-[243px] min-h-[81px] rounded border border-[#E4E7EC]">
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-fit rounded-tl-[5px]">
                <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                />
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5">
                New Orleans Pelicans
              </p>
              <div className="bg-[#A6F4C5] w-10 h-10 text-xl leading-6 text-[#667085] px-4 py-2 rounded-tr-[5px]">
                1
              </div>
            </div>
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-fit rounded-bl-[5px]">
                <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                />
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5">
                New Orleans Pelicans
              </p>
              <div className="bg-[#06543C] w-10 h-10 text-xl leading-6 text-white px-4 py-2 rounded-br-[5px]">
                1
              </div>
            </div>
          </div>
          <div className="bg-[#D0D0D0B2] w-[200px] absolute h-[2px] left-70 top-[186px]">
            <div className="h-[6px] w-[2px] bg-[#D0D0D0B2] relative left-50 bottom-1"></div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          <div className="w-[243px] min-h-[81px] rounded border border-[#E4E7EC] absolute top-[92px] left-90">
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-10.5 h-10.5 rounded-tl-[5px]">
                {/* <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                /> */}
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5"></p>
              <div className="bg-[#A6F4C5] w-10 h-10 text-xl leading-6 text-[#667085] px-4 py-2 rounded-tr-[5px]"></div>
            </div>
            <div className="flex items-center justify-between border border-[#E4E7EC]">
              <div className="border border-[#E4E7EC] w-10.5 h-10.5 rounded-bl-[5px]">
                {/* <Image
                  src="/images/newOrleans.svg"
                  width={40}
                  height={40}
                  alt="New Orleans Logo"
                  className=""
                /> */}
              </div>
              <p className="text-[.75rem] text-[#000000] leading-4.5"></p>
              <div className="bg-[#06543C] w-10 h-10 text-xl leading-6 text-white px-4 py-2 rounded-br-[5px]"></div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
        </section>
      </main>
    </>
  );
}
