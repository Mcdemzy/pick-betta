// components/HeroSection.tsx
"use client";

import Image from "next/image";
import { heroSectionData } from "../shared/data";

export default function HeroSection() {
  return (
    <main className="bg-[#D1FADF] w-full h-screen max-h-screen overflow-hidden flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-20 mx-auto w-full">
        {/* Logo Section - positioned at the top but still within the centered flow */}
        <div className="mb-8 sm:mb-10 md:mb-12 w-full flex justify-center">
          <Image
            src="/images/logo.svg"
            width={200}
            height={200}
            alt="pickbetta logo"
            className="w-32 h-auto sm:w-40"
            priority
          />
        </div>

        {/* Centered Content Section */}
        <section className="w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-6 md:gap-8 flex-1 py-4">
          {/* Text Content */}
          <div className="text-center max-w-[800px] flex flex-col gap-4 md:gap-6 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#101828] leading-tight tracking-tight">
              {heroSectionData.title} <br className="hidden sm:block" />
              <span className="text-[#06543C]">
                {heroSectionData.highlight}
              </span>{" "}
              Data
            </h1>
            <p className="text-[#475467] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
              {heroSectionData.description}
            </p>
            <h3 className="text-[#06543C] text-sm sm:text-base font-medium underline">
              {heroSectionData.ctaText}
            </h3>
          </div>

          {/* Start Now Button */}
          <div className="flex justify-center w-full pt-2 pb-8 sm:pb-10">
            <button className="bg-[#06543C] text-white font-semibold text-base sm:text-lg px-8 py-3 rounded-lg hover:bg-[#054030] transition-colors duration-300">
              {heroSectionData.buttonText}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
