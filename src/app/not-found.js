import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-[120px] md:text-[180px] font-bold font-montserrat text-[#FF0000] leading-none mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-white mb-6 uppercase tracking-wider">
          Page Not Found
        </h2>
        <p className="text-white/80 max-w-lg mb-8 font-light text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="px-8 py-3 bg-[#FF0000] text-white rounded-sm hover:bg-red-700 transition-colors font-medium"
          >
            Go Home
          </Link>
          <Link
            href="/get-in-touch"
            className="px-8 py-3 border border-white/20 text-white rounded-sm hover:bg-white/5 transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
