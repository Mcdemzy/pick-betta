"use client";
import { missionData } from "../shared/data";

export default function Mission() {
  return (
    <main className="w-full px-20 pb-25">
      <section className="flex gap-[226px]">
        <div>
          <h2 className="w-[185px] leading-14 tracking-[-2%] text-[#101828] text-[3rem] font-bold">
            Mission
          </h2>
        </div>
        <aside className="flex flex-col gap-y-10 text-justify">
          {missionData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5">
              <h3 className="text-[#101828] text-[1.5rem] font-semibold leading-7 tracking-[0%]">
                {item.title}
              </h3>
              <ol className="list-decimal flex flex-col gap-y-5 ml-6">
                {item.list.map((listItem, idx) => (
                  <li
                    key={idx}
                    className="text-[1.125rem] font-semibold text-[#475467] leading-7.5"
                  >
                    {listItem.title}
                    <ul className="list-disc flex flex-col gap-y-5 ml-6">
                      {listItem.subList.map((subItem, subIdx) => (
                        <li
                          key={subIdx}
                          className="text-[1.125rem] font-normal leading-7.5"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
