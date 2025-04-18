// app/deepdive/ncaab/page.tsx
"use client";
import useResponsive from "@/hooks/useResponsive";
import { ncaabDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";

export default function DeepDiveNcaab() {
  const { isDesktop } = useResponsive();

  return (
    <DeepDiveLayout
      league="NCAAB"
      isDesktop={isDesktop}
      statsData={ncaabDeepDiveStats}
    >
      <main className="px-5">
        <MatchDetails isDesktop={isDesktop} />
        <StatsTable statsData={ncaabDeepDiveStats} isDesktop={isDesktop} />
        <Pagination />
      </main>
    </DeepDiveLayout>
  );
}
