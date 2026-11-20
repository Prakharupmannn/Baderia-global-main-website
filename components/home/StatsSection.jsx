"use client";

import { Award, Briefcase, Building2, Users, ShieldCheck, Trophy, Sparkles, BookOpen } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function StatsSection() {
  const iconMap = [
    <Trophy key="0" className="w-6 h-6 text-[#A30D2D]" />,
    <TrendingUpIcon key="1" className="w-6 h-6 text-[#A30D2D]" />,
    <Briefcase key="2" className="w-6 h-6 text-[#A30D2D]" />,
    <Building2 key="3" className="w-6 h-6 text-[#A30D2D]" />,
    <Award key="4" className="w-6 h-6 text-[#A30D2D]" />,
    <Building2 key="5" className="w-6 h-6 text-[#A30D2D]" />,
    <ShieldCheck key="6" className="w-6 h-6 text-[#A30D2D]" />,
    <Users key="7" className="w-6 h-6 text-[#A30D2D]" />
  ];

  return (
    <section className="py-14 bg-white border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            Verified Benchmarks
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#242126] font-serif tracking-tight">
            Institutional Legacy in Numbers
          </h2>
          <p className="mt-2 text-sm text-[#77727A]">
            Demonstrating academic consistency, research outcomes, and corporate recruitment excellence since 2002.
          </p>
        </div>

        {/* 8 Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {collegeData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group bg-[#FAF8F8] hover:bg-[#F9EDEF]/60 p-5 rounded-2xl border border-gray-200/80 hover:border-[#A30D2D]/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-xs border border-gray-100 group-hover:scale-110 transition-transform">
                  {iconMap[idx % iconMap.length]}
                </span>
                <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-wider">
                  Verified
                </span>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-black text-[#A30D2D] font-serif tracking-tight block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-[#242126] block mt-1">
                  {stat.label}
                </span>
                <span className="text-[11px] text-[#77727A] block mt-0.5 leading-snug">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function TrendingUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
