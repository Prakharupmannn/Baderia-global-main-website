"use client";

import Link from "next/link";
import { 
  Laptop, Building2, Cog, Radio, Briefcase, 
  Atom, ArrowRight, Sparkles, CheckCircle2, ChevronRight, UserCheck 
} from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export default function DepartmentsShowcase() {
  const iconMap = {
    Laptop: <Laptop className="w-6 h-6 text-[#A30D2D]" />,
    Building2: <Building2 className="w-6 h-6 text-[#A30D2D]" />,
    Cog: <Cog className="w-6 h-6 text-[#A30D2D]" />,
    Radio: <Radio className="w-6 h-6 text-[#A30D2D]" />,
    Briefcase: <Briefcase className="w-6 h-6 text-[#A30D2D]" />,
    Atom: <Atom className="w-6 h-6 text-[#A30D2D]" />
  };

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Academic Centres
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              Distinguished Academic Departments
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Led by seasoned educators, accredited research faculties, and equipped with industry-caliber laboratories.
            </p>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-[#F9EDEF] px-4 py-2.5 rounded-lg border border-[#A30D2D]/20 transition-colors shrink-0"
          >
            <span>Explore All Faculty &amp; Labs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentsData.map((dept) => {
            const detailHref = 
              dept.id === "computer-science" ? "/departments/computer-science" :
              dept.id === "civil-engineering" ? "/departments/civil-engineering" :
              dept.id === "mechanical-engineering" ? "/departments/mechanical-engineering" :
              dept.id === "electronics-communication" ? "/departments/electronics-communication" :
              dept.id === "mba" ? "/departments/mba" :
              "/departments/applied-science";

            return (
              <div
                key={dept.id}
                className="group bg-[#FAF8F8] hover:bg-white rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#F9EDEF] border border-gray-200/60 flex items-center justify-center transition-colors shadow-2xs">
                      {iconMap[dept.iconName] || <Laptop className="w-6 h-6 text-[#A30D2D]" />}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                      {dept.shortName}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-[#242126] group-hover:text-[#A30D2D] transition-colors leading-snug">
                      {dept.name}
                    </h3>
                    <p className="text-xs text-[#A30D2D] font-medium mt-1">
                      {dept.tagline}
                    </p>
                  </div>

                  {/* HOD Quote / Info */}
                  <div className="p-3 bg-white group-hover:bg-[#FAF8F8] rounded-xl border border-gray-200/60 text-xs text-gray-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#242126]">
                      <UserCheck className="w-3.5 h-3.5 text-[#C5A15B]" />
                      <span>{dept.hod.name}</span>
                    </div>
                    <span className="text-[11px] text-gray-500 block leading-tight">
                      {dept.hod.designation}
                    </span>
                  </div>

                  {/* Top 2 Labs */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                      Key Laboratories:
                    </span>
                    {dept.laboratories.slice(0, 2).map((lab, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                        <CheckCircle2 className="w-3 h-3 text-[#A30D2D] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{lab.name}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom link */}
                <div className="pt-5 mt-4 border-t border-gray-200/70 flex items-center justify-between">
                  <Link
                    href={detailHref}
                    className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
                  >
                    View Department, Labs &amp; Faculty <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
