"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import useResponsive from "@/hooks/useResponsive";
import { getLeagueMatches, deepDiveLeagues } from "@/lib/api/deepdive";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface League {
  name: string;
  icon: string;
}

interface Team {
  name: string;
  logo: string;
}

interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  spread: string;
  money: string;
  total: string;
  date: string;
}

export default function LeagueMatchesPage() {
  const router = useRouter();
  const { isDesktop } = useResponsive();
  const { league } = useParams<{ league: string }>();
  const mobileNavItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const desktopNavItemsRef = useRef<(HTMLLIElement | null)[]>([]);

  // Track active league
  const [activeLeague, setActiveLeague] = useState<string>(league || "");
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [rulerStyle, setRulerStyle] = useState({
    width: "0px",
    left: "0px",
  });

  // Fetch matches for this league
  const matches = getLeagueMatches(activeLeague) as Match[];

  // Update active league and ruler position when route changes
  useEffect(() => {
    const newActiveLeague = league || "";
    setActiveLeague(newActiveLeague);

    const index = deepDiveLeagues.findIndex(
      (l) => l.name.toLowerCase() === newActiveLeague.toLowerCase()
    );
    if (index !== -1) {
      setActiveItemIndex(index);
      updateRulerPosition(index);
    }
  }, [league]);

  // Update ruler position based on active item
  const updateRulerPosition = (index: number) => {
    const refArray = isDesktop ? desktopNavItemsRef : mobileNavItemsRef;
    const activeItem = refArray.current[index];

    if (activeItem) {
      setRulerStyle({
        width: `${activeItem.offsetWidth}px`,
        left: `${activeItem.offsetLeft}px`,
      });
    }
  };

  // Handle league navigation
  const handleLeagueClick = (leagueName: string, index: number) => {
    router.push(`/deepdive/${leagueName.toLowerCase()}/matches`);
    setActiveItemIndex(index);
    updateRulerPosition(index);
  };

  // Initialize ruler position on first render
  useEffect(() => {
    if (
      desktopNavItemsRef.current.length > 0 ||
      mobileNavItemsRef.current.length > 0
    ) {
      updateRulerPosition(activeItemIndex);
    }
  }, [isDesktop, activeItemIndex]);

  if (!isDesktop) {
    return (
      <main>
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">{activeLeague.toUpperCase()}</span>{" "}
            Deep Dive
          </p>
        </section>

        {/* Main Match Section */}
        <main className="w-full px-5 pb-5 min-h-fit">
          <section className="w-full">
            {/* Nav Items */}
            <nav className="relative">
              <ul className="min-h-12.5 w-full flex justify-between items-center px-5 py-2 text-[#475467] text-[.75rem] leading-4.5">
                {deepDiveLeagues.map((l: League, index: number) => (
                  <li
                    key={l.name}
                    ref={(el) => {
                      mobileNavItemsRef.current[index] = el;
                    }}
                    onClick={() => handleLeagueClick(l.name, index)}
                    className={`cursor-pointer px-2 ${
                      l.name.toLowerCase() === activeLeague.toLowerCase()
                        ? "text-[#06543C] font-semibold"
                        : ""
                    }`}
                  >
                    {l.name}
                  </li>
                ))}
              </ul>
              {/* Dynamic ruler indicator */}
              <div
                className="bg-[#06543C] h-1 rounded-t-[100px] absolute bottom-0 transition-all duration-300"
                style={{
                  width: rulerStyle.width,
                  left: rulerStyle.left,
                }}
              />
            </nav>

            <div className="w-full min-h-10 bg-[#F6FEF9] flex items-center justify-end gap-x-2 px-5 py-2 text-[#475467] text-sm font-medium leading-5.5 mb-2.5">
              <p>SPREAD</p>
              <p>MONEY</p>
              <p>TOTAL</p>
            </div>

            {/* Main Matches */}
            <section className="space-y-4">
              {matches.map((match) => (
                <div
                  key={match.id}
                  className="w-full border border-[#E4E7EC] rounded-lg p-3"
                >
                  {/* Home Team */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={match.homeTeam.logo}
                        width={24}
                        height={24}
                        alt={`${match.homeTeam.name} Logo`}
                      />
                      <span className="text-sm font-medium">
                        {match.homeTeam.name}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.spread}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.spread}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.total}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* VS Separator */}
                  <div className="flex my-1">
                    <span className="text-[#475467] text-xs">@</span>
                  </div>

                  {/* Away Team */}
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={match.awayTeam.logo}
                        width={24}
                        height={24}
                        alt={`${match.awayTeam.name} Logo`}
                      />
                      <span className="text-sm font-medium">
                        {match.awayTeam.name}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.spread}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.spread}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                      <div className="bg-[#D1FADF] border border-[#D0D5DD] rounded-lg px-3 py-1 text-center min-w-[60px]">
                        <p className="text-[#475467] text-xs">{match.total}</p>
                        <p className="text-[#06543C] text-xs font-semibold">
                          {match.money}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Match Footer */}
                  <div className="flex justify-between items-center mt-3 pt-2  border-[#E4E7EC]">
                    <span className="text-[#06543C] text-xs">{match.date}</span>
                    <Link href={`/deepdive/${league}/${match.id}/stats`}>
                      <div className="flex items-center gap-1 text-xs text-[#101828]">
                        <span>More Deepdive</span>
                        <BsChevronRight className="text-xs" />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </section>
          </section>
        </main>
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
            Betta Deep Dive - {activeLeague.toUpperCase()}
          </h1>

          {/* Sports Navigation */}
          <nav className="relative mb-6">
            <ul className="flex gap-x-5 items-center px-5 py-2 text-[#475467] text-sm">
              {deepDiveLeagues.map((l: League, index: number) => (
                <li
                  key={l.name}
                  ref={(el) => {
                    desktopNavItemsRef.current[index] = el;
                  }}
                  onClick={() => handleLeagueClick(l.name, index)}
                  className={`cursor-pointer px-2 ${
                    l.name.toLowerCase() === activeLeague.toLowerCase()
                      ? "text-[#06543C] font-semibold"
                      : ""
                  }`}
                >
                  {l.name}
                </li>
              ))}
            </ul>
            {/* Dynamic ruler indicator for desktop */}
            <div
              className="bg-[#06543C] h-1 rounded-t-[100px] absolute bottom-0 transition-all duration-300"
              style={{
                width: rulerStyle.width,
                left: rulerStyle.left,
              }}
            />
          </nav>

          {/* Bet Type Navigation */}
          <div className="w-full bg-[#F6FEF9] flex items-center justify-end gap-x-60 px-5 py-2 text-[#475467] text-sm font-semibold mb-6">
            <p>SPREAD</p>
            <p>MONEY</p>
            <p>TOTAL</p>
          </div>

          {/* Matches List */}
          <section className="space-y-4">
            {matches.map((match) => (
              <div
                key={match.id}
                className="w-full border border-[#E4E7EC] rounded-lg p-4"
              >
                {/* Home Team */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3 w-[40%]">
                    <Image
                      src={match.homeTeam.logo}
                      width={28}
                      height={28}
                      alt={`${match.homeTeam.name} Logo`}
                    />
                    <p className="text-[#101828]">{match.homeTeam.name}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.spread}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.spread}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.total}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                  </div>
                </div>

                {/* VS Separator */}
                <div className="flex my-1">
                  <span className="text-[#475467] text-sm">@</span>
                </div>

                {/* Away Team */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3 w-[40%]">
                    <Image
                      src={match.awayTeam.logo}
                      width={28}
                      height={28}
                      alt={`${match.awayTeam.name} Logo`}
                    />
                    <p className="text-[#101828]">{match.awayTeam.name}</p>
                  </div>
                  <div className="flex gap-x-4">
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.spread}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.spread}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                    <div className="bg-[#D1FADF] border border-[#D0D5DD] w-55.5 rounded-lg px-4 py-2 text-center min-w-[80px]">
                      <p className="text-[#475467] text-sm">{match.total}</p>
                      <p className="text-[#06543C] text-sm font-semibold">
                        {match.money}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Match Footer */}
                <div className="flex justify-between items-center pt-3  border-[#E4E7EC]">
                  <span className="text-[#06543C] text-sm">{match.date}</span>
                  <Link href={`/deepdive/${league}/${match.id}/stats`}>
                    <div className="flex items-center gap-2 text-sm text-[#101828]">
                      <span>More Deepdive</span>
                      <BsChevronRight className="text-sm" />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}
