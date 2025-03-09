"use client";

import { useState } from "react";
import { termsSections } from "../shared/data";

export default function Hero() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleSidebarClick = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <main className="bg-[#FFFFFF] md:px-20 md:py-25">
        <section className="flex flex-col md:flex-row gap-x-12.5">
          {/* Sidebar */}
          <aside className="bg-[#ECFDF3] py-5 px-2.5 h-fit min-w-[361px] md:flex gap-x-4.5 hidden">
            <div className="w-1 min-h-[396px] bg-[#F4F3F3]">
              <div className="w-full h-12.5 bg-[#06543C]"></div>
            </div>
            <section className="flex flex-col gap-y-5.5">
              {termsSections.map((section) => (
                <h4
                  key={section.id}
                  className={`text-[#475467] hover:text-[#06543C] cursor-pointer leading-6 hover:font-medium ${
                    activeSection === section.id
                      ? "text-[#06543C] font-medium"
                      : ""
                  }`}
                  onClick={() => handleSidebarClick(section.id)}
                >
                  {section.title}
                </h4>
              ))}
            </section>
          </aside>

          {/* Main Content */}
          <section className="flex flex-col gap-y-10 max-w-[869px] md:p-0 px-5 py-7.5">
            <div className="flex flex-col gap-y-5">
              <h3 className="gilroy-bold font-semibold text-[1.25rem] leading-7 text-[#101828] md:block hidden">
                Our Terms & Conditions
              </h3>
              <p className="text-[#475467] md:text-[1.125rem] md:leading-7.5 leading-6">
                PickBetta is a service provided by [Company Name], a subsidiary
                of [Parent Company Name], and PickBetta (“PickBetta”). By using
                the PickBetta site and any of our features, services, or
                products, you agree to all our terms and conditions as outlined
                below (the “Agreement”). If you do not agree with any of these
                terms, please discontinue your use of the website and any of our
                features, services, or products immediately.
              </p>
            </div>

            {/* Terms & Conditions Sections */}
            <ol className="flex flex-col gap-y-10 list-decimal">
              {termsSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="flex flex-col gap-y-5"
                >
                  <li className="md:gilroy-bold md:text-[1.5rem] text-[#101828] md:font-semibold md:leading-7 ml-10 text-[1.25rem] font-bold leading-6 my-10 md:my-0">
                    {section.title}
                  </li>
                  <div
                    className="text-[#475467] md:text-[1.125rem] leading-6 md:leading-7.5"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </>
  );
}
