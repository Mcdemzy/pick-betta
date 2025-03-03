"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#06543C] w-full min-h-[472px] px-20 pt-16 pb-12">
        <section className="w-full p-8 flex flex-row gap-12">
          <div>
            <div>
              <Image
                src="/images/logo.svg"
                width={140}
                height={48}
                alt="logo"
              />
            </div>
            <p>
              This website does not endorse, encourage, or facilitate illegal
              gambling. All information provided by PickBetta is intended for
              informational and entertainment purposes only. Any use of this
              information in violation of any federal, state, or local laws is
              strictly prohibited. PickBetta does not condone any illegal
              activities associated with betting or gambling. Users are
              responsible for ensuring that their activities comply with
              applicable laws.
            </p>
          </div>
        </section>
      </footer>
    </>
  );
}
