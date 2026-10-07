"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Overview = () => {
  const stats = [
     {
      img: "/AboutUs/2.png",
      label: "30+ YEARS",
    },
    {
      img: "/AboutUs/3.png",
      label: "30+ COUNTRIES",
    },
    {
      img: "/AboutUs/4.png",
      label: "10K CUSTOMERS",
    },
    {
      img: "/AboutUs/5.png",
      label: "9 PATENTS",
    },
    {
      img: "/AboutUs/1.png",
      label: "90% RETENTION RATE",
    },
   
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        flex
        justify-center
        items-center
        py-[80px]
        md:py-[100px]
      "
    >
      {/* BACKGROUND IMAGE */}
      <Image
        src="/AboutUs/OverviewBg.png"
        alt="JEF By The Numbers Background"
        fill
        priority
        className="object-cover "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* CONTENT */}
      <div
        className="
          section-container
          relative
          z-10
          flex
          flex-col
          items-center
          gap-[50px]
          md:gap-[70px]
        "
      >
        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="
            text-white

            text-[26px]
            md:text-[32px]

            font-bold

            tracking-[3px]
            md:tracking-[4.53px]

            uppercase

            text-center
          "
        >
          OUR LEGACY
        </motion.h1>

        {/* STATS GRID */}
       <div
  className="
    w-full
    max-w-[1200px]
    mx-auto
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-6
    md:gap-8
    lg:gap-10
    xl:gap-[300px]
    place-items-center
  "
>
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                flex
                flex-col
                items-center
                justify-center

                text-center

                group
              "
            >
              {/* ICON */}
              <div
                className="
                  relative
                  w-[70px]
                  h-[70px]
                  sm:w-[60px]
                  sm:h-[60px]
                  md:w-[80px]
                  md:h-[80px]
                  lg:w-[100px]
                  lg:h-[100px]
                  xl:w-[120px]
                  xl:h-[120px]
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              >
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-contain "
                 
                  
                />
              </div>
               {/* LABEL */}
               <h2 className="font-medium text-white text-[16px] tracking-[2px] whitespace-nowrap md:mt-6 lg:mt-9">{item.label}</h2>



             
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;