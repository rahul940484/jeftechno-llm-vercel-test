"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import Download from "./sections/Download";
import FAQ from "./sections/FAQ";

const EarthingStudies = () => {
  return (
    <div className="bg-[#232427]">
      <Hero />
      <ProductIntro />
      <DetailedContent />
{/* FAQ Section */}
      <FAQ />

      <Download />
    </div>
  );
};

export default EarthingStudies;
