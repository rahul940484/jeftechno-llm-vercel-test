"use client";


import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const cards = [
  {
    id: 1,
    image: "/EHA/eha-1.png",
    title: "ASSESSMENT, NOT JUST TESTING",
    description:
      "Each test result is interpreted in the context of the complete earthing system — soil conditions, grid geometry, fault current levels, and protection settings — to produce directly actionable findings",
  },
  { id: 2,
    image: "/EHA/eha-2.png",
    title: "CARRIED OUT ON LIVE SYSTEMS",
    description:
      "Designed for live systems, eliminating the production impact that would make comprehensive testing impractical for most facilities.",
  },
  { id: 3,
    image: "/EHA/eha-3.png",  
    title: "LOCATION-SPECIFIC FINDINGS",
    description:
      "JEF’s methodology pinpoints the specific location of each deficiency — open riser, isolated grid section, or corroded connection — enabling targeted corrective action.",
  },
  { id: 4,
    image: "/EHA/eha-4.png",
    title: "EARTH GRID MODELLING AND SIMULATION",
    description:
      "Computer modelling using CDEGS software produces quantitative assessments of GPR, touch potential distribution, and step potential profiles across the site.",
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
        {/* Heading */}


        {/* --- NAVIGATION BUTTONS AND SECTION HEADER --- */}
        <div className="flex justify-between items-start w-full mt-12 mb-8">
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
            WHY CHOOSE JEF FOR EARTHING HEALTH ASSESSMENT
          </h2> 

           <p className="
              text-white
              text-[14px]
              md:text-[16px]
              leading-[1.7]
            ">
            As a pioneer in Earthing integrity testing services, we at JEF have over two decades of experience covering 300,000 riser connections <br /> spread across 18 countries, 400 substations ranging from 33kV to 765kV process plants and other critical installations. With several patents <br /> in this field, our level of expertise is unmatched even as we keep innovating further.
          </p>

        </motion.div>
          
          {/* Control Buttons Container */}
          <div className="flex gap-4 ">
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