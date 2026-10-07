"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "Our earth electrode resistance measurement shows a satisfactory value. Why do we need a Comprehensive Earthing Health Assessment?",
    "answer": "A satisfactory earth electrode resistance value does not necessarily mean that the entire earthing system is healthy or electrically continuous. A ground grid contains multiple parallel current paths, so a disconnected riser, corroded connection, or isolated section of the grid can remain undetected while the overall earth resistance measurement still appears acceptable. A Comprehensive Earthing Health Assessment evaluates the integrity of the complete earthing system and helps identify location-specific deficiencies that a conventional earth resistance test may not reveal. JEF Techno’s Earthing Health Assessment evaluates the earthing system in the context of soil conditions, grid geometry, fault current levels, and protection settings to provide actionable findings."
  },
  {
    "id": 2,
    "question": "Can an Earthing Health Assessment be carried out without requiring a power shutdown?",
    "answer": "Yes. JEF Techno’s Earthing Health Assessment is designed to be carried out on live electrical systems, helping facilities perform comprehensive earthing integrity assessments without the production impact associated with a complete power shutdown. This approach is particularly useful for substations, process plants, industrial facilities, and other critical installations where shutting down the electrical system can interrupt operations. JEF Techno’s methodology is designed to identify earthing deficiencies such as open risers, isolated grid sections, and corroded connections while the facility remains operational."
  },
  {
    "id": 3,
    "question": "What is the difference between an earth grid resistance test and a riser integrity test?",
    "answer": "An earth grid resistance test evaluates the overall resistance of the grounding or earthing system, whereas a riser integrity test focuses on verifying the electrical continuity and integrity of individual connections between equipment or structures and the earth grid. A satisfactory earth grid resistance measurement can sometimes mask a local problem because multiple parallel current paths may continue to produce an acceptable overall reading. A defective riser or high-resistance connection can therefore remain undetected. A comprehensive Earthing Health Assessment combines system-level evaluation with location-specific investigation to identify defects that could affect equipment protection and personnel safety."
  },
  {
    "id": 4,
    "question": "What happens if a Comprehensive Earthing Health Assessment identifies defective connections?",
    "answer": "If an Earthing Health Assessment identifies defective connections, JEF Techno provides location-specific findings and recommendations for corrective action. The assessment can identify issues such as open risers, isolated grid sections, corroded connections, and other earthing system deficiencies. The findings can then be prioritised according to their potential impact on protection system performance and personnel safety. JEF Techno’s deliverables include identified anomalies, the specific location of deficiencies, a Bill of Materials (BOM) required for correction, and a corrective action plan prioritised by safety impact."
  },
  {
    "id": 5,
    "question": "How often should a Comprehensive Earthing Health Assessment be carried out?",
    "answer": "The appropriate frequency of a Comprehensive Earthing Health Assessment depends on the type of facility, environmental conditions, condition of the earthing system, operational risk, applicable standards and regulations, and the consequences of an earthing system failure. Periodic assessment is important because underground earthing connections can deteriorate due to corrosion, ageing, environmental conditions, mechanical damage, or changes to the electrical installation without being visually apparent. For critical facilities such as substations, process plants, industrial facilities, and other high-voltage installations, periodic earthing integrity assessment can help identify deterioration before it affects electrical protection and personnel safety. JEF Techno provides earthing health assessment services for critical installations and has experience across substations and process plants."
  },
  {
    "id": 6,
    "question": "What is an acceptable earth resistance value, and how is low earth resistance achieved?",
    "answer": "There is no single acceptable earth resistance value that applies to every installation. The required value depends on the type of facility, electrical system, fault current, grounding design, soil conditions, applicable standards, protection requirements, and overall safety objectives. Achieving a low earth resistance value alone should not be treated as proof that an earthing system is healthy. The integrity and continuity of the earth grid, risers, connections, touch potential, step potential, and overall grounding performance also need to be considered. JEF Techno’s Earthing Health Assessment goes beyond a single resistance measurement by using engineering analysis and, where applicable, CDEGS earth grid modelling and simulation to assess Ground Potential Rise (GPR), touch potential distribution, and step potential profiles."
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
