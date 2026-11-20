"use client";

import Link from "next/link";
import { 
  UserCheck, Award, GraduationCap, Mail, 
  ArrowRight, Sparkles, BookOpen, Quote 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";
import { departmentsData } from "@/lib/data/departmentsData";

export default function FacultyLeadershipSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Academic Leadership
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              Mentored by Distinguished Faculty &amp; Researchers
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Our academic faculties combine deep doctoral research with decades of teaching excellence and industrial consultancy.
            </p>
          </div>

          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-white px-4 py-2.5 rounded-lg border border-gray-300 hover:border-[#A30D2D] transition-colors shrink-0 shadow-2xs"
          >
            <span>View All Department Faculty</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Leadership Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Chairman Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                  Institutional Leadership
                </span>
                <span className="text-xs font-bold text-[#C5A15B]">Chairman</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#242126]">
                  {collegeData.leadership.chairman.name}
                </h3>
                <span className="text-xs text-[#A30D2D] font-medium block mt-0.5">
                  {collegeData.leadership.chairman.title}
                </span>
                <span className="text-[11px] text-gray-500 block">
                  {collegeData.leadership.chairman.qualification}
                </span>
              </div>

              <p className="text-xs text-[#77727A] italic leading-relaxed line-clamp-4">
                &ldquo;{collegeData.leadership.chairman.message}&rdquo;
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/about/leadership"
                className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
              >
                Read Leadership Message <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Director Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                  Principal &amp; Director
                </span>
                <span className="text-xs font-bold text-[#C5A15B]">Head of Institution</span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#242126]">
                  {collegeData.leadership.director.name}
                </h3>
                <span className="text-xs text-[#A30D2D] font-medium block mt-0.5">
                  {collegeData.leadership.director.title}
                </span>
                <span className="text-[11px] text-gray-500 block">
                  {collegeData.leadership.director.qualification}
                </span>
              </div>

              <p className="text-xs text-[#77727A] italic leading-relaxed line-clamp-4">
                &ldquo;{collegeData.leadership.director.message}&rdquo;
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/about/leadership"
                className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
              >
                Read Director&apos;s Address <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Founder Tribute Card */}
          <div className="bg-gradient-to-br from-[#720D27] to-[#A30D2D] text-white p-6 rounded-2xl border-2 border-[#C5A15B]/40 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C5A15B] text-[#242126] px-2.5 py-1 rounded-full">
                  In Memoriam &amp; Tribute
                </span>
                <Award className="w-4 h-4 text-[#C5A15B]" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-serif">
                  {collegeData.leadership.founderDirector.name}
                </h3>
                <span className="text-xs text-[#DFC285] font-semibold block mt-0.5">
                  {collegeData.leadership.founderDirector.title}
                </span>
              </div>

              <p className="text-xs text-white/90 italic leading-relaxed font-serif">
                &ldquo;{collegeData.leadership.founderDirector.message}&rdquo;
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/20">
              <Link
                href="/about"
                className="text-xs font-bold text-[#DFC285] hover:text-white inline-flex items-center gap-1"
              >
                Discover Founder&apos;s Legacy <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>

        {/* Department Heads (HODs) Quick Bar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-2xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 pb-2 border-b border-gray-100">
            Respected Heads of Departments (HODs)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {departmentsData.slice(0, 5).map((dept) => (
              <div key={dept.id} className="p-3 rounded-xl bg-[#FAF8F8] border border-gray-200/60 space-y-1">
                <span className="text-[10px] font-bold text-[#A30D2D] uppercase block">
                  {dept.shortName} Department
                </span>
                <div className="text-xs font-bold text-[#242126] leading-tight">
                  {dept.hod.name}
                </div>
                <div className="text-[10px] text-gray-500 line-clamp-1">
                  {dept.hod.experience}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
