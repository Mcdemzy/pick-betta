"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { ncaabMatches } from "@/components/shared/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import Sidebar from "@/components/deepdive/Sidebar"; // Sidebar for desktop
import Navbar from "@/components/deepdive/Navbar"; // Navbar for desktop

export default function DeepDiveNcaabMatches() {
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

  // 📱 **MOBILE VIEW**
  if (!isDesktop) {
    return (
      <main>
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">Betta</span> Deep Dive
          </p>
        </section>

        {/* Main Match Section */}
        <main className="w-full px-5 pb-5 min-h-fit">
          <section className="w-full">
            {/* Nav Items */}
            <nav>
              <ul className="flex justify-between px-5 py-2 text-[#475467] text-sm">
                <li>NFL</li>
                <li>NBA</li>
                <li className="text-[#06543C] font-semibold">NCAAB</li>
                <li>NHL</li>
                <li>NCAAF</li>
              </ul>
              <div className="bg-[#06543C] w-5 h-1 rounded-t-lg mx-5"></div>
            </nav>

            {/* Matches List */}
            <section>
              {ncaabMatches.map((match) => (
                <div key={match.id} className="w-full min-h-40.5 mb-2.5">
                  <section>
                    <div className="flex w-full justify-between">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={match.homeTeam.logo}
                          width={24}
                          height={24}
                          alt={`${match.homeTeam.name} Logo`}
                        />
                        <p>{match.homeTeam.name}</p>
                      </div>

                      <div className="flex gap-x-0.5">
                        <div className="bg-[#D1FADF] w-15 rounded-lg flex flex-col items-center py-2">
                          <p className="text-[#475467] text-sm font-medium">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-sm font-semibold">
                            {match.money}
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-[#475467] text-sm font-medium">@</p>

                    <div className="flex w-full justify-between">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={match.awayTeam.logo}
                          width={24}
                          height={24}
                          alt={`${match.awayTeam.name} Logo`}
                        />
                        <p>{match.awayTeam.name}</p>
                      </div>
                    </div>

                    <div className="flex justify-between mt-3 text-sm">
                      <p className="text-[#06543C]">{match.date}</p>
                      <Link href="/deepdive/ncaab">
                        <div className="flex items-center gap-x-2">
                          <p>More Deep Dive</p>
                          <BsChevronRight />
                        </div>
                      </Link>
                    </div>
                  </section>
                  <div className="border border-gray-300 my-2"></div>
                </div>
              ))}
            </section>
          </section>
        </main>
      </main>
    );
  }

  // 🖥 **DESKTOP VIEW**
  return (
    <main className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Deep Dive Matches */}
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4">
            <span className="text-[#D8A428]">Betta</span> Deep Dive - NCAAB
            Matches
          </h1>

          {/* Navigation Tabs */}
          <nav className="mb-4">
            <ul className="flex space-x-6 text-[#475467] text-sm">
              <li>NFL</li>
              <li>NBA</li>
              <li className="text-[#06543C] font-semibold">NCAAB</li>
              <li>NHL</li>
              <li>NCAAF</li>
            </ul>
            <div className="bg-[#06543C] w-5 h-1 rounded-t-lg mt-1"></div>
          </nav>

          {/* Matches Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ncaabMatches.map((match) => (
              <div
                key={match.id}
                className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={match.homeTeam.logo}
                      width={30}
                      height={30}
                      alt={match.homeTeam.name}
                    />
                    <p className="font-medium">{match.homeTeam.name}</p>
                  </div>
                  <div className="text-sm text-gray-600">vs</div>
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={match.awayTeam.logo}
                      width={30}
                      height={30}
                      alt={match.awayTeam.name}
                    />
                    <p className="font-medium">{match.awayTeam.name}</p>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-center">
                  <div className="bg-[#D1FADF] w-20 py-2 rounded-lg">
                    <p className="text-sm font-medium">{match.spread}</p>
                    <p className="text-sm font-semibold text-[#06543C]">
                      {match.money}
                    </p>
                  </div>
                  <div className="bg-[#D1FADF] w-20 py-2 rounded-lg">
                    <p className="text-sm font-medium">{match.spread}</p>
                    <p className="text-sm font-semibold text-[#06543C]">
                      {match.money}
                    </p>
                  </div>
                  <div className="bg-[#D1FADF] w-20 py-2 rounded-lg">
                    <p className="text-sm font-medium">{match.spread}</p>
                    <p className="text-sm font-semibold text-[#06543C]">
                      {match.money}
                    </p>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mt-2">{match.date}</div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
