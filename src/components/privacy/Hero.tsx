"use client";

import { useState } from "react";
import { policySections } from "../shared/data";

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
              {policySections.map((section) => (
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
                Our Policy
              </h3>
              <p className="text-[#475467] md:text-[1.125rem] md:leading-7.5 leading-6">
                PickBetta's privacy policy covers the collection and use of
                personal information that may be collected by PickBetta anytime
                you interact with PickBetta, such as when you visit our website,
                purchase PickBetta products and services, or contact our sales
                or support associates. Please take a moment to read the
                following to learn more about our information practices,
                including what type of information is gathered, how it is used
                and for what purposes, to whom we disclose the information, and
                how we safeguard your personal information. Your privacy is a
                priority at PickBetta, and we go to great lengths to protect it.
              </p>
            </div>

            {/* Policy Sections */}
            <ol className="flex flex-col gap-y-10 list-decimal">
              {policySections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="flex flex-col gap-y-5"
                >
                  <li className="md:gilroy-bold md:text-[1.5rem] text-[#101828] md:font-semibold md:leading-7 ml-10 text-[1.25rem] font-bold leading-6 my-10 md:my-0">
                    {section.title}
                  </li>
                  <p className="text-[#475467] md:text-[1.125rem] leading-6 md:leading-7.5">
                    {section.content}
                  </p>
                </div>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </>
  );
}
