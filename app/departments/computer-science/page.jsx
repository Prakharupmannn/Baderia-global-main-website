import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Laptop, Cpu, Award, Users, ArrowRight, 
  CheckCircle2, Sparkles, BookOpen, Quote, ShieldCheck 
} from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export const metadata = {
  title: "Department of Computer Science & Engineering | BGIEM Jabalpur",
  description: "B.Tech, M.Tech, and Diploma programs in CSE. High-performance GPU labs, AI research, cloud computing, and top placements at Gitpod, TCS, Infosys, Cisco."
};

export default function ComputerScienceDeptPage() {
  const dept = departmentsData.find((d) => d.id === "computer-science");

  return (
    <>
      <PageHeader
        badge="Engineering Department"
        title="Department of Computer Science &amp; Engineering"
        subtitle="Pioneering software engineering, algorithmic intelligence, cloud systems, and next-generation computing architectures."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Computer Science & Engineering" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key Stats Bar */}
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

          {/* Department Overview & HOD Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Content (Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                  Department Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                  {dept.tagline}
                </h2>
                <p className="text-sm text-[#77727A] leading-relaxed">
                  The Department of Computer Science &amp; Engineering at Baderia Global is the flagship technological powerhouse of the institute. Approved by AICTE and affiliated to RGPV Bhopal, the department offers comprehensive undergraduate (B.Tech in CSE, AI/ML, Cyber Security, Data Science), postgraduate (M.Tech CSE), and polytechnic diploma programs.
                </p>
                <p className="text-sm text-[#77727A] leading-relaxed">
                  With over 180 networked computing terminals, dedicated NVIDIA GPU computing workstations, high-speed 1 Gbps leased fiber lines, and continuous competitive coding bootcamps, our students consistently achieve record placements with top corporate packages touching <strong>₹46.71 LPA</strong>.
                </p>
              </div>

              {/* Programs Offered List */}
              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h3 className="text-base font-bold text-[#242126]">
                  Degree Programs Administered by Department
                </h3>
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

            {/* Right HOD Card (Span 5) */}
            <div className="lg:col-span-5 bg-[#FAF8F8] p-7 rounded-3xl border-2 border-gray-200/90 shadow-sm space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex items-center justify-center font-bold font-serif text-xl shadow-xs shrink-0">
                  SS
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

          {/* Laboratories Showcase */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Hands-on Infrastructure
              </span>
              <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-1">
                Advanced Computing Laboratories
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dept.laboratories.map((lab, lIdx) => (
                <div key={lIdx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200 shadow-2xs space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#242126]">{lab.name}</h4>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {lab.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Department Faculty Table / Grid */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Department Professors
              </span>
              <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-1">
                Faculty Members &amp; Research Leads
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

          {/* Apply CTA Banner */}
          <div className="bg-[#F9EDEF] p-8 rounded-3xl border border-[#A30D2D]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#720D27]">
                Ready to Join Department of Computer Science &amp; Engineering?
              </h4>
              <p className="text-xs text-[#77727A] mt-1">
                Admissions for Session 2026-27 are open under DTE MP Online Counseling &amp; CLC rounds.
              </p>
            </div>
            <Link
              href="/admissions/apply"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Apply for CSE Admission
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
