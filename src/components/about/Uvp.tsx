"use client";
import { uvpData } from "../shared/data";

interface UVPItem {
  title: string;
  description: string;
}

interface UVPData {
  title: string;
  list: UVPItem[];
}

export default function UVP() {
  return (
    <main className="w-full px-5 pb-[31px] md:pb-25 md:px-20">
      <section className="md:flex gap-[65px]">
        <div>
          <h2 className="md:text-[3rem] font-bold md:leading-14 tracking-[-2%] text-[#101828] text-[1.25rem] leading-6">
            {uvpData.title}
          </h2>
        </div>
        <div>
          <div className="flex flex-col gap-y-5">
            <h3 className="text-[1.5rem] font-semibold leading-7 tracking-[0%] text-[#101828] hidden md:block">
              Why PickBetta?
            </h3>
            <p className="md:hidden text-[.875rem] mt-2.5 text-[#344054] leading-5.5">
              Why PickBetta?
            </p>
            <ol className="ml-6 flex list-decimal flex-col gap-y-5">
              {uvpData.list.map((item, index) => (
                <li
                  key={index}
                  className="md:text-[1.125rem] font-normal md:leading-7.5 text-[#475467] text-[.875rem] leading-5.5"
                >
                  <span className="font-semibold text-[#344054]">
                    {item.title}
                  </span>{" "}
                  {item.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
