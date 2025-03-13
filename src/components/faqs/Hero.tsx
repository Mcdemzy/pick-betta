"use client";

import { LuSearch } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <main className="md:pt-10 pt-17.5 pb-18 px-5 w-full m-auto bg-[#ECFDF3] md:px-20 md:pb-[107px]">
        <section className="flex flex-col gap-y-5 md:gap-y-4">
          <h1 className="text-[#101828] gilroy-bold text-bold text-[2.25rem] leading-11 tracking-[-2%] text-center md:text-[3.75rem] md:leading-19.5">
            Frequently Asked <br className="md:hidden" />
            Questions (FAQs)
          </h1>
          <div className="relative w-full m-auto text-[#98A2B3] text-[.875rem] leading-5.5 md:w-[500px] md:text-[1rem] md:leading-6">
            <input
              type="search"
              placeholder="Search for questions"
              name=""
              id=""
              className="w-full py-2.5 px-10 border border-[#D0D5DD] rounded-lg shadow-xs"
            />
            <LuSearch className="absolute top-3.5 left-4" />
          </div>
        </section>
      </main>
    </>
  );
}
