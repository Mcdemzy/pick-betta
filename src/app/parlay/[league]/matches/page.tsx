"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getLeagueMatches, deepDiveLeagues } from "@/lib/api/parlay"; // Added import

interface League {
  name: string;
  icon: string;
}

export default function LeagueMatchesPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league } = useParams();

  // Fetch matches for this league
  const matches = getLeagueMatches(league as string);

  if (!isDesktop) {
    return (
      <main>
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">Betta</span> Parlay
          </p>
        </section>

        {/* Main Match Section */}
        <main className="w-full px-5 pb-5 min-h-fit">
          <section className="w-full">
            {/* Nav Items */}
            <nav>
              <ul className="min-h-12.5 w-full flex justify-between items-center px-5 py-2 text-[#475467] text-[.75rem] leading-4.5">
                {deepDiveLeagues.map(
                  (
                    l: League // Added type annotation
                  ) => (
                    <li key={l.name}>{l.name}</li>
                  )
                )}
              </ul>
              <div className="bg-[#06543C] w-5 h-1 rounded-t-[100px] mx-5"></div>
            </nav>
            <div className="w-full min-h-10 bg-[#F6FEF9] flex items-center justify-end gap-x-2 px-5 py-2 text-[#475467] text-sm font-medium leading-5.5 mb-2.5">
              <p>SPREAD</p>
              <p>MONEY</p>
              <p>TOTAL</p>
            </div>

            {/* Main Matches */}
            <section>
              {matches.map(
                (
                  match: any // Added type annotation
                ) => (
                  <div key={match.id} className="w-full min-h-40.5 mb-2.5">
                    {/* Match content here */}
                    <div className="flex justify-between mt-3 text-[.75rem] leading-4.5 text-[#101828]">
                      <p className="text-[#06543C]">{match.date}</p>
                      <Link href={`/parlay/${league}/${match.id}/stats`}>
                        <div className="flex items-center gap-x-[5px]">
                          <p>View Stats</p>
                          <BsChevronRight />
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </section>
          </section>
        </main>
      </main>
    );
  }

  // Desktop view
  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[260px]">
        <Navbar />
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
            Betta Parlay - {league}
          </h1>

          {/* Matches List */}
          <section className="space-y-4">
            {matches.map(
              (
                match: any // Added type annotation
              ) => (
                <div key={match.id} className="w-full">
                  {/* Match content here */}
                  <div className="flex justify-between items-center text-sm text-[#101828]">
                    <p className="text-[#06543C]">{match.date}</p>
                    <Link href={`/parlay/${league}/${match.id}/stats`}>
                      <div className="flex items-center gap-x-2">
                        <p>View Stats</p>
                        <BsChevronRight />
                      </div>
                    </Link>
                  </div>
                </div>
              )
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
