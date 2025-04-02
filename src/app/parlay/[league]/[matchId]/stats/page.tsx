"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getMatchStats } from "@/lib/api/parlay";
import MatchStatsTable from "@/components/parlay/MatchStatsTable";

export default function MatchStatsPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league, matchId } = useParams();

  // Fetch stats for this match
  const stats = getMatchStats(league as string, matchId as string);

  if (!isDesktop) {
    return (
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8.5 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">Betta</span> Parlay Stats
          </p>
        </section>

        {/* Stats Content */}
        <div className="px-5 py-4">
          <MatchStatsTable stats={stats} league={league as string} />
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[260px]">
        <Navbar />
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4">
            <span className="text-[#D8A428]">Betta</span> Parlay Stats -{" "}
            {league}
          </h1>
          <MatchStatsTable stats={stats} league={league as string} isDesktop />
        </div>
      </div>
    </main>
  );
}
