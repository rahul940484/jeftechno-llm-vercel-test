"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Sample pages definition matching your structure
const pages = [
  {
    label: "WHY DO YOU NEED\nLPS ADEQUACY\nAUDIT?",
    title: "WHY DO YOU NEED LPS ADEQUACY AUDIT?",
    content: (
      <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
        <li>To measure lightning risk to the structure and its contents.</li>
        <li>Identify structures which require protection and determine the level of protection required as per latest standards.</li>
        <li>To assess the condition and integrity of the existing LPS.</li>
        <li>To determine whether adequate lightning protection is in place to mitigate risk from radiated and conducted surges.</li>
        <li>Identify gaps in the present System with respect to latest and relevant standards.</li>
        <li>Compliance to latest and relevant standards.</li>
        <li>Recommendations for Corrective Action with BOQ & Drawings to ensure adequate protection.</li>
        <li>Design risk mitigation/management measures to enhance safety.</li>
      </ul>
    ),
  },
  {
    label: "APPLICATION AREA",
    title: "APPLICATION AREA",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Commercial & Cultural Heritage Buildings, Public Service Structures &
          Utilities, IT/ITES Facilities, Hospitals, Hotels, Retails outlets &
          shopping malls, Factories, Industries, Manufacturing plants, Oil & Gas,
          Metro rail, Process plants, Wind & Solar Plants, Tank farms, Critical
          structures like communication towers, power plants, substations and
          more
        </p>
 
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Get your risk assessment report, concept design drawings & bill of materials.
        </p>
 
        <button 
          onClick={(e) => { 
            e.stopPropagation();
            window.location.href = "/Products/JEF-shield";
          }} 
          className="w-fit rounded-full bg-black border-2 border-[#FF0000] px-6 py-2 text-[#FF0000] text-[14px] font-bold uppercase hover:underline cursor-pointer relative z-30 mt-4"
        >
          JEF Shield
        </button>
      </>
    ),
  },
];

export default function DetailedContent() {
  const [activePage, setActivePage] = useState(0);

  const handlePrevPage = (e) => {
    e.stopPropagation();
    setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const handleNextPage = (e) => {
    e.stopPropagation();
    setActivePage((prev) => (prev + 1) % pages.length);
  };

  const page = pages[activePage];

  return (
    <section 
      className="min-h-[760px] bg-[#161414] py-14 md:py-20 font-montserrat text-white overflow-hidden"
    >
      <div className="section-container flex min-h-[650px] flex-col px-5 md:px-0">
        
        {/* Top Header Row with Title and Arrow Navigation Buttons */}
        <div className="flex items-center justify-between gap-4 mb-9">
          <motion.h2
            key={`title-${activePage}`}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="text-[#FF0000] text-[20px] md:text-[26px] font-bold uppercase tracking-[1px] md:tracking-[1.49px] leading-[1.4]"
          >
            {page.title}
          </motion.h2>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrevPage}
              aria-label="Previous tab"
              className="rounded-full h-12 w-12 border border-[#d4d0c8] text-[#d4d0c8] text-[20px] md:text-[14px] tracking-[1px] uppercase hover:text-white hover:border-white transition-colors duration-300 cursor-pointer"
            >
              ←
            </button>
            <button
              onClick={handleNextPage}
              aria-label="Next tab"
              className="rounded-full h-12 w-12 border border-[#FF0000] text-[#FF0000] text-[18px] md:text-[14px] tracking-[1px] uppercase hover:text-white hover:border-white transition-colors duration-300 cursor-pointer"
            >
              →
            </button>
          </div>
        </div>

        {/* Content Panel Area */}
        <motion.div
          key={`content-${activePage}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex-1"
        >
          <div className="flex max-w-[1500px] flex-col gap-6">{page.content}</div>
        </motion.div>

        {/* Bottom Tab Row Layout Container */}
        <div className="mt-12 md:mt-20 overflow-hidden">
          <div className="flex gap-4 md:gap-8">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActivePage(index);
                  }}
                  className="group flex flex-col items-start text-left shrink-0 cursor-pointer"
                >
                  {/* Dynamic Progress Indicator Strip */}
                  <div className="relative mb-3 h-[2px] w-60 bg-[#d4d0c8]/80">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-[#FF0000]"
                      animate={{ width: isCurrent ? "100%" : "0%" }}
                      transition={{ ease: "linear", duration: 0.3 }}
                    />
                  </div>

                  <span
                    className={`whitespace-pre-line text-[12px] md:text-[18px] uppercase tracking-[1px] md:tracking-[2.5px] font-medium leading-[1.35] transition-all ${
                      isCurrent
                        ? "text-[#FF0000]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}