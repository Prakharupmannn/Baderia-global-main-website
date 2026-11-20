import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, GraduationCap, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#FAF8F8]">
      <div className="max-w-xl w-full text-center space-y-6">
        
        {/* Crest */}
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center p-2 border-2 border-[#C5A15B] shadow-lg mx-auto">
          <Image 
            src="/logo/logo.svg" 
            alt="BGIEM Emblem" 
            width={72} 
            height={72} 
            className="w-full h-auto object-contain" 
          />
        </div>

        <div className="space-y-2">
          <span className="text-6xl sm:text-7xl font-black text-[#A30D2D] font-serif block">
            404
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-[#77727A] max-w-md mx-auto leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable under our new redesigned website architecture.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#A30D2D] hover:bg-[#8C0B26] px-6 py-3 rounded-xl shadow transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#242126] hover:text-[#A30D2D] bg-white border border-gray-300 hover:border-[#A30D2D] px-5 py-3 rounded-xl transition-colors"
          >
            <GraduationCap className="w-4 h-4 text-[#A30D2D]" />
            <span>Admissions 2026</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-[#242126] px-4 py-3 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span>Contact Campus</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
