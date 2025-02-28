"use client";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

export default function Navbar() {
  return (
    <>
      <nav className="pt-[30px]  flex justify-between mx-20 items-center">
        {/* Logo Scetion */}
        <div>
          <Image
            src="/images/logo.svg"
            width={200}
            height={200}
            alt="pickbetta logo"
          />
        </div>

        {/* Nav Items */}
        <section className="flex gap-[35px] h-[44px]">
          <ul className="text-[#475467] flex gap-x-8 font-medium leading-[30px] py-1">
            <li>About Us</li>
            <li>Betta GPT</li>
            <li className="flex items-center gap-">
              Solutions
              <span>
                <IoChevronDown size={20} className="mt-[1px] ml-2" />
              </span>
            </li>
            <li>FAQs</li>
          </ul>

          {/* Start Now */}
          <div>
            <button className="bg-[#06543C] text-white text-[1.125rem] font-semibold leading-[22px]  w-[125px] h-[44px] rounded-[8px]">
              Start now!
            </button>
          </div>
        </section>
      </nav>
    </>
  );
}
