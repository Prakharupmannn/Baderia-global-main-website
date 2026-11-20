import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Code, Users, Award, BookOpen } from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";

export const metadata = {
  title: "Campus Recruitment Training (CRT) | Skill Development Modules",
  description: "Comprehensive 4-phase Campus Recruitment Training (CRT) covering coding data structures, aptitude, and soft skills at Baderia Global."
};

export default function PlacementTrainingPage() {
  return (
    <>
      <PageHeader
        badge="Skill Development"
        title="Campus Recruitment Training (CRT)"
        subtitle="A mandatory, multi-semester career readiness roadmap transforming foundational learners into competitive corporate problem-solvers."
        breadcrumbs={[
          { label: "Placements", href: "/placements" },
          { label: "Training & Skill Development" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Skill Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              4-Phase Progressive Career Readiness Curriculum
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Every student admitted to engineering and MBA streams undergoes structured Campus Recruitment Training (CRT) integrated directly into the academic timetable beginning in the 3rd semester. Coached by industry practitioners and certified trainers, students achieve mastery across technical problem solving and professional behavioral competencies.
            </p>
          </div>

          {/* 4 Phases Detailed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {placementsData.crtModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F8] p-7 rounded-3xl border border-gray-200/90 shadow-2xs space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-[#A30D2D] font-serif">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full">
                    {mod.duration}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#242126]">
                  {mod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Specialized Modules */}
          <div className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-[#242126]">
              Key CRT Focus Areas
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <span className="font-bold text-sm text-[#A30D2D] block">Data Structures &amp; Coding</span>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Intensive practice in LeetCode / HackerRank problems, dynamic programming, binary trees, graphs, and system design in C++, Java, and Python.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <span className="font-bold text-sm text-[#A30D2D] block">Company-Specific NQT Prep</span>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Tailored mock test series for TCS National Qualifier Test (NQT), Infosys InfyTQ / HackWithInfy, Wipro Elite, and Cognizant GenC evaluations.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                <span className="font-bold text-sm text-[#A30D2D] block">Amphitheater GD &amp; Mock PI</span>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Video-recorded mock group discussions and one-on-one technical interviews conducted by corporate alumni panels with actionable feedback.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
