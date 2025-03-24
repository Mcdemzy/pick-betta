"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { deepDiveLeagues } from "@/components/shared/data";
import Sidebar from "@/components/deepdive/Sidebar"; // Sidebar for desktop
import Navbar from "@/components/deepdive/Navbar"; // Navbar for desktop
import { useState, useEffect } from "react";

export default function DeepDive() {
  const router = useRouter();
  const [isDesktop, setIsDesktop] = useState(false);

  // Check screen size to toggle between mobile & desktop view
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint (1024px and above)
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  if (!isDesktop) {
    return (
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8.5 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">Betta</span> Deep Dive
          </p>
        </section>

        {/* Leagues List */}
        <section className="px-5 mt-5 grid grid-cols-2 gap-4">
          {deepDiveLeagues.map((league, index) => (
            <div
              key={index}
              onClick={() =>
                router.push(`/deepdive/${league.name.toLowerCase()}/matches`)
              }
              className="flex items-center gap-x-3 border border-[#E4E7EC] w-full rounded-[10px] px-4 py-2.5 cursor-pointer hover:bg-gray-100 transition"
            >
              <Image
                src={league.icon}
                width={35}
                height={35}
                alt={league.name}
              />
              <p className="text-sm font-medium leading-5.5 text-[#101828]">
                {league.name}
              </p>
            </div>
          ))}
        </section>
      </main>
    );
  }

  // 🖥 DESKTOP VIEW
  return (
    <main className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-[260px]">
        {/* Top Navbar */}
        <Navbar />

        {/* Deep Dive Content */}
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4">
            <span className="text-[#D8A428]">Betta</span> Deep Dive
          </h1>

          {/* Leagues Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {deepDiveLeagues.map((league, index) => (
              <div
                key={index}
                onClick={() =>
                  router.push(`/deepdive/${league.name.toLowerCase()}/matches`)
                }
                className="flex items-center gap-x-3 border border-[#E4E7EC] w-full rounded-[10px] px-4 py-2.5 cursor-pointer hover:bg-gray-100 transition"
              >
                <Image
                  src={league.icon}
                  width={35}
                  height={35}
                  alt={league.name}
                />
                <p className="text-sm font-medium leading-5.5 text-[#101828]">
                  {league.name}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
