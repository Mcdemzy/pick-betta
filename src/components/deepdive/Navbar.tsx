import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-gray-100 border-b">
      {/* Search Bar - Centered */}
      <div className="flex-1 flex justify-center">
        <div className="relative w-[300px]">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 bg-gray-200 rounded-full focus:outline-none"
          />
        </div>
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="flex items-center gap-5">
        <button className="p-2 rounded-full hover:bg-gray-200 transition">
          <FaBell className="text-gray-600" size={18} />
        </button>

        <div className="flex items-center gap-3">
          {/* Profile Picture */}
          <Image
            src="/images/profile.png"
            width={36}
            height={36}
            className="rounded-full border border-gray-300"
            alt="User Profile"
          />

          {/* Hamburger Menu */}
          <button className="p-2 rounded-full hover:bg-gray-200 transition">
            <FaBars className="text-gray-600" size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
