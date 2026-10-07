"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "GROUNDING FUNDAMENTALS - Resistance vs Impedance",
    nav: "GROUNDING\nFUNDAMENTALS\n- Resistance vs \nImpedance",
    title: "GROUNDING FUNDAMENTALS - Resistance vs Impedance",
    content: (
      <>
      <p>Grounding performance is often misunderstood, with most focus placed 
        on achieving low resistance values. While resistance is important, it 
        is only one part of the equation. Impedance plays an equally critical 
        role in determining how the system behaves during faults.
      </p>        
      <br />

      <p>Resistance refers to the ability of the grounding system to dissipate 
        current into the earth. Impedance, on the other hand, represents the 
        total opposition to current flow, including inductive and reactive components. 
        During fault conditions, impedance determines the magnitude of fault current.
      </p>
      {/* <br />
        <p>
          Low resistance alone does not define a good earthing system — impedance
          determines how the system behaves during actual fault conditions.
        </p>
        <br />
        <p>
          High loop impedance limits fault current, preventing protective devices
          from detecting and clearing faults — the root cause of prolonged fault
          events, equipment damage, fire, and electric shock.
        </p> */}
      </>
    ),
    subsections: null,
  },
  {
    label: "WHY CONVENTIONAL EARTHING SYSTEMS FAIL",
    nav: "WHY CONVENTIONAL\nEARTHING SYSTEMS\nFAIL",
    title: "WHY CONVENTIONAL EARTHING SYSTEMS FAIL",
    content: (
      <>
        <p>
          • Use of salt and charcoal backfill compound introduces long-term issues like corrosion and performance degradation, because the salt dissolves and leaches into the soil, reducing conductivity and increasing resistance. This leads to a gradual decline in performance.
        </p>
        <br />
        <p>
          • Conventional systems require regular watering to maintain performance
          — impractical in areas with limited water availability
        </p>
        <br />
        <p>
          • Lack of standardisation in materials and installation produces
          inconsistent performance across installations
        </p>
        <br />
        <p>
          • Effective service life: 3–5 years — resulting in high lifecycle cost
          despite low initial investment
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "GROUNDING – SOIL BEHAVIOUR",
    nav: "GROUNDING – SOIL\nBEHAVIOUR",
    title: "GROUNDING – SOIL BEHAVIOUR",
    content: (
      <>
        <p>
          The performance of grounding systems is heavily influenced 
          by the properties of the surrounding soil. 
        </p>
        <br />
        <p>
        A large portion of earth resistance is concentrated in a 
        small area around the electrode. Improving soil conductivity 
        near the electrode significantly reduces overall resistance. 
        Approximately 30–50% of total resistance lies within the first 
        75–100 mm of soil.
        </p>
        <br />
        <p>
        Soil resistivity varies based on moisture, temperature, and composition. 
        These variations must be considered during the design stage for reliable 
        performance.
        </p>
        <br />
        <p>
        Using scientific analysis of soil behaviour helps design efficient 
        grounding systems with optimal results and minimal resources.
        </p>

      </>
    ),
    image: "/Earthing-Grounding/image 25.png",
    subsections: null,
  },
  {
    label: "GROUNDING TYPES — AT A GLANCE",
    nav: "GROUNDING TYPES\n— AT A GLANCE",
    title: "GROUNDING TYPES — AT A GLANCE",
    content: (
      <>
        <p>
          • <span className="text-[#FF0000]">Conventional (Salt + Charcoal):</span>{" "}
          Electrolytic conduction, moisture-dependent, high corrosion, frequent
          maintenance, 3–5 year life — high lifecycle cost
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Chemical (Bentonite):</span>{" "}
          Electrolytic conduction, moisture-dependent, moderate corrosion,
          periodic maintenance, 5–7 year life — medium lifecycle cost
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">JEF Maintenance-Free (Carbon-Based):</span>{" "}
          Electronic conduction, moisture-independent, very low corrosion, zero
          maintenance, 15+ year life — low lifecycle cost
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "CARBON-BASED BACKFILL",
    nav: "CARBON-BASED\nBACKFILL",
    title: "CARBON-BASED BACKFILL — THE TECHNOLOGY DIFFERENCE",
    content: (
      <>
        <p>
          • Conducts electricity electronically, like a metal — not
          electrolytically. Zero moisture dependence
        </p>
        <br />
        <p>
          • Chemically stable: no leaching, no environmental contamination, no
          corrosion risk to the electrode
        </p>
        <br />
        <p>
          • Dimensionally stable: does not shrink or expand, maintaining
          consistent contact with the electrode throughout its service life
        </p>
        <br />
        <p>
          • Result: consistent, maintenance-free performance across all soil
          conditions for 15+ years
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["Grounding Types"],
        tagImages: ["/Earthing-Grounding/GorundingTypes.png"],
      },
    ],
  },
  {
    label: "ADVANTAGE OF COPPER BONDED EARTHING RODS",
    nav: "ADVANTAGE OF \nCOPPER BONDED\nEARTHING RODS",
    title: "ADVANTAGE OF COPPER BONDED EARTHING RODS",
    content: (
      <>
        <p>
          • High-tensile low-carbon steel core with molecularly bonded copper
          layer (100–250 microns) — combining mechanical strength with corrosion
          resistance
        </p>
        <br />
        <p>
          • Can be driven deep into difficult soils without damage — extendable
          using standard couplers
        </p>
        <br />
        <p>
          • Outperforms GI rods on corrosion resistance and lifespan; outperforms
          solid copper rods on strength and cost
        </p>
        <br />
        <p>
          • Tested to IEC 62561-2: coating thickness, adhesion, bend strength,
          tensile strength, and corrosion resistance all independently verified
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["Earth Rods – Detailed Comparison"],
        tagImages: ["/Earthing-Grounding/EarthRods.png"],
      },
    ],
  },
  { 
    label: "THE TECHNOLOGY ADVANTAGE CARBON-BASED BACKFILL",
    nav: "THE TECHNOLOGY ADVANTAGE-\nCARBON-BASED\nBACKFILL",
    title:
      "THE TECHNOLOGY ADVANTAGE CARBON-BASED BACKFILL",
    content: (
      <>
        <p>
          • Conducts electricity electronically, like a metal — not electrolytically. Zero moisture dependence.
        </p>
        <br />
        <p>
          • Chemically stable: no leaching, no environmental contamination, no corrosion risk to the electrode.
        </p>
        <br />
        <p>
          • Dimensionally stable: does not shrink or expand, maintaining consistent contact with the electrode throughout its service life.
        </p>
        <br />
        <p>
          • Result: consistent, maintenance-free performance across all soil conditions for 15+ years.
        </p>
      </>
    )
  },
  {
    label: "MAINTENANCE-FREE EARTHING SYSTEM",
    nav: "MAINTENANCE-\nFREE EARTHING\nSYSTEM",
    title:
      "JEF MAINTENANCE-FREE EARTHING SYSTEM (COPPER BONDED ROD + CARBON BACKFILL)",
    content: (
      <>
        <p>
          • Engineered combination of copper bonded electrode and carbon-based
          conductive backfill — designed for zero maintenance over the
          installation&apos;s full service life.
        </p>
        <br />
        <p>
          • Up to 30–50% of total earth resistance is concentrated within the
          first 75–100 mm of soil around the electrode — improving conductivity
          at this critical zone using JEF&apos;s specially formulated carbon based
          backfill “JEF ECOSAFE” has the greatest impact on system performance
        </p>
        <br />
        <p>
          • Performs consistently across a wide range of soil resistivity
          conditions — including dry, high-resistivity, and chemically
          aggressive soils
        </p>
        <br />
        <p>
          • Lower total cost of ownership than conventional systems when
          evaluated over a 10–15 year lifecycle
        </p>
      </>
    ),
    subsections: [
      {
        tags: ["TESTING AND QUALITY ASSURANCE", "DESIGN ENGINEERING"],
        tagDescriptions: [
          "• Earth rods tested as per IEC 62561-2: they undergo mechanical, electrical, and environmental tests like coating thickness, adhesion, bend, tensile strength, and accelerated corrosion tests to ensure long-term reliability.\n\n• Backfill compounds tested as per IEC 62561-7: they undergo a series of tests that comprise of corrosion impact, leach test, sulphur content, resistivity, and environmental compliance test to ensure high performance, long life, and environmental safety.",
          
          "• At JEF Earthing systems are designed using the CDEGS software to meet IEEE 80 and IS 3043 safety requirements.\n\n• In addition CDEGS also helps in incorporating soil conditions, calculating step and touch potentials, and optimising grid geometry at the design stage itself.\n\n• Simulation identifies potential deficiencies before excavation — reducing project risk and ensuring the installed system performs as designed",
        ],
      },
    ],
  },
  {
    label: "APPLICATIONS OF EARTHING SOLUTIONS",
    nav: "APPLICATIONS OF EARTHING SOLUTIONS",
    title: "APPLICATIONS OF \nEARTHING SOLUTIONS",
    content: (
      <>
        <p>
          JEF Grounding Systems are suitable for a wide range of segments:
        </p>
                <br />
        <p>
          • Solar and wind farms — reliable performance in dry, high-resistivity
          soils where conventional systems degrade rapidly
        </p>
        <br />
        <p>
          • Substations — In substations, they ensure safety under high fault current 
          conditions, protecting both equipment and personnel
        </p>
        <br />
        <p>
          • Industrial process plants and manufacturing facilities — stable earthing for sensitive, high-load equipment and control systems to help ensure uninterrupted operations.
        </p>
        <br />
        <p>
          • Commercial buildings, data centres, hospitals, and infrastructure — ensure safety, regulatory compliance, personnel, and equipment protection.
        </p>
      </>
    ),
    subsections: null,
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