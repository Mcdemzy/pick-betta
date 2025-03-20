"use client";
import { FiArrowLeft } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <main>
        <section className="w-full h-20 text-center flex justify-between px-4 items-center rounded-b-[8px] border border-[#EAECF0]">
          <FiArrowLeft size={24} className="cursor-pointer text-[#667085]" />
          <p className="text-[#344054]"> Page 1 of 10</p>
          <FiArrowRight size={24} className="cursor-pointer text-[#667085]" />
        </section>
      </main>
    </>
  );
}
