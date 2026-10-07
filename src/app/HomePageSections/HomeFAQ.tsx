"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What electrical engineering consulting company do?",
    answer: "Electrical Engineering Consulting Company is the engineering process JEF Techno uses to protect structures, equipment and personnel, delivered in compliance with IS/IEC 62305."
  },
  {
    question: "Why is electrical engineering consulting company important?",
    answer: "Electrical Engineering Consulting Company reduces the risk of equipment damage, downtime, fire and injury caused by lightning strikes, earth faults or transient overvoltages in industrial and commercial facilities."
  },
  {
    question: "What standards apply to electrical engineering consulting company?",
    answer: "In India, electrical engineering consulting company follows IS/IEC 62305 and IS 3043; internationally JEF Techno also aligns with NFPA 780, IEEE 80 and IEC 62561 depending on the project location."
  },
  {
    question: "How much does electrical engineering consulting company cost?",
    answer: "Cost depends on facility size, soil/site conditions and scope; JEF Techno provides a free site assessment and itemized quote before starting electrical engineering consulting company."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-[#232427] flex flex-col items-center justify-center py-[80px] md:py-[120px] overflow-hidden">
      <div className="section-container flex flex-col gap-10 md:gap-14 px-6 md:px-0 max-w-4xl w-full">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-[#FF0000] text-[11px] sm:text-[12px] font-semibold tracking-[1.47px] uppercase font-montserrat">
            Got Questions?
          </p>
          <h2 className="text-[24px] sm:text-[28px] font-semibold tracking-[2px] sm:tracking-[3px] uppercase leading-[1.2] text-white font-montserrat">
            Frequently Asked Questions
          </h2>
        </div>

        {/* ACCORDION LIST */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="border border-white/10 rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm transition-all duration-300"
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-white/10 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-medium text-[15px] sm:text-[16px] text-white font-montserrat pr-8 leading-snug">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#FF0000] flex-shrink-0 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-white/50 flex-shrink-0 transition-transform" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2 text-white/70 font-light text-[14px] sm:text-[15px] font-montserrat leading-[170%] border-t border-white/10 mt-2">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BUTTON SECTION */}
        <div className="flex justify-center mt-6">
          <Link href="/faq">
            <button
              className="
                relative
                overflow-hidden
                group
                w-[210px]
                sm:w-[239px]
                h-[52px]
                sm:h-[56px]
                rounded-full
                border
                border-white/10
                bg-[#FF0000]
                flex
                items-center
                justify-center
                gap-[10px]
                uppercase
                text-white
                tracking-[2px]
                text-[13px]
                sm:text-[14px]
                transition-colors
                duration-300
                hover:bg-[#F9F7F2]
                hover:text-[#FF0000]
                transform-gpu
                will-change-transform
                font-montserrat
                font-medium
              "
            >
              <span>View All FAQs</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
