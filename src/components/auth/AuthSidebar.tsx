"use client";

import Image from "next/image";

const AuthSidebar = () => {
  return (
    <section className="hidden md:flex w-2/5 items-center">
      <div className="bg-[#06543C] h-[98vh] w-full ml-4 rounded-[15px] p-8 flex flex-col justify-center">
        <div className="mb-8">
          <Image
            src="/images/logo.svg"
            alt="Betta Logo"
            width={158}
            height={40}
            className="bg-white absolute top-4 left-8"
          />
        </div>
        <h1 className="mb-6 text-[50px] leading-[60px] font-bold text-white">
          Unlock the Power of Sports Betting <br />
          Data
        </h1>
        <p className="text-[1rem] leading-6 text-white">
          Discover real-time analytics and insights to enhance your betting
          experience. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Distinctio, ut.
        </p>
      </div>
    </section>
  );
};

export default AuthSidebar;
