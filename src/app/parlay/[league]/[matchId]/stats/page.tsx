"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getLeagueStats } from "@/lib/api/deepdive"; // Changed from getMatchStats to getLeagueStats
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";
import Pagination from "@/components/deepdive/Pagination";

export default function MatchStatsPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league } = useParams() as { league: string };

  // Get the predefined stats structure for this league
  const statsData = getLeagueStats(league);

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
        <section className="p-5">
          <div className="bg-red-500 w-full h-screen "></div>
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
