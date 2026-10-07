"use client";
import FAQ from "./sections/FAQ";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";
import AreaOfExpertise from "./sections/AreaOfExpertise";
import DownloadSection from "./sections/DownloadSection";
import WhyRca from "./sections/WhyRca";

const RootCauseAnalysis = () => {
 

  return (
    <div className="bg-[#232427]">
      <Hero  videoSrc="/RCA/Root Cause Analysis.mp4"/>
      <ProductIntro 

      />
      <DetailedContent  />
      <AreaOfExpertise />
      <WhyRca/>
      <FAQ />
      {/* <DownloadSection /> */}
    </div>
  );
};

export default RootCauseAnalysis;
