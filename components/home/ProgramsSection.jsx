"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  GraduationCap, Clock, Users, ArrowRight, 
  Sparkles, CheckCircle2, ChevronRight, BookOpen 
} from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export default function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredPrograms = programsData.filter((prog) => {
    if (activeTab === "all") return true;
    if (activeTab === "btech") return prog.level.includes("B.Tech");
    if (activeTab === "pg") return prog.category === "Management" || prog.level.includes("M.Tech");
    if (activeTab === "diploma") return prog.category === "Diploma";
    return true;
  });

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Academic Pathways
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              World-Class Engineering &amp; Management Degrees
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Industry-aligned undergraduate, postgraduate, and polytechnic diploma curricula affiliated with RGPV Bhopal &amp; RDVV Jabalpur.
            </p>
          </div>

          <Link
            href="/academics/courses"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-[#F9EDEF] px-4 py-2.5 rounded-lg border border-[#A30D2D]/20 transition-colors shrink-0"
          >
            <span>View Complete Course Catalog</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-gray-200 pb-3">
          {[
            { id: "all", label: "All Programmes" },
            { id: "btech", label: "Engineering (B.Tech)" },
            { id: "pg", label: "Postgraduate & MBA" },
            { id: "diploma", label: "Polytechnic Diploma" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#A30D2D] text-white shadow-sm"
                  : "bg-[#FAF8F8] text-[#242126] hover:bg-gray-200/70"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group bg-[#FAF8F8] hover:bg-white rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Level & Intake header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                    {program.level}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C5A15B]" />
                    {program.intake}
                  </span>
                </div>

                {/* Course Name */}
                <div>
                  <h3 className="text-lg font-bold text-[#242126] group-hover:text-[#A30D2D] transition-colors leading-snug">
                    {program.name}
                  </h3>
                  <span className="text-xs text-gray-500 font-medium block mt-1">
                    Dept: {program.department}
                  </span>
                </div>

                {/* Duration & Affiliation */}
                <div className="flex items-center gap-3 text-xs text-gray-600 pt-1 border-t border-gray-200/60">
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#A30D2D]" />
                    {program.duration}
                  </span>
                </div>

                {/* Short Overview */}
                <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                  {program.overview}
                </p>

                {/* Highlights tags */}
                <div className="space-y-1 pt-1">
                  {program.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                      <CheckCircle2 className="w-3 h-3 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom Card Actions */}
              <div className="pt-5 mt-4 border-t border-gray-200/70 flex items-center justify-between">
                <Link
                  href={
                    program.department.includes("Computer") ? "/departments/computer-science" :
                    program.department.includes("Civil") ? "/departments/civil-engineering" :
                    program.department.includes("Mechanical") ? "/departments/mechanical-engineering" :
                    program.department.includes("Electronics") ? "/departments/electronics-communication" :
                    program.department.includes("Management") ? "/departments/mba" :
                    "/academics/courses"
                  }
                  className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
                >
                  Explore Details <ChevronRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="/admissions/apply"
                  className="text-xs font-semibold text-[#242126] hover:text-white hover:bg-[#A30D2D] bg-white border border-gray-200 px-3 py-1.5 rounded-lg transition-colors shadow-2xs"
                >
                  Apply Now
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
