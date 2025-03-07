// components/HeroSection.tsx
"use client";

import Image from "next/image";
import { heroSectionData } from "../shared/data";

export default function HeroSection() {
  return (
    <main className="bg-[#D1FADF] w-full h-fit px-4 pt-10 md:px-20 lg:px-40 xl:px-80 mx-auto md:pb-0 pb-7.5">
      <section className="max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="text-center max-w-[800px] flex flex-col gap-4 md:gap-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#101828] leading-tight tracking-tight">
            {heroSectionData.title} <br className="hidden sm:block" />
            <span className="text-[#06543C]">{heroSectionData.highlight}</span>
          </h1>
          <p className="text-[#475467] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            {heroSectionData.description}
          </p>
          <h3 className="text-[#06543C] text-sm sm:text-base font-medium underline">
            {heroSectionData.ctaText}
          </h3>
        </div>

        {/* Start Now Button */}
        <div className="flex justify-center">
          <button className="bg-[#06543C] text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-lg hover:bg-[#054030] transition-colors duration-300">
            {heroSectionData.buttonText}
          </button>
        </div>
      </section>

      {/* Hero Section Image */}
      <section className="w-full">
        <div className="flex justify-center">
          <div className="w-[334px] h-[266px] md:w-[761px] md:h-[500px] overflow-hidden">
            <Image
              src={heroSectionData.imageSrc}
              width={761}
              height={604}
              alt={heroSectionData.imageAlt}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
