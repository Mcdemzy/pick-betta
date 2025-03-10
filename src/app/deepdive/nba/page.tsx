"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";

export default function DeepDiveNba() {
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
            <span className="text-[#D8A428]">NBA</span> Deep Dive
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
          <section className="w-full min-h-screen bg-red-700"></section>
        </main>
      </main>
    </>
  );
}
