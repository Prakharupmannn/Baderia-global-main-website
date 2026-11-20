"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, ChevronDown, GraduationCap, Phone, Sparkles, 
  ArrowRight, Search, Award, FileText, CheckCircle2 
} from "lucide-react";
import { navigationData } from "@/lib/data/navigationData";
import { collegeData } from "@/lib/data/collegeData";
import MobileDrawer from "./MobileDrawer";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5 py-2 border-b border-gray-100" 
            : "bg-white py-3.5 border-b border-gray-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* College Brand Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center p-1 border-2 border-[#C5A15B] shadow-sm transition-transform group-hover:scale-105">
                <Image 
                  src="/logo/logo.svg" 
                  alt="Baderia Global Engineering College Emblem" 
                  width={52} 
                  height={52} 
                  priority
                  className="w-full h-auto object-contain" 
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#C5A15B] uppercase">
                    BADERIA GROUP
                  </span>
                  <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#A30D2D]"></span>
                  <span className="hidden sm:inline-block text-[10px] font-semibold text-[#77727A] uppercase tracking-wider">
                    Estd. 2002
                  </span>
                </div>
                
                <div className="flex items-baseline gap-1">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-[#A30D2D] font-serif">
                    GLOBAL
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#242126]">
                    ENGINEERING COLLEGE
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-[#77727A] font-medium leading-none mt-0.5">
                  <span className="hidden md:inline">Baderia Global Institute of Engg. &amp; Mgmt.</span>
                  <span className="hidden md:inline text-gray-300">•</span>
                  <span className="text-[#A30D2D] font-semibold">AICTE • RGPV • RDVV</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navigationData.map((item, index) => {
                const isMega = item.megaMenu;
                const isOpen = activeDropdown === item.title;

                return (
                  <div 
                    key={index} 
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 px-3 py-2 text-[13px] xl:text-[14px] font-semibold tracking-wide transition-colors rounded-md ${
                        isOpen 
                          ? "text-[#A30D2D] bg-[#F9EDEF]" 
                          : "text-[#242126] hover:text-[#A30D2D] hover:bg-gray-50"
                      }`}
                    >
                      {item.title}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#A30D2D]" : "text-gray-400"}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {isMega && isOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[780px] z-50">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-6 grid grid-cols-3 gap-6 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                          {item.categories.map((cat, cIdx) => (
                            <div key={cIdx} className="space-y-3">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-[#A30D2D] pb-1.5 border-b border-[#A30D2D]/20 flex items-center justify-between">
                                {cat.heading}
                              </h4>
                              <ul className="space-y-1.5">
                                {cat.items.map((sub, sIdx) => (
                                  <li key={sIdx}>
                                    <Link
                                      href={sub.href}
                                      className="group/sub flex items-center justify-between text-xs text-gray-700 hover:text-[#A30D2D] py-1 px-2 rounded hover:bg-[#F9EDEF]/60 transition-colors"
                                    >
                                      <span className="font-medium">{sub.name}</span>
                                      {sub.tag && (
                                        <span className="text-[9px] bg-[#A30D2D] text-white px-1.5 py-0.5 rounded-full font-bold">
                                          {sub.tag}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}

                          {/* Mega menu bottom banner */}
                          <div className="col-span-3 pt-3 border-t border-gray-100 flex items-center justify-between bg-[#F9EDEF]/40 px-4 py-2.5 rounded-lg text-xs">
                            <span className="text-[#720D27] font-semibold flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
                              Need assistance with DTE choice filling or branch selection?
                            </span>
                            <Link
                              href="/admissions/apply"
                              className="text-[#A30D2D] hover:text-[#720D27] font-bold flex items-center gap-1"
                            >
                              Get Free Counseling <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Standard Dropdown */}
                    {!isMega && isOpen && (
                      <div className="absolute top-full left-0 pt-2 w-72 z-50">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-2.5 space-y-1 transition-all duration-200 animate-in fade-in slide-in-from-top-2">
                          {item.items.map((sub, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sub.href}
                              className="block p-2 rounded-lg hover:bg-[#F9EDEF] transition-colors group/item"
                            >
                              <div className="text-xs font-semibold text-[#242126] group-hover/item:text-[#A30D2D]">
                                {sub.name}
                              </div>
                              {sub.desc && (
                                <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                                  {sub.desc}
                                </div>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <Link
                href="/admissions"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-[#A30D2D] bg-[#F9EDEF] hover:bg-[#f3dcde] px-3.5 py-2.5 rounded-lg transition-colors border border-[#A30D2D]/20"
              >
                <GraduationCap className="w-4 h-4 text-[#A30D2D]" />
                Admissions 2026
              </Link>

              <Link
                href="/admissions/apply"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-[#A30D2D] to-[#720D27] hover:from-[#8C0B26] hover:to-[#5E0A20] px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                Apply Online
                <ArrowRight className="w-3.5 h-3.5 text-[#C5A15B]" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/admissions/apply"
                className="text-xs font-bold text-white bg-[#A30D2D] px-3 py-1.5 rounded-md"
              >
                Apply
              </Link>
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-gray-700 hover:text-[#A30D2D] hover:bg-gray-100 transition-colors"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
      />
    </>
  );
}
