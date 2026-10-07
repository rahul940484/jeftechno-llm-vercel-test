"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    "id": 1,
    "question": "What is JEF SHIELD and how does it help with lightning protection risk assessment?",
    "answer": "JEF SHIELD is an automated Lightning Protection Risk Assessment and Design Tool developed by JEF Techno. It automates the structured risk assessment process required under IS/IEC 62305-2 by analysing information about the structure, its contents, use, location, and lightning activity. JEF SHIELD converts the relevant project information into key lightning protection deliverables, including a risk assessment, concept design drawings, and bill of materials, helping engineers and consultants complete the initial lightning protection assessment more efficiently. The platform is built to IS/IEC 62305 and is designed for both Indian and international project requirements."
  },
  {
    "id": 2,
    "question": "How does JEF SHIELD determine the required Lightning Protection Level (LPL)?",
    "answer": "JEF SHIELD uses the information provided about a structure and its surroundings to perform a lightning risk assessment in accordance with the IS/IEC 62305 framework. The assessment considers factors such as the characteristics and use of the structure, its contents, location, and lightning activity. The calculated risk is used to help determine whether lightning protection is required and the appropriate Lightning Protection Level (LPL). This automated approach helps reduce calculation errors and can help avoid both under-designed lightning protection systems and unnecessary over-specification."
  },
  {
    "id": 3,
    "question": "Can JEF SHIELD generate lightning protection concept designs and 3D drawings?",
    "answer": "Yes. JEF SHIELD can generate concept designs and drawings as part of its automated lightning protection design workflow. The platform includes concept design with 3D visualisation, allowing engineers and project teams to understand the proposed lightning protection arrangement before moving into detailed engineering and installation. JEF SHIELD is designed to generate project deliverables quickly, with the JEF Techno page stating that the risk assessment, concept design drawings, and bill of materials can be produced in under 90 seconds."
  },
  {
    "id": 4,
    "question": "Can JEF SHIELD generate a Bill of Materials (BOM) and cost estimate for a Lightning Protection System?",
    "answer": "Yes. JEF SHIELD can generate a Bill of Materials (BOM) and cost estimate based on the lightning protection concept and project requirements. This helps consultants, engineers, EPC contractors, and project teams understand the expected lightning protection system components and estimated project cost during the planning and budgeting stage. The tool is designed to combine lightning risk assessment, LPL determination, concept design, bill of materials, and cost estimation into one automated workflow, helping support more efficient and cost-conscious lightning protection system planning."
  },
  {
    "id": 5,
    "question": "Can JEF SHIELD be used for detailed Lightning Protection System engineering?",
    "answer": "Yes. JEF SHIELD supports the lightning protection design workflow beyond the initial risk assessment. The platform provides options for drawing upload and detailed engineering, allowing project information and existing drawings to be incorporated into the engineering process. The tool also includes a project dashboard for managing and tracking projects and their associated deliverables. By combining lightning risk assessment, Lightning Protection Level determination, concept design, 3D visualisation, BOM generation, cost estimation, drawing upload, and detailed engineering, JEF SHIELD provides an integrated digital workflow for Lightning Protection System design based on the IS/IEC 62305 framework."
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
