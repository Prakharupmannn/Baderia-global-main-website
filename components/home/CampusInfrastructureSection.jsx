"use client";

import Link from "next/link";
import { 
  Building2, BookOpen, ShieldCheck, Bus, 
  Coffee, Trophy, ArrowRight, Sparkles, CheckCircle2 
} from "lucide-react";
import { facilitiesData } from "@/lib/data/facilitiesData";

export default function CampusInfrastructureSection() {
  const iconMap = {
    BookOpen: <BookOpen className="w-5 h-5 text-[#A30D2D]" />,
    Shield: <ShieldCheck className="w-5 h-5 text-[#A30D2D]" />,
    Trophy: <Trophy className="w-5 h-5 text-[#A30D2D]" />,
    Coffee: <Coffee className="w-5 h-5 text-[#A30D2D]" />,
    Bus: <Bus className="w-5 h-5 text-[#A30D2D]" />,
    Cpu: <Building2 className="w-5 h-5 text-[#A30D2D]" />
  };

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              World-Class Facilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              45+ Acre State-of-the-Art Infrastructure
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Designed to nurture intellectual inquiry, athletic achievement, cultural bonding, and military discipline.
            </p>
          </div>

          <Link
            href="/campus"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-white px-4 py-2.5 rounded-lg border border-gray-300 hover:border-[#A30D2D] transition-colors shrink-0 shadow-2xs"
          >
            <span>Explore Campus Tour &amp; Map</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Grid of Key Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilitiesData.slice(0, 6).map((fac) => (
            <div
              key={fac.id}
              className="group bg-white rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#F9EDEF] group-hover:bg-[#A30D2D] text-[#A30D2D] group-hover:text-white flex items-center justify-center transition-colors shadow-2xs">
                    {iconMap[fac.icon] || <Building2 className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-wider">
                    Campus Facility
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#242126] group-hover:text-[#A30D2D] transition-colors">
                    {fac.title}
                  </h3>
                  <span className="text-xs text-[#A30D2D] font-medium block mt-0.5">
                    {fac.tagline}
                  </span>
                </div>

                <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                  {fac.description}
                </p>

                {/* Key feature bullets */}
                <div className="space-y-1.5 pt-1">
                  {fac.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <Link
                  href={`/campus/${fac.slug}`}
                  className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
                >
                  View Facility Details <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
