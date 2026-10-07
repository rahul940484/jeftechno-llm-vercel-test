"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// interface TagDescription {
//   title: string;
//   description: string;
// }

// interface Subsection {
//   heading: string;
//   body: string;
//   tags?: string[];
//   layout: string;
//   tagDescriptions?: TagDescription[];
//   tagImages?: string[];
// }

// interface PageItem {
//   label: string;
//   nav: string;
//   title: string;
//   content: React.ReactNode;
//   subsections: Subsection[] | null;
//   image?: string; // Made optional to prevent property access compilation errors
// }

const pages = [
  {
    label: "POWER SYSTEM STUDIES",
    nav: "POWER SYSTEM\nSTUDIES",
    title: "POWER SYSTEM STUDIES",
    subsections: null,
    content: (
      <>
        <p>
          We offer a very wide and comprehensive range of Power System Studies
          for Renewable Energy applications including Solar PV, WIND, BESS,
          Hybrid & Green hydrogen plants & Micro grids.
        </p>
        <br />
        <p>
          With experience in Grid codes of several countries, we bring
          comprehensive knowledge & expertise.
        </p>
        <br />
        <p>
          We have multiple licences & expertise in using all major software
          like:
        </p>
        <br />
        <p>• PSSE</p>
        <p>• PSCAD</p>
        <p>• DIG SILENT</p>
        <p>• ETAP</p>
        <p>• EMTP RV</p>
        <p>• CDEGS</p>
        <br />
        <p>
          We have the ability to study any possible steady state, dynamic, EMT &
          Harmonic issues, in a new or existing plant.
        </p>
        <br />
        <p>
          Over the last 30 years, JEF has been synonymous with going the
          proverbial “EXTRA MILE” to ensure meeting the objectives of the project
          including technical aspects & timely completion.
        </p>
      </>
    ),
  },
  {
    label: "LIST OF STUDIES FOR RENEWABLE ENERGY",
    nav: "LIST OF STUDIES FOR\nRENEWABLE ENERGY",
    title: "LIST OF STUDIES FOR RENEWABLE ENERGY",
    subsections: null,
    content: (
      <>
        <p>
          {" "}
          <span className="text-[#FF0000] font-bold tracking-[1px]">
            GRID INTEGRATION STUDIES (FOR SOLAR, WIND, BESS, HYBRID, GREEN
            HYDROGEN)
          </span>
        </p>
        <br />
        <p>• Steady State Analysis</p>
        <p>• Reactive Power Capability Analysis</p>
        <p>• Transient Studies</p>
        <p>• Grid Code Compliance Studies</p>
        <p>• Dynamic grid impact studies</p>
        <p>• Dynamic Model Acceptance test</p>
        <p>• Power Quality Analysis</p>
        <p>• Insulation Co-ordination Studies</p>
        <p>• Protection & Relay Co-ordination Studies</p>
        <p>• AC/DC Arc flash studies</p>
        <p>• Model Validation test</p>
      </>
    ),
  },
    {
    label: "WHY CHOOSE US?",
    nav: "WHY CHOOSE US?",
    title: "WHY CHOOSE US?",
    subsections: null,
    content: (
      <>
        <p>
          Technology and software independent. ETAP, PSCAD/EMTDC, PSS®E, DIgSILENT PowerFactory, SKM, and other leading platforms—allowing us to recommend the right engineering solution without being limited by software.
          <br/><br/>
          Renewable integration expertise. Utility-scale solar PV, wind farms, Battery Energy Storage Systems (BESS), hybrid renewable plants, microgrids, and grid interconnections. We understand inverter-based resources, grid codes, and the operational challenges of modern renewable power systems.
          <br/><br/>
          Grid-code compliant deliverables. Every study is aligned with applicable utility requirements and international standards, ensuring traceable, audit-ready documentation for grid approvals and project execution.
          <br/><br/>
          Engineering beyond compliance. We don't just validate compliance—we identify network constraints, stability risks, protection coordination issues, and future expansion opportunities, enabling informed decisions before commissioning and throughout the asset lifecycle.

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
    (page as any).image ? "flex-col lg:flex-row lg:items-start" : "flex-col"
  }`}
>
  {page.content && (
    <div className="flex flex-col flex-1">
      {React.Children.map((page.content as any)?.props?.children, (child, i) => {
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

  {(page as any).image && (
    <motion.img
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      src={(page as any).image}
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
                  {activeTags[si] !== undefined && (sub as any).tagImages?.[activeTags[si]!] && (
                    <motion.img
                      key={`tag-img-${si}-${activeTags[si]}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 18 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      src={(sub as any).tagImages[activeTags[si]!]}
                      alt={sub.tags?.[activeTags[si]!]}
                      className="mt-5 w-full max-w-[520px] object-contain"
                    />
                  )}

                  {activeTags[si] !== undefined &&
                    sub.tagDescriptions?.[activeTags[si]!] && (
                      <motion.p
                        key={`tag-desc-${si}-${activeTags[si]}`}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 18 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="mt-5 whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white"
                      >
                        {sub.tagDescriptions[activeTags[si]!].description}
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