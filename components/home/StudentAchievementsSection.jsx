"use client";

import Link from "next/link";
import { 
  Trophy, Award, Star, Medal, ArrowRight, 
  Sparkles, CheckCircle2 
} from "lucide-react";

export default function StudentAchievementsSection() {
  const achievements = [
    {
      title: "₹45.10 LPA International Tech Offer",
      student: "Final Year CSE Scholars",
      company: "Gitpod Cloud Engineering",
      desc: "Secured international high-growth engineering role following rigorous technical coding and open-source contributions.",
      category: "Super Dream Placement"
    },
    {
      title: "1 MP Armored Squadron Firing & Drill Trophies",
      student: "Senior Division NCC Cadets",
      company: "Combined Annual Training Camp (CATC)",
      desc: "Cadets swept top honors in weapon handling, obstacle race, and ceremonial parade drills under military officers.",
      category: "Defense Excellence"
    },
    {
      title: "RGPV State University Academic Merit Positions",
      student: "B.Tech & MBA Department Toppers",
      company: "Rajiv Gandhi Proudyogiki Vishwavidyalaya",
      desc: "Rank holders awarded gold certificates by the university for exceptional grade point averages across semesters.",
      category: "Academic Laurels"
    },
    {
      title: "National Smart India Hackathon Finalists",
      student: "Interdisciplinary Engineering Team",
      company: "Ministry of Education Innovation Cell",
      desc: "Engineered an AI-powered smart agriculture IoT hardware prototype solving crop disease prediction.",
      category: "National Innovation"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            Student Laurels
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
            Celebrating Exceptional Student Achievements
          </h2>
          <p className="mt-3 text-sm text-[#77727A] leading-relaxed">
            Our students routinely excel across international corporate recruitments, military competitions, national hackathons, and state university merit lists.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full inline-block">
                  {item.category}
                </span>

                <h3 className="text-base font-bold text-[#242126] leading-snug">
                  {item.title}
                </h3>

                <div className="text-xs text-[#A30D2D] font-semibold">
                  {item.student} • {item.company}
                </div>

                <p className="text-xs text-[#77727A] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-[#C5A15B] flex items-center gap-1">
                  <Medal className="w-3.5 h-3.5 text-[#C5A15B]" />
                  Verified Milestone
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
