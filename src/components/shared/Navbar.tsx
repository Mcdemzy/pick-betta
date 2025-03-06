"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const desktopNavLinks = [
    { href: "/about", label: "About Us" },
    { href: "/betta-gpt", label: "Betta GPT" },
    { href: "/solutions", label: "Solutions" },
    { href: "/faqs", label: "FAQs" },
  ];

  const mobileNavLinks = [
    { href: "/insight", label: "Betta Insight" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQs" },
  ];

  return (
    <>
      <nav className="w-full h-[101px] px-5 pt-11 bg-[#ECFDF3]">
        <section className="sm:hidden w-full m-auto bg-[#ECFDF3] rounded-full py-3 px-5 flex items-center shadow-sm justify-between backdrop-blur-sm">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              width={200}
              height={200}
              alt="pickbetta logo"
              className="w-32 h-auto sm:w-40"
            />
          </Link>
          <button onClick={() => setIsOpen(true)}>
            <IoMenu size={28} className="text-[#06543C]" />
          </button>
        </section>

        {/* Desktop View Navbar (visible only on larger screens) */}
        <section className="hidden sm:flex justify-between items-center w-full max-w-7xl mx-auto">
          <div>
            <Link href="/">
              <Image
                src="/images/logo.svg"
                width={200}
                height={200}
                alt="pickbetta logo"
                className="w-32 h-auto sm:w-40"
              />
            </Link>
          </div>
          <ul className="flex gap-6 lg:gap-8 text-[#475467] font-medium">
            {desktopNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-[#06543C] transition-colors duration-300 ${
                    pathname === link.href ? "text-[#06543C] font-semibold" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </nav>

      {/* Mobile Menu Panel (visible only on small screens) */}
      {isOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-lg z-50 flex flex-col items-center justify-start pt-10 transition-transform animate-slide-in">
          {/* Top Section with Logo & Close Button */}
          <div className="w-full flex items-center justify-between px-5">
            <Image
              src="/images/logo.svg"
              width={200}
              height={200}
              alt="pickbetta logo"
              className="w-32 h-auto sm:w-40"
            />
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose size={28} className="text-black" />
            </button>
          </div>

          {/* Nav Links */}
          <ul className="mt-10 text-lg text-[#101828] flex flex-col gap-6 text-center">
            {mobileNavLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-[#06543C] transition-colors duration-300 ${
                    pathname === link.href ? "text-[#06543C] font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 w-4/5">
            <button className="w-full border border-[#06543C] text-[#06543C] py-2 rounded-lg font-semibold">
              Login
            </button>
            <button className="w-full bg-[#06543C] text-white py-2 rounded-lg font-semibold">
              Start now!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
