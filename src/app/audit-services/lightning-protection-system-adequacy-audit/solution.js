"use client";

import React from "react";
import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";

import AreaOfExpertise from "./sections/AreaOfExpertise";
import DownloadSection from "./sections/DownloadSection";
import ReferenceStandards from "./sections/ReferenceStandards";
import FAQ from "./sections/FAQ";

const LPSAAAudit = () => {
 


 
  return (
    <div className="bg-[#232427]">
      <Hero title="LIGHTNING PROTECTION AUDIT" videoSrc="/Audit Services/Lightning Protection Audit - Audit Services.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
     
      <AreaOfExpertise />
      <ReferenceStandards/>
{/* FAQ Section */}
      <FAQ />

      <DownloadSection />
    </div>
  );
};

export default LPSAAAudit;
