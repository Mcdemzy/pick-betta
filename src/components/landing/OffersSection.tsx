// components/OffersSection.tsx
"use client";

import { offersData } from "../shared/data";
import OfferCard from "./OfferCard";

export default function OffersSection() {
  return (
    <section className="bg-[#FCFCFD] py-20 px-4 sm:px-8 lg:px-20">
      {/* Offers Text */}
      <div className="mb-5">
        <h1 className="md:text-5xl text-2xl md:leading-14 md:tracking-[-2%] font-bold mb-4 gilroy-bold text-[#101828]">
          {offersData.title}{" "}
          <span className="text-[#06543C]">{offersData.highlight}</span>
        </h1>
        <p className="md:leading-6 font-medium mx-auto text-[#667085]">
          {offersData.description}
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offersData.cards.map((card, index) => (
          <OfferCard
            key={index}
            iconSrc={card.iconSrc}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
