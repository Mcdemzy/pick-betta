"use client";

import Image from "next/image";

export default function Team() {
  return (
    <>
      <main>
        <section>
          <div>
            <h1>Meet the Team</h1>
            <p>
              Just take a look - each member of the team is watching your every
              gesture and will hear your every whisper.
            </p>
          </div>

          <section>
            <div>
              <Image
                src="/images/teamImage1.svg"
                width={500}
                height={304}
                alt=""
              />
            </div>
            <h3>Abigail Okon</h3>
            <h4>Vice President Sales</h4>
          </section>
        </section>
      </main>
    </>
  );
}
