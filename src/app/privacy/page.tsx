"use client";

import Hero from "@/components/privacy/Hero";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <main>
        <Navbar />
        <section className="bg-[#ECFDF3] md:pt-10 md:pb-[107px] md:px-20 pt-17.5 px-5 pb-33 m-auto text-center">
          <div className="flex flex-col gap-y-5 md:gap-y-7.5">
            <h1 className="text-[#101828] md:text-[3.75rem] md:leading-18.5 tracking-[-2%] font-bold gilroy-bold text-[2.25rem] leading-11">
              Privacy Policy
            </h1>
            <h3 className="text-[#475467] md:text-[1.125rem] md:font-medium md:leading-7.5 leading-6">
              Version 1.1 September 2024
            </h3>
          </div>
        </section>

        {/*  */}
        <Hero />
        <Banner />
        <Footer />
      </main>
    </>
  );
}
