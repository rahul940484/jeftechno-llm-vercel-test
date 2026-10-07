"use client";

import React, { useState } from "react";
import Link from "next/link";

const navigationItems = [
  { number: "01", title: "About JEF", path: "/about-us" },
  
  { number: "02", title: "employee login", path: "https://jef.greythr.com", newTab: true },
];

const contentMap = {
  "01": "JEF is a specialist electrical engineering company with an uncompromising focus on the safety and reliability of electrical systems.",
  "02": "Please keep your login credentials secure and never share them with unauthorized individuals.",
};

const AboutSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="flex overflow-hidden flex-col h-[80vh] pl-[11%] items-start px-16 pt-5 pb-96 bg-[#2D2E30] max-md:px-5 max-md:pb-24">
      <div className="ml-10 max-w-full w-[994px]">
        <div className="flex gap-5 max-md:flex-col">
          <nav className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-wrap grow gap-6 max-md:mt-10 max-md:max-w-full h-full">
              <div className="flex flex-col grow shrink-0 items-start my-auto basis-0 w-fit max-md:max-w-full">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-7 items-center mt-11 uppercase tracking-[3.36px] max-md:mt-10"
                  >
                    <div className="self-stretch my-auto text-base text-[#FF0000]">
                      {item.number}
                    </div>
                    <Link
                      href={item.path || "#"}
                      onMouseEnter={() => setHoveredItem(item.number)}
                      className="self-stretch my-auto text-lg hover:text-gray-400 font-medium text-white"
                      target={item.newTab ? "_blank" : undefined}
                    >
                      {item.title}
                    </Link>
                    <div className="flex items-center">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bb3117bb1e657fdbc997cd15e47263db3ce1251843c4a3543e9042a61e0fd2a"
                        alt="2Bb3117Bb1E657Fdbc997Cd15E47263Db3Ce1251843C4A3543E9042A61E0Fd2A"
                        className="w-2"
                       loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="shrink-0 w-0 border-l border-solid border-neutral-700 mt-[9%] min-h-full"
                role="separator"
                aria-orientation="vertical"
              ></div>
            </div>
          </nav>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div
              className={`transition-all duration-500 ease-in-out flex gap-10 mt-[10%] text-xl font-medium text-white uppercase tracking-[3.36px] max-md:mt-10 ${
                hoveredItem
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
            >
              <Link href="/about-us">
                <h2 className="text-xs leading-5 hover:text-gray-400">
                  {hoveredItem ? contentMap[hoveredItem] : "About"}
                </h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
