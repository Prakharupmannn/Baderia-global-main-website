import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Building2, CheckCircle2, ArrowRight, ShieldCheck, UserCheck, HardHat } from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export const metadata = {
  title: "Department of Civil Engineering | BGIEM Jabalpur",
  description: "B.Tech, M.Tech Structural Engineering, and Polytechnic Diploma in Civil Engineering. Material testing, surveying Total Stations, and construction consultancy."
};

export default function CivilEngineeringDeptPage() {
  const dept = departmentsData.find((d) => d.id === "civil-engineering");

  return (
    <>
      <PageHeader
        badge="Engineering Department"
        title="Department of Civil Engineering"
        subtitle="Designing, building, and sustaining modern urban infrastructure, structural masterpieces, and environmental stewardship."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Civil Engineering" }
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
                Department Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                {dept.tagline}
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Civil Engineering at Baderia Global trains future structural engineers, construction project managers, and environmental planners to shape resilient modern cities. Affiliated with RGPV Bhopal and approved by AICTE, the department offers B.Tech in Civil Engineering, M.Tech in Structural Engineering, and Polytechnic Diploma programs.
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                The department also undertakes official structural auditing and material testing consultancy for government departments, smart city projects, and private infrastructure developers across the Jabalpur region.
              </p>

              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h3 className="text-base font-bold text-[#242126]">Degrees Offered</h3>
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
                  AK
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

          {/* Laboratories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-extrabold text-[#242126] font-serif">
              Specialized Testing Laboratories &amp; Surveying Centers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.laboratories.map((lab, lIdx) => (
                <div key={lIdx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold">
                    <Building2 className="w-5 h-5" />
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
              Civil Engineering Faculty
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
                Build the Infrastructure of the Future
              </h4>
              <p className="text-xs text-[#77727A] mt-1">
                Admissions open for B.Tech &amp; Polytechnic Diploma in Civil Engineering.
              </p>
            </div>
            <Link
              href="/admissions/apply"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Apply for Civil Engineering
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
