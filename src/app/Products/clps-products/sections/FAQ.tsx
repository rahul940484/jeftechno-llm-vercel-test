"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "Is a Lightning Protection System mandatory for buildings in India?",
    "answer": "A Lightning Protection System (LPS) may be required depending on the building’s risk profile, location, occupancy, structure, and applicable safety requirements. A lightning risk assessment should be carried out to determine the level of protection required. JEF Techno provides Comprehensive Lightning Protection Systems (CLPS), including lightning protection components, earthing and grounding solutions, surge protection, risk assessment, and engineering support for buildings and industrial facilities in India."
  },
  {
    "id": 2,
    "question": "What is the difference between Lightning Protection Earthing and Electrical Earthing?",
    "answer": "Lightning Protection Earthing provides a controlled path for lightning current to safely dissipate into the earth, while Electrical Earthing is primarily designed for electrical safety, fault-current management, and equipment protection. A properly engineered Comprehensive Lightning Protection System (CLPS) considers lightning protection, earthing, grounding, bonding, and equipotentialisation together to provide effective protection for buildings, electrical systems, and electronic equipment. JEF Techno provides integrated lightning protection and earthing solutions designed according to applicable standards and project requirements."
  },
  {
    "id": 3,
    "question": "How often should a Lightning Protection System be inspected?",
    "answer": "A Lightning Protection System (LPS) should be inspected periodically based on the applicable standards, type of facility, environmental conditions, risk level, and condition of the installation. Additional inspection may be required after a lightning event, structural modification, or major change to the electrical or electronic systems. An LPS inspection generally includes checking air terminals, down conductors, connections, bonding, earth termination systems, grounding connections, corrosion, continuity, and surge protection devices. JEF Techno provides lightning protection inspection and engineering support to help verify the condition and performance of installed lightning protection systems."
  },
  {
    "id": 4,
    "question": "What is IEC 62305:2024 and why is it important for Lightning Protection Systems?",
    "answer": "IEC 62305:2024 is an international standard framework for protection against lightning. It provides principles and requirements for lightning risk assessment, protection measures, lightning protection system design, and protection of structures and associated systems. Designing a Comprehensive Lightning Protection System (CLPS) with reference to the applicable IEC 62305 requirements helps engineers evaluate lightning risk and select appropriate protection measures. JEF Techno’s CLPS product range, design tools, and technical documentation are aligned with the IEC 62305:2024 framework, supporting professional lightning protection system design and implementation."
  },
  {
    "id": 5,
    "question": "What does JEF Techno’s 200 kA lightning protection test mean?",
    "answer": "A 200 kA lightning protection test demonstrates that a lightning protection component has been subjected to a high-current laboratory test representing severe lightning current conditions. JEF Techno states that its Comprehensive Lightning Protection System (CLPS) components are type-tested at 200 kA using the 10/350 μs waveform. This provides technical evidence of the component’s ability to withstand significant lightning-current stresses. The testing is particularly relevant when engineers, consultants, EPC contractors, and industrial customers are evaluating type-tested lightning protection components for critical infrastructure and high-risk installations."
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
      <div className="absolute inset-0 z-1 bg-black/60" />

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
