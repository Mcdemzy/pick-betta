"use client";
import Image from "next/image";
import { teamData } from "../shared/data";

export default function Team() {
  return (
    <main className="w-full px-6 sm:px-12 lg:px-20 pt-12.5 pb-[109px] hidden md:block">
      <section className="flex flex-col gap-y-12.5">
        {/* Title & Description */}
        <div className="flex flex-col gap-y-5 text-center">
          <h1 className="text-[#101828] text-3xl sm:text-4xl font-semibold leading-14 tracking-[-2%]">
            {teamData.title}
          </h1>
          <p className="text-[#475467] text-base sm:text-lg font-medium leading-7.5">
            {teamData.description}
          </p>
        </div>

        {/* Team Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                width={300}
                height={350}
                alt={member.name}
                className="rounded-lg"
              />
              <h3 className="text-center text-lg font-semibold mt-3">
                {member.name}
              </h3>
              <h4 className="text-center text-sm text-gray-600">
                {member.role}
              </h4>
            </div>
          ))}
        </section>

        {/* Hidden Section on Mobile */}
        <section className="hidden lg:grid grid-cols-3 gap-6 mt-12.5">
          {teamData.members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.image}
                width={300}
                height={350}
                alt={member.name}
                className="rounded-lg"
              />
              <h3 className="text-center text-lg font-semibold mt-3">
                {member.name}
              </h3>
              <h4 className="text-center text-sm text-gray-600">
                {member.role}
              </h4>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
