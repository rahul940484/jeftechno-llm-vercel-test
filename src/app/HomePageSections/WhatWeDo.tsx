"use client";

import { useState, useEffect, useRef } from "react";
import "./components/whatwedo.css";

export default function WhatWeDoSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const [showContent, setShowContent] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  const [activeSection, setActiveSection] = useState("products");
  const [activeCard, setActiveCard] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !videoStarted) {
          setVideoStarted(true);

          if (videoRef.current) {
            videoRef.current.play();
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [videoStarted]);

  const sections = {
    products: {
      png: "/HomePageImg/J.png",
      dots: [
        {
          heading: "CLPS\n ",
          description: `• Full coverage — from rooftop to foundation\n• Designed to IEC and IS standards\n• Protects people, equipment, and structures`,
          x: 280,
          y: 55,
          xmob: 370,
          ymob: 15,
          labelPos: "top",
        },
        {
          heading: "JEF SHIELD &\nE-BUILD",
          description: `• Full risk assessment to IS/IEC 62305 — instantly\n• Outputs design drawings and bill of materials\n• Finds the most cost-effective protection option\n• Step-by-step guided installation workflow`,
          x: 70,
          y: 320,
          xmob: 100,
          ymob: 600,
          labelPos: "top",
        },
        {
          heading: "SURGE PROTECTION\nDEVICES",
          description: `• Protects panels, motors, and sensitive electronics\n• Available for Type 1, 2, and 3 applications\n• Compliant with IEC 61643 standard`,
          x: 250,
          y: 410,
          xmob: 360,
          ymob: 700,
          labelPos: "bottom",
        },
        {
          heading: "EARLY STREAMER\nEMISSION",
          description: `• Up to 107m protection radius per unit\n• Fewer rods, lower installation cost\n• Certified to NFC 17-102 standard`,
          x: 315,
          y: 280,
          xmob: 440,
          ymob: 450,
          labelPos: "bottom",
        },
        {
          heading: "EARTHING &\nGROUNDING SOLUTIONS",
          description: `• Reduces shock risk and equipment damage\n• Works for industrial, commercial, and utility sites\n• Low-resistance, long-lasting installations`,
          x: 400,
          y: 110,
          xmob: 530,
          ymob: 130,
          labelPos: "top",
        },
      ],
    },
    audit: {
      png: "/HomePageImg/WhatWeDoSection/E.png",
      dots: [
        {
          heading: "EARTHING\nSTUDIES",
          description: `• Detects hidden faults in your earthing network\n• Prevents equipment damage and shock risk\n• Meets safety compliance standards`,
          x: 150,
          y: 40,
          xmob: 180,
          ymob: 20,
          labelPos: "top",
        },
        {
          heading: "LIGHTNING PROTECTION\n SYSTEM ADEQUACY",
          description: `• Reviews rods, conductors, and bonding\n• Checks surge protection on critical systems\n• Validates against current IEC/IS standards`,
          x: 20,
          y: 320,
          xmob: 50,
          ymob: 500,
          labelPos: "left",
        },
        {
          heading: "INSTRUMENTATION\nEARTHING",
          description: `• Eliminates noise and signal interference\n• Protects sensitive control systems\n• Ensures accurate, reliable readings`,
          x: 400,
          y: 110,
          xmob: 520,
          ymob: 160,
          labelPos: "top",
        },
        {
          heading: "POWER QUALITY & ROOT\nCAUSE ANALYSIS",
          description: `• Identifies harmonics, dips, and surges\n• Reduces unplanned downtime and failures\n• Cuts energy waste and utility penalties`,
          x: 280,
          y: 240,
          xmob: 370,
          ymob: 420,
          labelPos: "bottom",
        },
        {
          heading: "ELECTRICAL &\n FIRE SAFETY AUDITS",
          description: `• Spots overloaded circuits and wiring faults\n• Checks fire suppression and alarm systems\n• Ensures compliance with relevant standards`,
          x: 300,
          y: 400,
          xmob: 400,
          ymob: 770,
          labelPos: "bottom",
        },
      ],
    },
    consulting: {
      png: "/HomePageImg/WhatWeDoSection/F.png",
      dots: [
        {
          heading: "POWER SYSTEM STUDIES\n- RENEWABLE",
          description: `• Grid integration, load flow, and fault analysis\n• Ensures stable, compliant grid connections\n• Supports solar, wind, and hybrid projects`,
          x: 420,
          y: 180,
          xmob: 370,
          ymob: 560,
          labelPos: "top",
        },
        {
          heading: "POWER SYSTEM STUDIES\n- INDUSTRIAL",
          description: `• Short circuit, arc flash, and protection studies\n• Identifies weak points before they cause failures\n• Supports plant upgrades, expansions, and audits`,
          x: 300,
          y: 290,
          xmob: 560,
          ymob: 280,
          labelPos: "bottom left-[20px] ",
        },
        {
          heading: "EMI - EMC",
          description: `• Comprehensive on-site surveys to identify sources of electromagnetic interference\n• Detailed analysis of interference levels affecting system performance.\n• Assessment of shielding effectiveness in protecting sensitive areas from electromagnetic disturbances`,
          x: 150,
          y: 465,
          xmob: 200,
          ymob: 900,
          labelPos: "right",
        },
      ],
    },
  };

  const currentSection = sections[activeSection];
  const currentData = currentSection.dots[activeCard];

  const backgrounds = [
    "/HomePageImg/WhatWeDoSection/Solution-1.png",
    "/HomePageImg/WhatWeDoSection/Solution-2.png",
    "/HomePageImg/WhatWeDoSection/Solution-3.png",
    "/HomePageImg/WhatWeDoSection/Solution-4.png",
    "/HomePageImg/WhatWeDoSection/Solution-5.png",
  ];

  const isCLPS = activeSection === "products" && currentData.heading.includes("CLPS");
  const isConsulting = activeSection === "consulting";

  const background = isCLPS
    ? "/HomePageImg/WhatWeDoSection/solution-clps.jpeg"
    : isConsulting
    ? "/HomePageImg/WhatWeDoSection/solution-consulting.jpeg"
    : backgrounds[activeCard % backgrounds.length];

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        h-[1050px]
        sm:h-[1150px]
        md:h-[1400px]
        lg:h-[1050px]
        overflow-hidden
        bg-black
      "
    >
      {/* BG */}
      <img
        src={background}
        
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1800ms] ease-in-out ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
       loading="lazy"  alt="Image"/>

      {/* VIDEO */}
      <video
        ref={videoRef}
        muted
        playsInline
        onEnded={() => setShowContent(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
          videoStarted ? (showContent ? "opacity-0" : "opacity-100") : "opacity-0"
        }`}
      >
        <source src="/HomePageImg/Earthzoom.mp4" type="video/mp4" />
      </video>

      {/* Black cover that fades out once video starts — prevents flash */}
      <div
        className={`absolute inset-0 bg-black z-[5] transition-opacity duration-700 pointer-events-none ${
          videoStarted ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/35 z-10" />

      {/* MAIN CONTAINER */}
      <div className="absolute inset-0 z-20 flex items-center justify-center w-full overflow-hidden">
        <div
          className="
            section-container
            w-full
            h-full
            px-6
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
            flex
            flex-col
            lg:flex-row
            items-start
            justify-start
            lg:justify-between
            gap-12
            lg:gap-12
            xl:gap-40
            pt-14
            sm:pt-20
            lg:pt-0
            overflow-hidden
          "
        >
          {/* LEFT SIDE: NAVIGATION */}
          <div className="w-full lg:h-full lg:flex-1 min-w-0 flex flex-col justify-start lg:mt-40 z-[60]">
            <div className="w-full lg:max-w-[260px] flex flex-col items-start text-left">
              <div className="mb-4 lg:mb-12">
                <h2
                  className="
                    font-montserrat
                    text-[22px]
                    sm:text-[28px]
                    xl:text-[30px]
                    tracking-[4px]
                    uppercase
                    text-white
                    xl:whitespace-nowrap
                  "
                >
                  WHAT WE DO
                </h2>
              </div>

              <div className="w-full flex lg:flex-col overflow-x-auto no-scrollbar gap-4 sm:gap-6 lg:gap-0 pb-2 lg:pb-0">
                {[
                  { id: "products", title: "PRODUCTS" },
                  { id: "audit", title: "AUDIT SERVICES" },
                  { id: "consulting", title: "CONSULTING SERVICES" },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setActiveCard(0);
                    }}
                    className="group py-2 lg:py-5 cursor-pointer flex-shrink-0 lg:max-w-[180px] xl:max-w-none"
                  >
                    <div className="relative h-[1px] bg-white/20 overflow-hidden mb-2 lg:mb-3">
                      <span
                        className={`absolute left-0 top-0 h-full bg-[#FF0000] transition-all duration-500 ${
                          activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </div>

                    <div
                      className={`text-[12px] sm:text-[14px] md:text-[15px] xl:whitespace-nowrap tracking-[1.5px] uppercase transition-all duration-300 flex items-center justify-between gap-2 ${
                        activeSection === item.id ? "text-[#FF0000]" : "text-white"
                      }`}
                    >
                      {item.title}
                      {activeSection === item.id && (
                        <span className="text-[#FF0000] text-[25px] hidden md:inline ml-2 lg:text-[30px]">
                          →
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER SIDE: INTERACTIVE GRAPH & CHARACTER IMAGES */}
          <div
            className={`
              relative
              lg:mt-40
              w-full
              max-w-[340px]
              sm:max-w-[420px]
              lg:max-w-[450px]
              h-[340px]
              sm:h-[420px]
              lg:h-[550px]
              flex-shrink-0
              min-w-0
              transition-opacity
              duration-1000
              mx-auto
              lg:mx-0
              ${showContent ? "opacity-100" : "opacity-0"}
            `}
          >
            {/* The character image now explicitly mounts and handles scaling on mobile */}
            <img
              key={activeSection}
              src={currentSection.png}
              
              className="
                absolute
                inset-0
                w-full
                h-full
                object-contain
                opacity-90
                pointer-events-none
                z-[10]
                select-none
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                animate-[fadeScale_0.7s_ease]
                rotate-[-20deg]
              "
             loading="lazy"  alt="Image"/>

            {currentSection.dots.map((dot, index) => {
              const isActive = activeCard === index;

              // Consolidated responsive percentages calculation matching the actual box limits
              const coordinateTop = isMobile
                ? `${(dot.ymob / 1000) * 100}%`
                : `${(dot.y / 550) * 100}%`;
              const coordinateLeft = isMobile
                ? `${(dot.xmob / 600) * 100}%`
                : `${(dot.x / 450) * 100}%`;

              return (
                <div
                  key={`${activeSection}-${index}`}
                  className="absolute z-[30] group cursor-pointer animate-[fadeScale_0.7s_ease]"
                  style={{
                    top: coordinateTop,
                    left: coordinateLeft,
                  }}
                  onMouseEnter={() => !isMobile && setActiveCard(index)}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="relative flex items-center justify-center">
                    {/* ACCURATE PLACED LABEL */}
                    <div
                      className={`
                        absolute
                        whitespace-pre
                        text-center
                        text-[10px]
                        sm:text-[11px]
                        md:text-[12px]
                        lg:text-[13px]
                        font-medium
                        tracking-wider
                        uppercase
                        text-white
                        transition-all
                        duration-500
                        pointer-events-none
                        shadow-sm
                        ${
                          dot.labelPos.includes("top")
                            ? "bottom-full mb-3 left-1/2 -translate-x-1/2"
                            : dot.labelPos.includes("bottom")
                            ? "top-full mt-3 left-1/2 -translate-x-1/2"
                            : dot.labelPos.includes("left")
                            ? "right-full mr-3 top-1/2 -translate-y-1/2"
                            : "left-full ml-3 top-1/2 -translate-y-1/2"
                        }
                        ${
                          isActive
                            ? "opacity-100 scale-100 z-40"
                            : "opacity-60 scale-95 group-hover:opacity-100 group-hover:scale-100"
                        }
                      `}
                    >
                      {dot.heading}
                    </div>

                    <button className="relative flex items-center justify-center" aria-label={dot.heading}>
                      {/* ping ring for inactive */}
                      {!isActive && (
                        <span
                          className="
                            absolute
                            w-7
                            h-7
                            sm:w-9
                            md:w-10
                            sm:h-9
                            md:h-10
                            rounded-full
                            bg-[#FF0000]/30
                            animate-ping
                          "
                        />
                      )}

                      {/* outer ring */}
                      <span
                        className={`
                          absolute
                          rounded-full
                          border
                          w-7
                          h-7
                          sm:w-9
                          md:w-10
                          sm:h-9
                          md:h-10
                          transition-all
                          duration-500
                          ${isActive ? "border-white scale-110" : "border-white/40"}
                        `}
                      />

                      {/* center dot */}
                      <span
                        className={`
                          rounded-full
                          w-3.5
                          h-3.5
                          sm:w-4
                          md:w-5
                          sm:h-4
                          md:h-5
                          transition-all
                          duration-500
                          ${isActive ? "bg-white scale-110" : "bg-[#FF0000] animate-pulse"}
                        `}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE: DESCRIPTION CARDS */}
          <div
            className={`
              w-full
              lg:flex-1
              min-w-0
              max-w-full
              lg:max-w-[480px]
              transition-opacity
              duration-1000
              mt-4
              lg:mt-65
              ${showContent ? "opacity-100" : "opacity-0"}
              z-[60]
            `}
          >
            <div className="w-full h-[2px] bg-[#FF0000] mb-4 lg:mb-6" />

            <div
              key={activeCard + activeSection}
              className="animate-[fadeUp_0.7s_ease] transition-all duration-700"
            >
              <h3
                className="
                  text-white
                  uppercase
                  tracking-[2px]
                  lg:tracking-[3px]
                  text-[18px]
                  sm:text-[22px]
                  lg:text-[28px]
                  font-light
                  leading-[1.4]
                  mb-4
                  lg:mb-8
                "
              >
                {currentData.heading}
              </h3>

              <div
                className="
                  text-white/90
                  text-[13px]
                  sm:text-[17px]
                  lg:text-[18px]
                  leading-[1.4]
                  whitespace-pre-line
                  font-light
                "
              >
                {currentData.description}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}