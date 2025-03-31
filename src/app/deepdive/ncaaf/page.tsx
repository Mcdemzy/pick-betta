// app/deepdive/ncaaf/page.tsx
"use client";
import useResponsive from "@/hooks/useResponsive";
import { ncaafDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";

export default function DeepDiveNcaaf() {
  const { isDesktop } = useResponsive();

  return (
    <DeepDiveLayout
      league="NCAAF"
      isDesktop={isDesktop}
      statsData={ncaafDeepDiveStats}
    >
      <main className="px-5">
        <MatchDetails isDesktop={isDesktop} />
        <StatsTable statsData={ncaafDeepDiveStats} isDesktop={isDesktop} />
        <Pagination />
      </main>
    </DeepDiveLayout>
  );
}
