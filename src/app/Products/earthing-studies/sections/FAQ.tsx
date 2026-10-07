"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is the difference between earthing resistance and grounding impedance?",
    "answer": "Earthing resistance refers to the resistance offered by a grounding system to the flow of electrical current into the earth. Grounding impedance is a broader measurement that includes resistance as well as inductive and reactive components that can affect current flow, particularly during transient or fault conditions. A reliable earthing and grounding system should therefore not be evaluated only by achieving a low resistance value. JEF Techno’s earthing and grounding solutions consider both resistance and impedance to help electrical systems perform reliably under normal and fault conditions."
  },
  {
    "id": 2,
    "question": "Why do conventional earthing systems fail?",
    "answer": "Conventional earthing systems can experience performance problems because of factors such as soil conditions, seasonal moisture variations, corrosion, electrode degradation, inadequate installation, and changes in soil resistivity. Simply achieving a low earth resistance during installation does not always guarantee long-term grounding performance. A properly engineered earthing and grounding solution should consider soil behaviour, fault-current requirements, electrode selection, installation conditions, and long-term system reliability. JEF Techno provides comprehensive earthing and grounding solutions, from site survey and system design to supply and implementation, to help address these challenges."
  },
  {
    "id": 3,
    "question": "How does soil behaviour affect an earthing and grounding system?",
    "answer": "Soil behaviour and soil resistivity have a major influence on the performance of an earthing system. Different soil types can have significantly different electrical characteristics, and factors such as moisture content, temperature, mineral composition, and seasonal changes can affect grounding performance. Understanding soil resistivity and soil behaviour is therefore important when designing an effective earthing and grounding system. JEF Techno’s approach considers site conditions and grounding requirements when developing earthing solutions for electrical and industrial installations."
  },
  {
    "id": 4,
    "question": "What are the different types of earthing and grounding systems?",
    "answer": "Different earthing and grounding systems can be selected depending on the application, soil conditions, electrical system requirements, fault-current levels, available space, and required grounding performance. The appropriate grounding arrangement may involve different types of earth electrodes, grounding conductors, backfill materials, and electrode configurations. Selecting the right earthing system requires an understanding of the site’s soil characteristics and electrical requirements rather than relying on a single standard configuration. JEF Techno provides engineered earthing and grounding solutions based on site survey, design, supply, and implementation requirements."
  },
  {
    "id": 5,
    "question": "What is carbon-based backfill and how is it used in earthing systems?",
    "answer": "Carbon-based backfill is a conductive material used around certain earth electrodes to improve the electrical contact between the electrode and surrounding soil. It can be considered where soil conditions or grounding requirements make conventional earthing arrangements less effective. The selection and application of carbon-based backfill for earthing systems should consider soil characteristics, electrode design, installation conditions, and long-term grounding performance. JEF Techno provides earthing and grounding solutions that consider soil behaviour, grounding performance, and appropriate system design to support reliable electrical earthing installations."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden lg:h-[721px] relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/clps/clpf-faq-bg.png')" }}
      />
      <div className="absolute inset-0 z-1 bg-black/20" />

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
                  className="w-full bg-white/10 backdrop-blur-sm border-[0.5px] rounded-lg border-white/20 overflow-hidden transition-all duration-500 shadow-lg"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    className="w-full min-h-[70px] md:min-h-[80px] px-5 md:px-[24px] py-4 md:py-[15px] flex items-center justify-between"
                  >
                    <div className="w-full flex items-center justify-between gap-4">
                      <span className={`font-montserrat text-[14px] md:text-[16px] leading-[1.4] md:leading-[150%] text-left transition-all duration-300 ${isOpen ? "font-bold text-white" : "font-medium text-white/90"}`}>
                        {item.question}
                      </span>
                      <div className={`w-6 h-6 md:w-10 md:h-10 flex items-center justify-center transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                        <img
                          src="/clps/Vector.png"
                          alt="Arrow"
                          className="w-3 md:w-4 object-contain transition-all duration-300"
                          style={{ filter: "brightness(0) saturate(100%) invert(16%) sepia(95%) saturate(7470%) hue-rotate(356deg) brightness(98%) contrast(118%)" }}
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
