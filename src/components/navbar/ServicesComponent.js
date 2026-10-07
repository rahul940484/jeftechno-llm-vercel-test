"use client";

import React, { useState } from "react";
import Link from "next/link";

const ServiceItem = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-14 h-14 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        
        className="w-full h-full object-contain"
       alt="Image"/>
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);

const ServiceItem2 = ({ icon, text, path, isVisible }) => (
  <div
    className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[50px] transition-all duration-500 ease-in-out ${
      isVisible
        ? "opacity-100 translate-y-0 visible"
        : "opacity-0 translate-y-4 invisible"
    }`}
  >
    <div className="w-14 h-14 flex items-center justify-center shrink-0">
      <img
        loading="lazy"
        src={icon}
        
        className="w-full h-full object-contain"
       alt="Image"/>
    </div>

    <Link href={path}>
      <div className="text-xs uppercase tracking-[3.36px] font-medium hover:text-gray-400">
        {text}
      </div>
    </Link>
  </div>
);

const ServicesComponent = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const services = [
    { icon: "/nav-clps.png", text: "CLPS", path: "/Products/clps-products" },
    { icon: "/nav-earthing-grounding.png", text: "EARTHING GROUNDING", path: "/Products/earthing-studies" },
    { icon: "/nav-ese.png", text: "ESE", path: "/Products/ese-lightning-protection" },
    { icon: "/nav-ese-lightning-protection.png", text: "ESE NIMBUS", path: "/Products/lightning-protection-studies" },
    { icon: "/nav-jef-shield.png", text: "JEF-SHIELD & E-BUILD", path: "/Products/JEF-shield" },
    { icon: "/nav-spd.png", text: "SURGE PROTECTION DEVICES", path: "/Products/surge-protective-devices" },
  ];

  const services2 = [
    { icon: "/nav-ehs.png", text: "EARTHING HEALTH ASSESSMENT", path: "/audit-services/earthing-health-assessment" },
    { icon: "/nav-ie.png", text: "INSTRUMENTATION EARTHING SYSTEM", path: "/audit-services/instrumentation-system" },
    { icon: "/nav-lps.png", text: "LIGHTNING PROTECTION AUDIT", path: "/audit-services/lightning-protection-system-adequacy-audit" },
    { icon: "/nav-pqs.png", text: "POWER QUALITY STUDIES", path: "/audit-services/power-quality-studies-and-analysis-services" },
    { icon: "/nav-efs.png", text: "ELECTRICAL & FIRE SAFETY", path: "/audit-services/electrical-and-fire-safety-audit" },
  ];

  const services3 = [
    { 
      icon: "/nav-industrial.png", 
      text: "Industrial – Power System Studies", 
      path: "/power-system-studies" },
    {
      icon: "/nav-renewable.png",
      text: "Renewable – Power System Studies",
      path: "/renewable",
    
    },
    {
      icon: "/nav-rca.png",
      text: "ROOT CAUSE ANALYSIS",
      path: "/root-cause-analysis",
    },
    {
      icon: "/emi-emc-nav.png",
      text: "EMI & EMC",
      path: "/emi-emc",
    }
  ];

  return (
    <section className="flex flex-col h-[82vh] pl-[11%] px-16 pt-5 bg-[#2D2E30] max-md:px-5">
      <div className="ml-10 w-full max-w-[1016px] h-full">
        <div className="flex gap-5 h-full max-md:flex-col">
          <div className="flex flex-col justify-start w-2/5 max-md:w-full">
            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-[#FF0000] tracking-[3.36px]">01</div>
              <div
                onMouseEnter={() => { setIsHovered(true); setIsHovered2(false); setIsHovered3(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">PRODUCTS</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="2Bb3117Bb1E657Fdbc997Cd15E47263Db3Ce1251843C4A3543E9042A61E0Fd2A" className="w-2"  loading="lazy" />
                </div>
              </div>
            </header>

            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-[#FF0000] tracking-[3.36px]">02</div>
              <div
                onMouseEnter={() => { setIsHovered2(true); setIsHovered(false); setIsHovered3(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">AUDIT SERVICES</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="2Bb3117Bb1E657Fdbc997Cd15E47263Db3Ce1251843C4A3543E9042A61E0Fd2A" className="w-2"  loading="lazy" />
                </div>
              </div>
            </header>

            <header className="flex gap-7 items-center mt-14">
              <div className="text-base font-medium text-[#FF0000] tracking-[3.36px]">03</div>
              <div
                onMouseEnter={() => { setIsHovered3(true); setIsHovered(false); setIsHovered2(false); }}
                className="flex gap-5 cursor-pointer"
              >
                <h2 className="text-lg text-white hover:text-gray-400 tracking-[3.36px]">CONSULTING SERVICES</h2>
                <div className="flex items-center">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a" alt="2Bb3117Bb1E657Fdbc997Cd15E47263Db3Ce1251843C4A3543E9042A61E0Fd2A" className="w-2"  loading="lazy" />
                </div>
              </div>
            </header>
          </div>

          <div className="flex flex-col w-3/5 h-full text-white">
            <div className="flex h-full items-start gap-10">
              <div className="w-[1px] bg-neutral-700 h-[70%] mt-10" />
              <div className="relative flex-1 h-full flex items-start">
                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services.map((service, index) => (
                    <ServiceItem key={index} {...service} isVisible={isHovered} />
                  ))}
                </div>

                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered2 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services2.map((service2, index) => (
                    <ServiceItem2 key={index} {...service2} isVisible={isHovered2} />
                  ))}
                </div>

                <div className={`absolute inset-0 grid grid-cols-2 gap-x-20 gap-y-10 content-start transition-all duration-300 ${isHovered3 ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"}`}>
                  {services3.map((service, index) => (
                    <div key={index} className="flex flex-col">
                      <div className={`flex gap-5 items-center mt-8 first:mt-10 min-h-[60px] transition-all duration-500 ease-in-out ${isHovered3 ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible"}`}>
                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                          <img loading="lazy" src={service.icon}  className="w-full h-full object-contain"  alt="Image"/>
                        </div>
                        <div className="flex items-center gap-4">
                          <Link href={service.path}>
                            <div className="text-[13px] whitespace-normal uppercase tracking-[3.36px] font-medium hover:text-gray-400">
                              {service.text}
                            </div>
                          </Link>
                          {service.subItems && (
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      
                      {service.subItems && (
                        <div className={`ml-[72px] mt-4 flex flex-col gap-6 transition-all duration-700 delay-150 ${isHovered3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                          {service.subItems.map((sub, i) => (
                            <Link key={i} href={sub.path}>
                              <div className="text-[13px] whitespace-normal font-medium tracking-[3px] text-white  ml-2 hover:text-[#FF0000] transition-colors duration-300">
                                {sub.text}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
