"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import DownloadSection from "./sections/DownloadSection";
import WhyPss from "./sections/WhyPss";
import FAQ from "./sections/FAQ";

const PowerSystemStudies = () => {

  

  return (
    <div className="bg-[#232427]">
      <Hero videoSrc="/Consultancy/Consulting - Industrial.mp4" />
      <ProductIntro 
        
        
      />
      <DetailedContent />
      <AreaOfExpertise />
      <WhyPss/>
      {/* FAQ Section */}
      <FAQ />

      <DownloadSection />
    </div>
  );
};

export default PowerSystemStudies;
