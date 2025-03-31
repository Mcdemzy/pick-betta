// components/deepdive/StatsTable.tsx
import { LuInfo } from "react-icons/lu";
import { DeepDiveStats } from "@/types/deepdive";

interface StatsTableProps {
  statsData: DeepDiveStats;
  isDesktop: boolean;
}

export default function StatsTable({ statsData, isDesktop }: StatsTableProps) {
  return (
    <section className="w-full min-h-screen bg-[#FFFFFF]">
      <table className="w-full border border-[#EAECF0] table-fixed">
        <tbody>
          {statsData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-[#EAECF0] p-4 flex items-center justify-between">
                <span>
                  {isDesktop ? item.fullStat || item.stat : item.stat}
                </span>
                {!isDesktop && (
                  <div className="relative group">
                    <LuInfo
                      size={16}
                      className="text-gray-500 cursor-pointer hover:text-gray-700"
                    />
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[180px] bg-black text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 text-center">
                      {item.description || "No additional info"}
                    </div>
                  </div>
                )}
              </td>
              <td className="border border-[#EAECF0] text-center p-4">
                <div
                  className={
                    isDesktop ? "flex justify-between" : "flex justify-evenly"
                  }
                >
                  <span>{item.home}</span>
                  <span className={isDesktop ? "mr-45" : ""}>{item.away}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
