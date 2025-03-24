"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LuHouse, LuLogOut } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { MdInsights } from "react-icons/md";
import { BsQuestionCircle, BsGear, BsWallet2 } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa6";

export default function SideBar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size to toggle between mobile & desktop view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px and above)
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Don't render sidebar on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <aside className="fixed bg-black w-[260px] h-screen text-white flex flex-col justify-between p-4 overflow-y-auto">
      {/* Logo */}
      <div className="flex justify-center">
        <Image
          src="/images/logo.svg"
          width={180}
          height={50}
          alt="PickBetta Logo"
          className="mt-4"
        />
      </div>

      {/* Menu Items */}
      <nav className="mt-10 mx-auto flex flex-col gap-y-5">
        <MenuItem icon={<LuHouse size={20} />} text="Home" />
        <MenuItem icon={<MdInsights size={20} />} text="Betta Insights" />

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
              <SubMenuItem text="Betta Dawg Data" />
              <SubMenuItem text="Betta Parlay" />
              <SubMenuItem text="Betta Last Look" />
              <SubMenuItem text="Betta Deep Dive" active />
            </div>
          )}
        </div>

        <MenuItem icon={<BsQuestionCircle size={20} />} text="Betta GPT" />
        <MenuItem icon={<BsWallet2 size={20} />} text="Subscriptions" />
        <p className="border border-white/30 my-5"></p>
        <MenuItem icon={<BsGear size={20} />} text="Settings" />
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
const MenuItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <button className="flex items-center gap-3 p-2 hover:bg-gray-800 rounded-md w-full">
    {icon}
    {text}
  </button>
);

/* Sub Menu Item */
const SubMenuItem = ({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) => (
  <button
    className={`p-2 text-sm w-full rounded-md ${
      active ? "bg-[#06543C] text-white" : "hover:bg-gray-700 text-gray-400"
    }`}
  >
    {text}
  </button>
);
