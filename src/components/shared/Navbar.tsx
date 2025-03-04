"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Define navigation links
  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/betta-gpt", label: "Betta GPT" },
    { href: "/solutions", label: "Solutions" },
    { href: "/faqs", label: "FAQs" },
  ];

  return (
    <nav className="pt-6 px-4 sm:px-8 lg:px-20 flex justify-between items-center relative">
      {/* Logo Section */}
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

      {/* Menu Button for Mobile */}
      <button onClick={toggleMenu} className="sm:hidden cursor-pointer">
        {menuOpen ? (
          <IoMdClose size={28} className="text-[#06543C]" />
        ) : (
          <IoMdMenu size={28} className="text-[#06543C]" />
        )}
      </button>

      {/* Nav Items - Visible on larger screens */}
      <ul className="hidden sm:flex gap-6 lg:gap-8 text-[#475467] font-medium">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-[#06543C] transition-colors duration-300 cursor-pointer ${
                pathname === link.href ? "text-[#06543C] font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu - Opens when menu icon is clicked */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md sm:hidden">
          <ul className="flex flex-col gap-4 p-6 text-[#475467] font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`hover:text-[#06543C] transition-colors duration-300 ${
                    pathname === link.href ? "text-[#06543C] font-semibold" : ""
                  }`}
                  onClick={toggleMenu} // Close the menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
