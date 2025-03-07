// components/DeliverValueSection.tsx
"use client";

import Image from "next/image";
import { deliverValueData } from "../shared/data";

export default function DeliverValueSection() {
  return (
    <section className="md:py-20 pb-7.5 md:pb-none px-4 sm:px-8 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="flex-1 order-2">
          <Image
            src={deliverValueData.imageSrc}
            width={480}
            height={480}
            alt={deliverValueData.imageAlt}
            className="w-full h-auto"
          />
        </div>

        {/* Text Content */}
        <div className="flex-1 md:order-2">
          <h1 className="md:text-5xl text-2xl gilroy-bold leading-7 text-[#101828] font-bold mb-6">
            How We{" "}
            <span className="text-[#06543C]">{deliverValueData.highlight}</span>
          </h1>
          <p className="text-lg text-[#667085] font-medium mb-6">
            {deliverValueData.description}
          </p>
          <p className="text-lg font-medium text-[#667085]">
            <span className="font-semibold text-[#475467]">
              {deliverValueData.ctaText}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
