import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiHome, FiSettings, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-[250px] min-h-screen bg-black text-white px-4 py-6">
      <div className="text-2xl font-bold text-yellow-500">PickBetta</div>

      <nav className="mt-6 flex flex-col space-y-4">
        <Link
          href="/"
          className={`flex items-center gap-3 px-3 py-2 rounded ${
            pathname === "/" ? "bg-green-700" : "hover:bg-gray-800"
          }`}
        >
          <FiHome size={20} />
          Home
        </Link>

        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-800"
        >
          <FiSettings size={20} />
          Settings
        </Link>
      </nav>

      {/* Logout Button */}
      <button className="mt-auto flex items-center gap-3 px-3 py-2 rounded bg-red-600 hover:bg-red-700">
        <FiLogOut size={20} />
        Logout
      </button>
    </aside>
  );
}
