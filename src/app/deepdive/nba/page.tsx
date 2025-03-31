// app/deepdive/nba/page.tsx
"use client";
import useResponsive from "@/hooks/useResponsive";
import { nbaDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";

export default function DeepDiveNba() {
  const { isDesktop } = useResponsive();

  return (
    <DeepDiveLayout
      league="NBA"
      isDesktop={isDesktop}
      statsData={nbaDeepDiveStats}
    >
      <main className="px-5">
        <MatchDetails isDesktop={isDesktop} />
        <StatsTable statsData={nbaDeepDiveStats} isDesktop={isDesktop} />
        <Pagination />
      </main>
    </DeepDiveLayout>
  );
}
