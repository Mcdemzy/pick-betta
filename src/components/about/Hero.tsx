"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main>
        <section>
          <div>
            <h1>About us</h1>
            <p>
              For over 40 years, I’ve been where you are—deep in the trenches of
              sports betting, constantly searching for that edge. Like so many
              bettors, I fell into the trap of paying thousands to so-called
              "expert" handicappers, hoping they held the key to consistent
              wins. Every Saturday and Sunday morning, I’d scramble, desperate
              for someone to advise me who to pick. I was chasing picks like a
              dog chasing its tail, never getting anywhere.
            </p>
          </div>

          <div>
            <Image
              src="/icons/heart.svg"
              width={56}
              height={56}
              alt=""
              className=""
            />
          </div>
        </section>
      </main>
    </>
  );
}
