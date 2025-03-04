"use client";
import { whoWeAreData } from "../shared/data";

interface ListItem {
  title: string;
  description: string;
}

interface WhoWeAreItem {
  title: string;
  description?: string;
  list?: ListItem[];
}

export default function WhoWeAre() {
  return (
    <main className="w-full py-[23px] px-5 md:py-25 md:px-20">
      <section className="md:flex gap-25">
        <div>
          <h2 className="hidden text-[3rem] font-bold leading-14 tracking-[-2%] text-[#101828] md:block md:min-w-[311px]">
            Who we Are
          </h2>
        </div>
        <div className="flex flex-col gap-y-6 md:gap-y-10">
          {whoWeAreData.map((item, index) => (
            <div key={index} className="flex flex-col gap-y-2.5 md:gap-y-5">
              <h3 className="text-[1.25rem] font-bold leading-6 text-[#101828] md:text-[1.5rem] md:font-semibold md:leading-7">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-[.875rem] font-normal leading-[22px] text-[#475467] md:text-[1.125rem] md:leading-7.5">
                  {item.description}
                </p>
              )}
              {item.list && (
                <ol className="ml-6 flex list-decimal flex-col gap-y-5">
                  {item.list.map((listItem, idx) => (
                    <li
                      key={idx}
                      className="text-[.875rem] font-normal leading-5.5 text-[#475467] md:text-[1.125rem] md:leading-7.5"
                    >
                      <span className="font-semibold text-[#344054]">
                        {listItem.title}
                      </span>{" "}
                      {listItem.description}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
