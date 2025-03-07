// components/Section.tsx
"use client";

import Image from "next/image";

interface SectionProps {
  title: string;
  highlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export default function Section({
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: SectionProps) {
  return (
    <div
      className={`flex flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } justify-between items-center gap-8 md:gap-12`}
    >
      {/* Image */}
      <div className="flex-1 order-2">
        <Image
          src={imageSrc}
          width={557}
          height={304}
          alt={imageAlt}
          className="rounded-3xl w-full h-auto shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 max-w-2xl md:order-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#101828] leading-tight tracking-tight mb-6">
          {title} <span className="text-[#06543C]">{highlight}</span>
        </h2>
        <p className="text-[#475467] text-base sm:text-lg md:text-xl font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
