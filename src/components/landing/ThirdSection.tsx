// components/ThirdSection.tsx
"use client";

import { sectionsData } from "../shared/data";
import Section from "./Section";

export default function ThirdSection() {
  return (
    <main className="bg-[#ECFDF3] w-full min-h-[504px] md:px-20 md:py-25 px-5 py-7.5">
      <section className="max-w-[1280px] mx-auto flex flex-col gap-8 md:gap-12">
        {sectionsData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            highlight={section.highlight}
            description={section.description}
            imageSrc={section.imageSrc}
            imageAlt={section.imageAlt}
            reverse={section.reverse}
          />
        ))}
      </section>
    </main>
  );
}
