// app/deepdive/nhl/page.tsx
"use client";
import useResponsive from "@/hooks/useResponsive";
import { nhlDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";
import DeepDiveLayout from "@/components/deepdive/DeepDiveLayout";
import MatchDetails from "@/components/deepdive/MatchDetails";
import StatsTable from "@/components/deepdive/StatsTable";

export default function DeepDiveNhl() {
  const { isDesktop } = useResponsive();

  return (
    <DeepDiveLayout
      league="NHL"
      isDesktop={isDesktop}
      statsData={nhlDeepDiveStats}
    >
      <main className="px-5">
        <MatchDetails isDesktop={isDesktop} />
        <StatsTable statsData={nhlDeepDiveStats} isDesktop={isDesktop} />
        <Pagination />
      </main>
    </DeepDiveLayout>
  );
}
