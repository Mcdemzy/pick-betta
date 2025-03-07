"use client";

import Image from "next/image";

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
    } justify-between items-center gap-12 max-w-7xl mx-auto md:py-16 px-5 py-7.5 md:px-4 sm:px-8`}
  >
    {/* Image */}
    <div className="flex-1 order-2 md:order-1">
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
      <h2 className="md:text-5xl text-2xl leading-7 md:leading-14 md:tracking-[-2%] gilroy-bold font-bold mb-6">
        {title} <span className="text-[#06543C]">{highlight}</span>
      </h2>
      <p className="md:text-lg text-[#667085] leading-6 md:leading-7.5 font-medium">
        {description}
      </p>
    </div>
  </section>
);

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <main className="md:pt-8 pt-7.5 px-4 sm:px-8 bg-[#D1FADF]">
        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold leading-11 md:leading-19.5 mb-6">
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
        <div className="flex justify-center mt-8 cursor-pointer">
          <button className="bg-[#06543C] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-[#054030] transition-colors duration-300 cursor-pointer">
            Start free trial
          </button>
        </div>

        {/* Hero Section Image */}
        <div className="flex justify-center mt-10 pb-7.5 md:pb-0">
          <div className="w-[334px] h-[266px] md:w-[761px] md:h-[500px] overflow-hidden">
            <Image
              src="/images/hero.svg"
              width={761}
              height={604}
              alt="hero section image"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </main>

      {/* Second Section */}
      <main className="bg-[#ECFDF3]">
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
