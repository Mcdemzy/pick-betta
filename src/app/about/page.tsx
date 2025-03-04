"use client";

import Hero from "@/components/about/Hero";
import Mission from "@/components/about/Mission";
import Team from "@/components/about/Team";
import UVP from "@/components/about/Uvp";
import WhoWeAre from "@/components/about/WhoWeAre";
import Footer from "@/components/shared/Footer";

export default function About() {
  return (
    <>
      <main>
        <Hero />
        <WhoWeAre />
        <Mission />
        <UVP />
        <Team />
        <Footer />
      </main>
    </>
  );
}
