import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, GraduationCap, AlertCircle } from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export const metadata = {
  title: "Eligibility Criteria | B.Tech, M.Tech, MBA & Diploma",
  description: "Detailed qualification requirements, PCM percentage criteria, entrance exam cutoffs, and state reservations for all programs at Baderia Global."
};

export default function EligibilityPage() {
  return (
    <>
      <PageHeader
        badge="Admissions 2026-27"
        title="Programme Eligibility Criteria"
        subtitle="Official academic entry standards, entrance exam score guidelines, and reservation policies across all engineering, postgraduate, and diploma degrees."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Eligibility Criteria" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Admission Prerequisites
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Standard Academic Qualifications Required for Entry
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Eligibility criteria are formulated in strict accordance with the Directorate of Technical Education (DTE), Govt. of Madhya Pradesh, All India Council for Technical Education (AICTE), and Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV).
            </p>
          </div>

          {/* Criteria Cards by Level */}
          <div className="space-y-6">
            {programsData.map((prog) => (
              <div
                key={prog.id}
                className="bg-[#FAF8F8] p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-2xs hover:border-[#A30D2D]/30 transition-colors space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {prog.level}
                    </span>
                    <h3 className="text-lg font-bold text-[#242126]">
                      {prog.name}
                    </h3>
                  </div>
                  <div className="text-xs font-bold text-gray-500">
                    Duration: <span className="text-[#A30D2D]">{prog.duration}</span> • Intake: <span className="text-[#242126]">{prog.intake}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#242126] block">
                    Eligibility Requirement:
                  </span>
                  <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed bg-white p-4 rounded-xl border border-gray-200/80">
                    {prog.eligibility}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                  <span className="text-gray-500">
                    Affiliation: <strong className="text-[#242126]">{prog.affiliation}</strong>
                  </span>
                  <Link
                    href="/admissions/apply"
                    className="font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
                  >
                    Check Seat Eligibility &amp; Apply <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Lateral Entry Box */}
          <div className="p-6 rounded-2xl bg-[#F9EDEF]/60 border border-[#A30D2D]/20 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#720D27]">
              <AlertCircle className="w-4 h-4 text-[#A30D2D]" />
              <span>Direct Lateral Entry into 2nd Year (3rd Semester) B.Tech</span>
            </div>
            <p className="text-xs text-[#77727A] leading-relaxed">
              Candidates who have passed a 3-year Engineering Polytechnic Diploma examination in relevant engineering branch with minimum 45% aggregate marks (40% for reserved candidates of MP) or B.Sc Degree with Mathematics are eligible for direct admission into 2nd Year B.Tech under DTE Lateral Entry counseling rounds.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
