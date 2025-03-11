"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { LuInfo } from "react-icons/lu";
import { nbaDeepDiveStats } from "@/components/shared/data";
import Pagination from "@/components/deepdive/Pagination";

export default function DeepDiveNhl() {
  const router = useRouter();

  return (
    <>
      <main>
        {/* Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">NHL</span> Deep Dive
          </p>
        </section>

        {/* Date */}
        <p className="text-sm text-[#101828] font-semibold text-center mt-5 mb-3">
          Tuesday 30, October, 2024
        </p>

        {/* Match Details */}
        <main className="px-5">
          <section className="w-full">
            {/* Table Header Section */}
            <section className="min-h-[104px] w-full bg-[#F2F4F7] flex justify-evenly gap-x-2.5 rounded-t-[12px] pt-2.5 pb-0.5">
              <div className="text-center flex flex-col gap-y-1">
                <h2 className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
                  Maple Leafs
                </h2>
                <p className="text-[#667085] text-[0.75rem] leading-[18px] font-medium">
                  0-0
                </p>
              </div>
              <p className="text-[#101828] font-medium text-sm leading-[22px]">
                @
              </p>
              <div className="text-center flex flex-col gap-y-1 items-center">
                <h2 className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
                  Canadians
                </h2>
                <p className="text-[#667085] text-[0.75rem] leading-[18px] font-medium">
                  0-0
                </p>
                <div className="flex items-center text-center gap-x-2">
                  <Image
                    src="/icons/weather.svg"
                    width={16}
                    height={16}
                    alt="weather icon"
                  />
                  <p className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
                    49’
                  </p>
                </div>
                <p className="text-[#101828] text-[0.75rem] leading-[18px] font-medium">
                  Arrow Arena
                </p>
              </div>
            </section>
          </section>

          {/* Table Section */}
          <section className="w-full min-h-screen bg-[#FFFFFF] pb-5">
            <table className="w-full border border-[#EAECF0] table-fixed">
              {/* <thead>
                <tr>
                  <th className="w-2/5 text-left p-3 border border-[#EAECF0]">
                    Stat
                  </th>
                  <th className="w-3/5 text-center p-3 border border-[#EAECF0]">
                    Team Stats
                  </th>
                </tr>
              </thead> */}
              <tbody>
                {nbaDeepDiveStats.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {/* Stat Name */}
                    <td className="border border-[#EAECF0] p-4 flex items-center justify-between">
                      <span>{item.stat}</span>
                      {/* Info Icon with Tooltip */}
                      <div className="relative group">
                        <LuInfo
                          size={16}
                          className="text-gray-500 cursor-pointer hover:text-gray-700"
                        />
                        <div className="absolute left-1/2 -translate-x-1/2 top-6 w-[180px] bg-black text-white text-xs rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 text-center">
                          {item.description || "No additional info"}
                        </div>
                      </div>
                    </td>

                    {/* Team Stats */}
                    <td className="border border-[#EAECF0] text-center p-4">
                      <div className="flex justify-evenly">
                        <span>{item.home}</span>
                        <span>{item.away}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination />
          </section>
        </main>
      </main>
    </>
  );
}
