"use client";

import Image from "next/image";

const AuthSidebar = () => {
  return (
    <section className="hidden md:flex w-2/5 items-center">
      <div className="bg-[#06543C] h-[98vh] w-full ml-4 rounded-[15px] px-6 md:px-8 lg:px-10 flex flex-col justify-center relative">
        {/* Logo positioned at the top */}
        <div className="flex justify-start absolute top-8 left-6 md:left-8">
          <Image
            src="/images/logo.svg"
            alt="Betta Logo"
            width={120}
            height={30}
            className="w-[120px] md:w-[140px] lg:w-[158px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-4 mt-16 md:mt-20 lg:mt-24">
          <h1 className="font-bold text-white gilroy-bold text-[clamp(1.5rem,3vw,2.5rem)] leading-[clamp(1.8rem,3.5vw,3rem)] max-w-full">
            Unlock the Power <br />
            of Sports Betting <br />
            Data
          </h1>
          <p className="text-white text-[clamp(0.875rem,1.25vw,1rem)] leading-[1.5] max-w-[90%]">
            Discover real-time analytics and insights to enhance your betting
            experience. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, ut.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthSidebar;
