"use client";

import Link from "next/link";
import { 
  Bell, Calendar, ArrowRight, Sparkles, 
  FileText, ExternalLink, ChevronRight, Pin 
} from "lucide-react";
import { newsData, noticesData } from "@/lib/data/newsData";

export default function NewsNoticesSection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
              Official Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
              Latest News, Bulletins &amp; Academic Notices
            </h2>
            <p className="mt-2 text-sm text-[#77727A]">
              Keep abreast with university notifications, placement drives, counseling timelines, and campus achievements.
            </p>
          </div>

          <Link
            href="/downloads"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A30D2D] hover:text-[#720D27] bg-[#F9EDEF] px-4 py-2.5 rounded-lg border border-[#A30D2D]/20 transition-colors shrink-0"
          >
            <span>View All Official Circulars</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Split Grid: Left News (Span 7), Right Notice Board (Span 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 2 Featured News Articles (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#A30D2D]" />
              Featured Institutional Highlights
            </h3>

            {newsData.slice(0, 2).map((item) => (
              <article
                key={item.id}
                className="bg-[#FAF8F8] hover:bg-white p-6 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 transition-all duration-300 shadow-xs hover:shadow-lg space-y-3"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                    {item.date}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#242126] hover:text-[#A30D2D] transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-[#77727A] leading-relaxed">
                  {item.content}
                </p>

                <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-medium">
                    Issued by: <strong className="text-[#242126]">{item.author}</strong>
                  </span>
                  <Link
                    href="/admissions"
                    className="text-[#A30D2D] font-bold hover:underline flex items-center gap-1"
                  >
                    Read Circular <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Live Notice Board (Span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F8] rounded-2xl border-2 border-gray-200/90 shadow-sm overflow-hidden">
              
              {/* Notice Board Header */}
              <div className="bg-[#720D27] text-white p-4 flex items-center justify-between border-b border-[#A30D2D]">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#A30D2D] flex items-center justify-center text-[#C5A15B]">
                    <Bell className="w-4 h-4 animate-bounce" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold tracking-wide">
                      Notice Board
                    </h3>
                    <span className="text-[10px] text-[#C5A15B] tracking-wider uppercase block font-semibold">
                      Live Academic Circulars
                    </span>
                  </div>
                </div>
                <span className="text-[10px] bg-white/10 text-white px-2 py-0.5 rounded font-mono">
                  UPDATED
                </span>
              </div>

              {/* Notice List */}
              <div className="p-4 divide-y divide-gray-200/80 space-y-1">
                {noticesData.map((notice) => (
                  <div key={notice.id} className="pt-3 pb-3 first:pt-1 last:pb-1 group">
                    <div className="flex items-start gap-2">
                      <Pin className="w-3.5 h-3.5 text-[#A30D2D] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <div className="space-y-1 flex-1">
                        <Link
                          href={notice.link}
                          className="text-xs font-semibold text-[#242126] group-hover:text-[#A30D2D] transition-colors leading-snug block"
                        >
                          {notice.title}
                        </Link>
                        <div className="flex items-center justify-between text-[10px] text-gray-500">
                          <span>{notice.date}</span>
                          <span className="text-[#A30D2D] font-bold group-hover:underline flex items-center gap-0.5">
                            Details <ExternalLink className="w-2.5 h-2.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Notice Board CTA */}
              <div className="p-3 bg-white border-t border-gray-200 text-center">
                <Link
                  href="/downloads"
                  className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1"
                >
                  Download Academic Calendar &amp; Syllabi <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
