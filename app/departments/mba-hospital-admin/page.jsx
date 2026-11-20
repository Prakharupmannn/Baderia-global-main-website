import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Building2, Hospital } from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export const metadata = {
  title: "MBA in Hospital Administration & Health Care Management | RDVV Jabalpur",
  description: "Specialized 2-year MBA in Hospital Administration at Baderia Global. NABH compliance, clinical operations, hospital postings, and medical tourism careers."
};

export default function MbaHospitalAdminPage() {
  const prog = programsData.find((p) => p.id === "mba-hospital");

  return (
    <>
      <PageHeader
        badge="Specialized MBA"
        title="MBA in Hospital Administration &amp; Health Care Management"
        subtitle="Addressing the acute leadership demand in modern multi-specialty healthcare, clinical governance, medical tourism, and health insurance."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "MBA Hospital Administration" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Healthcare Management Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Pioneering Professional Healthcare Governance in Central India
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                {prog.overview}
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Affiliated to Rani Durgawati Vishwavidyalaya (RDVV) and approved by AICTE, this program prepares medical doctors (MBBS, BDS, BAMS, BHMS), nursing professionals (B.Sc Nursing), pharmacy graduates (B.Pharm), and life sciences degree holders to lead operations, NABH/JCI quality accreditations, and patient relations across premier hospital chains.
              </p>

              {/* Highlights */}
              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h3 className="text-base font-bold text-[#242126]">Key Program Highlights</h3>
                <div className="space-y-2">
                  {prog.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Careers */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#242126]">Career Pathways &amp; Roles</h3>
                <div className="flex flex-wrap gap-2">
                  {prog.careers.map((car, cIdx) => (
                    <span key={cIdx} className="bg-white border border-gray-200 shadow-2xs text-xs font-semibold text-[#242126] px-3 py-1.5 rounded-lg">
                      {car}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-3xl border-2 border-gray-200 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                Program Credentials
              </span>
              <div className="space-y-3 text-xs divide-y divide-gray-200">
                <div className="pt-2 first:pt-0">
                  <span className="text-gray-500 block">Duration</span>
                  <strong className="text-sm text-[#242126]">{prog.duration}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Approved Intake</span>
                  <strong className="text-sm text-[#A30D2D]">{prog.intake}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Affiliation</span>
                  <strong className="text-xs text-[#242126]">{prog.affiliation}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Eligibility</span>
                  <p className="text-[11px] text-gray-700 leading-snug mt-1">{prog.eligibility}</p>
                </div>
              </div>

              <Link
                href="/admissions/apply"
                className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-4 rounded-xl text-center block transition-colors shadow-sm"
              >
                Apply for MBA Hospital Admin
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
