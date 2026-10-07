"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function FAQPageComponent({ title, parentTitle, parentPath, faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-[#2D2E30]">
      {/* HERO IMAGE */}
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
        <img 
          src="/clps/clpf-faq-bg.png" 
          alt="FAQ Background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </div>

      {/* BREADCRUMB STRIP */}
      <div className="w-full bg-[#1e1e1e] border-b border-white/5 py-4">
        <div className="section-container">
          <div className="flex items-center gap-2 text-[13px] md:text-sm text-white/50 font-montserrat uppercase tracking-[2px]">
            <Link href="/" className="hover:text-[#FF0000] transition-colors">Home</Link>
            <span>&gt;</span>
            {parentPath && parentTitle && (
              <>
                <Link href={parentPath} className="hover:text-[#FF0000] transition-colors">{parentTitle}</Link>
                <span>&gt;</span>
              </>
            )}
            <span className="text-[#FF0000]">FAQ</span>
          </div>
        </div>
      </div>

      {/* FAQ MAIN SECTION */}
      <section className="w-full py-16 md:py-24">
        <div className="section-container flex flex-col gap-10 md:gap-14 px-6 md:px-0">
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider font-montserrat">
            {title || "FAQ"}
          </h1>
          
          {/* ACCORDION GRID */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="rounded-[4px] overflow-hidden bg-[#222222] transition-all duration-300 self-start"
                >
                  <button
                    className="w-full px-6 py-6 text-left flex justify-between items-start focus:outline-none hover:bg-[#2a2a2a] transition-colors min-h-[96px]"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <h3 className={`font-light text-[14px] md:text-[15px] pr-8 leading-relaxed font-montserrat ${isOpen ? "text-white" : "text-white/80"}`}>
                      {faq.q}
                    </h3>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#FF0000] flex-shrink-0 mt-1 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#FF0000] flex-shrink-0 mt-1 transition-transform" />
                    )}
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="px-6 pb-6 text-white/60 font-light text-[14px] sm:text-[15px] font-montserrat leading-[170%] border-t border-white/5 mt-2 pt-4">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Back link */}
          {parentPath && (
            <div className="flex justify-start mt-6">
              <Link href={parentPath}>
                <button
                  className="
                    group
                    w-auto
                    flex
                    items-center
                    justify-center
                    gap-[12px]
                    px-8
                    py-4
                    rounded-full
                    border
                    border-white
                    bg-transparent
                    uppercase
                    text-white
                    tracking-[2px]
                    text-[13px]
                    sm:text-[14px]
                    transition-all
                    duration-300
                    hover:border-[#FF0000]
                    hover:text-[#FF0000]
                    font-montserrat
                    font-medium
                  "
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="transition-transform duration-300 group-hover:-translate-x-1">
                    <path d="M19 12H5M5 12l7-7M5 12l7 7" />
                  </svg>
                  <span>Back to {parentTitle || "Page"}</span>
                </button>
              </Link>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
