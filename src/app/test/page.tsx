"use client";

import SideBar from "@/components/deepdive/Sidebar";
import Image from "next/image";
import Bracket1 from "@/components/brackets/Bracket1";
import Bracket2 from "@/components/brackets/Bracket2";
import Bracket3 from "@/components/brackets/Bracket3";

export default function Home() {
  return (
    <div>
      <Bracket1 />
      <Bracket2 />
      <Bracket3 />
    </div>
  );
}
