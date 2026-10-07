"use client";

import  { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "Why do well-maintained plants still experience unexplained instrumentation trips?",
    "answer": "Even well-maintained industrial plants and process plants can experience unexplained instrumentation trips because routine maintenance does not always identify problems within the instrumentation earthing system, signal grounding, shielding, cabling, or electrical environment. Issues such as ground loops, circulating currents, leakage current, differential earth potential, incorrect earthing philosophy, compromised Common Earthing Points (CEP), high shield current, EMI and EMF, power quality disturbances, and surge-related transients can interfere with instrumentation signals. These problems can affect DCS systems, PLCs, 4–20 mA signal loops, Foundation Fieldbus, HART systems, transmitters, junction boxes, and field instruments, resulting in nuisance alarms, signal drift, communication failures, false trips, and intermittent malfunctions. JEF Techno’s Instrumentation Earthing Audit is designed to identify these underlying causes and assess the integrity of the instrumentation grounding and earthing system rather than focusing only on conventional electrical measurements."
  },
  {
    "id": 2,
    "question": "What are the most common causes of instrumentation system failure?",
    "answer": "Common causes of instrumentation system failure include surges and spikes, leakage current, circulating current, differential grid or earth potential, incorrect instrumentation earthing, incorrect cabling, compromised Common Earthing Points (CEP), high shield current, EMI/EMF, excess power-cable looping inside panels, unused or unterminated cables, and power quality disturbances. These conditions can compromise signal integrity and affect critical instrumentation systems such as DCS, PLC, 4–20 mA loops, HART, Foundation Fieldbus, junction boxes, transmitters, and field instruments. A comprehensive Instrumentation Earthing Audit helps identify these conditions at their actual locations and determine how they are affecting instrumentation reliability, signal quality, equipment performance, and plant operation. JEF Techno’s audit methodology specifically looks beyond basic electrical testing to identify grounding, shielding, earthing, cabling, EMI, and signal-integrity issues that can cause intermittent instrumentation failures."
  },
  {
    "id": 3,
    "question": "Why do some plants fail despite passing routine electrical tests?",
    "answer": "Passing routine electrical tests does not necessarily prove that an instrumentation system has adequate earthing integrity and signal quality. Conventional electrical testing may confirm certain electrical parameters while failing to identify location-specific issues such as ground loops, circulating currents, shield termination problems, isolated grounding elements, earth-bar mix-ups, or differential earth potential. Instrumentation systems operate with sensitive signals, including 4–20 mA and digital communication signals, which can be affected by electrical noise and grounding problems even when conventional electrical measurements appear satisfactory. A dedicated Instrumentation Earthing Audit examines the relationship between the instrumentation system, earthing system, grounding connections, shielding, cabling, and electrical environment to identify hidden causes of nuisance trips, false alarms, signal disturbances, and intermittent failures. JEF Techno’s audit reports include measurement results, test locations and conditions, site photographic records, identified anomalies, specific defect locations, and a Bill of Materials (BOM) for corrective actions. Its reports are referenced to standards including IEEE 1050-2004, IEEE 1100-2005, and IEC 61000-5-2."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clps/clpf-faq-bg.png')" }} // Reusing an existing image as bg
      />
      {/* Dark Overlay to ensure readability */}
      <div className="absolute inset-0 z-1 bg-black/40" />

      <div className="section-container flex flex-col gap-[32px] md:gap-[48px] relative z-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[55px] uppercase text-white"
        >
          FAQ
        </motion.h2>

        <div className="w-full flex flex-col gap-6 md:gap-[32px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-x-[48px] md:gap-y-[32px] w-full items-start">
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    w-full
                    bg-white/10 backdrop-blur-sm
                    border-[0.5px]
                    rounded-lg
                    border-white/20
                    overflow-hidden
                    transition-all
                    duration-500
                    shadow-lg
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="
                      w-full
                      min-h-[70px] md:min-h-[80px]
                      px-5 md:px-[24px]
                      py-4 md:py-[15px]
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <div className="w-full flex items-center justify-between gap-4">
                      <span
                        className={`
                          font-montserrat
                          text-[14px] md:text-[16px]
                          leading-[1.4] md:leading-[150%]
                          text-left
                          transition-all
                          duration-300
                          
                          ${isOpen ? "font-bold text-white" : "font-medium text-white/90"}
                        `}
                      >
                        {item.question}
                      </span>

                      <div
                        className={`
                          w-6 h-6 md:w-10 md:h-10
                          flex
                          items-center
                          justify-center
                          transition-transform
                          duration-300
                          shrink-0
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      >
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          className="w-3 md:w-4 object-contain transition-all duration-300 "
                          style={{ 
                            filter: "brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(7470%) hue-rotate(356deg) brightness(98%) contrast(118%)" 
                          }}
                         loading="lazy" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="overflow-hidden">
                          <div className="px-5 md:px-[24px] pb-6 md:pb-[28px]">
                            <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[1.6] md:leading-[150%] text-white/80">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
