"use client";

import HeroSection from "@/components/landing/Hero";
import Offers from "@/components/landing/Offers";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <main>
        <section className="min-h-screen bg-[#D1FADF] w-full">
          <Navbar />
          <HeroSection />
          <Offers />
        </section>
        <Footer />
      </main>
    </>
  );
}
