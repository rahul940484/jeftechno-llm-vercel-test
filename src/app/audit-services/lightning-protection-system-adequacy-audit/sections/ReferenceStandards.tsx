"use client";

import { motion } from "framer-motion";

const standards = [
  "IEC 62305-1:2024",
  "IEC 62305-2:2024",
  "IEC 62305-3:2024",
  "IEC 62305-4:2024",
  "IEC 62561 series",
  "IEC 61643-11",
  "IS/IEC 62305",
  "NBC 2016",
  "IS 3043",
];

export default function ReferenceStandards() {
  return (
    <section className="w-full bg-[#232427] py-14 md:py-20 font-montserrat overflow-hidden">
      <div className="section-container px-5 md:px-0">
        <motion.h2
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-10 text-[#FF0000] text-[22px] md:text-[32px] font-bold uppercase tracking-[4px]"
        >
          Reference Standards
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid max-w-[900px] grid-cols-1 gap-4 sm:grid-cols-2 md:gap-x-10 md:gap-y-5"
        >
          {standards.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, x: -22 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <span className="mt-[8px] h-2.5 w-2.5 min-w-2.5 rounded-full bg-[#FF0000]" />

              <p className="text-white text-[14px] sm:text-[15px] md:text-[17px] leading-[1.7]">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}