"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { nbaMatches } from "@/components/shared/data";
import Link from "next/link";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import { useState, useEffect } from "react";

export default function DeepDiveNbaMatches() {
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
              <ul className="min-h-12.5 w-full flex justify-between items-center px-5 py-2 text-[#475467] text-[.75rem] leading-4.5">
                <li>NFL</li>
                <li>NBA</li>
                <li>NCAAB</li>
                <li>NHL</li>
                <li>NCAAF</li>
              </ul>
              {/* Nav Items Ruler */}
              <div className="bg-[#06543C] w-5 h-1 rounded-t-[100px] mx-5"></div>
            </nav>
            <div className="w-full min-h-10 bg-[#F6FEF9] flex items-center justify-end gap-x-2 px-5 py-2 text-[#475467] text-sm font-medium leading-5.5 mb-2.5">
              <p>SPREAD</p>
              <p>MONEY</p>
              <p>TOTAL</p>
            </div>

            {/* Main Matches */}
            <section>
              {nbaMatches.map((match) => (
                <div key={match.id} className="w-full min-h-40.5 mb-2.5">
                  <section>
                    <div className="flex w-full gap-x-[5px] justify-between">
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
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#475467] text-sm font-medium leading-5.5">
                      @
                    </p>
                    <div className="flex w-full gap-x-[5px] justify-between">
                      <div className="flex gap-1 items-center">
                        <Image
                          src={match.awayTeam.logo}
                          width={24}
                          height={24}
                          alt={`${match.awayTeam.name} Logo`}
                        />
                        <p>{match.awayTeam.name}</p>
                      </div>

                      <div className="flex gap-x-0.5">
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                        <div className="bg-[#D1FADF] border border-[#D0D5DD] w-15 rounded-lg flex flex-col justify-center items-center gap-y-[5px] py-2">
                          <p className="text-[#475467] text-[.75rem] font-medium leading-4.5">
                            {match.spread}
                          </p>
                          <p className="text-[#06543C] text-[.75rem] leading-4.5 font-semibold">
                            {match.money}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-3 text-[.75rem] leading-4.5 text-[#101828]">
                      <p className="text-[#06543C]">{match.date}</p>
                      <Link href="/deepdive/nba">
                        <div className="flex items-center gap-x-[5px]">
                          <p>More Deep Dive</p>
                          <BsChevronRight />
                        </div>
                      </Link>
                    </div>
                    <div className="border-[0.8px] border-[#D0D0D080] my-2.5"></div>
                  </section>
                </div>
              ))}
            </section>
          </section>
        </main>
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
          <h1 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
            Betta Deep Dive
          </h1>

          {/* Sports Navigation */}
          <nav className="mb-6">
            <ul className="flex gap-x-5 items-center px-5 py-2 text-[#475467] text-sm">
              <li>NFL</li>
              <li>NBA</li>
              <li>NCAAB</li>
              <li>NHL</li>
              <li>NCAAF</li>
            </ul>
            <div className="bg-[#06543C] w-5 h-1 rounded-t-[100px] ml-5"></div>
          </nav>

          {/* Bet Type Navigation */}
          <div className="w-full bg-[#F6FEF9] flex items-center justify-end gap-x-60 px-5 py-2 text-[#475467] text-sm font-semibold mb-6">
            <p>SPREAD</p>
            <p>MONEY</p>
            <p>TOTAL</p>
          </div>

          {/* Matches List */}
          <section className="space-y-4">
            {nbaMatches.map((match) => (
              <div key={match.id} className="w-full">
                <div className="flex w-full justify-between items-center mb-2">
                  <div className="flex items-center gap-3 w-[40%]">
                    <Image
                      src={match.homeTeam.logo}
                      width={28}
                      height={28}
                      alt={`${match.homeTeam.name} Logo`}
                    />
                    <p className="text-[#101828]">{match.homeTeam.name}</p>
                  </div>

                  <div className="flex gap-x-2">
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-[#475467] text-sm font-medium my-1">@</p>

                <div className="flex w-full justify-between items-center mb-3">
                  <div className="flex items-center gap-3 w-[40%]">
                    <Image
                      src={match.awayTeam.logo}
                      width={28}
                      height={28}
                      alt={`${match.awayTeam.name} Logo`}
                    />
                    <p className="text-[#101828]">{match.awayTeam.name}</p>
                  </div>

                  <div className="flex gap-x-2">
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg flex flex-col justify-center items-center py-2">
                      <p className="text-[#475467] text-sm font-medium">
                        {match.spread}
                      </p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center text-sm text-[#101828]">
                  <p className="text-[#06543C]">{match.date}</p>
                  <Link href="/deepdive/nba">
                    <div className="flex items-center gap-x-2">
                      <p>More Deep Dive</p>
                      <BsChevronRight />
                    </div>
                  </Link>
                </div>

                <div className="border-[0.8px] border-[#D0D0D080] my-4"></div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
