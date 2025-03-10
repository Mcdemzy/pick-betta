"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import { deepDiveLeagues } from "@/components/shared/data";

export default function DeepDive() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8.5 pb-[15px] flex items-center">
        <button className="cursor-pointer" onClick={() => router.back()}>
          <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
        </button>
        <p className="text-xl font-semibold leading-6 ml-4">
          <span className="text-[#D8A428]">Betta</span> Deep Dive
        </p>
      </section>

      {/* Leagues List */}
      <section className="px-5 mt-5 grid grid-cols-2 gap-4">
        {deepDiveLeagues.map((league, index) => (
          <div
            key={index}
            onClick={() =>
              router.push(`/deepdive/${league.name.toLowerCase()}`)
            }
            className="flex items-center gap-x-3 border border-[#E4E7EC] w-full rounded-[10px] px-4 py-2.5 cursor-pointer hover:bg-gray-100 transition"
          >
            <Image src={league.icon} width={35} height={35} alt={league.name} />
            <p className="text-sm font-medium leading-5.5 text-[#101828]">
              {league.name}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
