// app/test/page.tsx
"use client";

import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ThirdSection from "@/components/landing/ThirdSection";
import OffersSection from "@/components/landing/OffersSection";
import DeliverValueSection from "@/components/landing/DeliverValueSection";
import Footer from "@/components/shared/Footer";
import Banner from "@/components/shared/Banner";

export default function Test() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ThirdSection />
      <OffersSection />
      <DeliverValueSection />
      <Banner />
      <Footer />
    </>
  );
}
