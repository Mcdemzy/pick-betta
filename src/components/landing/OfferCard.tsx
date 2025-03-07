// components/OfferCard.tsx
"use client";

import Image from "next/image";

interface OfferCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

export default function OfferCard({
  iconSrc,
  title,
  description,
}: OfferCardProps) {
  return (
    <div className="flex flex-col p-6 bg-[#ECFDF3] rounded-lg border border-[#E4E7EC]">
      <div className="mb-4">
        <Image src={iconSrc} width={48} height={48} alt={title} />
      </div>
      <h3 className="text-lg leading-6 text-[#1D2939] font-semibold mb-2">
        {title}
      </h3>
      <p className="text-[#667085] leading-6 md:text-[16px] text-sm">
        {description}
      </p>
    </div>
  );
}
