import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Briefcase, CheckCircle2, ArrowRight, TrendingUp, Users, Award, ShieldCheck } from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export const metadata = {
  title: "Department of Management Studies (MBA) | RDVV Affiliated",
  description: "Master of Business Administration (MBA Dual Specialization: Marketing, Finance, HR) at Baderia Global Engineering College, Jabalpur."
};

export default function MbaDeptPage() {
  const dept = departmentsData.find((d) => d.id === "mba");

  return (
    <>
      <PageHeader
        badge="Postgraduate Business School"
        title="Department of Management Studies (MBA)"
        subtitle="Cultivating visionary business leaders, financial strategists, and marketing innovators affiliated to Rani Durgawati Vishwavidyalaya (RDVV)."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Management Studies (MBA)" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dept.keyStats.map((st, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#A30D2D] font-serif block">
                  {st.value}
                </span>
                <span className="text-xs font-semibold text-gray-600 block mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>

          {/* Overview & HOD */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Business School Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                {dept.tagline}
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                The Department of Management Studies offers an intensive 2-year full-time Master of Business Administration (MBA) program approved by AICTE and affiliated to <strong>Rani Durgawati Vishwavidyalaya (RDVV), Jabalpur</strong>. Offering dynamic Dual Specialization pathways across <strong>Marketing, Financial Management, and Human Resource Management</strong>.
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Our pedagogical approach integrates corporate case studies, summer internship projects (SIP), live equity market simulations, amphitheater group discussions, and CXO guest lectures to bridge academic theory with corporate boardroom realities.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h3 className="text-base font-bold text-[#242126]">MBA Specialization Tracks</h3>
                <div className="space-y-2">
                  {dept.programsOffered.map((prog, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* HOD Card */}
            <div className="lg:col-span-5 bg-[#FAF8F8] p-7 rounded-3xl border-2 border-gray-200 space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex items-center justify-center font-bold font-serif text-xl shadow-xs shrink-0">
                  SB
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                    Head of Department (HOD)
                  </span>
                  <h3 className="text-base font-bold text-[#242126]">
                    {dept.hod.name}
                  </h3>
                  <span className="text-xs text-[#A30D2D] font-medium block">
                    {dept.hod.designation}
                  </span>
                  <span className="text-[11px] text-gray-500 block">
                    {dept.hod.qualification} • {dept.hod.experience}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs text-[#77727A] italic leading-relaxed font-serif">
                &ldquo;{dept.hod.message}&rdquo;
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-gray-500">Official Desk:</span>
                <a href={`mailto:${dept.hod.email}`} className="font-bold text-[#A30D2D] hover:underline">
                  {dept.hod.email}
                </a>
              </div>
            </div>
          </div>

          {/* Laboratories & Amphitheater */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#242126] font-serif">
              Management Simulation &amp; Corporate Communication Facilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dept.laboratories.map((lab, lIdx) => (
                <div key={lIdx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#242126]">{lab.name}</h4>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Faculty */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#242126] font-serif">
              Management Studies Faculty
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {dept.faculty.map((f, fIdx) => (
                <div key={fIdx} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-2">
                  <h4 className="font-bold text-sm text-[#242126]">{f.name}</h4>
                  <span className="text-xs font-semibold text-[#A30D2D] block">{f.role}</span>
                  <div className="text-xs text-gray-600">
                    <strong>Specialization:</strong> {f.spec}
                  </div>
                  <div className="text-[11px] text-gray-500">
                    <strong>Experience:</strong> {f.exp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#F9EDEF] p-8 rounded-3xl border border-[#A30D2D]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#720D27]">
                Launch an Accelerating Corporate Management Career
              </h4>
              <p className="text-xs text-[#77727A] mt-1">
                Admissions open for MBA Dual Specialization (120 Seats) through CMAT / Graduation Merit.
              </p>
            </div>
            <Link
              href="/admissions/apply"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Apply for MBA Admission
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
