"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is the difference between a standard safety audit and a JEF Electrical & Fire Safety Audit?",
    "answer": "A standard safety audit may focus on selected safety checks, while a JEF Electrical & Fire Safety Audit takes a comprehensive, multi-discipline approach to evaluating a facility’s electrical installation and fire safety systems. JEF’s Electrical Safety Audit covers more than 500 checkpoints and 15+ tests across areas such as grounding and earthing, electrical network integrity, insulation health, leakage current, fault current, protection systems, power quality, thermal imaging, lighting, and emergency systems. The audit also evaluates relevant maintenance systems, critical records, and utility performance. JEF’s automated safety audit platform uses structured data collection, automated validation, photographic evidence, recommendations, and applicable standard references to improve consistency and traceability. The audit is structured with reference to requirements including CEA Regulations 2023, NEC 2023, and NBC 2016, helping facilities identify safety gaps and develop corrective actions."
  },
  {
    "id": 2,
    "question": "How does an Electrical Safety Audit help reduce fire risks?",
    "answer": "An Electrical Safety Audit helps identify electrical conditions that can contribute to fire incidents, equipment damage, and operational failures before they become major safety problems. The assessment examines areas such as overheating, insulation failure, electrical overloading, short circuits, grounding and earthing, protection systems, leakage current, power quality, and thermal conditions. Thermal imaging and preventive diagnostics can also help identify abnormal heating and developing electrical faults. By identifying and addressing these electrical risks, an Electrical & Fire Safety Audit can help reduce fire risk, improve personnel safety, protect electrical assets, and support a preventive maintenance programme. JEF Techno’s audit also provides documented findings and recommendations that can support corrective action, preventive maintenance, compliance, and insurance readiness."
  },
  {
    "id": 3,
    "question": "What are the steps to achieve JEF Safety Certification?",
    "answer": "The JEF Safety Certification process begins with a comprehensive assessment of the facility’s electrical and fire safety systems. The audit evaluates the installation against applicable safety requirements and identifies areas that require corrective action. The process can include assessment of electrical systems, grounding and earthing, protection systems, insulation, power quality, thermal conditions, fire prevention, life safety, active fire protection, passive fire protection, and emergency systems. Findings are documented with observations, photographs, recommendations, and relevant standard references. Where deficiencies are identified, corrective actions can be implemented and verified as part of the safety improvement process. Facilities that complete the required assessment and meet the applicable JEF safety requirements can receive JEF Safety Certification, providing a visible indication that the facility has been assessed against a higher safety standard."
  }
];




const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] lg:h-[580px] overflow-hidden relative">
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

        <div className="w-full flex flex-col gap-6 md:gap-[50px]">
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
                            <p className="font-montserrat font-normal text-[14px] md:text-[16px] leading-[1.6] md:leading-[150%] text-white/80 whitespace-pre-line">
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
