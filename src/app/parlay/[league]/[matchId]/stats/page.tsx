"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronDown, BsChevronUp } from "react-icons/bs";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getLeagueStats } from "@/lib/api/deepdive";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";
import Pagination from "@/components/deepdive/Pagination";
import Image from "next/image";
import { useState } from "react";
import { parlayItems, DropdownItem } from "@/components/shared/data";

export default function MatchStatsPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league } = useParams() as { league: string };
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const statsData = getLeagueStats(league);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
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
        <section className="p-5">
          <div className="w-full flex flex-col gap-y-2.5">
            {parlayItems.map((item) => (
              <div
                key={item.id}
                className="w-full rounded-[8px] border border-[#D0D5DD] overflow-hidden"
              >
                <button
                  className="w-full h-10 p-3.5 flex justify-between items-center"
                  onClick={() => toggleItem(item.id)}
                >
                  <p className="text-[#1D2939] font-semibold text-[.75rem] leading-4.5">
                    {item.title}
                  </p>
                  {expandedItems.has(item.id) ? (
                    <BsChevronUp size={20} className="font-semibold" />
                  ) : (
                    <BsChevronDown size={20} className="font-semibold" />
                  )}
                </button>

                {expandedItems.has(item.id) && (
                  <div className="p-3.5 space-y-3">
                    {item.content.map((content, index) => (
                      <div key={index}>
                        <div className="flex flex-col gap-y-1.5">
                          <div className="flex items-center gap-x-2.5 relative">
                            <Image
                              src="/images/parlayImage.jpg"
                              width={26}
                              height={26}
                              alt=""
                              className="rounded-full"
                            />
                            <Image
                              src="/icons/horse.svg"
                              width={12}
                              height={12}
                              alt=""
                              className="rounded-full absolute bottom-0 left-4"
                            />
                            <p className="text-[#1D2939] font-medium">
                              {content.player}
                            </p>
                          </div>
                          <p className="text-[#667085] leading-4.5">
                            {content.description}
                          </p>
                          {content.email && (
                            <p className="text-[#667085] text-sm mt-1">
                              {content.email}
                            </p>
                          )}
                        </div>
                        {index < item.content.length - 1 && (
                          <hr className="my-2 text-[#E4E7EC]" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

  // Desktop View (unchanged)
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
