"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What are Power System Studies and why are they important for industrial facilities?",
    "answer": "Power System Studies are engineering analyses used to evaluate how an electrical power system behaves under normal, abnormal, and changing operating conditions. They help engineers identify potential problems that could affect electrical safety, system reliability, equipment protection, power availability, and plant continuity. For industrial and process plants, power system analysis can identify issues such as incorrect protection coordination, inadequate circuit breaker ratings, voltage problems, motor-starting limitations, excessive harmonics, arc-flash hazards, system instability, and load-shedding requirements. JEF Techno provides comprehensive Power System Studies using industry-standard engineering software for steady-state and dynamic analysis, helping industrial facilities understand system behaviour before electrical design or operating decisions become irreversible."
  },
  {
    "id": 2,
    "question": "What types of Power System Studies does JEF Techno provide?",
    "answer": "JEF Techno provides a range of Power System Studies and Electrical Power System Analysis covering both steady-state and dynamic system behaviour. The study range includes load flow studies, short circuit studies, motor starting studies, harmonic analysis, protection coordination studies, arc flash assessment, transient stability studies, and load shedding studies. JEF Techno also provides specialised Electromagnetic Transient and Insulation Coordination Studies, covering phenomena such as switching overvoltages, Temporary Overvoltages (TOV), Transient Recovery Voltage (TRV), Fast Transients (FTO/VFTO), ferroresonance, and transformer energisation."
  },
  {
    "id": 3,
    "question": "What is the difference between Power System Studies and Electromagnetic Transient Studies?",
    "answer": "Power System Studies generally evaluate steady-state and dynamic electrical system behaviour, including load flow, short circuit levels, motor starting, harmonics, protection coordination, arc flash, transient stability, and load shedding. Electromagnetic Transient (EMT) Studies analyse fast-changing electrical phenomena in much greater time-domain detail. These studies can be used to investigate switching overvoltages, TOV, TRV, fast transients, ferroresonance, and transformer energisation. JEF Techno provides both categories of analysis, using tools such as ETAP, PSS®E, DIgSILENT PowerFactory, SKM, and PSCAD/EMTDC, allowing the appropriate modelling approach to be selected according to the engineering problem."
  },
  {
    "id": 4,
    "question": "Why are Short Circuit, Protection Coordination, and Arc Flash Studies required in an electrical power system?",
    "answer": "Short Circuit Studies determine the magnitude of prospective fault currents and help engineers verify whether electrical equipment and circuit breakers have suitable interrupting capabilities. Protection Coordination Studies evaluate the operation and sequencing of protective devices so that faults can be isolated selectively while minimising unnecessary interruption to healthy parts of the electrical system. Arc Flash Studies assess the potential hazards associated with electrical arc-flash events and help determine appropriate protection and safety requirements. Together, these Power System Studies help improve electrical system reliability, equipment protection, and personnel safety. JEF Techno includes short circuit, protection coordination, and arc flash assessment within its power system study capabilities."
  },
  {
    "id": 5,
    "question": "Which software does JEF Techno use for Power System Studies?",
    "answer": "JEF Techno uses multiple established engineering platforms for Power System Analysis and Electrical Network Studies, including ETAP, PSCAD/EMTDC, PSS®E, DIgSILENT PowerFactory, SKM, and DSA Tools. Different software platforms are suited to different engineering requirements. For example, ETAP, PSS®E, DIgSILENT, and SKM can support power system and network studies, while PSCAD/EMTDC is used for high-fidelity electromagnetic transient analysis. JEF Techno’s software-independent approach allows the engineering methodology and modelling tool to be selected according to the type of power system study, network characteristics, transient phenomena, and project requirements rather than restricting the analysis to a single software platform."
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
