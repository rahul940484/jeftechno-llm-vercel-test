"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "Do I need a Surge Protective Device (SPD) if I already have an external Lightning Protection System (LPS)?",
    "answer": "Yes. An external Lightning Protection System (LPS) is designed primarily to manage the effects of a direct lightning strike, but it does not eliminate transient overvoltages that can travel through power, signal, data, communication, or other cables. A Surge Protective Device (SPD) provides internal protection by limiting transient overvoltages caused by lightning events and switching surges generated within the electrical network. Internal surges can also be caused by equipment such as motors, transformers, capacitor banks, and variable speed drives. JEF Techno provides Surge Protection Devices for electrical and electronic systems as part of a comprehensive approach to internal lightning protection."
  },
  {
    "id": 2,
    "question": "What is the difference between Type 1, Type 2, and Type 3 Surge Protective Devices?",
    "answer": "Type 1, Type 2, and Type 3 Surge Protective Devices (SPDs) are used at different points within an electrical installation to manage transient overvoltages and coordinate protection from the main distribution system through to sensitive equipment. Type 1 SPDs are generally associated with protection at the incoming/main distribution point, while Type 2 and Type 3 SPDs provide progressively closer protection for downstream distribution and sensitive point-of-use equipment. The correct SPD type and installation arrangement should be selected according to the electrical system, lightning protection design, exposure to transient overvoltages, equipment sensitivity, and applicable standards such as IEC 61643-11. JEF Techno offers Type 1, Type 2, and Type 3 SPD solutions for appropriate applications."
  },
  {
    "id": 3,
    "question": "What types of electrical and communication lines require Surge Protection Devices?",
    "answer": "Surge Protection Devices can be required for a wide range of electrical, instrumentation, communication, and electronic circuits exposed to lightning and switching transients. JEF Techno’s SPD solutions cover low-voltage AC power lines, signal and instrumentation lines, data and Ethernet networks, telecommunication lines, coaxial and antenna lines, and DC and photovoltaic system lines. These applications can include PLC and control wiring, measurement systems, LAN and PoE networks, telephone and broadband connections, CCTV and antenna systems, photovoltaic strings, inverters, and battery systems."
  },
  {
    "id": 4,
    "question": "Why are Surge Protective Devices important for industrial and commercial electrical systems?",
    "answer": "Surge Protective Devices (SPDs) help protect electrical and electronic equipment from transient overvoltages caused by lightning and switching events. In industrial and commercial facilities, damaging surges do not originate only from lightning. Internal electrical operations such as motor starting and stopping, transformer switching, capacitor bank operations, and variable speed drives can generate repeated switching transients. Although these internally generated surges may have lower voltage than a direct lightning-related surge, their repeated occurrence can contribute to insulation stress and reduce the service life of sensitive electronic equipment. JEF Techno provides surge protection solutions for industrial and commercial applications to help protect electrical, instrumentation, communication, and electronic systems against these transient events."
  },
  {
    "id": 5,
    "question": "How do I choose the right Surge Protective Device (SPD) for my electrical system?",
    "answer": "Selecting the right Surge Protective Device (SPD) depends on the type of electrical or electronic line being protected, the system configuration, expected surge exposure, equipment sensitivity, location within the installation, and the applicable lightning protection and surge protection standards. For example, different SPD solutions may be required for AC power, instrumentation, Ethernet and data networks, telecommunications, coaxial systems, photovoltaic DC circuits, inverters, and battery systems. A properly coordinated SPD installation should consider the Lightning Protection Zone (LPZ) concept, SPD type, installation location, electrical characteristics, and connection to the grounding system. JEF Techno provides a range of Surge Protective Devices for power, signal, instrumentation, data, communication, telecom, and photovoltaic applications, supporting engineered internal lightning protection for industrial and commercial facilities."
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
