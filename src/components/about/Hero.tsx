"use client";
import Image from "next/image";
import { heroData } from "../shared/data";

export default function Hero() {
  return (
    <main className="p-5 pt-[131px]">
      <section className="mt-7.5 flex flex-col gap-y-7.5">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#101828] text-[2.25rem] leading-11 md:text-[3.75rem] font-bold md:leading-[78px] tracking-[-2%] mb-4 text-center">
            {heroData.title}
          </h1>
          <p className="text-[#475467] text-[1.125rem] md:max-w-[1280px] m-auto text-center leading-[30px] tracking-[0%] hidden md:block">
            {heroData.description}
          </p>
          <p className="m-auto max-w-[335px] text-[#475467] leading-6 text-center md:hidden">
            {heroData.story}
          </p>
        </div>
        <div className="flex justify-center m-auto md:w-[380px] md:h-[380px] bg-[#ECFDF3] w-[190px] h-[190px] rounded-full">
          <Image
            src={heroData.icon}
            width={262}
            height={262}
            alt="Heart icon"
          />
        </div>
        <p className="text-[#475467] text-[.875rem] md:max-w-[1280px] m-auto  md:hidden leading-[22px]">
          {heroData.description}
        </p>
      </section>
    </main>
  );
}
