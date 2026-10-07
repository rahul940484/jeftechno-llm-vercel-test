"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ExcellenceinElectricalEngineering() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);

 const sectors = [
  {
    name: "DETAILED ENGINEERING REPORT",
    description:
      "Detailed engineering report with all measurement results, test locations, and test conditions.",
  },
  {
    name: "SITE PHOTOGRAPHIC RECORD",
    description:
      "Site photographs documenting the installation condition and all visible deficiencies identified.",
  },
  {
    name: "IDENTIFIED ANOMALIES",
    description:
      "List of all identified anomalies and defects, with specific locations and BOM required for correction.",
  },
  {
    name: "PROTECTION SYSTEM ASSESSMENT",
    description:
      "Assessment of the criticality of each deficiency on protection system performance and personnel safety.",
  },
  {
    name: "CORRECTIVE ACTION PLAN",
    description:
      "Recommendations for corrective action, prioritised by safety impact.",
  },
  {
    name: "EARTH GRID SIMULATION OUTPUTS",
    description:
      "Earth grid simulation outputs where modelling was performed — GPR, touch potential distribution, and step potential profile.",
  },
  {
    name: "COMPLIANCE VERIFICATION",
    description:
      "Confirmation of compliance or non-compliance with applicable standards and CEA Regulations, 2023.",
  },
];

  const maxIndex = sectors.length - 1;

  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));

  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        text-white
        flex
        flex-col
        justify-center
        py-16
        md:py-20
      "
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="section-container relative z-10">
        
{/* ====================================================================================================================== */}
          <div className="flex flex-row items-center justify-between gap-4 lg:items-start">
          <motion.h2
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-[#FF0000] text-[22px] md:text-[32px] font-bold tracking-[3px] uppercase max-w-[150px] md:max-w-none leading-tight md:leading-normal"
          >
              EARTHING HEALTH ASSESSMENT DELIVERABLES
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex gap-2 sm:gap-4 lg:mt-2 shrink-0"
          >
            <button
              onClick={prev}
              disabled={atStart}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 md:h-12 md:w-12 text-sm md:text-base"
              style={{
                opacity: atStart ? 0.4 : 1,
                background: atStart ? "#ffffff" : "transparent",
                border: "1px solid white",
                color: atStart ? "#000000" : "#ffffff",
              }}
            >
              ←
            </button>

            <button
              onClick={next}
              disabled={atEnd}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 md:h-12 md:w-12 text-sm md:text-base"
              style={{
                opacity: atEnd ? 0.4 : 1,
                background: atEnd ? "transparent" : "#ffffff",
                border: "1px solid white",
                color: atEnd ? "#ffffff" : "#000000",
              }}
            >
              →
            </button>
          </motion.div>
        </div>
{/* ====================================================================================================================== */}
        {/* SLIDER */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative w-full mt-14 md:mt-20 overflow-hidden"
        >
          {/* GLOBAL LINE */}
          {/* <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" /> */}

          {/* TRACK */}
          <div
            className="
              relative
              flex
              gap-[20px]
              transition-transform
              duration-700
              ease-in-out
              z-10
            "
            style={{
             transform: `translateX(-${
  activeIndex * (isMobile ? 290 : 366)
}px)`,
            }}
          >
            {sectors.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true }}
                  className="
                    flex
                    flex-col
                    

                    w-[270px]
                    md:w-[346px]

                    shrink-0
                    cursor-pointer
                    group
                  "
                  onClick={() => setActiveIndex(index)}
                >
                  {/* LABEL */}
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span
                      className={`
                        uppercase
                        tracking-[0.1em]

                        text-[10px]
                        md:text-[11px]

                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "font-bold text-white"
                            : "font-normal text-gray-400 group-hover:text-white"
                        }
                      `}
                    >
                      {item.name}
                    </span>
                  </div>

                  {/* DOT */}
                  <div className="relative w-full h-[2px] flex items-center">
                    {isActive ? (
                      <div className="absolute left-0 w-[14px] h-[14px] bg-[#FF0000] rounded-full z-10" />
                    ) : (
                      <div className="absolute left-0 w-2.5 h-2.5 bg-white rounded-full z-10" />
                    )}
                  </div>

                  {/* CARD */}
                  <motion.div
                    animate={{
                      backgroundColor: "rgba(27, 24, 24, 0.85)",
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                    className="
                      mt-[28px]
                      md:mt-[32px]
                      

                      p-6
                      md:p-8

                      transition-all
                      duration-500
                      ease-in-out

                      min-h-[260px]
                      md:h-[370px]
                    "
                  >
                    <motion.p
                      animate={{
                        color: "#e5e7eb",
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="
                        text-[14px]
                        md:text-[15px]

                        leading-[180%]
                      "
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
