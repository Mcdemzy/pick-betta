"use client";
import Image from "next/image";
import { teamData } from "../shared/data";

export default function Team() {
  return (
    <main>
      <section>
        <div>
          <h1>{teamData.title}</h1>
          <p>{teamData.description}</p>
        </div>
        <section>
          {teamData.members.map((member, index) => (
            <div key={index}>
              <Image
                src={member.image}
                width={500}
                height={304}
                alt={member.name}
              />
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
            </div>
          ))}
        </section>
      </section>
    </main>
  );
}
