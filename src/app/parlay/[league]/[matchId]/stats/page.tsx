"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronDown, BsChevronUp } from "react-icons/bs";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getLeagueStats } from "@/lib/api/deepdive";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";
import Pagination from "@/components/deepdive/Pagination";

const statSections = [
  "Anytime Goal Scorer",
  "First Goal Scorer",
  "Clean Sheets",
  "Total Shots",
];

export default function MatchStatsPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league } = useParams() as { league: string };

  const statsData = getLeagueStats(league);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!isDesktop) {
    return (
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8.5 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">{league.toUpperCase()}</span>{" "}
            Parlay
          </p>
        </section>

        {/* Stats Content */}
        <section className="p-5 flex flex-col gap-y-2.5">
          {statSections.map((title) => (
            <div
              key={title}
              className="w-full border border-[#D0D5DD] rounded-[8px] px-3.5 py-2.5"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(title)}
              >
                <p className="text-[#1D2939] font-semibold text-[.75rem] leading-4.5">
                  {title}
                </p>
                {openSections[title] ? (
                  <BsChevronUp size={20} />
                ) : (
                  <BsChevronDown size={20} />
                )}
              </div>

              {openSections[title] && (
                <div className="mt-3">
                  {/* This is where you can map or load actual stat data later */}
                  <p className="text-sm text-gray-500 italic">
                    Stats for "{title}" go here.
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
    );
  }

  // Desktop View
  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[260px]">
        <Navbar />
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
            {league.toUpperCase()} Deep Dive
          </h1>
          <p className="text-sm text-[#101828] font-semibold text-center mt-5 mb-3">
            Tuesday 30, October, 2024
          </p>
        </div>
        <div className="px-6 py-5">
          <main className="px-5">
            <MatchDetails isDesktop={isDesktop} />
            <StatsTable statsData={statsData} isDesktop={isDesktop} />
            <Pagination />
          </main>
        </div>
      </div>
    </main>
  );
}
