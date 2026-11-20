"use client";

import Link from "next/link";
import { 
  Trophy, Cpu, ShieldCheck, BookOpen, 
  Building2, Users, Flame, Sparkles, 
  ArrowRight, CheckCircle2 
} from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: <Trophy className="w-6 h-6 text-[#A30D2D]" />,
      title: "Proven Placement Legacy",
      description: "Consistent record with packages touching ₹46.71 LPA (Gitpod) and 1,200+ annual job offers across 250+ premier MNCs including TCS, Infosys, Cisco, Commvault, and Samsung.",
      link: "/placements"
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#A30D2D]" />,
      title: "AI & Next-Gen Computing Labs",
      description: "Equipped with dedicated NVIDIA GPU computing clusters, 1 Gbps high-speed optical fiber backbone, Cloud Computing and Cybersecurity sandboxes.",
      link: "/campus/laboratories"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#A30D2D]" />,
      title: "1 MP Armored Squadron NCC",
      description: "A prestigious on-campus NCC Senior Division wing offering rigorous parade, weapon handling, obstacle training, and direct SSB armed forces entry pathways.",
      link: "/campus/ncc"
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#A30D2D]" />,
      title: "Central Automated Library",
      description: "Spanning 12,000+ sq. ft. with over 50,000 volumes, DELNET and IEEE digital subscriptions, and a 300+ seat quiet research study hall.",
      link: "/campus/library"
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#A30D2D]" />,
      title: "45-Acre Lush Green Campus",
      description: "Architecturally planned campus featuring smart multimedia lecture halls, central workshop, modern cafeterias, sports pavilions, and verdant lawns.",
      link: "/campus"
    },
    {
      icon: <Users className="w-6 h-6 text-[#A30D2D]" />,
      title: "Distinguished Academic Faculty",
      description: "Learn under senior professors, Ph.D. scholars, and researchers possessing decades of academic depth and industrial consultancy credentials.",
      link: "/faculty"
    },
    {
      icon: <Flame className="w-6 h-6 text-[#A30D2D]" />,
      title: "Legendary Grand Global Garba",
      description: "Home to central India's most celebrated annual Navratri spectacle drawing 10,000+ footfalls, celebrity artists, and regional cultural acclaim.",
      link: "/events/global-garba"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#A30D2D]" />,
      title: "Comprehensive CRT Training",
      description: "Multi-semester Campus Recruitment Training beginning in Year 2 covering coding data structures, quantitative aptitude, and amphitheater group discussions.",
      link: "/placements/training"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-[#FAF8F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A15B]" />
            The Baderia Global Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#242126] font-serif tracking-tight leading-tight">
            Why Visionary Students Choose Global Engineering College
          </h2>
          <p className="mt-3 text-sm text-[#77727A] leading-relaxed">
            From technical mastery and defense discipline to cultural vibrancy, we cultivate complete professionals prepared to thrive on national and international stages.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl border border-gray-200/80 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F9EDEF] group-hover:bg-[#A30D2D] text-[#A30D2D] group-hover:text-white flex items-center justify-center transition-colors mb-4 shadow-2xs">
                  {item.icon}
                </div>
                
                <h3 className="text-base font-bold text-[#242126] group-hover:text-[#A30D2D] transition-colors mb-2">
                  {item.title}
                </h3>
                
                <p className="text-xs text-[#77727A] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-gray-100">
                <Link
                  href={item.link}
                  className="text-xs font-bold text-[#A30D2D] group-hover:text-[#720D27] inline-flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
