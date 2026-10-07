"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "./faqData";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqClient() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#242426] py-16 px-6 md:px-16 lg:px-24">
      <div className="section-container max-w-[1400px] mx-auto">
        <h2 className="text-center text-white text-3xl font-bold mb-10 tracking-wide uppercase">
          FAQ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#1C1C1E] border border-[#2D2E30] rounded-sm overflow-hidden flex flex-col justify-start"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-[#E0E0E0] text-sm md:text-base font-medium pr-4 leading-relaxed">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 text-[#FF0000]"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-[#A0A0A0] text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
