"use client";

import Link from "next/link";
import { 
  ArrowRight, Sparkles, CheckCircle2, Award, 
  ShieldCheck, GraduationCap, Building, TrendingUp, 
  ChevronRight, Play, Phone 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b-4 border-[#C5A15B]">
      
      {/* Background radial textures and subtle university crest watermark */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-[#C5A15B]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-black/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Accreditation and statutory badge bar */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-1.5 bg-black/25 backdrop-blur-md border border-[#C5A15B]/40 text-[#C5A15B] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            ESTABLISHED 2002 • GNCSGI
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
            AICTE Approved • Affiliated to RGPV Bhopal &amp; RDVV Jabalpur
          </div>

          <div className="hidden sm:inline-flex items-center gap-1 bg-[#A30D2D] text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15">
            <span>DTE MP Code: <strong>0188</strong></span>
          </div>
        </div>

        {/* Hero Grid: Left Content, Right Visual Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & CTAs (Span 7) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#C5A15B] uppercase block">
                Baderia Global Institute of Engineering &amp; Management
              </span>

              <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] font-serif text-white">
                Empowering Minds, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F9EDEF] to-[#DFC285]">
                  Engineering the Future.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Central India&apos;s premier educational destination in Jabalpur. Experience 22+ years of academic excellence, world-class GPU computing labs, 1 MP Armored Squadron NCC training, and verified career placements up to <strong className="text-[#C5A15B] font-bold">₹46.71 LPA</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/admissions/apply"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-[#242126] bg-[#C5A15B] hover:bg-[#b08c47] px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Apply for Admissions 2026</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/academics/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                <GraduationCap className="w-4 h-4 text-[#C5A15B]" />
                <span>Explore All Programmes</span>
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/80 hover:text-white px-4 py-3 transition-colors"
              >
                <span>Campus Directions</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Trust checkmarks row */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-white/85">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                1,200+ Annual Placement Offers
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                45+ Acre Wi-Fi Green Campus
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                10,000+ Global Alumni
              </span>
            </div>

          </div>

          {/* Right Column: Visual Editorial Card & Key Metrics (Span 5) */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/20 shadow-2xl space-y-6">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <div>
                  <span className="text-[11px] font-bold tracking-widest text-[#C5A15B] uppercase block">
                    Institutional Record
                  </span>
                  <h3 className="text-base font-extrabold text-white">
                    Key Performance Highlights
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A30D2D] border border-[#C5A15B] flex items-center justify-center text-[#C5A15B] shadow-inner">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 gap-3.5">
                
                <div className="bg-black/30 rounded-xl p-3.5 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-[#C5A15B] font-serif block">
                    ₹46.71 <span className="text-sm font-sans font-bold">LPA</span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mt-0.5">
                    Highest CTC
                  </span>
                  <span className="text-[10px] text-white/60 block">Gitpod International Offer</span>
                </div>

                <div className="bg-black/30 rounded-xl p-3.5 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-white font-serif block">
                    1,200+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mt-0.5">
                    Placement Offers
                  </span>
                  <span className="text-[10px] text-white/60 block">250+ Visiting MNCs</span>
                </div>

                <div className="bg-black/30 rounded-xl p-3.5 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-white font-serif block">
                    22+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mt-0.5">
                    Years Excellence
                  </span>
                  <span className="text-[10px] text-white/60 block">Founded in 2002</span>
                </div>

                <div className="bg-black/30 rounded-xl p-3.5 border border-white/10">
                  <span className="text-2xl sm:text-3xl font-black text-[#C5A15B] font-serif block">
                    45+
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-white/90 block mt-0.5">
                    Acre Campus
                  </span>
                  <span className="text-[10px] text-white/60 block">Lush Green Infrastructure</span>
                </div>

              </div>

              {/* Admission Alert Box Inside Card */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-[#A30D2D] to-[#720D27] border border-[#C5A15B]/40 shadow-sm flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold text-[#C5A15B] uppercase tracking-wide">
                    DTE MP Counseling Helpline
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    {collegeData.contact.counselingHelpline}
                  </div>
                </div>
                <a
                  href={`tel:${collegeData.contact.phones[0]}`}
                  className="p-2.5 rounded-lg bg-[#C5A15B] text-[#242126] hover:bg-[#b08c47] transition-colors shrink-0 shadow"
                  aria-label="Call admission helpline"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
