import { FaBell, FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-gray-100 border-b">
      {/* Search Bar */}
      <div className="relative w-80">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
      </div>

      {/* Profile & Notifications */}
      <div className="flex items-center gap-6">
        <FaBell className="text-gray-600 cursor-pointer" size={20} />
        <Image
          src="/images/profile.png"
          width={36}
          height={36}
          className="rounded-full"
          alt="User Profile"
        />
      </div>
    </header>
  );
}
