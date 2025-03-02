"use client";
import { whoWeAreData } from "../shared/data";

export default function WhoWeAre() {
  return (
    <main className="w-full px-20 py-25">
      <section className="flex gap-25">
        <div>
          <h2 className="w-[311px] leading-14 tracking-[-2%] text-[#101828] text-[3rem] font-bold">
            Who we Are
          </h2>
        </div>
        <aside className="flex flex-col gap-y-10 text-justify">
          {whoWeAreData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-5">
              <h3 className="text-[#101828] text-[1.5rem] font-semibold leading-7 tracking-[0%]">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-[#475467] text-[1.125rem] leading-7.5 font-normal">
                  {item.description}
                </p>
              )}
              {item.list && (
                <ol className="list-decimal flex flex-col gap-y-5 ml-6">
                  {item.list.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="text-[1.125rem] font-normal text-[#475467] leading-7.5"
                    >
                      <span className="text-[#344054] font-semibold">
                        {listItem.title}
                      </span>{" "}
                      {listItem.description}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}
