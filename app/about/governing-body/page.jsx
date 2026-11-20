import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Users, ShieldCheck, Award, Building2, CheckCircle2 } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Governing Body & Trust | GNCSGI Jabalpur",
  description: "Governing Council and Board of Management of Global Nature Care Sangathan's Group of Institutions, Jabalpur."
};

export default function GoverningBodyPage() {
  const members = [
    { name: "Mr. Saurabh Baderia", role: "Chairman / President", category: "Trust Nominee & Educationist" },
    { name: "Dr. Rajiv Khatri", role: "Member Secretary & Director", category: "Institutional Head & Ex-Officio" },
    { name: "Nominee AICTE (Central)", role: "Council Member", category: "All India Council for Technical Education, New Delhi" },
    { name: "Nominee RGPV Bhopal", role: "University Representative", category: "State Technological University, Bhopal" },
    { name: "Nominee DTE MP", role: "State Govt. Representative", category: "Directorate of Technical Education, MP" },
    { name: "Industrialist Nominee", role: "Corporate Advisor", category: "Leading IT / Manufacturing Sector Nominee" },
    { name: "Dr. Arun Khare", role: "Faculty Representative", category: "Professor & HOD, Civil Engineering" },
    { name: "Prof. Saurabh Sharma", role: "Faculty Representative", category: "Associate Professor & HOD, CSE" }
  ];

  return (
    <>
      <PageHeader
        badge="Institutional Trust"
        title="Governing Council &amp; Management Board"
        subtitle="The statutory governing body established in strict compliance with AICTE guidelines, ensuring strategic governance and high educational standards."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Governing Body" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Governance Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Global Nature Care Sangathan&apos;s Group of Institutions (GNCSGI)
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              The Governing Body of Baderia Global Institute of Engineering &amp; Management comprises eminent educationists, government and university nominees, distinguished researchers, and industry stalwarts. Meeting on a quarterly schedule, the Council reviews academic performance, infrastructure development, recruitment, financial allocations, and research initiatives.
            </p>
          </div>

          {/* Members Table / Grid */}
          <div className="bg-[#FAF8F8] rounded-2xl border border-gray-200/90 overflow-hidden shadow-xs">
            <div className="p-4 bg-[#720D27] text-white flex items-center justify-between">
              <span className="font-bold text-xs uppercase tracking-wider">Governing Council Constitution</span>
              <span className="text-[11px] text-[#C5A15B] font-semibold">AICTE Constituted</span>
            </div>

            <div className="divide-y divide-gray-200/80">
              {members.map((m, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-white transition-colors">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-[#242126]">{m.name}</span>
                    <span className="text-xs text-[#77727A] block">{m.category}</span>
                  </div>
                  <span className="text-xs font-semibold bg-[#F9EDEF] text-[#A30D2D] px-3 py-1 rounded-full self-start sm:self-center border border-[#A30D2D]/20">
                    {m.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Functions and Responsibilities */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold text-xs">
                01
              </div>
              <h4 className="text-sm font-bold text-[#242126]">Academic Strategy</h4>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Appraising academic results, syllabus innovations, research publications, and initiating new undergraduate and postgraduate specializations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold text-xs">
                02
              </div>
              <h4 className="text-sm font-bold text-[#242126]">Infrastructure Grants</h4>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Approving annual capital budgets for advanced computing hardware, laboratory apparatus, library digitization, and sports facilities.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold text-xs">
                03
              </div>
              <h4 className="text-sm font-bold text-[#242126]">Corporate Placement Linkages</h4>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Fostering institutional relationships with top MNCs, government bodies, and international tech ecosystems for student recruitments.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
