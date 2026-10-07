"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import Download from "./sections/Download";
import WhyJefSpd from "./sections/WhyJefSpd";
import FAQ from "./sections/FAQ";



const SurgeProtectiveDevices = () => {
  return (
    <div className="bg-[#232427]">
      <Hero />
      <ProductIntro />
      <DetailedContent />
      <WhyJefSpd />
{/* FAQ Section */}
      <FAQ />

      <Download />
    </div>
  );
};

export default SurgeProtectiveDevices;
