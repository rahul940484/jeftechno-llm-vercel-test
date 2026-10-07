"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pages = [
  {
    label: "WHAT WE DO",
    nav: "WHAT WE DO",
    title: "WHAT WE DO",
    subsections : null,
    image: null,
    content: (
      <>
        <p>
          JEF delivers two complementary categories of power system analysis,
          covering both system-wide behaviour and high-frequency transient
          phenomena:
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Power System Studies</span> -
          Steady-state and dynamic analysis using ETAP, PSS®E, DIgSILENT
          PowerFactory and SKM for Load flow, short circuit, Motor starting,
          Harmonic analysis, Protection coordination, Arc flash assessment,
          Transient stability & Load shedding studies
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Electromagnetic Transient and Insulation Coordination Studies
          </span>{" "}
          - High-fidelity time-domain simulation using PSCAD/EMTDC: Switching
          overvoltages, Temporary Overvoltages (TOV), Transient Recovery Voltage
          (TRV), Fast Transients (FTO / VFTO), Ferroresonance, Transformer
          energisation.
        </p>
      </>
    ),
  },
  {
    label: "POWER SYSTEM STUDIES",
    nav: "POWER SYSTEM\nSTUDIES",
    title: "POWER SYSTEM STUDIES",
    subsections: null,
    image: null,
    content: (
      <>
        <p>
          JEF has the capability to deliver the following studies using software like ETAP, DIgSILENT, PowerFactory, or SKM Power Tools as per applicable IEEE and IEC standards.
        </p>
        <br />
        <p>• Load Flow Study (IEEE 399 & 3002.2)</p>
        <p>• Short Circuit Study (IEC 60909 and IEEE 551 & 3002.3)</p>
        <p>• Motor Acceleration Study (IEEE 399 & 3002.7)</p>
        <p>• Harmonic Analysis (IEEE 3002.8 / IEEE 519)</p>
        <p>• Transient and Dynamic Stability Study (IEEE 1110 & 421.5)</p>
        <p>• Protection and Coordination Study (IEEE 242 & 3004 series)</p>
        <p>• Arc Flash Study (IEEE 1584 / NFPA 70E)</p>
        <p>• Load Shedding Study</p>
        <p>• Reactive Power Compensation</p>
      </>
    ),
  },
  {
    label: "ELECTROMAGNETIC TRANSIENT AND IC STUDIES'",
    nav: "ELECTROMAGNETIC\nTRANSIENT AND IC STUDIES",
    title: "ELECTROMAGNETIC TRANSIENT AND INSULATION COORDINATION STUDIES",
    subsections: null,
    image: null,
    content: (
      <>
        <p>
          JEF has the capability to deliver time-domain electromagnetic transient simulation for high-voltage GIS
          and AIS installations — applied across HV systems using PSCAD/EMTDC.
        </p>
        <br />
        <p>• Insulation Coordination (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• Switching Overvoltage (SOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• Temporary Overvoltage (TOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
        <p>• TRV and RRRV (IEC 62271-100 / IEEE C37.011)</p>
        <p>• Transformer Energisation (CIGRE C4.307)</p>
        <p>• Ferroresonance (CIGRE WG C4.307)</p>
        <p>• Very Fast Transient Overvoltage (VFTO) (IEC 60071, IEC 62271-203, IEC 60060)</p>
        <p>• Lightning Impulse Overvoltage (LIOV) (IEC 60071 - 1&2 and IEC 60099-4)</p>
      </>
    ),
  },
  {
    label: "OUR SOFTWARE CAPABILITY",
    nav: "OUR SOFTWARE\nCAPABILITY",
    title: "OUR SOFTWARE CAPABILITY",
    subsections: null,
    image: null,
    content: (
      <>
        <p>
          JEF holds licences across all major power engineering analysis
          platforms. The choice of software is determined by the study requirement
          and client preference — never by a limitation in our toolkit.
        </p>
        <br />
        <p>• ETAP</p>
        <p>• PSCAD / EMTDC</p>
        <p>• PSS®E</p>
        <p>• DIgSILENT Power Factory</p>
        <p>• SKM Power Tools</p>
        <p>• DSA Tools</p>
      </>
    ),
  },
  {
    label: "THE PROJECTS WE WORK ON",
    nav: "PROJECTS WE WORK ON",
    title: "THE PROJECTS WE WORK ON",
    subsections: null,
    image: null,
    content: (
      <>
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Greenfield Offshore Platform Developments
          </span>{" "}
          - Multi-platform electrical system studies — 132kV GIS through to 415V
          distribution, subsea cable systems, and full insulation coordination
          across all voltage levels.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Long Term Development Plan Expansions
          </span>{" "}
          - Power system studies for major oil and gas production expansion —
          integrating new facilities into live networks, updating protection
          coordination, and managing fault level and stability impacts.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Artificial Island Power Systems
          </span>{" "}
          - 132kV/33kV/6.6kV network expansion, CTG integration, grid
          interconnection, insulation coordination, and switching transient
          analysis for large-scale island power infrastructure.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Process Plant and Industrial Facility Studies
          </span>{" "}
          - Periodic power system studies for operating refineries, petrochemical
          plants, manufacturing installations, and process facilities — arc flash,
          relay coordination, harmonic surveys, and short circuit reviews.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Existing System Tie-Ins and Modifications
          </span>{" "}
          - Fault level, protection coordination, and voltage profile impact
          assessment for new facility tie-ins, with relay setting revision across
          the affected network.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">EPC and EPCC Project Support</span>{" "}
          - Embedded study delivery for EPC contractors on oil and gas,
          petrochemical, and process industry projects — to schedule, in
          coordination with vendors and owner-operator engineering teams.
        </p>
      </>
    ),
  },
];





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState<Record<number, number | undefined>>({});

  const handleTabClick = (index) => {
    if (index === activePage) return;
    setActivePage(index);
    setActiveTags({});
  };

  const handlePrevPage = () => {
    setActivePage((prev) => (prev - 1 + pages.length) % pages.length);
    setActiveTags({});
  };

  const handleNextPage = () => {
    setActivePage((prev) => (prev + 1) % pages.length);
    setActiveTags({});
  };

  const page = pages[activePage];

  return (
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[800px] flex flex-col">
      <div className="section-container flex flex-col flex-1 gap-6 md:gap-8">
        <div className="flex items-center justify-between gap-4">
          <motion.h2
            key={`title-${activePage}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#FF0000] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] uppercase"
          >
            {page.title}
          </motion.h2>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handlePrevPage}
              aria-label="Previous tab"
              className="rounded-full h-12 w-12 border border-[#d4d0c8] text-[#d4d0c8] text-[20px] md:text-[14px] tracking-[1px] uppercase hover:text-white hover:border-white transition-colors duration-300"
            >
              ←
            </button>
            <button
              onClick={handleNextPage}
              aria-label="Next tab"
              className="rounded-full h-12 w-12 border border-[#FF0000] text-[#FF0000] text-[18px] md:text-[14px] tracking-[1px] uppercase hover:text-white hover:border-white transition-colors duration-300"
            >
              →
            </button>
          </div>
        </div>

        <div className="w-full relative z-20 flex-1">
          <motion.div
            key={`content-${activePage}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`flex gap-8 ${
              page.image ? "flex-col lg:flex-row lg:items-start" : "flex-col"
            }`}
          >
            {/* Added a safety layout check if content exists */}
            {page.content && (
              <div className="flex flex-col flex-1">
                {React.Children.map(page.content?.props?.children, (child, i) => {
                  if (React.isValidElement(child) && child.type === "p") {
                    const element = child as React.ReactElement<{ children?: React.ReactNode }>;
                    return (
                      <p
                        key={i}
                        className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify"
                      >
                        {element.props.children}
                      </p>
                    );
                  }
                  return child;
                })}
              </div>
            )}

            {page.image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={page.image}
                alt={page.title}
                className="w-full max-w-[330px] lg:max-w-[360px] object-contain mx-auto lg:mx-0"
              />
            )}
          </motion.div>

          {page.subsections?.map((sub, si) => (
            <div key={si} className="mt-8">
              {sub.tags && (
                <div className="flex flex-wrap gap-x-8 gap-y-4 mb-5">
                  {sub.tags.map((tag, ti) => (
                    <button
                      key={ti}
                      onClick={() =>
                        setActiveTags((prev) => ({
                          ...prev,
                          [si]: prev[si] === ti ? undefined : ti,
                        }))
                      }
                      className="text-[#FF0000] text-[16px] md:text-[18px] lg:text-[20px] font-semibold underline underline-offset-4 text-left"
                    >
                      • {tag}
                    </button>
                  ))}
                </div>
              )}

              <AnimatePresence mode="wait">
                {activeTags[si] !== undefined && sub.tagImages?.[activeTags[si]] && (
                  <motion.img
                    key={`tag-img-${si}-${activeTags[si]}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    src={sub.tagImages[activeTags[si]]}
                    alt={sub.tags[activeTags[si]]}
                    className="mt-5 w-full max-w-[520px] object-contain"
                  />
                )}

                {activeTags[si] !== undefined &&
                  sub.tagDescriptions?.[activeTags[si]] && (
                    <motion.p
                      key={`tag-desc-${si}-${activeTags[si]}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 18 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="mt-5 whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white"
                    >
                      {sub.tagDescriptions[activeTags[si]]}
                    </motion.p>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom tab row layout */}
        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 overflow-hidden">
            {pages
              .slice(
                Math.min(
                  Math.max(activePage - 2, 0),
                  Math.max(pages.length - 5, 0)
                ),
                Math.min(
                  Math.max(activePage - 2, 0),
                  Math.max(pages.length - 5, 0)
                ) + 5
              )
              .map((tab, visibleIndex) => {
                const startIndex = Math.min(
                  Math.max(activePage - 2, 0),
                  Math.max(pages.length - 5, 0)
                );

                const realIndex = startIndex + visibleIndex;
                const isCurrent = activePage === realIndex;

                return (
                  <button
                    key={realIndex}
                    onClick={() => handleTabClick(realIndex)}
                    className="bg-none border-none cursor-pointer flex flex-col items-start w-full group"
                  >
                    <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[#FF0000]"
                        animate={{ width: isCurrent ? "100%" : "0%" }}
                        transition={{ ease: "linear" }}
                      />
                    </div>

                    <span
                      className={`text-[12px] md:text-[18px] tracking-[1px] md:tracking-[2.5px] font-medium uppercase mt-1 transition-all duration-300 text-left whitespace-pre-line ${
                        isCurrent
                          ? "text-[#FF0000]"
                          : "text-[#d4d0c8] group-hover:text-white"
                      }`}
                    >
                      {tab.nav}
                    </span>
                  </button>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;