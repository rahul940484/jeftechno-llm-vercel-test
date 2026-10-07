"use client";

import { useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-montserrat text-[#FF0000] mb-6">
          Something went wrong!
        </h1>
        <p className="text-white/80 max-w-lg mb-8 font-light text-lg">
          An unexpected error occurred. Our team has been notified. 
          Please try refreshing the page or navigating back to the home page.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-[#FF0000] text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 text-white rounded-sm hover:bg-white/5 transition-colors font-medium"
          >
            Go Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
