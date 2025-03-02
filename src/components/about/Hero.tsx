"use client";
import Image from "next/image";
import { heroData } from "../shared/data";

export default function Hero() {
  return (
    <main>
      <section>
        <div>
          <h1>{heroData.title}</h1>
          <p>{heroData.description}</p>
        </div>
        <div>
          <Image src={heroData.icon} width={56} height={56} alt="Heart icon" />
        </div>
      </section>
    </main>
  );
}
