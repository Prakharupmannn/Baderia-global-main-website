"use client";

import Link from "next/link";
import { ChevronRight, Home, Sparkles } from "lucide-react";

export default function PageHeader({ 
  badge = "Baderia Global",
  title, 
  subtitle, 
  breadcrumbs = [] 
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white py-14 sm:py-18 overflow-hidden border-b-4 border-[#C5A15B]">
      {/* Decorative ambient gradients and pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A15B]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-4 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5 text-[#C5A15B]" />
            <span>Home</span>
          </Link>

          {breadcrumbs.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-white/40 shrink-0" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#C5A15B] font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </nav>

        {/* Category Pill */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-[#C5A15B] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3 h-3 text-[#C5A15B]" />
            {badge}
          </div>
        )}

        {/* Main Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-serif leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}
