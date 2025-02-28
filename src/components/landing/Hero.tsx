"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <main className="mt-10">
        {/* Text Content */}
        <div>
          <h1 className="text-[#101828] text-6xl text-center font-bold leading-[78px] tracking-[-2%]">
            Unlock the Power of <br />{" "}
            <span className="text-[#06543C]"> Sports Betting</span> Data
          </h1>
          <h3 className="text-[#475467] text-center m-auto max-w-[740px] mt-[10px] text-[1.125rem] font-medium leading-6 tracking-[0%]">
            Unlock your edge with PickBetta's sports betting data solutions.
            With
            <br />
            proprietary algorithms & models, AI-driven insights, and unique
            predictive tools, we give bettors the ultimate advantage to make
            winning bets.
          </h3>
          <p className="text-[#06543C] text-[0.875rem] font-medium leading-6 tracking-[0%] text-center underline mt-[10px]">
            We don’t advise you to pick, we advise you to pickbetta!
          </p>
        </div>

        {/* Free Trial Button */}
        <div className="m-auto flex justify-center mt-[30px]">
          <button className="bg-[#06543C] text-white py-[10px] px-[18px] w-[200px] h-[50px] rounded-[8px] text-[1.125rem] font-semibold leading-[22px] tracking-[0%] cursor-pointer">
            Start free trial
          </button>
        </div>

        {/* Hero Section Image */}
        <div className="m-auto flex justify-center mt-10">
          <Image
            src="/images/heroImage.svg"
            width={761}
            height={604}
            alt="hero section image"
          />
        </div>
      </main>

      {/* Second Section*/}
      <main className="bg-[#ECFDF3]">
        {/* Who We Are Section 1 */}
        <section className="flex justify-between max-w-[1280px] m-auto py-25">
          <div>
            <Image
              src="/images/lpImage1.png"
              width={557}
              height={304}
              alt="round table image"
              className="rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-y-5 max-w-[632px] my-[54px]">
            <h2 className="text-[#101828] text-[3rem] font-medium leading-14 tracking-[-2%] ">
              Who <span className="text-[#06543C]">We Are</span>
            </h2>
            <p className="text-[#667085] text-[1.125rem] font-medium leading-[30px] ">
              We are sports bettors just like you. We have accounts with Fanduel
              & Draftkings. We pay handicappers for picks but don't tell anyone
              that we do it. This platform is designed by bettors, for bettors.
              We understand what you need because we are in the game with you.
            </p>
          </div>
        </section>

        {/* Who We Are Section 1 */}
        <section className="flex justify-between max-w-[1280px] m-auto py-25">
          <div className="flex flex-col gap-y-5 max-w-[632px] my-[54px]">
            <h2 className="text-[#101828] text-[3rem] font-medium leading-14 tracking-[-2%] ">
              Why Create <span className="text-[#06543C]">PickBetta</span>
            </h2>
            <p className="text-[#667085] text-[1.125rem] font-medium leading-[30px] ">
              Sports bettors deserve access to data. PickBetta fills a critical
              gap- Sports Betting Data as a service. Our goal is to empower you
              with the data you need to make informed, confident betting
              decisions. No fluff, no gimmicks. Only value!
            </p>
          </div>
          <div>
            <Image
              src="/images/lpImage2.jpeg"
              width={557}
              height={304}
              alt="round table image"
              className="rounded-3xl"
            />
          </div>
        </section>
      </main>
    </>
  );
}
