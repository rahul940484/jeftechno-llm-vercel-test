"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AreaOfExpertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
const sectors = [
  {
    name: "UNMATCHED ACCURACY",
    description:
      "Helps ensure unmatched accuracy by using built-in intelligence to detect anomalies more consistently and reducing human dependence.",
  },
  {
    name: "HIGH RELIABILITY",
    description:
      "Structured data collection, automated validation, and expert review create a level of consistency and reliability that no manual process can match.",
  },
  {
    name: "FULL TRANSPARENCY",
    description:
      "Every finding captured with photograph, observation, recommendation & standard reference.",
  },
  {
    name: "GUIDED MOBILE APP",
    description:
      "JEF field auditors are guided step-by-step throughout the process, which helps in reducing missed items and human dependence.",
  },
  {
    name: "PROVEN AT SCALE",
    description:
      "600k+ data points analysed, 15k+ reports delivered with zero data mix-up",
  },
  {
    name: "SPEED",
    description:
      "JEF’s end-to-end automated process enables us to deliver high-quality reports at unmatched speed.",
  },
  {
    name: "CUSTOM REPORTS",
    description:
      "Standardised formats, customisable per client — compare findings across facilities and audit cycles.",
  },
  {
    name: "STANDARDISED, CUSTOMISABLE REPORTS",
    description:
      "All data is stored in a secure server. Reports are generated in standardised formats customizable to client requirements — enabling direct comparison of findings across facilities, floors, and successive audit cycles.",
  },
  {
    name: "STATE-OF-ART DATA SECURITY AND MANAGEMENT",
    description:
      "All audit data is secured within the tool's web-based infrastructure with enterprise-grade data security. Every client's information remains entirely confidential to the extent technology of the day permits.",
  },
  {
    name: "CUSTOMER INTERFACE",
    description:
      "Access to Customised dashboards, Status update, reports and collaterals.",
  },
];


  const maxIndex = sectors.length - 1;
  const next = () => setActiveIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));

  const atStart = activeIndex === 0;
  const atEnd = activeIndex === maxIndex;

  return (
    <section
      className="relative w-full overflow-hidden text-white flex flex-col justify-center py-16 md:py-20"
      style={{
        minHeight: "920px",
        backgroundImage: "url(/AboutUs/Area_of_Expertise.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1a1a]/75" />

      <div className="section-container relative z-10">

{/* ====================================================================================================================== */}
          <div className="flex flex-row items-center justify-between gap-4 lg:items-start">
         <div className="flex-col gap-4">
           <motion.h1
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[#FF0000] uppercase mb-6 text-[26px] md:text-[32px] tracking-[3px] md:tracking-[4.53px] font-bold"
          >
              JEF'S PATENTED SMART SAFETY AUDIT TOOL
          </motion.h1>
          <p className="max-w-[900px] text-[16px] md:text-[18px] leading-[1.6] text-white/80">
                The world's first automated safety audit platform.
          </p>
         </div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex gap-2 sm:gap-4 lg:mt-2 shrink-0  mt-40 md:mt-0 md:pt-10 shrink-0"
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

        <div className="relative w-full mt-14 md:mt-20 overflow-hidden">
          {/* <div className="absolute top-[39px] left-[-50vw] right-[-50vw] h-[1px] bg-white/30 z-0" /> */}

          <div
            className="relative flex gap-[20px] transition-transform duration-700 ease-in-out z-10"
            style={{
              transform: `translateX(-${activeIndex * (isMobile ? 290 : 366)}px)`,
            }}
          >
            {sectors.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col w-[270px] md:w-[346px] shrink-0 cursor-pointer group"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="h-[30px] flex items-end mb-[8px]">
                    <span className="uppercase tracking-[0.1em] text-[10px] md:text-[11px] text-gray-400">
                      {item.name}
                    </span>
                  </div>

                  <div className="relative w-full h-[2px] flex items-center">
                    <div
                      className={`absolute left-0 rounded-full z-10 ${
                        isActive
                          ? "w-[14px] h-[14px] bg-[#FF0000]"
                          : "w-2.5 h-2.5 bg-white"
                      }`}
                    />
                  </div>

                  <motion.div
                    animate={{
                      backgroundColor: "rgba(27, 24, 24, 0.85)",
                    }}
                    transition={{ duration: 0.5 }}
                    className="mt-[28px] md:mt-[32px] p-6 md:p-8 min-h-[260px] md:h-[370px]"
                  >
                    <motion.p
                      animate={{ color: "#e5e7eb" }}
                      transition={{ duration: 0.5 }}
                      className="text-[14px] md:text-[15px] leading-[180%]"
                    >
                      {item.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
