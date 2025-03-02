"use client";
import Image from "next/image";
import { teamData } from "../shared/data";

export default function Team() {
  return (
    <main className="w-full px-20 pt-12.5 pb-[109px]">
      <section className="flex flex-col gap-y-12.5">
        <div className="flex flex-col gap-y-5 text-center">
          <h1 className="text-[#101828] text-[3rem] font-semibold leading-14 tracking-[-2%]">
            {teamData.title}
          </h1>
          <p className="text-[#475467] text-[1.125rem] font-medium leading-7.5 ">
            {teamData.description}
          </p>
        </div>
        <section className="flex justify-between">
          {teamData.members.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                width={300}
                height={350}
                alt={member.name}
              />
              <h3 className="text-center">{member.name}</h3>
              <h4 className="text-center">{member.role}</h4>
            </div>
          ))}
        </section>
        {/*  */}
        <section className="flex justify-between mt-12.5">
          {teamData.members.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                width={300}
                height={350}
                alt={member.name}
              />
              <h3 className="text-center">{member.name}</h3>
              <h4 className="text-center">{member.role}</h4>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
