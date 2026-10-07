"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = ({ videoSrc }) => {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden bg-[#232427]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] w-full items-end">
        <div className="section-container w-full pb-10 sm:pb-12 md:pb-16 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex max-w-[1200px] flex-col gap-3 px-5 text-white sm:px-6 md:px-0"
          >
            {/* Heading */}
            <h1 className="font-montserrat text-[24px] font-bold uppercase leading-[1.15] tracking-[0.5px] sm:text-[30px] md:text-[42px] md:leading-[1.1]">
              RENEWABLE – POWER SYSTEM STUDIES
            </h1>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
