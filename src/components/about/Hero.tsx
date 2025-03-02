"use client";
import Image from "next/image";
import { heroData } from "../shared/data";

export default function Hero() {
  return (
    <main>
      <section className="mt-[150px] flex flex-col gap-y-7.5 md:ml-20 md:mr-20">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#101828] md:text-[3.75rem] font-bold leading-[78px] tracking-[-2%] mb-4 text-center">
            {heroData.title}
          </h1>
          <p className="text-[#475467] text-[1.125rem] md:max-w-[1280px] m-auto text-center leading-[30px] tracking-[0%]">
            {heroData.description}
          </p>
        </div>
        <div className="flex justify-center m-auto w-[380px] h-[380px] bg-[#ECFDF3] rounded-full">
          <Image
            src={heroData.icon}
            width={262}
            height={262}
            alt="Heart icon"
          />
        </div>
      </section>
    </main>
  );
}
