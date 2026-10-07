"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";



const pages = [
  {
    label: "THE SURGE THREAT",
    nav: "THE SURGE THREAT",
    title: "THE SURGE THREAT",
    content: (
      <>
        <p>
          Surge Protective Devices address the threat that travels through
          electrical, signal, and data cables into the interior of the building —
          both during lightning events and from switching transients generated
          within the facility&apos;s own electrical network.
        </p>
        <br />
        <p>
          Lightning is one source of transient overvoltages in an industrial or
          commercial facility. A significant proportion of damaging surges
          originate within the building itself — from motor starting and stopping,
          transformer switching, capacitor bank operations, and variable speed
          drive activity. These internally generated events are typically lower
          in voltage than a direct lightning-related surge, but they repeat far
          more frequently, and the cumulative effect on insulation systems and
          electronic components can significantly reduce equipment service life
          even where no single event causes visible damage.
        </p>
        <br />
        <p>
          Surge Protective Devices are required to address both sources. An
          external lightning protection system manages the direct strike. It does
          not eliminate transient overvoltages induced on cables by nearby
          lightning events, nor does it affect internally generated switching
          surges.
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "WHY STANDARD PROTECTIVE DEVICES CANNOT SUBSTITUTE FOR SPDS",
    nav: "WHY STANDARD\nPROTECTIVE DEVICES\nCANNOT",
    title: "WHY STANDARD PROTECTIVE DEVICES CANNOT SUBSTITUTE FOR SPDS",
    content: (
      <>
        <p>
          Fuses, miniature circuit breakers (MCBs), earth leakage circuit
          breakers, and similar devices operate by detecting overcurrent
          conditions that develop over timescales measured in milliseconds. A
          transient overvoltage from a lightning event or switching operation
          rises to its peak and dissipates in a time measured in microseconds —
          several orders of magnitude faster than the response time of a
          current-operated protective device.
          <br /><br />
          The surge passes through the
          circuit and reaches the connected equipment before any current-sensing
          protective device has begun to respond. SPDs are designed specifically
          for this threat: they detect and respond to voltage excursions at the
          speed at which those excursions actually occur.
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "LIGHTNING PROTECTION ZONE FRAMEWORK",
    nav: "LIGHTNING\nPROTECTION ZONE\nFRAMEWORK",
    title: "THE LIGHTNING PROTECTION ZONE FRAMEWORK",
    content: (
      <>
        <p>
          The Lightning Protection Zone (LPZ) concept, described in IEC 62305-4,
          provides the organising framework for internal lightning protection. It
          divides the volume of a structure — and the space around it — into
          zones defined by the level of lightning electromagnetic threat in each
          zone. Protection measures at the boundary between adjacent zones
          progressively reduce the threat level as you move further into the
          building.
        </p>
      </>
    ),
    subsections: [
      {
        heading: "",
        body:
          "The practical consequence of this framework is that protection at the main distribution board alone is not sufficient for a facility containing sensitive electronic equipment. Each zone boundary requires its own appropriately rated SPD, and the cascade of Type 1, Type 2, and Type 3 devices is the mechanism by which residual surge energy at each level is brought within the immunity threshold of the equipment in that zone.",
        tags: ["LPZ 0A", "LPZ 0B", "LPZ 1", "LPZ 2 and above"],
        layout: "col",
        tagDescriptions: [
          {
            title: "LPZ 0A",
            description:
              "The space outside the structure where a direct lightning strike may occur. Both the full direct strike current and the complete unattenuated electromagnetic field of the lightning channel are present. Air termination rods and conductors are located in this zone.",
          },
          {
            title: "LPZ 0B",
            description:
              "The space outside or at the outer boundary of the structure that is protected from direct strike by the air termination, but in which the full lightning electromagnetic pulse is still present.",
          },
          {
            title: "LPZ 1",
            description:
              "The interior of the structure beyond the building envelope. The threat from partial lightning current entering via external cables is addressed by Type 1 SPDs at the LPZ 0 / LPZ 1 boundary. The electromagnetic field is attenuated by the building structure.",
          },
          {
            title: "LPZ 2 and above",
            description:
              "Further zones created within the building by local shielding — screened rooms, metallic enclosures, cable shielding. Each zone boundary is protected by SPDs of the appropriate type, reducing the residual threat level progressively until it falls within the tolerance of the most sensitive equipment in that zone.",
          },
        ],
      },
    ],
  },
  {
    label: "SPD TYPES UNDER IEC 61643-11",
    nav: "SPD TYPES UNDER\nIEC 61643-11",
    title: "SPD TYPES UNDER IEC 61643-11",
    content: (
      <>
        <p>
          Low-voltage power system SPDs are classified into three types under IEC
          61643-11. The three types are complementary stages within a coordinated
          protection scheme — not alternatives to one another:
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Type 1 — at the LPZ 0 / LPZ 1 Boundary (Main Distribution Board)</span> - Type 1 devices are rated to handle partial lightning current — the portion of the full strike current that may be conducted into the building through external supply cables when a direct strike occurs nearby. Tested using a 10/350 μs current impulse representing direct lightning current. Under IS/IEC 62305 and NBC 2016, Type 1 SPDs are mandatory wherever an external lightning protection system is installed.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Type 2 — at the LPZ 1 / LPZ 2 Boundary (Sub-Distribution Boards)</span> - Type 2 devices are installed at sub-distribution boards and entry points to local panels deeper within the installation. They handle the energy remaining after Type 1 devices have conducted the primary partial current, including the more frequent surges from switching operations within the network. Tested using the 8/20 μs waveform.
        </p>
        <br />
        <p>
          • <span className="text-[#FF0000]">Type 3 — at the LPZ 2 / LPZ 3 Boundary (Point of Use)</span> - Type 3 devices are installed at or very close to the equipment being protected — at socket outlets, within equipment enclosures, or at local panels serving sensitive electronic equipment. They address residual low-amplitude surges passing through upstream protection. Tested using the combined wave (1.2/50 μs voltage, 8/20 μs current). Type 3 devices must always be used in conjunction with Type 1 or Type 2 upstream — they are not rated to handle primary surge currents independently.
        </p>
      </>
    ),
    subsections: null,
  },
  {
    label: "SPDS AND UPS SYSTEMS",
    nav: "SPDS AND UPS\nSYSTEMS",
    title: "SPDS AND UPS SYSTEMS",
    content: (
      <>
        <p>
          IS/IEC 62305 and NBC 2016 both require Surge Protective Devices to be
          installed wherever an external lightning protection system is in place.
          SPDs are required alongside — not instead of — any UPS that may be
          installed. A UPS provides continuity of power supply during a mains
          failure; it does not provide protection against transient overvoltages.
          An SPD upstream of the UPS is required to protect the UPS input
          circuitry itself.
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