"use client";
import Image from "next/image";

interface DeepDiveStatsTableProps {
  stats: any;
  league: string;
  isDesktop?: boolean;
}

export default function DeepDiveStatsTable({
  stats,
  league,
  isDesktop = false,
}: DeepDiveStatsTableProps) {
  if (!stats) return <div>No stats available</div>;

  return (
    <div className={isDesktop ? "w-full" : ""}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image
            src={stats.homeTeam.logo}
            width={isDesktop ? 40 : 30}
            height={isDesktop ? 40 : 30}
            alt={`${stats.homeTeam.name} Logo`}
          />
          <span className="font-medium">{stats.homeTeam.name}</span>
        </div>
        <span className="text-lg font-bold">vs</span>
        <div className="flex items-center gap-3">
          <Image
            src={stats.awayTeam.logo}
            width={isDesktop ? 40 : 30}
            height={isDesktop ? 40 : 30}
            alt={`${stats.awayTeam.name} Logo`}
          />
          <span className="font-medium">{stats.awayTeam.name}</span>
        </div>
      </div>

      {/* Stats table implementation */}
      <table className={`w-full ${isDesktop ? "text-base" : "text-sm"}`}>
        <thead>
          <tr className="bg-[#06543C] text-white">
            <th className="p-2 text-left">Stat</th>
            <th className="p-2 text-right">Home</th>
            <th className="p-2 text-right">Away</th>
          </tr>
        </thead>
        <tbody>
          {stats.stats.map((stat: any, index: number) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#F6FEF9]" : "bg-white"}
            >
              <td className="p-2">{stat.name}</td>
              <td className="p-2 text-right">{stat.home}</td>
              <td className="p-2 text-right">{stat.away}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
