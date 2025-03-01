"use client";

import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

// Reusable Nav Item Component
const NavItem = ({
  label,
  hasDropdown = false,
}: {
  label: string;
  hasDropdown?: boolean;
}) => (
  <li className="text-[#475467] font-medium leading-[30px] py-1 hover:text-[#06543C] transition-colors duration-300">
    {label}
    {hasDropdown && (
      <span className="ml-2">
        <IoChevronDown size={20} className="inline-block" />
      </span>
    )}
  </li>
);

export default function Navbar() {
  const navItems = [
    { label: "About Us" },
    { label: "Betta GPT" },
    { label: "Solutions", hasDropdown: true },
    { label: "FAQs" },
  ];

  return (
    <nav className="pt-8 px-4 sm:px-8 lg:px-20 flex justify-between items-center">
      {/* Logo Section */}
      <div>
        <Image
          src="/images/logo.svg"
          width={200}
          height={200}
          alt="pickbetta logo"
          className="w-40 h-auto sm:w-48"
        />
      </div>

      {/* Nav Items */}
      <section className="flex items-center gap-6 sm:gap-8">
        <ul className="hidden sm:flex gap-6 lg:gap-8">
          {navItems.map((item, index) => (
            <NavItem
              key={index}
              label={item.label}
              hasDropdown={item.hasDropdown}
            />
          ))}
        </ul>

        {/* Start Now Button */}
        <button className="bg-[#06543C] text-white text-sm sm:text-base font-semibold py-2 px-4 sm:px-6 rounded-lg hover:bg-[#054030] transition-colors duration-300">
          Start now!
        </button>
      </section>
    </nav>
  );
}
