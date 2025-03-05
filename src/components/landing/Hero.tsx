"use client";

import Image from "next/image";

// Reusable Section Component
const Section = ({
  title,
  highlight,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  title: string;
  highlight: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) => (
  <section
    className={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } justify-between items-center gap-12 max-w-7xl mx-auto py-16 px-4 sm:px-8`}
  >
    {/* Image */}
    <div className="flex-1">
      <Image
        src={imageSrc}
        width={557}
        height={304}
        alt={imageAlt}
        className="rounded-3xl w-full h-auto"
      />
    </div>

    {/* Text Content */}
    <div className="flex-1 max-w-2xl">
      <h2 className="text-4xl sm:text-5xl font-medium mb-6">
        {title} <span className="text-[#06543C]">{highlight}</span>
      </h2>
      <p className="text-lg text-[#667085] leading-8">{description}</p>
    </div>
  </section>
);

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <main className="pt-[131px] px-4 sm:px-8">
        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
            Unlock the Power of <br />
            <span className="text-[#06543C]">Sports Betting</span> Data
          </h1>
          <h3 className="text-lg sm:text-xl text-[#475467] max-w-2xl mx-auto mb-6">
            Unlock your edge with PickBetta's sports betting data solutions.
            With proprietary algorithms & models, AI-driven insights, and unique
            predictive tools, we give bettors the ultimate advantage to make
            winning bets.
          </h3>
          <p className="text-sm sm:text-base text-[#06543C] font-medium underline">
            We don’t advise you to pick, we advise you to pickbetta!
          </p>
        </div>

        {/* Free Trial Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-[#06543C] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#054030] transition-colors duration-300">
            Start free trial
          </button>
        </div>

        {/* Hero Section Image */}
        <div className="flex justify-center mt-10">
          <Image
            src="/images/hero.svg"
            width={761}
            height={604}
            alt="hero section image"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </main>

      {/* Second Section */}
      <main className="bg-[#ECFDF3] py-16">
        {/* Who We Are Section */}
        <Section
          title="Who"
          highlight="We Are"
          description="We are sports bettors just like you. We have accounts with Fanduel & Draftkings. We pay handicappers for picks but don't tell anyone that we do it. This platform is designed by bettors, for bettors. We understand what you need because we are in the game with you."
          imageSrc="/images/lpImage1.png"
          imageAlt="round table image"
        />

        {/* Why Create PickBetta Section */}
        <Section
          title="Why Create"
          highlight="PickBetta"
          description="Sports bettors deserve access to data. PickBetta fills a critical gap- Sports Betting Data as a service. Our goal is to empower you with the data you need to make informed, confident betting decisions. No fluff, no gimmicks. Only value!"
          imageSrc="/images/lpImage2.jpeg"
          imageAlt="round table image"
          reverse
        />
      </main>
    </>
  );
}
