"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuHouse, LuLogOut } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { BsQuestionCircle, BsGear, BsWallet2 } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa6";

export default function SideBar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();

  // Check screen size to toggle between mobile & desktop view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Automatically open categories dropdown when on a category page
  useEffect(() => {
    const categoryRoutes = [
      "/betta-dawg-data",
      "/parlay",
      "/betta-last-look",
      "/deepdive",
    ];
    const shouldOpen = categoryRoutes.some((route) =>
      pathname.startsWith(route)
    );
    setIsCategoriesOpen(shouldOpen);
  }, [pathname]);

  if (!isDesktop) {
    return null;
  }

  return (
    <aside className="fixed bg-black w-[260px] h-screen text-white flex flex-col justify-between p-4 overflow-y-auto">
      {/* Logo */}
      <div className="flex justify-center">
        <Link href="/home">
          <Image
            src="/images/logo.svg"
            width={180}
            height={50}
            alt="PickBetta Logo"
            className="mt-4 cursor-pointer"
          />
        </Link>
      </div>

      {/* Menu Items */}
      <nav className="mt-10 mx-auto flex flex-col gap-y-5">
        <MenuItem
          icon={<LuHouse size={20} />}
          text="Home"
          href="/home"
          active={pathname === "/home"}
        />
        <MenuItem
          icon={<MdInsights size={20} />}
          text="Betta Insights"
          href="/betta-insights"
          active={pathname === "/betta-insights"}
        />

        {/* Categories with dropdown */}
        <div>
          <button
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
            className="flex items-center justify-between w-full p-2 hover:bg-gray-800 rounded-md"
          >
            <span className="flex items-center gap-3">
              <FaLayerGroup size={20} />
              Categories
            </span>
            <FaChevronDown
              size={14}
              className={`transition-transform ${
                isCategoriesOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {isCategoriesOpen && (
            <div className="ml-8 mt-2 flex flex-col gap-1">
              <SubMenuItem
                text="Betta Dawg Data"
                href="/betta-dawg-data"
                active={pathname.startsWith("/betta-dawg-data")}
              />
              <SubMenuItem
                text="Betta Parlay"
                href="/parlay"
                active={pathname.startsWith("/parlay")}
              />
              <SubMenuItem
                text="Betta Last Look"
                href="/betta-last-look"
                active={pathname.startsWith("/betta-last-look")}
              />
              <SubMenuItem
                text="Betta Deep Dive"
                href="/deepdive"
                active={pathname.startsWith("/deepdive")}
              />
            </div>
          )}
        </div>

        <MenuItem
          icon={<BsQuestionCircle size={20} />}
          text="Betta GPT"
          href="/betta-gpt"
          active={pathname === "/betta-gpt"}
        />
        <MenuItem
          icon={<BsWallet2 size={20} />}
          text="Subscriptions"
          href="/subscriptions"
          active={pathname === "/subscriptions"}
        />
        <p className="border border-white/30 my-5"></p>
        <MenuItem
          icon={<BsGear size={20} />}
          text="Settings"
          href="/settings"
          active={pathname === "/settings"}
        />
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto">
        <button className="flex items-center gap-3 w-full p-3 bg-gray-800 rounded-md mt-2">
          <LuLogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
}

/* Generic Menu Item */
const MenuItem = ({
  icon,
  text,
  href,
  active = false,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
  active?: boolean;
}) => (
  <Link href={href}>
    <button
      className={`flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md w-full ${
        active ? "bg-[#06543C] text-white" : ""
      }`}
    >
      {icon}
      {text}
    </button>
  </Link>
);

/* Sub Menu Item */
const SubMenuItem = ({
  text,
  href,
  active = false,
}: {
  text: string;
  href: string;
  active?: boolean;
}) => (
  <Link href={href}>
    <button
      className={`p-2 text-sm w-full rounded-md ${
        active ? "bg-[#06543C] text-white" : "hover:bg-gray-700 text-gray-400"
      }`}
    >
      {text}
    </button>
  </Link>
);
