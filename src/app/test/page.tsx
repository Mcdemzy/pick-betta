"use client";

import Image from "next/image";

export default function Test() {
  return (
    <>
      <main className="h-screen flex flex-col md:flex-row">
        <section className="hidden md:flex w-2/5 items-center">
          <div className="bg-[#06543C] h-[98vh] w-full ml-4 rounded-[15px] px-13.5 flex flex-col justify-center">
            <div className="mb-8">
              <Image
                src="/images/logo.svg"
                alt="Betta Logo"
                width={158}
                height={40}
                className="absolute top-12.5 left-13.5"
              />
            </div>
            <div className="max-w-[493px]">
              <h1 className="mb-6 text-6 gilroy-bold leading-[60px] font-bold text-white">
                Unlock the Power of Sports Betting <br />
                Data
              </h1>
              <p className="leading-6 text-white">
                Lorem ipsum dolor sit amet consectetur. Etiam quam turpis ut eu.
                Lectus quis eget viverra leo amet. Lorem ipsum dolor sit amet
                consectetur. Etiam quam turpis ut eu.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
