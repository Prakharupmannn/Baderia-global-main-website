import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  UserCheck, Award, GraduationCap, Mail, 
  ArrowRight, Sparkles, BookOpen 
} from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export const metadata = {
  title: "Faculty Directory | Academic Professors & Researchers",
  description: "Distinguished academic faculty, professors, and department heads across engineering and management at Baderia Global Engineering College, Jabalpur."
};

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        badge="Academic Mentorship"
        title="Distinguished Faculty Directory"
        subtitle="Learn under seasoned professors, Ph.D. scholars, and researchers dedicated to technical rigor, innovation, and career mentorship."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Faculty Directory" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Teaching Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Scholars, Mentors &amp; Industry Practitioners
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Our faculty members bring decades of deep academic inquiry, Scopus/IEEE journal publications, industrial consultancy, and passionate pedagogical commitment. Maintaining an excellent student-to-faculty ratio, professors provide continuous individual mentoring, research guidance, and campus recruitment training.
            </p>
          </div>

          {/* Department-wise Faculty Showcase */}
          <div className="space-y-14">
            {departmentsData.map((dept) => (
              <div key={dept.id} className="space-y-6 pt-6 first:pt-0 border-t first:border-t-0 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {dept.shortName} Department
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#242126]">
                      {dept.name}
                    </h3>
                  </div>

                  <span className="text-xs font-semibold text-gray-500">
                    HOD: <strong className="text-[#A30D2D]">{dept.hod.name}</strong>
                  </span>
                </div>

                {/* Faculty Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.faculty.map((fac, fIdx) => (
                    <div
                      key={fIdx}
                      className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 shadow-2xs hover:border-[#A30D2D]/40 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex items-center justify-center font-bold font-serif text-sm shrink-0">
                            {fac.name.split(" ").slice(1, 3).map(n => n[0]).join("") || "PR"}
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#242126] leading-tight">
                              {fac.name}
                            </h4>
                            <span className="text-[11px] text-[#A30D2D] font-semibold block mt-0.5">
                              {fac.role}
                            </span>
                          </div>
                        </div>

                        <div className="p-3 bg-white rounded-xl border border-gray-200/60 text-xs space-y-1">
                          <div className="text-gray-700">
                            <span className="font-semibold text-[#242126]">Specialization:</span> {fac.spec}
                          </div>
                          <div className="text-gray-500 text-[11px]">
                            <span className="font-semibold text-[#242126]">Experience:</span> {fac.exp}
                          </div>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-gray-200/50 flex items-center justify-between text-[11px]">
                        <span className="text-gray-400 font-medium">Baderia Global Faculty</span>
                        <span className="text-[#A30D2D] font-bold">Full-Time</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
