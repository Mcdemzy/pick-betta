"use client";

import FaqSection from "@/components/faqs/FaqSection";
import HeroSection from "@/components/faqs/Hero";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/shared/Banner";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />

        <section>
          <HeroSection />
          <FaqSection />
          <Banner />
          <Footer />
        </section>
      </main>
    </>
  );
}
