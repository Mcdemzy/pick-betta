"use client";

import Hero from "@/components/privacy/Hero";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main>
        <section className="bg-[#ECFDF3] px-20 pt-[150px] pb-[117px]">
          <div className="flex flex-col gap-y-7.5 text-center">
            <h1 className="text-[#101828] md:text-[3.75rem] leading-[78px] tracking-[-2%] font-semibold">
              Privacy Policy
            </h1>
            <h3 className="text-[#475467] text-[1.125rem] font-medium leading-7.5">
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
