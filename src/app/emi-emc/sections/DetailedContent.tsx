"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "ABOUT EMI EMC",
    nav: "ABOUT EMI EMC",
    title: "ABOUT EMI EMC",
    subsections : null,
    image : null,
    content: (
      <>
        <p>
          Electromagnetic interference (EMI) can disrupt the performance of electrical systems, leading to operational inefficiencies, equipment malfunctions, and potential safety hazards. EMC ensures that all electrical components within a system operate without affecting or being affected by electromagnetic disturbances. Effective EMI/EMC management is crucial for:
        </p>
        <br />
        <p>Effective EMI/EMC management is crucial for:</p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Ensuring Operational Continuity</span> -
          Avoiding disruptions caused by electromagnetic interference.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Protecting Sensitive Equipment</span> - 
          Preventing damage to devices due to unregulated electromagnetic emissions.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Compliance with Standards</span> - 
          Compliance with Standards: Adhering to international regulations such as IEC 61000 and IEEE 299.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#FF0000]">
            Optimizing System Performance
          </span>{" "}
          - Improving the efficiency and reliability of electrical systems.
        </p>
      </>
    ),
  },
  {
    label: "COMPLIANCE AND STANDARDS",
    nav: "COMPLIANCE\nAND STANDARDS",
    title: "COMPLIANCE AND STANDARDS",
    subsections : null,
    image : null,

        content: (
      <>
        <br/>
        <p>JEF ensures that all EMI/EMC studies meet or exceed international standards, including:</p>
        <br />
        <p>
          • IEC 61000 (Electromagnetic Compatibility Standards).
        </p>
        <br />
        <p>
          • IEEE 299 (Shielding Effectiveness of Enclosures).
        </p>
        <br />
        <p>
          • MIL-STD-461 (Control of Electromagnetic Interference).
        </p>
        <br />
        <p>
          • Local regulatory guidelines specific to project locations.
        </p>
      </>
    ),

    // subsections: [
    //   {
    //     tags: [
    //       "Fault Investigation and Analysis",
    //       "Electrical System Performance Evaluation",
    //       "Grounding and Lightning Protection System Assessment",
    //       "Power Quality Analysis",
    //       "Failure Mode Effect Analysis (FMEA)",
    //       "Corrective and Preventive Action Plans",
    //     ],
    //     tagDescriptions: [
    //       "• Detailed investigation of system failures, including equipment malfunctions, grounding issues, and power disruptions.\n\n• Comprehensive data collection and analysis to trace the origins of faults.",
    //       "• Evaluation of system components such as transformers, switchgear, and cables to assess performance.\n\n• Identification of weaknesses and inefficiencies affecting system reliability.",
    //       "• Analysis of grounding and lightning protection systems to identify vulnerabilities and improve safety.\n\n• Recommendations for optimizing protection systems to prevent recurring issues.",
    //       "• Investigating power quality issues, including voltage sags, harmonics, and transients, to determine their root causes.\n\n• Providing solutions to enhance power stability and prevent future disruptions.",
    //       "• Systematic assessment of potential failure modes and their effects on system performance.\n\n• Implementing proactive measures to mitigate risks and improve system resilience.",
    //       "• Development of detailed action plans to address identified root causes.\n\n• Implementation of preventive measures to avoid future occurrences of similar issues.",
    //     ],
    //   },
    // ],
  },
  {
    label: "INDUSTRY APPLICATIONS",
    nav: "INDUSTRY\nAPPLICATIONS",
    title: "INDUSTRY APPLICATIONS",
    subsections : null,
    image : null,
    content: (
      <>
        <p>Our EMI/EMC studies are tailored to meet the needs of various industries:</p>
        <br />
        <p>• Oil & Gas</p>
        <br />
        <p>• Railways</p>
        <br />
        <p>• Manufacturing</p>
        <br />
        <p>• Healthcare</p>
        <br />
        <p>• Data Centres and many more...</p>
        <br />
        <p>Get in touch with us to know more about how we can help address the concerns for your specific application.</p>
      </>
    ),
  },
  {
    label: "ABOUT AC INTERFERENCE STUDY",
    nav: "ABOUT AC\nINTERFERENCE STUDY",
    title: "ABOUT AC INTERFERENCE STUDY",
    subsections : null,
    image: null,
    content: (
      <>
        <p>
          We provide detailed software model and study for Interference to Pipeline due to Power Transmission Lines & Cables.
        </p>
        <br />
        <p>We Analyse</p>
        <br />
        <p>• Touch Potentials (Safety)</p>
        <br />
        <p>• Current Density (AC Corrosion)</p>
        <br />
        <p>• Coating Stress Voltage (Coating Damage) and more…</p>
      </>
    ),
  },
  {
    label: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    nav: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    title: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    subsections: null,
    image: null,
    content: (
      <>
        <p>
          Applicable Standards/Codes (Page no.250/360 IOCL Tender Document)
        </p>
        <br />
        <p>• NACE SP 0104, The use of Coupons for Cathodic Protection Monitoring Applications</p>
        <br />
        <p>• IS 8062–Part II - Code of Practice for Cathodic Protection of Steel Structures - Underground Pipelines</p>
        <br />
        <p>• NACE SP 0169-Control of External Corrosion on Underground or Submerged Metallic Piping Systems</p>
        <br />
        <p>• ISO 18086 - Corrosion of Metals and Alloys - Determination of AC Corrosion - Protection Criteria.</p>
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

            {/* {page.image && (
              <motion.img
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={page.image}
                alt={page.title}
                className="w-full max-w-[330px] lg:max-w-[360px] object-contain mx-auto lg:mx-0"
              />
            )} */}
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