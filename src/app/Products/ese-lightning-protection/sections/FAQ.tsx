"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is an Early Streamer Emission (ESE) Lightning Protection System and how does it work?",
    "answer": "An Early Streamer Emission (ESE) Lightning Protection System is designed to provide protection against direct lightning strikes by using an ESE air terminal, commonly referred to as an ESE lightning arrestor. The system is intended to intercept a lightning discharge and provide a controlled path for the lightning current to reach the earth through the down-conductor and earthing system. A properly engineered ESE solution should consider the ESE air terminal, protection radius, installation height, down conductors, earthing system, site conditions, and applicable lightning protection requirements. JEF Techno provides ESE Lightning Protection Systems for industrial, commercial, infrastructure, and renewable-energy applications where effective protection against direct lightning effects is required."
  },
  {
    "id": 2,
    "question": "Why do solar power plants and solar fields need lightning protection?",
    "answer": "Solar power plants and solar fields can be particularly exposed to lightning because they typically cover large open areas and contain extensive elevated metallic structures. Direct lightning strikes and induced surges can damage PV modules, inverters, SCADA systems, communication networks, and other sensitive electrical and electronic equipment. An appropriately designed lightning protection system for solar power plants can help reduce the risk of equipment damage, fire, plant shutdown, operational disruption, and associated revenue losses. JEF Techno provides ESE lightning protection solutions for solar fields and renewable-energy installations, with the protection approach selected according to the site’s characteristics and lightning risk."
  },
  {
    "id": 3,
    "question": "What are the key challenges when selecting an ESE Lightning Protection System?",
    "answer": "One of the key challenges in ESE lightning protection is ensuring that the selected ESE air terminal has appropriate technical performance and that the overall system is correctly designed for the application. An ESE lightning arrestor should not be selected solely on the basis of its claimed protection radius. Important considerations include ESE performance validation, applicable standards, installation height, protection level, site layout, down-conductor arrangement, earthing system, and the technical documentation supporting the product’s performance. JEF Techno’s approach to Early Streamer Emission Lightning Protection focuses on scientifically validated system selection and engineering rather than treating the ESE air terminal as an isolated component."
  },
  {
    "id": 4,
    "question": "How is ESE Lightning Protection System performance validated as per NF C 17-102?",
    "answer": "NF C 17-102 is an important standard associated with the design and application of Early Streamer Emission (ESE) lightning protection systems. Performance validation is important because the effectiveness of an ESE air terminal depends on demonstrated technical characteristics rather than marketing claims alone. When evaluating an ESE lightning arrestor, engineers and project owners should consider appropriate testing, technical documentation, protection requirements, installation configuration, and compliance with the applicable NF C 17-102 requirements. JEF Techno emphasises ESE performance validation as per NF C 17-102 as an important consideration when selecting an Early Streamer Emission Lightning Protection System."
  },
  {
    "id": 5,
    "question": "How do I choose the correct ESE Lightning Arrestor for a project?",
    "answer": "Choosing the correct ESE Lightning Arrestor depends on factors such as the structure or site’s dimensions, required protection level, installation height, surrounding environment, lightning exposure, protection radius, earthing arrangement, and applicable ESE lightning protection standards. For applications such as solar power plants, industrial facilities, commercial buildings, and infrastructure projects, the ESE air terminal should be selected as part of a complete engineered lightning protection system rather than as a standalone product. JEF Techno provides ESE Early Streamer Emission Lightning Protection solutions with consideration for system design, technical performance, protection requirements, and site-specific conditions to help achieve reliable lightning protection."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden lg:h-[570px] relative">
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
