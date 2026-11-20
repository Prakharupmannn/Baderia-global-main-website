"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Phone, Mail, MapPin, ExternalLink, ArrowRight, 
  Shield, Award, GraduationCap, CheckCircle2, Heart 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";
import { navigationData } from "@/lib/data/navigationData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#242126] text-white border-t-4 border-[#A30D2D] relative overflow-hidden">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#720D27]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C5A15B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Bar: Accreditation & Affiliation Trust Badges */}
      <div className="border-b border-white/10 bg-[#1D1A1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-2 md:pt-0">
              <span className="block text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider">AICTE Approved</span>
              <span className="text-xs text-white/80 font-medium">All India Council for Technical Education</span>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider">RGPV Affiliated</span>
              <span className="text-xs text-white/80 font-medium">Bhopal (State Technological University)</span>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider">RDVV Affiliated</span>
              <span className="text-xs text-white/80 font-medium">Rani Durgawati Vishwavidyalaya (MBA)</span>
            </div>
            <div className="pt-2 md:pt-0 md:px-4">
              <span className="block text-[11px] font-bold text-[#C5A15B] uppercase tracking-wider">DTE MP Code</span>
              <span className="text-xs text-white/80 font-medium">Authorized Central Counseling Code: 0188</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Institutional Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1.5 border-2 border-[#C5A15B] shadow-md shrink-0">
                <Image 
                  src="/logo/logo.svg" 
                  alt="BGIEM Crest" 
                  width={56} 
                  height={56} 
                  className="w-full h-auto object-contain" 
                />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#C5A15B] uppercase block">
                  BADERIA GROUP
                </span>
                <span className="text-lg font-black tracking-tight text-white block leading-tight font-serif">
                  GLOBAL ENGINEERING COLLEGE
                </span>
                <span className="text-[11px] text-gray-400 block">
                  Baderia Global Institute of Engineering &amp; Management
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Established in 2002 under the aegis of Global Nature Care Sangathan&apos;s Group of Institutions (GNCSGI), Baderia Global is a leading center of technical and managerial education in central India, committed to academic rigor, cutting-edge research, and premier corporate placements.
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="bg-[#A30D2D]/60 text-white border border-[#A30D2D] text-[10px] font-semibold px-2.5 py-1 rounded-full">
                22+ Years Legacy
              </span>
              <span className="bg-[#720D27]/80 text-[#C5A15B] border border-[#C5A15B]/30 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                ₹46.71 LPA Highest CTC
              </span>
              <span className="bg-white/10 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                1 MP Armored NCC
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Connect With Us</span>
              <div className="flex items-center gap-2.5">
                {Object.entries(collegeData.contact.socialLinks).map(([network, url]) => (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#A30D2D] text-white flex items-center justify-center text-xs font-bold uppercase transition-all duration-200 hover:scale-105"
                    aria-label={network}
                  >
                    {network.substring(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Academic Departments (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase pb-2 border-b border-white/15 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#C5A15B]" />
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/departments/computer-science" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  Computer Science &amp; Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/aiml" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  CSE (AI &amp; Machine Learning)
                </Link>
              </li>
              <li>
                <Link href="/departments/cyber-security" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  CSE (IoT, Cyber Security &amp; Blockchain)
                </Link>
              </li>
              <li>
                <Link href="/departments/data-science" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  CSE (Data Science)
                </Link>
              </li>
              <li>
                <Link href="/departments/civil-engineering" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/mechanical-engineering" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/electronics-communication" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  Electronics &amp; Communication (ECE)
                </Link>
              </li>
              <li>
                <Link href="/departments/mba" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  MBA (Dual Specialization)
                </Link>
              </li>
              <li>
                <Link href="/departments/mba-hospital-admin" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  MBA in Hospital Administration
                </Link>
              </li>
              <li>
                <Link href="/departments/polytechnic" className="hover:text-[#C5A15B] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#A30D2D]" />
                  Polytechnic Diploma Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation & Admissions (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase pb-2 border-b border-white/15 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A15B]" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <Link href="/admissions" className="hover:text-[#C5A15B] transition-colors">
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link href="/admissions/fees" className="hover:text-[#C5A15B] transition-colors">
                  Fee Structure &amp; Scholarship
                </Link>
              </li>
              <li>
                <Link href="/placements" className="hover:text-[#C5A15B] transition-colors">
                  Placement Statistics
                </Link>
              </li>
              <li>
                <Link href="/campus" className="hover:text-[#C5A15B] transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link href="/campus/ncc" className="hover:text-[#C5A15B] transition-colors">
                  NCC Unit (1 MP Armored)
                </Link>
              </li>
              <li>
                <Link href="/events/global-garba" className="hover:text-[#C5A15B] transition-colors">
                  Grand Global Garba
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-[#C5A15B] transition-colors">
                  Photo &amp; Video Gallery
                </Link>
              </li>
              <li>
                <Link href="/mandatory-disclosures" className="hover:text-[#C5A15B] transition-colors">
                  Mandatory Disclosures
                </Link>
              </li>
              <li>
                <Link href="/student-support/grievance" className="hover:text-[#C5A15B] transition-colors">
                  Student Grievance Cell
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-[#C5A15B] transition-colors">
                  Downloads &amp; Syllabi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Location (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold tracking-wider text-white uppercase pb-2 border-b border-white/15 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C5A15B]" />
              Campus Location
            </h4>
            <div className="space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                <span>
                  <strong>Global Square, Patan Bypass</strong>, Raigwan, Jabalpur, Madhya Pradesh – 482002, India
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${collegeData.contact.phones[0]}`} className="block hover:text-white font-medium">
                    {collegeData.contact.phones[0]}
                  </a>
                  <a href={`tel:${collegeData.contact.phones[1]}`} className="block hover:text-white font-medium">
                    {collegeData.contact.phones[1]}
                  </a>
                  <span className="text-[11px] text-gray-400">Tel: 0761-4062300, 3077200</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A15B] shrink-0 mt-0.5" />
                <div>
                  <a href={`mailto:${collegeData.contact.emails.admissions}`} className="block hover:text-white">
                    {collegeData.contact.emails.admissions}
                  </a>
                  <a href={`mailto:${collegeData.contact.emails.general}`} className="block hover:text-white text-gray-400">
                    {collegeData.contact.emails.general}
                  </a>
                </div>
              </div>

              {/* Working hours */}
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-[11px]">
                <span className="text-[#C5A15B] font-bold block mb-0.5">Campus Working Hours</span>
                <span className="text-gray-300">{collegeData.contact.workingHours}</span>
              </div>

              {/* Direction button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A15B] hover:text-white transition-colors"
              >
                View Interactive Google Maps <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Line */}
      <div className="border-t border-white/10 bg-[#19171A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
            <div>
              &copy; {currentYear} <strong className="text-white">Baderia Global Institute of Engineering &amp; Management (GEC)</strong>. All Rights Reserved.
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[11px]">
              <Link href="/mandatory-disclosures" className="hover:text-white transition-colors">
                AICTE Disclosures
              </Link>
              <span>•</span>
              <Link href="/student-support/grievance" className="hover:text-white transition-colors">
                Anti-Ragging Committee
              </Link>
              <span>•</span>
              <Link href="/admissions" className="hover:text-white transition-colors">
                DTE MP Counseling Info
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:text-white transition-colors">
                Campus Directions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
