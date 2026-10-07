"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/dist/client/link";

const navItems = [
  { label: "HOME", isActive: true },
  { label: "OUR BUSINESS", isActive: true },
  { label: "CONSULTING SERVICES", isActive: true },
  { label: "EMI - EMC", isActive: false },
];

export default function ProductIntro() {
  const [expanded, setExpanded] = React.useState(false);
  const expandedText = (
    <>
      <b>AC Interference Study</b>
      <br />
      <p className="max-w-[1300px] text-white/90 font-montserrat font-light text-[13px] md:text-[17px] leading-[1.7] tracking-[0.2px]">
        In an era of rapidly advancing technology, maintaining electromagnetic
        compatibility is critical for the reliable operation of electrical
        systems and devices. JEF offers comprehensive EMI and EMC Studies to
        ensure that your electrical infrastructure meets international standards,
        minimizing interference risks and ensuring system reliability.
      </p>
    </>
  );

  return (
    <section className="flex flex-col bg-[#232427] overflow-hidden">
      <nav className="bg-[#2D2E30] flex py-4 md:py-6 w-full">
        <div className="section-container flex items-center gap-2 overflow-x-auto no-scrollbar whitespace-nowrap px-4 md:px-0">
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className={`text-[8px] md:text-xs tracking-tight md:tracking-[1.2px] uppercase flex-shrink-0 ${
                  item.isActive ? "text-[#FF0000]" : "text-neutral-300"
                }`}
              >
                {item.label}
              </span>

              {index !== navItems.length - 1 && (
                <span className="text-neutral-500 flex-shrink-0">›</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>

      <header className="section-container flex flex-col items-center text-center gap-6 mt-10 md:mt-14 pb-12 md:pb-16 px-4 md:px-0">
        <motion.img
          src="/EMIEMC/EMIEMCLogo.png"
          alt="Root Cause Analysis Logo"
          className="w-[55px] md:w-[55px]"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />

         <motion.h2
          className="text-[#FF0000] font-bold text-[22px] md:text-[32px] tracking-[4px] uppercase font-montserrat leading-[1.2]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Electromagnetic Interference (EMI) and <br/> 
          Electromagnetic Compatibility (EMC) 
          Studies
        </motion.h2>

        <motion.p
          className="max-w-[1300px] text-white/90 font-montserrat font-light text-[13px] md:text-[17px] leading-[1.7] tracking-[0.2px]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Understanding and addressing the root causes of electrical system
          failures is essential for maintaining operational efficiency and
          safety. JEF offers comprehensive Root Cause Analysis (RCA) services to
          identify underlying issues, prevent recurring problems, and optimize
          system performance across industries.<br />

        </motion.p>

        
                <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <p className="mx-auto mt-8 max-w-[1450px] text-[13px] sm:text-[15px] md:text-[20px] leading-[1.75] text-white/90">
                {expandedText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setExpanded(!expanded)}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="mt-10 text-[11px] md:text-[13px] uppercase tracking-[2px] text-white transition-all hover:text-[#FF0000]"
        >
          {expanded ? "READ LESS" : "READ MORE"}
        </motion.button>



                {/* <div className="flex ContactUsAnimation flex-col self-center mt-8 max-w-full text-sm md:text-base leading-6 text-center text-[#FF0000] w-[770px] max-md:mt-10">
                    <p className="px-56 w-full max-md:px-5 max-md:max-w-full">
                        Get in touch for any queries and real-life case-studies
                    </p>
                    <div className="flex mt-2.5 w-full min-h-[24px] max-md:max-w-full" />
                </div>
                <Link href='/get-in-touch' className="ContactUsAnimation flex gap-3.5 justify-center items-center self-center py-4 px-10 max-w-full text-sm tracking-wider leading-none text-center text-white uppercase border border-white border-solid rounded-[60px]">
                    <span className="self-stretch my-auto">CONTACT US</span>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad33562234bc92238f0281eafa23a9b3c49a837f5ae8d3662c67bc1d8b919e14?placeholderIfAbsent=true&apiKey=7904fd7afaaf4ee2b0837ab86d91b244" alt="Ad33562234Bc92238F0281Eafa23A9B3C49A837F5Ae8D3662C67Bc1D8B919E14?Placeholderifabsent=True&Apikey=7904Fd7Afaaf4Ee2B0837Ab86D91B244" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
                </Link> */}


      </header>
    </section>
  );
}
