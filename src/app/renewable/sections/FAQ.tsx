"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What are Power System Studies for Renewable Energy Projects?",
    "answer": "Power System Studies for Renewable Energy Projects are engineering analyses used to evaluate the behaviour, stability, safety, and performance of electrical systems associated with renewable energy plants. These studies are important for Solar PV plants, wind power plants, Battery Energy Storage Systems (BESS), hybrid renewable energy plants, green hydrogen plants, and microgrids. They help engineers evaluate the electrical system under different operating conditions and identify potential issues before commissioning or during operation. JEF Techno provides comprehensive Renewable Energy Power System Studies covering steady-state analysis, dynamic studies, electromagnetic transient (EMT) studies, and harmonic analysis for both new and existing renewable energy plants."
  },
  {
    "id": 2,
    "question": "What types of Renewable Energy Power System Studies does JEF Techno provide?",
    "answer": "JEF Techno provides a comprehensive range of Power System Studies for renewable energy applications, including studies for Solar PV, wind, BESS, hybrid plants, green hydrogen plants, and microgrids. The engineering analysis can cover steady-state studies, dynamic studies, electromagnetic transient (EMT) studies, and harmonic studies, depending on the characteristics and requirements of the renewable energy project. These studies help assess the behaviour of renewable power systems under different operating and grid conditions and support reliable integration of renewable generation into electrical networks."
  },
  {
    "id": 3,
    "question": "Why are Grid Code Studies important for Solar, Wind and BESS Projects?",
    "answer": "Grid Code Studies are important because renewable energy plants must be evaluated against the technical requirements of the electrical grid to which they are connected. Solar PV, wind, and Battery Energy Storage System (BESS) projects can have different operating characteristics from conventional generation. Power system studies help engineers evaluate how the plant behaves during normal operation and grid disturbances and whether the proposed system satisfies the applicable grid code requirements. JEF Techno has experience with grid codes from multiple countries and provides renewable energy power system studies to support the technical evaluation and grid integration of Solar PV, wind, BESS, hybrid, green hydrogen, and microgrid projects."
  },
  {
    "id": 4,
    "question": "What is the difference between Steady-State, Dynamic, EMT and Harmonic Studies for Renewable Energy Plants?",
    "answer": "Steady-State Studies evaluate the electrical system under normal operating conditions, while Dynamic Studies examine how the system responds to changes and disturbances over time. Electromagnetic Transient (EMT) Studies analyse fast electrical transients and detailed time-domain behaviour, which can be particularly important for power-electronic-based renewable energy systems. Harmonic Studies evaluate waveform distortion and harmonic behaviour within the electrical network. Together, these Renewable Energy Power System Studies provide a more complete understanding of how Solar PV, wind, BESS, hybrid and other renewable energy systems will interact with the electrical grid. JEF Techno has the capability to perform steady-state, dynamic, EMT and harmonic studies for both new and existing renewable energy plants."
  },
  {
    "id": 5,
    "question": "Which software does JEF Techno use for Renewable Energy Power System Studies?",
    "answer": "JEF Techno uses multiple industry-standard engineering software platforms for Renewable Energy Power System Studies, including PSS®E, PSCAD, DIgSILENT PowerFactory, ETAP, EMTP-RV, and CDEGS. Different software platforms can be selected according to the type of analysis required, including steady-state power system analysis, dynamic studies, electromagnetic transient analysis, harmonic studies, and grounding-related analysis. This multi-platform capability allows JEF Techno to select an appropriate modelling and simulation approach for Solar PV, wind, BESS, hybrid renewable energy, green hydrogen, and microgrid projects rather than limiting the engineering study to a single software environment."
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
