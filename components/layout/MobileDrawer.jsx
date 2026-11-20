"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronRight, Phone, Mail, MapPin, Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { navigationData } from "@/lib/data/navigationData";
import { collegeData } from "@/lib/data/collegeData";

export default function MobileDrawer({ isOpen, onClose }) {
  const [expandedSection, setExpandedSection] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Body */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#FAF8F8] shadow-2xl flex flex-col z-10 overflow-hidden transform transition-transform">
        
        {/* Top Header */}
        <div className="p-4 bg-[#720D27] text-white flex items-center justify-between border-b border-[#A30D2D]/60">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 border-2 border-[#C5A15B]">
              <Image 
                src="/logo/logo.svg" 
                alt="BGIEM Logo" 
                width={36} 
                height={36} 
                className="w-full h-auto object-contain" 
              />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-wide block text-white leading-tight">
                BADERIA GLOBAL
              </span>
              <span className="text-[10px] text-[#C5A15B] tracking-wider uppercase block font-semibold">
                Engineering College Jabalpur
              </span>
            </div>
          </Link>

          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick CTA row */}
        <div className="p-3 bg-[#A30D2D] text-white flex gap-2">
          <Link
            href="/admissions/apply"
            onClick={onClose}
            className="flex-1 bg-[#C5A15B] hover:bg-[#b08c47] text-[#242126] font-bold text-center py-2 px-3 rounded text-xs transition-colors shadow-sm flex items-center justify-center gap-1"
          >
            Apply Online <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/admissions"
            onClick={onClose}
            className="flex-1 bg-white/15 hover:bg-white/25 text-white font-medium text-center py-2 px-3 rounded text-xs transition-colors flex items-center justify-center gap-1"
          >
            Admission Guide
          </Link>
        </div>

        {/* Scrollable Navigation Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1 divide-y divide-gray-100">
          {navigationData.map((section) => {
            const isExpanded = expandedSection === section.title;

            return (
              <div key={section.title} className="pt-2">
                <button
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between py-2 text-left text-sm font-semibold text-[#242126] hover:text-[#A30D2D] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A30D2D]" />
                    {section.title}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isExpanded ? "rotate-180 text-[#A30D2D]" : ""}`} />
                </button>

                {isExpanded && (
                  <div className="pl-4 pr-1 py-2 space-y-2 bg-[#F9EDEF]/50 rounded-lg my-1">
                    {section.megaMenu ? (
                      // Mega menu categories
                      section.categories.map((cat, cIdx) => (
                        <div key={cIdx} className="mb-3 last:mb-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] mb-1.5 pb-0.5 border-b border-[#A30D2D]/10">
                            {cat.heading}
                          </p>
                          <div className="space-y-1.5">
                            {cat.items.map((item, iIdx) => (
                              <Link
                                key={iIdx}
                                href={item.href}
                                onClick={onClose}
                                className="flex items-center justify-between text-xs text-[#242126] hover:text-[#A30D2D] py-1 transition-colors"
                              >
                                <span>{item.name}</span>
                                {item.tag && (
                                  <span className="text-[9px] bg-[#A30D2D] text-white px-1.5 py-0.5 rounded font-medium">
                                    {item.tag}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      // Standard dropdown list
                      <div className="space-y-2">
                        {section.items.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={onClose}
                            className="block text-xs py-1 text-[#242126] hover:text-[#A30D2D] transition-colors"
                          >
                            <span className="font-medium block">{item.name}</span>
                            {item.desc && (
                              <span className="text-[10px] text-gray-500 block leading-tight">{item.desc}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between py-2 text-sm font-semibold text-[#A30D2D]"
            >
              <span>Contact Campus &amp; Directions</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Footer info within drawer */}
        <div className="p-4 bg-white border-t border-gray-200 text-xs text-gray-600 space-y-2">
          <div className="flex items-center gap-2 text-[#720D27] font-semibold">
            <Phone className="w-3.5 h-3.5 text-[#C5A15B]" />
            <a href={`tel:${collegeData.contact.phones[0]}`}>
              {collegeData.contact.phones[0]}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#C5A15B]" />
            <a href={`mailto:${collegeData.contact.emails.general}`} className="truncate">
              {collegeData.contact.emails.general}
            </a>
          </div>
          <div className="flex items-start gap-2 pt-1 text-[11px] text-gray-500">
            <MapPin className="w-3.5 h-3.5 text-[#A30D2D] shrink-0 mt-0.5" />
            <span>Global Square, Patan Bypass, Raigwan, Jabalpur (M.P.)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
