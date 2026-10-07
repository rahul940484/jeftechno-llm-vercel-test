"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
 
type Subsection = {
  tags?: string[];
  tagImages?: string[];
  tagDescriptions?: Array<React.ReactNode | undefined>;
};

type Page = {
  label: string;
  nav?: string;
  title: string;
  content: React.ReactElement<{ children?: React.ReactNode }>;
  image?: string;
  subsections?: Subsection[];
};

const pages: Page[] = [
  {
    label: "IMPORTANCE OF\nPOWER QUALITY\nSTUDIES",
    title: "IMPORTANCE OF POWER QUALITY STUDIES",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-normal text-white text-justify">
          Power Quality Studies are crucial for maintaining the integrity and
          performance of your electrical systems. They help in:
        </p>

        <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>
            Identifying potential power quality issues that can cause tripping,
            equipment failures and/or inefficiencies.
          </li>
          <li>
            Ensuring compliance with international standards such as IEEE 1159,
            IEEE 519, and IEC 61000.
          </li>
          <li>
            Reducing operational costs by preventing equipment damage and
            minimizing downtime.
          </li>
        </ul>
      </>
    ),
  },
  {
    label: "REPORTS AND ANALYSIS",
    title: "DETAILED STUDY REPORTS AND ANALYSIS",
    content: (
      <>
        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-normal text-white text-justify">Our detailed reports include:</p>

        <ul className="list-disc space-y-3 pl-5 text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-relaxed text-white">
          <li>
            Clear documentation of power quality measurements, observations &
            Analysis.
          </li>
          <li>Summary of compliance with relevant standards.</li>
          <li>
            Actionable recommendations for mitigating identified power quality
            issues.
          </li>
        </ul>
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
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-200 flex flex-col">
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
                        className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-normal text-white text-justify"
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
                className="w-full max-w-82.5 lg:max-w-90 object-contain mx-auto lg:mx-0"
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
                    className="mt-5 w-full max-w-130 object-contain"
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
                      className="mt-5 whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-normal text-white"
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
                    <div className="w-full h-0.5 bg-[#d4d0c8] mb-3 relative z-10">
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
                      {tab.nav ?? tab.label}
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