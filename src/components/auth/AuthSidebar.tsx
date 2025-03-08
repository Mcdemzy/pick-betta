"use client";

import Image from "next/image";

const AuthSidebar = () => {
  return (
    <section className="hidden md:flex w-2/5 items-center">
      <div className="bg-[#06543C] h-[98vh] w-full ml-4 rounded-[15px] px-10 md:px-12 lg:px-16 flex flex-col justify-center relative">
        {/* Logo positioned at the top */}
        <div className="flex justify-start absolute top-12 left-10 md:left-12">
          <Image
            src="/images/logo.svg"
            alt="Betta Logo"
            width={158}
            height={40}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center gap-6 mt-20 md:mt-28 lg:mt-32">
          <h1 className="font-bold text-white gilroy-bold text-[clamp(2rem,4vw,3.75rem)] leading-[clamp(2.5rem,4.5vw,4.875rem)] max-w-[450px] whitespace-nowrap">
            Unlock the Power <br />
            of Sports Betting <br />
            Data
          </h1>
          <p className="text-white text-[clamp(1rem,1.5vw,1.125rem)] leading-[1.6] max-w-[500px]">
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
