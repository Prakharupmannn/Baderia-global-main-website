"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Target, 
  Eye, Heart, Award, Sparkles, Quote 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story, History, Pillars (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                About Our Institution
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
                Two Decades of Academic Distinction, Innovation &amp; Integrity
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#77727A] leading-relaxed">
              Founded in 2002 under the visionary leadership of <strong>Global Nature Care Sangathan&apos;s Group of Institutions (GNCSGI)</strong>, Baderia Global Institute of Engineering &amp; Management has grown into one of Madhya Pradesh&apos;s premier technical education landmarks. Situated on a serene 45-acre green campus along Patan Bypass in Jabalpur, the institute is approved by <strong>AICTE New Delhi</strong> and affiliated to <strong>RGPV Bhopal</strong> and <strong>RDVV Jabalpur</strong>.
            </p>

            <p className="text-sm sm:text-base text-[#77727A] leading-relaxed">
              We empower aspiring engineers, managers, and diploma scholars through rigorous experiential pedagogy, state-of-the-art laboratories, high-impact research, and an exceptional placement network partnering with over 250 leading corporate multinational firms.
            </p>

            {/* Vision & Mission Split Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#A30D2D] font-bold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-[#F9EDEF] flex items-center justify-center">
                    <Eye className="w-4 h-4 text-[#A30D2D]" />
                  </div>
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                  {collegeData.vision}
                </p>
                <Link 
                  href="/about/vision-mission" 
                  className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  Read Full Philosophy <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-[#720D27] font-bold text-sm">
                  <div className="w-7 h-7 rounded-lg bg-[#F9EDEF] flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#720D27]" />
                  </div>
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                  {collegeData.mission[0]}
                </p>
                <Link 
                  href="/about/vision-mission" 
                  className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1 pt-1"
                >
                  Explore 4 Pillars <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#A30D2D] hover:bg-[#8C0B26] px-5 py-3 rounded-lg shadow transition-colors"
              >
                <span>Read Institutional Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                href="/about/leadership"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#242126] hover:text-[#A30D2D] bg-white border border-gray-300 hover:border-[#A30D2D] px-5 py-3 rounded-lg transition-colors"
              >
                <span>Leadership &amp; Governing Body</span>
              </Link>
            </div>

          </div>

          {/* Right Column: Leadership Quote Card & Trust Showcase (Span 5) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Chairman Message Card */}
            <div className="bg-gradient-to-br from-[#720D27] to-[#A30D2D] text-white p-6 sm:p-7 rounded-2xl shadow-xl relative overflow-hidden border-2 border-[#C5A15B]/30">
              <div className="absolute top-4 right-4 text-[#C5A15B]/20">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-[#C5A15B] text-[#242126] text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full tracking-wider">
                  Chairman&apos;s Perspective
                </div>

                <p className="text-sm italic text-white/95 leading-relaxed font-serif">
                  &ldquo;{collegeData.leadership.chairman.message}&rdquo;
                </p>

                <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-base text-white tracking-wide">
                      {collegeData.leadership.chairman.name}
                    </h4>
                    <span className="text-xs text-[#DFC285] block">
                      {collegeData.leadership.chairman.title}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-[#C5A15B] font-bold font-serif">
                    SB
                  </div>
                </div>
              </div>
            </div>

            {/* Director Message Preview */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-sm text-[#242126]">
                    {collegeData.leadership.director.name}
                  </h4>
                  <span className="text-xs text-[#A30D2D] font-semibold">
                    {collegeData.leadership.director.title}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                  Director Note
                </span>
              </div>
              <p className="text-xs text-[#77727A] italic leading-relaxed">
                &ldquo;{collegeData.leadership.director.message}&rdquo;
              </p>
              <Link
                href="/about/leadership"
                className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
              >
                Read Message from Director <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
