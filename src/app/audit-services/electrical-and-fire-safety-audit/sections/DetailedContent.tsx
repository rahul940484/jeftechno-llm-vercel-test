"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PROGRESS_DURATION = 15000;
const PROGRESS_INTERVAL = 50;

const pages = [
  {
    label: "ELECTRICAL SAFETY\nTESTS",
    title: "ELECTRICAL SAFETY TESTS",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          JEF Electrical Safety Audit incorporates 500+ checkpoints and precision
          measurements across grounding, protection systems, insulation, and
          power quality.
        </p>

        <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>Grounding & Earthing System Evaluation</li>
          <li>Electrical Network Integrity & Continuity Checks</li>
          <li>Insulation Health & Leakage Current Analysis</li>
          <li>Fault Current & Protection System Verification</li>
          <li>Power Quality & Load Performance Assessment</li>
          <li>Thermal Imaging & Preventive Diagnostics</li>
          <li>Lighting & Emergency System Assessment</li>
        </ul>

        <h3 className="text-[#FF0000] text-[16px] md:text-[18px] lg:text-[20px] uppercase font-bold tracking-[1px] md:tracking-[1.49px] mt-8 leading-[1.4]">
          Additional Offerings
        </h3>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          In addition to 500+ checkpoints and 15+ tests, our audit evaluates
          maintenance systems, critical records, and utility performance for risk
          mitigation and efficiency improvement.
        </p>
      </>
    ),
  },
  {
    label: "JEF SAFETY\nCERTIFICATION\nPROGRAMME",
    title: "THE JEF SAFETY CERTIFICATION PROGRAMME",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">India’s first facility-specific safety certification.</p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">The 4-step path to certification:</p>

        <ul className="list-disc space-y-4 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>
            Audit — Comprehensive electrical & fire safety audit against all
            applicable Indian standards
          </li>
          <li>
            Rectification — Facility addresses all findings using JEF’s
            recommendations
          </li>
          <li>
            Closure Audit — JEF independently verifies that all critical deficiencies are resolved
          </li>
          <li>
            Certification — Facility is awarded the JEF Safety Certification on meeting the qualification criteria.
          </li>
          <li>
            Staff Training & Certification - Structured training for facility electrical management teams, with certificates awarded for participants.
          </li>
        </ul>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Note: Our periodic audit significantly reduces the probability of
          electrical and fire accidents. While we cannot guarantee 24/7 safety,
          our certification programme and post-certification training aim to
          build a lasting safety-first culture within your facility.
        </p>
      </>
    ),
  },
  {
    label: "GENERAL FIRE\nSAFETY",
    title: "GENERAL FIRE SAFETY",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Our fire safety audits examine the complete system as an integrated whole — not just extinguisher counts and detector placement.
        </p>

        <h4 className="text-[#FF0000] text-[16px] md:text-[18px] lg:text-[20px] uppercase font-bold tracking-[1px] md:tracking-[1.49px] mt-8 leading-[1.4]">
          What JEF Covers:
        </h4>

        <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>Fire Prevention</li>
          <li>Life Safety</li>
          <li>Active Fire Protection</li>
          <li>Passive Fire Protection</li>
          <li>Mock Drill Review</li>
        </ul>
      </>
    ),
  },
  {
    label: "LIFT / ESCALATOR &\nHVAC AUDITS",
    title: "LIFT / ESCALATOR & HVAC AUDITS",
    content: (
      <>
      <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
        JEF audits cover:
      </p>
        <ul className="list-disc space-y-5 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li className="font-normal">
            <b>Lift & Escalator</b> - Full inspection across: lift pit, car interior, car
            roof, machine room, floor landings, and lift shaft.
          </li>
          <li className="font-normal">
            <b>HVAC</b> - <span>Assessed for electrical safety, fire alarm integration, and air
            quality.</span>
          </li>
        </ul>

        <h3 className="text-[#FF0000] text-[16px] md:text-[18px] lg:text-[20px] uppercase font-bold tracking-[1px] md:tracking-[1.49px] mt-10 leading-[1.4]">
          Codes & Standards Referenced
        </h3>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          CEA Regulations 2023, NEC 2023, NBC 2016, along with applicable BIS,
          IEC, IEEE, BS and NFPA standards
        </p>
      </>
    ),
  },
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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