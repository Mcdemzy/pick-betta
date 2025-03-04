"use client";
import { missionData } from "../shared/data";

interface SubListItem {
  title: string;
  subList: string[];
}

interface MissionItem {
  title: string;
  list: SubListItem[];
}

export default function Mission() {
  return (
    <main className="w-full px-5 pb-[23px] md:py-25 md:px-20">
      <section className="md:flex gap-[226px]">
        <div>
          <h2 className="md:text-[3rem] font-bold md:leading-14 tracking-[-2%] text-[#101828] text-[1.25rem] leading-6">
            Mission
          </h2>
        </div>
        <div className="flex flex-col gap-y-10">
          {missionData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5">
              <h3 className="text-[1.5rem] font-semibold leading-7 tracking-[0%] text-[#101828] hidden md:block">
                {item.title}
              </h3>
              <p className="md:hidden text-[.875rem] mt-2.5 text-[#344054] leading-5.5">
                How are we unique?
              </p>
              <ol className="ml-6 flex list-decimal flex-col gap-y-5">
                {item.list.map((listItem, idx) => (
                  <li
                    key={idx}
                    className="md:text-[1.125rem] font-semibold md:leading-7.5 text-[#475467] text-[.875rem] leading-5.5"
                  >
                    {listItem.title}
                    <ul className="ml-6 flex list-disc flex-col gap-y-5">
                      {listItem.subList.map((subItem, subIdx) => (
                        <li
                          key={subIdx}
                          className="md:text-[1.125rem] font-normal md:leading-7.5 text-[#475467] text-[.875rem] leading-5.5"
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
        </div>
      </section>
    </main>
  );
}
