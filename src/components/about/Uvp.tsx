"use client";
import { uvpData } from "../shared/data";

export default function UVP() {
  return (
    <main className="w-full px-20 pb-25">
      <section className="flex gap-[65px]">
        <div>
          <h2 className="w-[346px] leading-14 tracking-[-2%] text-[#101828] text-[3rem] font-bold">
            {uvpData.title}
          </h2>
        </div>
        <aside>
          <div className="flex flex-col gap-y-5">
            <h3 className="text-[#101828] text-[1.5rem] font-semibold leading-7 tracking-[0%]">
              Why PickBetta?
            </h3>
            <ul className="list-decimal flex flex-col gap-y-5 ml-6">
              {uvpData.list.map((item, index) => (
                <li
                  key={index}
                  className="text-[1.125rem] font-normal leading-7.5"
                >
                  <span className="text-[#344054] font-semibold">
                    {item.title}
                  </span>{" "}
                  {item.description}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
