// app/deepdive/nfl/page.tsx
"use client";
import useResponsive from "@/hooks/useResponsive";
import { nflDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";

export default function DeepDiveNfl() {
  const { isDesktop } = useResponsive();

  return (
    <DeepDiveLayout
      league="NFL"
      isDesktop={isDesktop}
      statsData={nflDeepDiveStats}
    >
      <main className="px-5">
        <MatchDetails isDesktop={isDesktop} />
        <StatsTable statsData={nflDeepDiveStats} isDesktop={isDesktop} />
        <Pagination />
      </main>
    </DeepDiveLayout>
  );
}
