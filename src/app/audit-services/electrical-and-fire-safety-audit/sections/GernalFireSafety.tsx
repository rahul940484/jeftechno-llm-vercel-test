"use client";

import { motion } from "framer-motion";

const items = [
  "Fire Prevention",
  "Life Safety",
  "Active Fire Protection",
  "Passive Fire Protection",
  "Mock Drill Review",
];

export default function GeneralFireSafety() {
  return (
    <section className="bg-[#232427] py-16 md:py-20 overflow-hidden">
      <div className="section-container px-5 md:px-0">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[#FF0000] text-[24px] md:text-[32px] uppercase font-bold tracking-[4px] mb-8"
        >
          GENERAL FIRE SAFETY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-[16px] md:text-[18px] leading-[1.8] max-w-[1200px] mb-10"
        >
          A fire audit that examines the complete system as an integrated whole —
          not just extinguisher counts and detector placement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-white text-[15px] md:text-[18px] mb-6"
        >
          What JEF Covers:
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="flex max-w-[900px] flex-col gap-4"
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, x: -22 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-start gap-4"
            >
              <span className="mt-[9px] h-2.5 w-2.5 min-w-2.5 rounded-full bg-[#FF0000]" />

              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[1.7]">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}