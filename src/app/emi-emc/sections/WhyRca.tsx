"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    image: "/EMIEMC/IDENTIFIES EMI ISSUES DURING DESIGN TO ENABLE ECONOMICAL MITIGATION.png",
    title: "SITE SURVEYS AND EMI/EMC ANALYSIS",
    description:
      "Comprehensive on-site surveys to identify sources of electromagnetic interference.\nDetailed analysis of interference levels affecting system performance.",
  },
  {
    id: 2,
    image: "/EMIEMC/IMPROVES THE RELIABILITY OF ELECTRICAL AND CONTROL SYSTEMS.png",
    title: "SHIELDING EFFECTIVENESS EVALUATION",
    description:
      "Assessment of shielding effectiveness in protecting sensitive areas from electromagnetic disturbances. Recommendations for improving shielding to ensure system reliability.",
  },
  {
    id: 3,
    image: "/EMIEMC/MINIMIZES NUISANCE TRIPPING AND UNPLANNED DOWNTIME.png",        
    title: "Grounding and Bonding Assessments",
    description:
      "Evaluation of grounding and bonding systems to minimize electromagnetic emissions. Design recommendations for improving system grounding, ensuring compatibility with sensitive devices.",
  },
  {
    id: 4,
    image: "/EMIEMC/REDUCES SYSTEM ERRORS AND COMMUNICATION DISTURBANCES.png",
    title: "EMC Compliance Testing",
    description:
      "Conducting tests to ensure equipment and systems comply with international EMC standards such as IEC 61000. Providing actionable insights for achieving regulatory compliance.",
  },
  {
    id: 5,
    image: "/EMIEMC/SUPPORTS COMPLIANCE WITH INTERNATIONAL EMC STANDARDS.png",
    title: "Mitigation Solutions",
    description:
      "Tailored solutions for mitigating EMI issues, including filtering, shielding, and redesigning system layouts. Implementation of advanced techniques to enhance electromagnetic compatibility.",
  },  
  {
    id: 6,
    image: "/EMIEMC/DELIVERS COMPLETE ENGINEERING SOLUTIONS FROM STUDY TO MITIGATION.png",
    title: "Simulation and Modelling",
    description:
      "Utilizing cutting-edge tools for simulating electromagnetic environments and analyzing interference patterns.Designing optimized layouts to minimize EMI risks.",
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
        <div className="flex justify-between items-start w-full mt-12 mb-8">
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
                        INDUSTRY APPLICATIONS

          </h2> 

           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
                        JEF’s Root Cause Analysis services cater to a wide range of industries, providing customized solutions for:

          </p>

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