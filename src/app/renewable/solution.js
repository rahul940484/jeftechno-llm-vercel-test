"use client";
import FAQ from "./sections/FAQ";


import Hero from "./sections/Hero";
import ProductIntro from "./sections/ProductIntro";
import DetailedContent from "./sections/DetailedContent";

import DownloadSection from "./sections/DownloadSection";

const RenewableEnergy = () => {
  

  return (
    <div className="bg-[#232427]">
      <Hero  videoSrc="/Consultancy/Consulting - Renewable.mp4" />
      <ProductIntro 
       
      />
      <DetailedContent  />
     
      <FAQ />
      <DownloadSection />
    </div>
  );
};

export default RenewableEnergy;
