"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is Root Cause Analysis (RCA) for electrical system failures?",
    "answer": "Root Cause Analysis (RCA) is a systematic engineering process used to identify the underlying causes of electrical system failures, recurring faults, equipment malfunctions, and operational problems rather than addressing only their immediate symptoms. In an electrical system, RCA can help investigate problems such as repeated equipment failures, unexplained trips, power distribution issues, grounding faults, automation problems, and system breakdowns. JEF Techno provides Electrical Root Cause Analysis services using a structured approach to identify, analyse, and resolve the underlying causes of electrical problems. The objective is to prevent recurrence, improve system reliability and performance, enhance safety, reduce downtime, and control maintenance costs."
  },
  {
    "id": 2,
    "question": "Why is Root Cause Analysis important for reducing electrical system downtime?",
    "answer": "Recurring electrical faults and system breakdowns can cause unplanned downtime, production interruptions, equipment damage, and increased maintenance costs. Simply repairing a failed component may not prevent the same problem from occurring again. Root Cause Analysis investigates why the failure occurred and identifies the underlying technical or operational factors responsible for it. Corrective actions can then be developed to prevent recurrence and improve long-term electrical system reliability. JEF Techno’s Root Cause Analysis services are designed to help industries minimise downtime, improve electrical safety, reduce recurring repair and maintenance costs, and optimise overall system performance."
  },
  {
    "id": 3,
    "question": "What types of electrical problems can JEF Techno investigate through Root Cause Analysis?",
    "answer": "JEF Techno’s Root Cause Analysis services can be used to investigate a wide range of electrical and system-performance problems, including equipment malfunctions, grounding system inefficiencies, power distribution failures, automation system issues, power outages, grounding faults, and lightning protection system failures. The investigation is tailored to the specific operating environment and may be particularly relevant when a facility experiences recurring electrical faults, unexplained failures, repeated system breakdowns, or reliability problems. JEF Techno applies RCA across different electrical engineering applications to identify the underlying problem and develop a practical corrective action plan rather than relying only on repeated component replacement."
  },
  {
    "id": 4,
    "question": "Which industries can benefit from Electrical Root Cause Analysis services?",
    "answer": "Electrical Root Cause Analysis can benefit industries where electrical reliability, equipment availability, and operational continuity are critical. JEF Techno provides RCA services for oil and gas facilities, power utilities, manufacturing plants, process plants, warehouses, and commercial buildings. Typical investigations may include equipment malfunctions and grounding problems in oil and gas facilities, failures in substations and transmission systems, power distribution and automation issues in manufacturing plants, electrical safety and system-performance problems in process plants, and power outages, grounding faults, and lightning protection failures in commercial facilities."
  },
  {
    "id": 5,
    "question": "How does JEF Techno perform Root Cause Analysis for electrical system problems?",
    "answer": "JEF Techno follows a systematic Root Cause Analysis approach that focuses on identifying, analysing, and resolving the underlying causes of electrical problems. The investigation is supported by JEF’s electrical engineering expertise and is tailored to the specific requirements of the facility and failure being investigated. Depending on the problem, the assessment can focus on areas such as electrical systems, power distribution, grounding, lightning protection, automation, equipment performance, and operational conditions. The outcome is intended to provide actionable corrective measures that address the root cause, improve system reliability, reduce recurring failures and downtime, and optimise electrical system performance."
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
