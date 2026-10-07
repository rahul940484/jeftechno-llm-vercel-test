"use client";

import React from "react";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fc] text-gray-900 relative overflow-hidden">
      
      {/* 🔴 Background Blobs */}
      <div className="absolute -z-10 w-[600px] h-[600px] bg-[#FF0000]/5 rounded-full blur-[120px] -top-20 -left-20"></div>
      <div className="absolute -z-10 w-[400px] h-[400px] bg-[#FF0000]/5 rounded-full blur-[100px] bottom-0 right-0"></div>

      {/* 🔴 NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
          <div className="text-2xl font-bold tracking-tight">
            YourBrand
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <span className="text-gray-500 hover:text-[#FF0000] cursor-pointer">
              Platform
            </span>
            <span className="text-gray-500 hover:text-[#FF0000] cursor-pointer">
              Vision
            </span>
            <span className="text-gray-500 hover:text-[#FF0000] cursor-pointer">
              Manifesto
            </span>
          </div>

          <button className="bg-[#FF0000] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#FF0000] transition">
            Get Early Access
          </button>
        </nav>
      </header>

      {/* 🔴 MAIN */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pt-28">
        <section className="max-w-4xl w-full text-center space-y-12 py-20">

          {/* Progress Bar */}
          <div className="flex justify-center">
            <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF0000] w-1/3 animate-pulse"></div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              In Development
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
              We’re working hard to bring something amazing.
              <br className="hidden md:block" />
              Stay tuned.
            </p>
          </div>

          {/* Email Form */}
         
          {/* Feature Cards */}
        
        </section>
      </main>

      {/* 🔴 FOOTER */}
      
    </div>
  );
}
