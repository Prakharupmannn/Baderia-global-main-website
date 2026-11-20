import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  GraduationCap, BookOpen, Calendar, Award, 
  ArrowRight, CheckCircle2, Laptop, Building2, Cog, Radio, Briefcase 
} from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";
import { programsData } from "@/lib/data/programsData";

export const metadata = {
  title: "Academics Overview | Curriculum & Learning Ecosystem",
  description: "Academic framework, industry-aligned curricula, university affiliations, and multidisciplinary education at Baderia Global Engineering College."
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        badge="Academic Rigor"
        title="Academics &amp; Educational Ecosystem"
        subtitle="Empowering intellectual capability through contemporary university syllabi, continuous laboratory experimentation, and industry mentorship."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Overview & Structure" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Editorial Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Educational Philosophy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Synthesizing Scientific Fundamentals with Emerging Technologies
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Academic life at Baderia Global is designed to cultivate independent analytical intellect and hands-on technological proficiency. Operating under the authoritative guidelines of <strong>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal</strong> for engineering and polytechnic disciplines, and <strong>Rani Durgawati Vishwavidyalaya (RDVV), Jabalpur</strong> for business administration, our educational framework adheres to the highest national accreditation standards.
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                From specialized labs equipped with NVIDIA GPU clusters to central mechanical workshops spanning 10,000+ sq. ft., every student spends over 50% of instructional hours in practical laboratory setups, hackathons, and industrial capstone projects.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-2xl border-2 border-gray-200 space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B]">
                Academic Structure
              </span>
              <div className="space-y-2 text-xs divide-y divide-gray-200">
                <div className="pt-2 first:pt-0">
                  <span className="text-gray-500 block">Total Academic Departments</span>
                  <strong className="text-sm text-[#242126]">6 Core Departments</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Degrees Offered</span>
                  <strong className="text-sm text-[#242126]">B.Tech, M.Tech, MBA, Polytechnic</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Evaluation System</span>
                  <strong className="text-sm text-[#242126]">Semester CBCS Grading (RGPV/RDVV)</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Specializations</span>
                  <strong className="text-sm text-[#A30D2D]">AI/ML, Data Science, Cyber Security</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Departments Navigation Grid */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                  Center of Excellences
                </span>
                <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-0.5">
                  Explore Academic Departments
                </h3>
              </div>
              <Link
                href="/academics/courses"
                className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
              >
                View Full Course Catalog <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentsData.map((dept) => {
                const linkMap = {
                  "computer-science": "/departments/computer-science",
                  "civil-engineering": "/departments/civil-engineering",
                  "mechanical-engineering": "/departments/mechanical-engineering",
                  "electronics-communication": "/departments/electronics-communication",
                  "mba": "/departments/mba",
                  "applied-science": "/departments/applied-science"
                };

                return (
                  <div
                    key={dept.id}
                    className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full">
                          {dept.shortName}
                        </span>
                        <span className="text-xs font-semibold text-gray-500">
                          HOD: {dept.hod.name.split(" ")[0]} {dept.hod.name.split(" ")[1]}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-[#242126] leading-snug">
                        {dept.name}
                      </h4>

                      <p className="text-xs text-[#77727A] line-clamp-2">
                        {dept.tagline}
                      </p>
                    </div>

                    <div className="pt-4 mt-3 border-t border-gray-200/60">
                      <Link
                        href={linkMap[dept.id] || "/academics"}
                        className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
                      >
                        Department Profile &amp; Labs <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Academic Governance & Examination Section */}
          <div className="bg-[#FAF8F8] p-8 rounded-3xl border border-gray-200/90 space-y-6">
            <h3 className="text-xl font-bold text-[#242126]">
              Examination, Evaluation &amp; Credit System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
              <div className="space-y-2 bg-white p-5 rounded-2xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] text-sm block">Choice Based Credit System (CBCS)</span>
                <p className="leading-relaxed text-[#77727A]">
                  Curricula adhere to the Choice Based Credit System (CBCS) approved by UGC and AICTE, enabling student mobility, inter-departmental electives, and modular credit accumulation.
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-2xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] text-sm block">Continuous Internal Evaluation (CIE)</span>
                <p className="leading-relaxed text-[#77727A]">
                  Mid-semester assessments, laboratory viva-voce, coding assignments, and seminar presentations ensure continuous progress monitoring beyond terminal end-semester exams.
                </p>
              </div>

              <div className="space-y-2 bg-white p-5 rounded-2xl border border-gray-200">
                <span className="font-bold text-[#A30D2D] text-sm block">RGPV &amp; RDVV University Degree</span>
                <p className="leading-relaxed text-[#77727A]">
                  End-semester examinations and degree certifications are officially governed by Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and Rani Durgawati Vishwavidyalaya (RDVV).
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
