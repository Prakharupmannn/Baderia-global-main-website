"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Bell, Sparkles, ArrowRight } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#720D27] text-white text-xs border-b border-[#A30D2D]/40 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-2">
          
          {/* Left: Live Announcement */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
            <span className="inline-flex items-center gap-1 bg-[#A30D2D] text-[#C5A15B] font-semibold px-2.5 py-0.5 rounded-full text-[11px] tracking-wide shrink-0 animate-pulse">
              <Sparkles className="w-3 h-3 text-[#C5A15B]" />
              ADMISSIONS 2026-27
            </span>
            <div className="truncate text-white/90 font-medium text-[11px] sm:text-xs">
              <span>B.Tech • M.Tech • MBA • Polytechnic — DTE MP Counseling &amp; CLC Open</span>
            </div>
            <Link 
              href="/admissions/apply" 
              className="text-[#C5A15B] hover:text-white underline font-semibold flex items-center gap-0.5 text-[11px] shrink-0 ml-1 transition-colors"
            >
              Apply Online <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Right: Quick Contacts & Portals */}
          <div className="flex items-center gap-4 text-white/80 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${collegeData.contact.phones[0]}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C5A15B] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#C5A15B]" />
              <span>{collegeData.contact.phones[0]}</span>
            </a>

            <span className="hidden sm:inline text-white/30">•</span>

            <a 
              href={`mailto:${collegeData.contact.emails.admissions}`} 
              className="hidden lg:flex items-center gap-1.5 hover:text-[#C5A15B] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#C5A15B]" />
              <span>{collegeData.contact.emails.admissions}</span>
            </a>

            <span className="hidden lg:inline text-white/30">•</span>

            <div className="flex items-center gap-3">
              <Link 
                href="/student-support/grievance" 
                className="hover:text-[#C5A15B] transition-colors font-medium"
              >
                Grievance Cell
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/mandatory-disclosures" 
                className="hover:text-[#C5A15B] transition-colors font-medium"
              >
                AICTE Disclosures
              </Link>
              <span className="text-white/30">•</span>
              <Link 
                href="/contact" 
                className="hover:text-[#C5A15B] transition-colors font-medium text-[#C5A15B]"
              >
                Campus Map
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
