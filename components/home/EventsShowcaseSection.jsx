"use client";

import Link from "next/link";
import { 
  Flame, Sparkles, Calendar, Users, 
  ArrowRight, Award, Trophy, ChevronRight 
} from "lucide-react";
import { eventsData } from "@/lib/data/eventsData";

export default function EventsShowcaseSection() {
  const globalGarba = eventsData.find((e) => e.id === "global-garba");

  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Campus Life &amp; Culture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              A Vibrant Spectrum of Culture, Tech &amp; Celebration
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Life at Baderia Global is an exhilarating journey balancing academic rigor with central India&apos;s most renowned festivals.
            </p>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-[#F9EDEF] px-4 py-2.5 rounded-lg border border-[#A30D2D]/20 transition-colors shrink-0"
          >
            <span>View All Campus Events</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Highlight 1: Grand Global Garba Hero Card */}
        {globalGarba && (
          <div className="mb-10 bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white rounded-3xl p-7 sm:p-10 shadow-2xl relative overflow-hidden border-2 border-[#C5A15B]/50">
            {/* Ambient lighting */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A15B]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 bg-[#C5A15B] text-[#242126] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    <Flame className="w-3.5 h-3.5 text-[#720D27]" />
                    FLAGSHIP CULTURAL FESTIVAL
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                    <Users className="w-3 h-3 text-[#C5A15B]" />
                    10,000+ Footfalls Every Year
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black font-serif text-white tracking-tight">
                  {globalGarba.title}
                </h3>
                
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  {globalGarba.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {globalGarba.highlights.slice(0, 4).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-white/90">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/events/global-garba"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#242126] bg-[#C5A15B] hover:bg-[#b08c47] px-6 py-3 rounded-xl shadow transition-colors"
                  >
                    <span>Read Full Garba Highlights &amp; History</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/gallery"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/90 hover:text-white underline underline-offset-4"
                  >
                    View Garba Photo Gallery
                  </Link>
                </div>
              </div>

              {/* Garba visual badge */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#C5A15B] text-[#720D27] flex items-center justify-center shadow-lg font-serif font-black text-2xl">
                  GG
                </div>
                <div>
                  <span className="text-xl font-black text-white font-serif block">
                    10,000+
                  </span>
                  <span className="text-xs font-bold text-[#C5A15B] uppercase tracking-wider block">
                    Participants &amp; Spectators
                  </span>
                  <span className="text-[11px] text-white/70 block mt-1">
                    Central India&apos;s Largest College Garba
                  </span>
                </div>
                <div className="pt-2 border-t border-white/15 w-full text-[11px] text-white/80">
                  Cash Prizes for Best Costume, Mr. Global &amp; Ms. Global
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Other Notable Events: Umang & Technova */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {eventsData.filter((e) => e.id !== "global-garba").slice(0, 2).map((ev) => (
            <div
              key={ev.id}
              className="group bg-[#FAF8F8] hover:bg-white rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 p-6 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                    {ev.category}
                  </span>
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                    {ev.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#242126] group-hover:text-[#A30D2D] transition-colors">
                    {ev.title}
                  </h3>
                  <span className="text-xs text-[#A30D2D] font-medium block mt-0.5">
                    {ev.subtitle}
                  </span>
                </div>

                <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                  {ev.description}
                </p>

                <div className="space-y-1 pt-1">
                  {ev.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-1.5 text-xs text-gray-700">
                      <Sparkles className="w-3 h-3 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={ev.id === "umang-fest" ? "/events/umang-fest" : "/events"}
                  className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
                >
                  Explore Event Highlights <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-gray-400 font-medium">
                  {ev.footfall}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
