"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Subsection = {
  tags?: string[];
  tagImages?: string[];
  tagDescriptions?: string[];
};

type Page = {
  label: string;
  nav: string;
  title: string;
  content?: React.ReactNode;
  leftImage?: string;
  rightImage?: string;
  image?: string;
  tableImage?: string;
  subsections?: Subsection[];
};

const pages: Page[] = [
  {
    label: "NIMBUS®",
    nav: "NIMBUS®",
    title: "Capture system - Air terminal",
    content: (
      <>
        <p>NIMBUS® - Lightning rod with streaming device (ESE).</p>
        <br />
        <p>Nimbus® is the series of new-generation lightning rods with electronic early streaming emission (ESE). Radius of protection up to 100m based on emission times of 15 μs, 30 μs, 45 μs and 60 μs.</p>
        <br />
        <p>•	Tested with lightning currents up to 200 kA (10/350 μs)</p>
        <br />
        <p>•	Highest quality: AISI 316 stainless steel and non-expendable components.</p>
        <br />
        <p>•	Tested and certified by independent laboratories.</p>
        <br />
        <p>•	Extended 10-year warranty.</p>
        <br />
        <p>•	Nimbus®, which protect more than 45,000 installations worldwide, a fact that bears witness to its performance, quality and warranty and our service.</p>
        <br />
        <p>•	The Nimbus® lightning rods exceed the requirements of the new version of standard NFC 17-102 v2011, with the goal of making them more robust, without sacrificing their compact size and with a significant weight reduction.</p>
        <br />
      </>
    ),
    leftImage: "/lps/Image 46.png",
    rightImage: "/lps/Image 45.png",
  },  {
    label: "ACTIVE LIGHTNING PROTECTION SYSTEM",
    nav: "ACTIVE LIGHTNING\nPROTECTION SYSTEM",
    title: "ACTIVE LIGHTNING PROTECTION SYSTEM",
    content: (
      <>
        <p>NLP 2200 – ESE LIGHTNING ROD</p>
        <br />
        <p>
          Superior quality ESE lightning rod according to NFC 17-102 for up to
          120m protection radius.
        </p>
        <br />
        <p>NLP 2200 tested quality at your service by Cirprotech.</p>
      </>
    ),
    leftImage: "/lps/Image 46.png",
    rightImage: "/lps/Image 45.png",
  },
  {
    label: "ESE TECHNOLOGY",
    nav: "ESE TECHNOLOGY",
    title: "ESE TECHNOLOGY",
    content: (
      <>
        <p>
          ESE-Early Streamer Emission technology uses the atmospheric gradient to
          generate ionization which can subsequently increase the protected
          volume. These facilities the protection of large area, simplifying and
          reducing material and installation costs.
        </p>
        <br />
        <p>
          • Savings of over 30% compared to conventional Lightning Protection
          System.
        </p>
        <br />
        <p>• Easy to install and maintain.</p>
      </>
    ),
  },
  {
    label: "WHY NLP 2200?",
    nav: "WHY NLP 2200?",
    title: "WHY NLP 2200?",
    content: (
      <>
        <p>
          • The new 60 μs early streamer emission lightning rod designed by
          Cirprotech.
        </p>
        <br />
        <p>• Sequentially type-tested according to NFC 17-102 standards.</p>
        <br />
        <p>Protection Radius According to NFC 17-102:</p>
      </>
    ),
    tableImage: "/ESE/nlp-2200-protection-radius-table.png",
  },
  {
    label: "FEATURES",
    nav: "FEATURES",
    title: "FEATURES",
    content: (
      <>
        <p>• IP67 Enclosure: Fully dust and waterproof.</p>
        <br />
        <p>
          • Designed and manufactured in Spain with highest quality controls.
        </p>
        <br />
        <p>
          • Stainless Steel (AISI 316 Grade): Superior quality and corrosion
          resistant.
        </p>
        <br />
        <p>
          • According to standards NFC 17-102, Product Complies with the newest
          ESE standards.
        </p>
      </>
    ),
  },
];

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState<Record<number, number | undefined>>({});

  const handleTabClick = (index: number) => {
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