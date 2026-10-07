"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    image: "/RCA/1.png",
    title: "FULL STUDY RANGE, SINGLE ACCOUNTABLE TEAM",
    description:
      "From ETAP-based steady-state studies to PSCAD electromagnetic transient analysis, we deliver the complete study programme end-to-end — with one team responsible for both the analysis and the engineering outcomes.",
  },
  {
    id: 2,
    image: "/RCA/2.png",
    title: "SOFTWARE INDEPENDENCE",
    description:
      "ETAP, PSCAD/EMTDC, PSS/E, DIgSILENT, SKM, and DSA Tools — no software constraint on what we can offer or how we work.",
  },
  {
    id: 3,
    image: "/RCA/3.png",
    title: "OIL AND GAS SECTOR DEPTH",
    description:
      "Offshore platforms, subsea cables, high-voltage GIS, complex multi-source networks. We know the operating environment and the standards that govern it.",
  },
  {
    id: 4,
    image: "/RCA/4.png",
    title: "STANDARDS-REFERENCED DELIVERABLES",
    description:
      "Every finding traceable to the specific standard clause that defines the requirement.",
  },
  {
    id: 5,
    image: "/RCA/5.png",
    title: "METHODOLOGY BEYOND THE MINIMUM",
    description:
      "We identify constraints and failure modes beyond standard studies, providing the project team with a complete picture before decisions become irreversible.",
  },
];



// ===================================================================================================================================
 
const duplicatedCards = [...cards, ...cards];

export default function WhyRca() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

 
  const [currentIndex, setCurrentIndex] = useState(0);
  const originalCardsCount = duplicatedCards.length / 2; 

  const handlePrev = () => {
    setCurrentIndex((prev) => {
 
      if (prev === 0) {
        return originalCardsCount - 1;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
 
      if (prev >= originalCardsCount) {
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <section className="w-full bg-[#232427] py-16 md:py-[72px] overflow-hidden">
      <div className="section-container">


        {/* --- NAVIGATION BUTTONS AND SECTION HEADER --- */}
        <div className="flex justify-between items-center w-full mt-12 mb-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h2
            className="
              font-montserrat
              text-[24px]
              md:text-[32px]
              uppercase
              font-bold
              tracking-[2px]
              md:tracking-[4px]
              text-[#FF0000]
            "
          >
            WHY JEF
          </h2> 


        </motion.div>
          
          {/* Control Buttons Container */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-[#161414] transition-all duration-300"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#161414] hover:bg-white/80 transition-all duration-300"
            >
              →
            </button>
          </div>
        </div>

          {/* --- CARDS SLIDER --- */}
          <div className="relative overflow-hidden w-full">
            <motion.div
              className="flex gap-6 md:gap-12 w-max"
              // We let Framer Motion animate directly using a responsive ternary check
              animate={{
                x: isMounted && window.innerWidth >= 768 
                  ? `calc(-${currentIndex} * (460px + 48px))` // Desktop: 1 whole card slide
                  : `calc(-${currentIndex} * (300px + 24px))`  // Mobile: 1 whole card slide
              }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
            >
            {duplicatedCards.map((card, index) => (
              <div
                key={index}
                className="w-[300px] md:w-[460px] min-w-[300px] md:min-w-[460px] flex flex-col gap-5 group"
              >
                {/* Image */}
                <div
                  className="
                    w-full
                    aspect-[463/239]
                    overflow-hidden
                  "
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                     loading="lazy" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="
                      text-white
                      uppercase
                      text-[14px]
                      md:text-[16px]
                      leading-[1.5]
                      font-medium
                    "
                  >
                    {card.id}. {card.title}
                  </h3>

                  <p
                    className="
                      text-[#D0D0D0]
                      text-[12px]
                      md:text-[14px]
                      leading-[1.7]
                      font-light
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}