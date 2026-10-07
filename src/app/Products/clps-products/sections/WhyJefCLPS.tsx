"use client";


import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/clps/1.jpeg",
    title: "TESTED TO 200 kA — DOUBLE THE IEC STANDARD LIMIT",
    description:
      "JEF type-tests its CLPS components at 200 kA on the 10/350 μs waveform — twice the 100 kA limit required by IEC 62561. Type-test certificates are available for review.",
  },
  {
    id: 2,
    image: "/clps/2.png",
    title: "IEC 62305:2024 ALIGNED",
    description:
      "Product range, design tools, and technical documentation are aligned with the current edition of the standard. The 2024 revision.",
  },
  {
    id: 3,
    image: "/clps/3.png",
    title: "COMPREHENSIVE SYSTEM FROM ONE SOURCE",
    description:
      "Every component required for a comprehensive lightning protection system — from air termination rod to point-of-use SPD — is available from JEF as a coordinated, type-tested range.", 
  },
  {
    id: 4,
    image: "/clps/4.png",
    title: "JEF SHIELD — RISK ASSESSMENT IN UNDER 90 SECONDS",
    description:
      "Risk assessment, concept drawings, bill of materials, and budget estimate delivered in under 90 seconds. Built to IS/IEC 62305.",
  },
  {
    id: 5,
    image: "/clps/5.png",
    title: "JEF E-BUILD",
    description:
      "An automated tool to guide & monitor the installation of the lightning protection system at sight.",
  },
  {
    id: 6,
    image: "/clps/6.png",
    title: "ENGINEERING SUPPORT ACROSS THE PROJECT LIFECYCLE",
    description:
      "JEF engineering team provides technical support from risk assessment and system design through product selection, installation supervision, and inspection.",
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
            className=" font-montserrat  text-[24px] md:text-[32px] uppercase font-bold tracking-[2px] md:tracking-[4px] text-[#FF0000]">
            WHY JEF CLPS?
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