"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is ESE (Early Streamer Emission) Lightning Protection?",
    "answer": "Early Streamer Emission (ESE) Lightning Protection is an external lightning protection technology that uses an ESE air terminal to initiate an upward streamer and help intercept a lightning discharge before it reaches the protected structure. The ESE technology used in the NIMBUS® Lightning Protection System is designed to increase the protected volume and can help protect large areas while reducing the material and installation requirements associated with conventional lightning protection arrangements. JEF Techno’s NIMBUS® ESE lightning rods are available with claimed protection radii of up to 100 metres, depending on the ESE emission-time configuration."
  },
  {
    "id": 2,
    "question": "How does an ESE Lightning Rod protect a large area?",
    "answer": "An ESE lightning rod is designed to provide a larger protection zone by using Early Streamer Emission technology. The protection radius depends on factors including the ESE emission time, installation height, protection level, and site configuration. The NIMBUS® series offered by JEF Techno includes ESE lightning rods with emission-time configurations of 15 μs, 30 μs, 45 μs, and 60 μs, with a stated protection radius of up to 100 metres. The complete lightning protection design should also consider the down-conductor system, earthing system, protected structure, installation conditions, and applicable standards."
  },
  {
    "id": 3,
    "question": "What is the lightning current testing capacity of the NIMBUS® ESE Lightning Protection System?",
    "answer": "The NIMBUS® ESE Lightning Protection System is stated to have been tested with lightning currents up to 200 kA using the 10/350 μs waveform. High-current testing is an important consideration when evaluating ESE lightning protection equipment, particularly for industrial facilities, infrastructure, renewable-energy installations, and other applications where lightning-current withstand capability is critical. JEF Techno states that NIMBUS® lightning rods are independently tested and certified, providing technical validation of the product’s performance."
  },
  {
    "id": 4,
    "question": "Does the NIMBUS® ESE Lightning Rod comply with NFC 17-102?",
    "answer": "The NIMBUS® ESE Lightning Rod is stated by JEF Techno to exceed the requirements of NFC 17-102 v2011. NFC 17-102 is an important reference for Early Streamer Emission lightning protection systems. When selecting an ESE lightning protection solution, engineers and project consultants should evaluate the applicable standard requirements together with product testing, certification, installation configuration, protection level, and system design. JEF Techno states that NIMBUS® ESE lightning rods were developed to provide robust performance while maintaining a compact and lightweight design."
  },
  {
    "id": 5,
    "question": "Why choose NIMBUS® ESE Lightning Protection from JEF Techno?",
    "answer": "NIMBUS® ESE Lightning Protection combines Early Streamer Emission technology with independently tested components designed for external lightning protection applications. JEF Techno states that NIMBUS® lightning rods are made using AISI 316 stainless steel and non-expendable components, have been tested with lightning currents up to 200 kA (10/350 μs), are independently laboratory tested and certified, and are backed by an extended 10-year warranty. The company also states that NIMBUS® systems protect more than 45,000 installations worldwide. These features make NIMBUS® relevant for projects requiring an engineered ESE lightning protection system, particularly where large-area external lightning protection and reduced installation complexity are important."
  }
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-16 md:pt-[86px] md:pb-[120px] overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/clps/clpf-faq-bg.png')" }} />
      <div className="absolute inset-0 z-1 bg-black/60" />
      <div className="section-container flex flex-col gap-[32px] relative z-10">
        <motion.h2 className="font-montserrat font-bold text-[32px] md:text-[40px] uppercase text-white">FAQ</motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {faqData.map((item, index) => (
            <motion.div key={item.id} className="bg-white/10 backdrop-blur-sm border rounded-lg border-white/20 overflow-hidden">
              <button onClick={() => toggleFAQ(item.id)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="text-white font-medium">{item.question}</span>
                <div className={`transition-transform duration-300 ${openId === item.id ? "rotate-180" : ""}`}>
                  <img src="/clps/Vector.png" alt="v" className="w-3" style={{ filter: "invert(1)" }}  loading="lazy" />
                </div>
              </button>
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }}>
                    <div className="px-6 pb-4 text-white/80 text-sm leading-relaxed">{item.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
