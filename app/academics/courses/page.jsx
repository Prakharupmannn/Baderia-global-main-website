"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  GraduationCap, Clock, Users, ArrowRight, 
  CheckCircle2, Search, Sparkles, Filter 
} from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export default function CoursesCatalogPage() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = programsData.filter((item) => {
    const matchesFilter = 
      filter === "all" ? true :
      filter === "btech" ? item.level.includes("B.Tech") :
      filter === "pg" ? (item.category === "Management" || item.level.includes("M.Tech")) :
      filter === "diploma" ? item.category === "Diploma" : true;

    const matchesSearch = 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.department.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <PageHeader
        badge="Degree Programs"
        title="Complete Course Catalog &amp; Specializations"
        subtitle="Explore all verified undergraduate B.Tech programs, postgraduate master degrees, and polytechnic diplomas affiliated with RGPV Bhopal &amp; RDVV Jabalpur."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "All Programmes" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF8F8] p-4 rounded-2xl border border-gray-200/90 shadow-2xs">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              {[
                { id: "all", label: "All Degrees" },
                { id: "btech", label: "B.Tech Engineering" },
                { id: "pg", label: "Postgraduate & MBA" },
                { id: "diploma", label: "Polytechnic Diploma" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setFilter(btn.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filter === btn.id
                      ? "bg-[#A30D2D] text-white shadow-xs"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search branches, AI, Civil, MBA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:border-[#A30D2D] bg-white text-xs"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Courses List */}
          <div className="space-y-6">
            {filtered.map((course) => (
              <div
                key={course.id}
                id={course.id}
                className="bg-[#FAF8F8] hover:bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-lg transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {course.level}
                    </span>
                    <h3 className="text-xl font-bold text-[#242126]">
                      {course.name}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium block mt-0.5">
                      Department: {course.department}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A30D2D]" />
                      {course.duration}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#C5A15B]" />
                      {course.intake}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 space-y-3">
                    <p className="text-xs text-[#77727A] leading-relaxed">
                      {course.overview}
                    </p>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block">
                        Course Highlights:
                      </span>
                      {course.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                          <CheckCircle2 className="w-3 h-3 text-[#A30D2D] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-gray-200/80 space-y-3">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Eligibility Summary
                      </span>
                      <p className="text-[11px] text-gray-600 leading-snug mt-1">
                        {course.eligibility}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                      <Link
                        href="/admissions/apply"
                        className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-2 px-3 rounded-lg text-center transition-colors shadow-2xs"
                      >
                        Apply for this Degree
                      </Link>
                      <Link
                        href="/admissions"
                        className="w-full bg-[#FAF8F8] hover:bg-gray-100 text-[#242126] text-xs font-semibold py-2 px-3 rounded-lg text-center border border-gray-200 transition-colors"
                      >
                        Admission Procedure
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            ))}

            {filtered.length === 0 && (
              <div className="p-12 text-center bg-[#FAF8F8] rounded-2xl border border-gray-200 text-gray-500">
                <p className="text-sm font-semibold">No courses matched your search criteria.</p>
                <button
                  onClick={() => { setFilter("all"); setSearchTerm(""); }}
                  className="mt-2 text-xs font-bold text-[#A30D2D] underline"
                >
                  Reset all filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>
    </>
  );
}
