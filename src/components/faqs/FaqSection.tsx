"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqData, FaqSections, FaqItem } from "../shared/data";

export default function FAQPage() {
  const [activeSection, setActiveSection] =
    useState<FaqSections>("General Questions");
  const [openSection, setOpenSection] = useState<FaqSections | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleSection = (section: FaqSections) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
    setActiveSection(section);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion((prev) => (prev === question ? null : question));
  };

  return (
    <main className="w-full px-5 pb-3.5">
      {/* Mobile Section Tabs */}
      <nav className="md:hidden w-full mb-5 overflow-x-auto flex gap-5 pb-2 h-21">
        {Object.keys(faqData).map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section as FaqSections)}
            className={`px-4 py-2 text-sm font-medium min-w-fit ${
              activeSection === section
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {section}
          </button>
        ))}
      </nav>

      {/* Desktop Layout */}
      <div className="hidden md:flex w-full gap-8 mt-6 max-w-[1280px] m-auto">
        {/* Sidebar */}
        <aside className="w-1/4 min-w-[250px] h-fit relative bg-[#ECFDF3] py-5 px-2.5">
          {/* Ruler */}
          <div
            className="w-1 rounded-[42px] bg-[#06543C] transition-all duration-300"
            style={{
              height: "200px",
              position: "absolute",
              left: 0,
              top: `${Object.keys(faqData).indexOf(activeSection) * 40}px`,
            }}
          ></div>

          <nav className="space-y-3">
            {Object.keys(faqData).map((section) => (
              <button
                key={section}
                onClick={() => toggleSection(section as FaqSections)}
                className={`w-full text-left py-2 px-3 rounded-md transition ${
                  activeSection === section
                    ? "text-[#06543C] font-semibold"
                    : "text-gray-600"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>
        </aside>

        {/* FAQ Content */}
        <section className="w-3/4 space-y-5">
          {Object.keys(faqData).map((section) => (
            <div
              key={section}
              className="border-[0.5px] border-[#98A2B3] rounded-lg p-4 bg-white shadow-sm text-[#475467] gilroy-bold font-semibold"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section as FaqSections)}
              >
                <h2 className="text-lg font-bold text-[1.25rem] gilroy-bold text-[#1D2939] leading-7">
                  {section}
                </h2>
                {openSection === section ? <FiMinus /> : <FiPlus />}
              </div>

              {openSection === section && (
                <div className="mt-3 space-y-3">
                  {faqData[section as FaqSections].map(
                    (item: FaqItem, index: number) => (
                      <div key={index} className="py-3  rounded-lg bg-gray-50">
                        <h3 className="font-semibold">{item.question}</h3>
                        <p className="mt-1 text-gray-600 font-normal">
                          {item.answer}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>

      {/* Mobile FAQ Content */}
      <section className="block md:hidden space-y-3">
        {faqData[activeSection].map((item: FaqItem, index: number) => (
          <div key={index} className="border rounded-lg p-3">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleQuestion(item.question)}
            >
              <h3 className="font-semibold">{item.question}</h3>
              {openQuestion === item.question ? <FiMinus /> : <FiPlus />}
            </div>
            {openQuestion === item.question && (
              <p className="mt-2 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
