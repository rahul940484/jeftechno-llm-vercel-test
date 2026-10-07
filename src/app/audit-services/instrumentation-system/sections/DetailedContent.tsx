"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PROGRESS_DURATION = 15000;
const PROGRESS_INTERVAL = 50;
const VISIBLE_TABS = 5;

const pages = [
  {
    label: "WHAT ACTUALLY\nGOES WRONG",
    title: "WHAT ACTUALLY GOES WRONG",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          The following 12 factors are identified as capable of interrupting the
          operation of instrumentation systems
        </p>

        <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>Surges, Spikes, and Glitches</li>
          <li>Leakage Current</li>
          <li>Circulating Current</li>
          <li>Differential Grid / Earth Potential</li>
          <li>Incorrect Earthing Philosophy</li>
          <li>Incorrect Cabling Philosophy</li>
          <li>Compromised Common Earthing Point (CEP)</li>
          <li>High Shield Current</li>
          <li>EMI and EMF</li>
          <li>Looping of Excess Power Cables Inside Panels</li>
          <li>Unused and Unterminated Cables</li>
          <li>Power Quality Disturbances</li>
        </ul>
      </>
    ),
  },
  {
    label: "SCALE OF THE\nPROBLEM IN\nOPERATING PLANTS",
    title: "THE SCALE OF THE PROBLEM IN OPERATING PLANTS",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          The challenge is compounded by the sheer scale of instrumentation
          infrastructure in a typical process plant or generating station. A
          medium-sized plant may have hundreds of panels, thousands of junction
          boxes, and tens of thousands of individual field instruments — each
          with its own earthing connections, cable shields, and bonding points.
          The grounding system is physically extensive, installed over years by
          multiple contractors, and subject to ongoing modifications and
          additions that incrementally degrade the original design intent.
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">Errors accumulate silently.</p>

        <ul className="list-disc space-y-5 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>A shield grounded at both ends in one junction box.</li>
          <li>
            A signal ground bar inadvertently connected to a PE bar during a
            panel modification.
          </li>
          <li>An instrument earth pit left isolated from the plant grid.</li>
        </ul>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          None of these individually cause an immediate, visible failure.
          Together, they create the conditions for the intermittent,
          hard-to-diagnose problems that operations teams experience as
          unexplained trips and nuisance alarms — and which plant engineering
          teams are unable to resolve through standard troubleshooting.
        </p>
      </>
    ),
  },
  {
    label: "WHY STANDARD\nELECTRICAL TESTING IS NOT ENOUGH",
    title: "WHY STANDARD ELECTRICAL TESTING DOES NOT SOLVE THIS",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Routine electrical testing — insulation resistance, continuity, earth
          pit resistance — is designed for the protective earthing system. It
          does not examine the signal reference ground, shield termination
          practices, shield loop current, earth bar segregation, or the global
          earthing architecture. An installation that passes all routine
          electrical tests can still have an instrumentation earthing system that
          is non-compliant with IEEE 1050-2004, IEC 61000-5-2,
          and IEEE 1100-2005 — and that is actively causing operational
          problems.
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          This is the gap that a specialist Instrumentation Earthing Audit
          addresses.
        </p>
      </>
    ),
  },
  {
    label: "INSTRUMENTATION\nEARTHING AUDIT?",
    title: "WHAT IS AN INSTRUMENTATION EARTHING AUDIT?",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          An Instrumentation Earthing Audit is a detailed, structured and
          end-to-end technical evaluation of the grounding architecture that
          supports instrumentation and control systems in industrial facilities.
          It traces the entire earthing path—from field instruments and cable
          shields, through junction boxes, marshalling cabinets, and DCS panels,
          up to system cabinets, control room earth buses, and finally the below
          ground instrumentation and protective earthing systems which are
          interconnected to the plant earth grid—verifying equipotential
          bonding, noise control, and safety compliance at every node against
          globally accepted standards.
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          Aligned with IEEE 1050-2004, IEEE 1100-2005, and IEC 61000-5-2, the
          audit combines precision measurements—such as shield loop current,
          millivolt drop, continuity, EM field intensity, and power
          quality—with structured visual inspection. The outcome is not just
          compliance verification, but a diagnostic insight into hidden risks
          like circulating currents, EMI susceptibility, and unsafe grounding
          practices—translated into actionable findings directly referenced to
          international standards.
        </p>
      </>
    ),
  },
  {
    label: "JEF APPROACH",
    title: "JEF APPROACH",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">
          JEF’s Instrumentation Earthing Audit covers 15 structured tests and
          inspections applied across panels, junction boxes, field instruments.
          The scope escalates logically: where shield loop current measurements
          at the panel level indicate a ground loop condition, the audit is
          extended to junction boxes and field assets to locate the source. It
          doesn’t end with measurements alone, we rectify the anomalies
          identified and also perform measurements to cross verify the quality
          of rectification not just by visual inspection but also check whether
          the measured values post rectification are within the acceptable
          limits prescribed in standards there by ensuring a foolproof system.
        </p>

        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify">The approach involves 3 phases</p>

        <ul className="list-disc space-y-5 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>Phase -1 – Audit and Identification of gaps / anomalies</li>
          <li>Phase-2 – Rectification of anomalies</li>
          <li>Phase -3 – Retesting after rectification.</li>
        </ul>
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