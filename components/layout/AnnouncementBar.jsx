
"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Bell,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

const announcements = [
  {
    label: "ADMISSIONS 2026-27",
    text: "B.Tech • M.Tech • MBA • Polytechnic — DTE MP Counseling & CLC Open",
    link: "/admissions/apply",
    action: "Apply Online",
  },
  {
    label: "IMPORTANT UPDATE",
    text: "Admissions Open for the Academic Session 2026-27",
    link: "/admissions/apply",
    action: "Explore Programs",
  },
  {
    label: "STUDENT SUPPORT",
    text: "Have a concern? Our Grievance Cell is here to help you",
    link: "/student-support/grievance",
    action: "Learn More",
  },
];

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar relative z-50 overflow-hidden text-white">

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#57091D] via-[#80112F] to-[#57091D]" />

      <div className="relative max-w-[1600px] mx-auto flex items-center min-h-[42px]">

        {/* Fixed announcement label */}
        <div className="relative z-20 shrink-0 flex items-center gap-2 px-3 sm:px-5 h-[42px] bg-gradient-to-r from-[#A30D2D] to-[#850D29] border-r border-[#C5A15B]/40 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8C77D] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E8C77D]" />
          </span>

          <Bell className="w-3.5 h-3.5 text-[#E8C77D]" />

          <span className="text-[10px] sm:text-[11px] font-bold tracking-[1.2px] whitespace-nowrap">
            LATEST UPDATES
          </span>
        </div>

        {/* Scrolling announcements */}
        <div className="flex-1 min-w-0 overflow-hidden group">

          <div className="announcement-track flex items-center w-max group-hover:[animation-play-state:paused]">

            {[...announcements, ...announcements].map((item, index) => (
              <div
                key={index}
                className="flex items-center shrink-0 gap-3 sm:gap-4 px-5 sm:px-8"
              >
                <span className="flex items-center gap-1.5 text-[#E8C77D] font-bold text-[10px] sm:text-[11px] tracking-wider whitespace-nowrap">
                  <Sparkles className="w-3 h-3" />
                  {item.label}
                </span>

                <span className="w-1 h-1 rounded-full bg-[#C5A15B]" />

                <span className="text-[11px] sm:text-xs font-medium text-white/95 whitespace-nowrap">
                  {item.text}
                </span>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-1 text-[#E8C77D] hover:text-white font-bold text-[10px] sm:text-[11px] whitespace-nowrap transition-colors"
                >
                  {item.action}
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <span className="text-[#C5A15B]/40 ml-2">✦</span>
              </div>
            ))}

          </div>
        </div>

        {/* Fixed contact section - desktop */}
        <div className="hidden xl:flex relative z-20 shrink-0 items-center gap-4 px-5 h-[42px] bg-[#650C24] border-l border-[#C5A15B]/30 text-[11px]">

          <a
            href={`tel:${collegeData.contact.phones[0]}`}
            className="flex items-center gap-1.5 text-white/85 hover:text-[#E8C77D] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#E8C77D]" />
            {collegeData.contact.phones[0]}
          </a>

          <span className="text-white/25">|</span>

          <a
            href={`mailto:${collegeData.contact.emails.admissions}`}
            className="flex items-center gap-1.5 text-white/85 hover:text-[#E8C77D] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#E8C77D]" />
            Admissions
          </a>
        </div>

      </div>

      <style jsx>{`
        .announcement-track {
          animation: announcement-scroll 35s linear infinite;
          will-change: transform;
        }

        @keyframes announcement-scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .announcement-track {
            animation: none;
          }
        }
      `}</style>

    </div>
  );
}
