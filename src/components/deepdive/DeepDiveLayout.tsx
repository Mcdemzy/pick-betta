// components/deepdive/DeepDiveLayout.tsx
"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { BsChevronLeft } from "react-icons/bs";
import Sidebar from "@/components/deepdive/Sidebar";
import Navbar from "@/components/deepdive/Navbar";
import { DeepDiveStats } from "@/types/deepdive";

interface DeepDiveLayoutProps {
  league: string;
  children: ReactNode;
  isDesktop: boolean;
  statsData: DeepDiveStats;
}

export default function DeepDiveLayout({
  league,
  children,
  isDesktop,
  statsData,
}: DeepDiveLayoutProps) {
  const router = useRouter();

  if (!isDesktop) {
    return (
      <main>
        {/* Mobile Header */}
        <section className="w-full h-[109px] bg-[#06543C] text-white px-5 pt-8 pb-[15px] flex items-center">
          <button className="cursor-pointer" onClick={() => router.back()}>
            <BsChevronLeft className="w-10 h-10 bg-[#E4E7EC] text-[#06543C] rounded-full p-2.5" />
          </button>
          <p className="text-xl font-semibold leading-6 ml-4">
            <span className="text-[#D8A428]">{league}</span> Deep Dive
          </p>
        </section>

        {/* Date */}
        <p className="text-sm text-[#101828] font-semibold text-center mt-5 mb-3">
          Tuesday 30, October, 2024
        </p>

        {children}
      </main>
    );
  }

  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-[260px]">
        <Navbar />
        <div className="px-6 py-5">
          <h1 className="text-xl font-semibold mb-4 text-[#1A1A1A]">
            {league} Deep Dive
          </h1>
          <p className="text-sm text-[#101828] font-semibold text-center mt-5 mb-3">
            Tuesday 30, October, 2024
          </p>
          {children}
        </div>
      </div>
    </main>
  );
}
