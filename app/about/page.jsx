import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Building2, ShieldCheck, Award, Users, 
  ArrowRight, CheckCircle2, Target, Eye, Sparkles, BookOpen 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "About Us | Institutional Overview & History",
  description: "Learn about the history, vision, and academic legacy of Baderia Global Institute of Engineering & Management, Jabalpur (GNCSGI)."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="Institutional Profile"
        title="About Baderia Global Engineering College"
        subtitle="A premier institution established in 2002 under Global Nature Care Sangathan's Group of Institutions, committed to technical excellence and ethical leadership."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Overview & History" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content (Span 8) */}
            <div className="lg:col-span-8 space-y-8">
              
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                  Our Institutional Genesis
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                  Over Two Decades of Transforming Young Minds in Central India
                </h2>
                <p className="text-sm text-[#77727A] leading-relaxed">
                  Established in the year 2002, <strong>Baderia Global Institute of Engineering &amp; Management (Global Engineering College)</strong> was founded with an unyielding commitment to bring world-class technical and managerial education to Jabalpur and the surrounding Mahakoshal region. Operating under the visionary auspices of <strong>Global Nature Care Sangathan&apos;s Group of Institutions (GNCSGI)</strong>, the college has earned a sterling reputation as an epicenter of scholarly discipline, hands-on experimentation, and ethical leadership.
                </p>
                <p className="text-sm text-[#77727A] leading-relaxed">
                  Spread across an architecturally planned <strong>45-acre lush green campus</strong> along Patan Bypass, the institute is officially approved by the <strong>All India Council for Technical Education (AICTE), New Delhi</strong>. Its undergraduate engineering (B.Tech), postgraduate technical (M.Tech), and polytechnic diploma programs are affiliated to <strong>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</strong>, while its esteemed Department of Management Studies (MBA) is affiliated to <strong>Rani Durgawati Vishwavidyalaya (RDVV), Jabalpur</strong>.
                </p>
              </div>

              {/* Founder Tribute Box */}
              <div className="bg-[#FAF8F8] p-6 rounded-2xl border-l-4 border-[#A30D2D] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A15B]">
                  Founding Philosophy
                </span>
                <h3 className="text-base font-bold text-[#242126]">
                  The Legacy of {collegeData.leadership.founderDirector.name}
                </h3>
                <p className="text-xs text-[#77727A] italic leading-relaxed">
                  &ldquo;{collegeData.leadership.founderDirector.message}&rdquo;
                </p>
                <span className="text-[11px] text-gray-500 font-medium block pt-1">
                  — {collegeData.leadership.founderDirector.title}
                </span>
              </div>

              {/* Core Pillars Grid */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#242126]">
                  Foundational Core Values
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {collegeData.coreValues.map((val, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#FAF8F8] border border-gray-200/80 space-y-1.5">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#A30D2D]">
                        <CheckCircle2 className="w-4 h-4 text-[#A30D2D]" />
                        <span>{val.title}</span>
                      </div>
                      <p className="text-xs text-[#77727A] leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Approvals & Accreditations List */}
              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-[#242126]">
                  Statutory Approvals &amp; University Affiliations
                </h3>
                <div className="space-y-3">
                  {collegeData.approvals.map((app, aIdx) => (
                    <div key={aIdx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#A30D2D]">{app.body}</span>
                          <span className="text-[10px] font-bold uppercase bg-[#F9EDEF] text-[#720D27] px-2 py-0.5 rounded">
                            {app.type}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-[#242126] mt-0.5">{app.fullName}</p>
                        <p className="text-[11px] text-gray-500 mt-0.5">{app.validity}</p>
                      </div>
                      <ShieldCheck className="w-5 h-5 text-[#C5A15B] shrink-0 mt-1" />
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Quick Facts & Submenu (Span 4) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Internal Submenu Navigation */}
              <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 pb-2 border-b border-gray-200">
                  Institution Pages
                </h4>
                <ul className="space-y-1.5 text-xs">
                  <li>
                    <Link href="/about" className="font-bold text-[#A30D2D] bg-[#F9EDEF] px-3 py-2 rounded-lg block">
                      Overview &amp; History
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/vision-mission" className="text-gray-700 hover:text-[#A30D2D] hover:bg-white px-3 py-2 rounded-lg block transition-colors">
                      Vision, Mission &amp; Values
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/leadership" className="text-gray-700 hover:text-[#A30D2D] hover:bg-white px-3 py-2 rounded-lg block transition-colors">
                      Chairman &amp; Director Messages
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/governing-body" className="text-gray-700 hover:text-[#A30D2D] hover:bg-white px-3 py-2 rounded-lg block transition-colors">
                      Governing Council &amp; Trust
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/affiliations" className="text-gray-700 hover:text-[#A30D2D] hover:bg-white px-3 py-2 rounded-lg block transition-colors">
                      Approvals &amp; Affiliations
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/achievements" className="text-gray-700 hover:text-[#A30D2D] hover:bg-white px-3 py-2 rounded-lg block transition-colors">
                      Institutional Achievements
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Fast Facts Card */}
              <div className="bg-gradient-to-br from-[#720D27] to-[#A30D2D] text-white p-6 rounded-2xl shadow-md space-y-4">
                <span className="text-[10px] font-bold text-[#C5A15B] uppercase tracking-wider block">
                  Quick Facts at a Glance
                </span>
                <div className="space-y-3 text-xs divide-y divide-white/10">
                  <div className="pt-2 first:pt-0">
                    <span className="text-white/60 block">Year Established</span>
                    <strong className="text-sm font-serif text-white">2002 (22+ Years Legacy)</strong>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/60 block">Campus Area</span>
                    <strong className="text-sm text-white">45+ Acres Green Campus</strong>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/60 block">Highest Package</span>
                    <strong className="text-sm text-[#DFC285]">₹46.71 LPA (Gitpod)</strong>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/60 block">Defense Unit</span>
                    <strong className="text-sm text-white">1 MP Armored Squadron NCC</strong>
                  </div>
                  <div className="pt-2">
                    <span className="text-white/60 block">DTE MP Code</span>
                    <strong className="text-sm text-[#DFC285]">0188 / GEC</strong>
                  </div>
                </div>

                <Link
                  href="/admissions/apply"
                  className="w-full bg-[#C5A15B] hover:bg-[#b08c47] text-[#242126] font-bold py-2.5 px-4 rounded-xl text-center block text-xs transition-colors"
                >
                  Apply for Admissions 2026
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}
