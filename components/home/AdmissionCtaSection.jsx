"use client";

import Link from "next/link";
import { 
  GraduationCap, ArrowRight, Phone, Download, 
  Sparkles, CheckCircle2, ShieldCheck 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export default function AdmissionCtaSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white relative overflow-hidden border-b-4 border-[#C5A15B]">
      
      {/* Decorative ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1.2px,transparent_1.2px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-black/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C5A15B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-[#C5A15B] text-[#242126] text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#720D27]" />
            ENROLLMENT IN PROGRESS • SESSION 2026-27
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight leading-tight">
            Step Into a World of Engineering Innovation &amp; Leadership
          </h2>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Take the definitive step towards an illustrious career. Join Baderia Global Engineering College through DTE MP Centralized Online Counseling, College Level Counseling (CLC), or Institutional Preference Seats.
          </p>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#DFC285]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                <span>Zero Tuition Fee Burden</span>
              </div>
              <p className="text-[11px] text-white/80 leading-snug">
                100% Post-Matric State Scholarship facilitation for eligible SC/ST/OBC students.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#DFC285]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                <span>Education Loan Help</span>
              </div>
              <p className="text-[11px] text-white/80 leading-snug">
                Authorized loan facilitation with nationalized banks (SBI, PNB, Central Bank).
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs text-[#DFC285]">
                <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
                <span>Free DTE Counseling</span>
              </div>
              <p className="text-[11px] text-white/80 leading-snug">
                Free choice-filling and verification support at our campus counseling desk.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/admissions/apply"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold text-[#242126] bg-[#C5A15B] hover:bg-[#b08c47] px-8 py-4 rounded-xl shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Submit Online Admission Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 px-7 py-4 rounded-xl backdrop-blur-sm transition-all"
            >
              <GraduationCap className="w-4 h-4 text-[#C5A15B]" />
              <span>Admission Procedure &amp; Cutoffs</span>
            </Link>

            <a
              href={`tel:${collegeData.contact.phones[0]}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold text-white/90 hover:text-white px-5 py-4 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C5A15B]" />
              <span>Call Helpline: {collegeData.contact.phones[0]}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
