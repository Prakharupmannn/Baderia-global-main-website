"use client";

import Link from "next/link";
import { 
  Trophy, TrendingUp, Building2, Users, 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Award 
} from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";

export default function PlacementsSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Corporate Resource Centre
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              Unrivaled Placements &amp; Corporate Alliances
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Connecting student intellect to Fortune 500 conglomerates, high-growth tech startups, and core EPC giants.
            </p>
          </div>

          <Link
            href="/placements"
            className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#A30D2D] hover:bg-[#8C0B26] px-5 py-3 rounded-lg shadow transition-colors shrink-0"
          >
            <span>View Complete Placement Report</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Stats Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {placementsData.highlights.slice(0, 4).map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-[#FAF8F8] to-[#F9EDEF]/50 p-5 rounded-2xl border border-gray-200/90 shadow-2xs"
            >
              <span className="text-2xl sm:text-3xl font-black text-[#A30D2D] font-serif block">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#242126] block mt-1">
                {item.label}
              </span>
              <span className="text-[11px] text-[#77727A] block mt-0.5">
                {item.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Recruiters Badges Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#242126] flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#A30D2D]" />
              Prominent Corporate Recruiters
            </h3>
            <Link 
              href="/placements/recruiters" 
              className="text-xs font-semibold text-[#A30D2D] hover:underline flex items-center gap-1"
            >
              See All 250+ Companies <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {placementsData.topRecruiters.slice(0, 10).map((rec, rIdx) => (
              <div
                key={rIdx}
                className="bg-[#FAF8F8] hover:bg-white p-3.5 rounded-xl border border-gray-200/80 hover:border-[#A30D2D]/40 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-extrabold text-[#242126] block leading-tight">
                    {rec.name}
                  </span>
                  <span className="text-[10px] text-gray-500 block mt-0.5">
                    {rec.category}
                  </span>
                </div>
                <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#A30D2D]">
                    {rec.package}
                  </span>
                  <span className="text-[9px] bg-[#F9EDEF] text-[#720D27] px-1.5 py-0.5 rounded font-semibold">
                    CTC
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CRT (Campus Recruitment Training) 4-Phase Roadmap */}
        <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-2xl border border-gray-200/90">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Structured Skill Ecosystem
            </span>
            <h3 className="text-xl font-bold text-[#242126] mt-0.5">
              4-Phase Campus Recruitment Training (CRT)
            </h3>
            <p className="text-xs text-[#77727A] mt-1">
              Every student undergoes mandatory technical and soft skills coaching from the second year onwards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementsData.crtModules.map((mod, mIdx) => (
              <div key={mIdx} className="bg-white p-4 rounded-xl border border-gray-200/70 shadow-2xs space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2 py-0.5 rounded">
                  {mod.duration}
                </span>
                <h4 className="text-xs font-bold text-[#242126] leading-snug">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-[#77727A] leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
