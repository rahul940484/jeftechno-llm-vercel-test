"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages: any[] = [
  {
    label: "IMPORTANCE OF ROOT CAUSE ANALYSIS",
    nav: "IMPORTANCE OF ROOT\nCAUSE ANALYSIS",
    title: "IMPORTANCE OF ROOT CAUSE ANALYSIS",
    content: (
      <>
        <p>
          Recurring electrical faults, inefficiencies, or system breakdowns can
          disrupt operations, increase downtime, and escalate maintenance costs.
          RCA provides a systematic approach to uncover the root causes of these
          issues, ensuring long-term reliability and performance.
        </p>
        <br />
        <p>Root Cause Analysis is crucial for:</p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Minimizing Downtime</span> -
          Identifying and addressing the root causes of failures prevents
          disruptions in operations.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Enhancing Safety</span> - Reducing
          risks associated with electrical faults and ensuring a safer working
          environment.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Cost Savings</span> - Preventing
          recurring problems reduces repair and maintenance expenses.
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
    label: "JEF'S ROOT CAUSE ANALYSIS SERVICES",
    nav: "JEF'S ROOT CAUSE\nANALYSIS SERVICES",
    title: "JEF'S ROOT CAUSE ANALYSIS SERVICES",

    subsections: [
      {
        tags: [
          "Fault Investigation and Analysis",
          "Electrical System Performance Evaluation",
          "Grounding and Lightning Protection System Assessment",
          "Power Quality Analysis",
          "Failure Mode Effect Analysis (FMEA)",
          "Corrective and Preventive Action Plans",
        ],
        tagDescriptions: [
          "• Detailed investigation of system failures, including equipment malfunctions, grounding issues, and power disruptions.\n\n• Comprehensive data collection and analysis to trace the origins of faults.",
          "• Evaluation of system components such as transformers, switchgear, and cables to assess performance.\n\n• Identification of weaknesses and inefficiencies affecting system reliability.",
          "• Analysis of grounding and lightning protection systems to identify vulnerabilities and improve safety.\n\n• Recommendations for optimizing protection systems to prevent recurring issues.",
          "• Investigating power quality issues, including voltage sags, harmonics, and transients, to determine their root causes.\n\n• Providing solutions to enhance power stability and prevent future disruptions.",
          "• Systematic assessment of potential failure modes and their effects on system performance.\n\n• Implementing proactive measures to mitigate risks and improve system resilience.",
          "• Development of detailed action plans to address identified root causes.\n\n• Implementation of preventive measures to avoid future occurrences of similar issues.",
        ],
      },
    ],
  },
  {
    label: "COMPLIANCE AND STANDARDS",
    nav: "COMPLIANCE AND\nSTANDARDS",
    title: "COMPLIANCE AND STANDARDS",
    content: (
      <>
        <p>
          JEF ensures that RCA services align with international standards and
          best practices, including:
        </p>
        <br />
        <p>• IEC Standards for system reliability and safety.</p>
        <br />
        <p>• IEEE Guidelines for electrical fault analysis.</p>
        <br />
        <p>• Regional and industry-specific regulations.</p>
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