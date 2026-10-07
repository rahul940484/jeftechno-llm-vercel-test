"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What are EMI and EMC Studies and why are they important for electrical systems?",
    "answer": "Electromagnetic Interference (EMI) occurs when unwanted electromagnetic disturbances affect the performance of electrical or electronic equipment. Electromagnetic Compatibility (EMC) ensures that electrical and electronic systems can operate correctly without causing or being excessively affected by electromagnetic interference. An EMI/EMC Study helps identify electromagnetic interference sources, assess their impact on electrical and electronic systems, and determine appropriate mitigation measures. These studies are important for maintaining operational continuity, protecting sensitive equipment, improving system reliability, and meeting applicable EMC standards. JEF Techno provides comprehensive EMI/EMC Studies including site surveys, field measurements, grounding and bonding assessments, shielding evaluation, EMC compliance assessment, simulation and modelling, and mitigation recommendations."
  },
  {
    "id": 2,
    "question": "What problems can Electromagnetic Interference cause in an electrical system?",
    "answer": "Electromagnetic Interference (EMI) can affect electrical, instrumentation, communication, and control systems in several ways. Common consequences include unexplained electrical system tripping, sensor malfunction, communication noise, logging errors, system crashes, and loss of critical communications. In industrial facilities, these problems can lead to equipment malfunction, process interruptions, production downtime, and safety concerns. An EMI/EMC Study helps identify the source and severity of electromagnetic interference and provides engineering recommendations to reduce interference and improve electromagnetic compatibility. JEF Techno provides EMI/EMC analysis for applications including power plants, oil and gas installations, offshore platforms, and metro projects."
  },
  {
    "id": 3,
    "question": "What is the difference between AC Interference and DC Interference Studies?",
    "answer": "AC Interference Studies evaluate electromagnetic interference caused by alternating-current electrical systems and their coupling with nearby electrical, communication, or metallic systems. DC Interference Studies assess interference associated with direct-current systems and can be particularly important for buried pipelines, cathodic protection systems, hydrocarbon cross-country pipelines, and city gas networks. JEF Techno provides both AC and DC Interference Studies, along with DC stray current analysis, EM zoning, electromagnetic shielding, static and high-frequency grounding, and electromagnetic isolation to help identify and mitigate interference risks."
  },
  {
    "id": 4,
    "question": "How can grounding, bonding, shielding, and cable routing help reduce EMI?",
    "answer": "Effective grounding and bonding help control unwanted electromagnetic currents and provide appropriate reference and return paths. Electromagnetic shielding can reduce the coupling of electromagnetic fields into sensitive equipment and protected areas. Cable routing and segregation are also important because inappropriate cable arrangements can increase electromagnetic coupling between power, control, instrumentation, and communication circuits. A comprehensive EMI/EMC Study can therefore evaluate grounding, bonding, shielding effectiveness, cable routing and segregation, electromagnetic isolation, and high-frequency grounding to identify weaknesses and recommend suitable mitigation measures. JEF Techno includes grounding and bonding assessments, shielding evaluation, cable-routing and segregation reviews, and mitigation solutions within its EMI/EMC engineering services."
  },
  {
    "id": 5,
    "question": "What standards are used for EMI/EMC Studies and electromagnetic interference assessment?",
    "answer": "The applicable standards for an EMI/EMC Study depend on the application, equipment, installation, industry, and type of electromagnetic interference being assessed. JEF Techno references standards and guidelines including IEC 61000, IEEE 299, EN 50121, ICNIRP Guidelines, NACE SP 0177, and relevant OISD standards, depending on the project requirements. JEF Techno’s EMI/EMC services can include EMC management plans, site surveys, EMC matrix evaluation, EM zoning, field measurements, gap analysis, AC/DC interference studies, shielding assessment, grounding and bonding evaluation, compliance assessment, and mitigation recommendations."
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
