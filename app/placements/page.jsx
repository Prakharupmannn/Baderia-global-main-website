import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Trophy, TrendingUp, Building2, Users, 
  ArrowRight, Sparkles, CheckCircle2, ChevronRight, Award, Phone, Mail 
} from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";

export const metadata = {
  title: "Training & Placement Cell | Corporate Resource Centre",
  description: "Official placement portal of Baderia Global Engineering College. Highest package ₹46.71 LPA, 1200+ offers, 250+ top corporate recruiters."
};

export default function PlacementsPage() {
  return (
    <>
      <PageHeader
        badge="Corporate Resource Centre"
        title="Training &amp; Placement Cell"
        subtitle="Bridging academic potential with Fortune 500 corporate recruiters, tech product enterprises, and core engineering giants."
        breadcrumbs={[
          { label: "Placements", href: "/placements" },
          { label: "Overview & Records" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key 4 Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placementsData.highlights.slice(0, 4).map((item, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#A30D2D] font-serif block">
                  {item.value}
                </span>
                <span className="text-xs font-bold text-[#242126] block mt-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-gray-500 block mt-0.5">
                  {item.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Overview & TPO Head Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Corporate Relations Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                {placementsData.overview.tagline}
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                {placementsData.overview.description}
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Our campus infrastructure includes a dedicated <strong>Placement Auditorium</strong> with a seating capacity of 500+ candidates, 10 air-conditioned personal interview cubicles, computerized online testing labs with 180+ terminals, and executive boardrooms for corporate HR panels.
              </p>

              {/* Package Bands Grid */}
              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Annual Placement Distribution
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {placementsData.packageBands.map((band, bIdx) => (
                    <div key={bIdx} className="p-3.5 rounded-xl bg-[#FAF8F8] border border-gray-200 text-center">
                      <span className="text-sm font-bold text-[#A30D2D] block">{band.count}</span>
                      <span className="text-xs font-semibold text-[#242126] block mt-0.5">{band.range}</span>
                      <span className="text-[10px] text-gray-500 block">{band.badge}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TPO Head Card */}
            <div className="lg:col-span-5 bg-[#FAF8F8] p-7 rounded-3xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex items-center justify-center font-bold font-serif text-xl shadow-xs shrink-0">
                  VP
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                    Training &amp; Corporate Relations
                  </span>
                  <h3 className="text-base font-bold text-[#242126]">
                    {placementsData.overview.tpoHead.name}
                  </h3>
                  <span className="text-xs text-[#A30D2D] font-medium block">
                    {placementsData.overview.tpoHead.title}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-[#77727A] italic leading-relaxed font-serif">
                &ldquo;{placementsData.overview.tpoHead.message}&rdquo;
              </div>

              <div className="pt-2 text-xs space-y-1 text-gray-600">
                <div>
                  <strong>Desk Phone:</strong> {placementsData.overview.tpoHead.phone}
                </div>
                <div>
                  <strong>Corporate Email:</strong>{" "}
                  <a href={`mailto:${placementsData.overview.tpoHead.email}`} className="text-[#A30D2D] font-bold hover:underline">
                    {placementsData.overview.tpoHead.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recruiters Carousel Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                  Visiting Companies
                </span>
                <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-0.5">
                  Top Corporate Recruiters
                </h3>
              </div>
              <Link
                href="/placements/recruiters"
                className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
              >
                View Complete Recruiter Directory <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
              {placementsData.topRecruiters.slice(0, 15).map((rec, rIdx) => (
                <div
                  key={rIdx}
                  className="bg-[#FAF8F8] hover:bg-white p-4 rounded-xl border border-gray-200 hover:border-[#A30D2D]/40 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#242126] block leading-tight">{rec.name}</span>
                    <span className="text-[10px] text-gray-500 block mt-0.5">{rec.category}</span>
                  </div>
                  <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#A30D2D]">{rec.package}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Subpage Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <Link
              href="/placements/statistics"
              className="p-6 rounded-2xl bg-[#FAF8F8] hover:bg-[#F9EDEF] border border-gray-200 transition-colors group space-y-2"
            >
              <h4 className="font-bold text-sm text-[#242126] group-hover:text-[#A30D2D] flex items-center justify-between">
                <span>Placement Statistics</span>
                <ArrowRight className="w-4 h-4 text-[#A30D2D]" />
              </h4>
              <p className="text-xs text-[#77727A]">
                Deep dive into year-wise recruitment packages, highest offers, and branch records.
              </p>
            </Link>

            <Link
              href="/placements/training"
              className="p-6 rounded-2xl bg-[#FAF8F8] hover:bg-[#F9EDEF] border border-gray-200 transition-colors group space-y-2"
            >
              <h4 className="font-bold text-sm text-[#242126] group-hover:text-[#A30D2D] flex items-center justify-between">
                <span>CRT Skill Roadmap</span>
                <ArrowRight className="w-4 h-4 text-[#A30D2D]" />
              </h4>
              <p className="text-xs text-[#77727A]">
                Explore the 4-phase campus recruitment training modules and aptitude prep.
              </p>
            </Link>

            <Link
              href="/placements/team"
              className="p-6 rounded-2xl bg-[#FAF8F8] hover:bg-[#F9EDEF] border border-gray-200 transition-colors group space-y-2"
            >
              <h4 className="font-bold text-sm text-[#242126] group-hover:text-[#A30D2D] flex items-center justify-between">
                <span>Placement Cell Team</span>
                <ArrowRight className="w-4 h-4 text-[#A30D2D]" />
              </h4>
              <p className="text-xs text-[#77727A]">
                Contact training coordinators, faculty branch in-charges, and student leads.
              </p>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
