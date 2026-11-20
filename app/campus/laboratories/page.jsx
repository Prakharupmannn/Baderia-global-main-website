import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Cpu, CheckCircle2, ArrowRight, Laptop, Building2, Cog, Radio } from "lucide-react";
import { departmentsData } from "@/lib/data/departmentsData";

export const metadata = {
  title: "High-Tech Laboratories & Workshops | Engineering Facilities",
  description: "Comprehensive showcase of 40+ engineering laboratories, central workshops, AI computing centers, and testing labs at Baderia Global."
};

export default function LaboratoriesPage() {
  return (
    <>
      <PageHeader
        badge="Experimental Rigor"
        title="High-Tech Laboratories &amp; Central Workshops"
        subtitle="Over 40 specialized engineering laboratories outfitted with contemporary instrumentation, GPU workstations, and industrial testing rigs."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Laboratories" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Practical Pedagogy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Bridging Theory with Industrial Application
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              At Baderia Global, engineering is mastered through touch, measurement, coding, and fabrication. We maintain over 40 departmental laboratories strictly aligned with AICTE and RGPV standards. Every workstation is powered by dedicated online UPS systems, ensuring zero disruption during complex experimental cycles.
            </p>
          </div>

          {/* Department-wise Laboratories List */}
          <div className="space-y-12">
            {departmentsData.map((dept) => (
              <div key={dept.id} className="space-y-6 pt-6 first:pt-0 border-t first:border-t-0 border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block mb-1">
                      {dept.shortName} Wing
                    </span>
                    <h3 className="text-xl font-bold text-[#242126]">
                      {dept.name} — Laboratories
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-gray-500">
                    {dept.laboratories.length} Specialized Labs
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.laboratories.map((lab, lIdx) => (
                    <div key={lIdx} className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0" />
                        <h4 className="font-bold text-sm text-[#242126]">{lab.name}</h4>
                      </div>
                      <p className="text-xs text-[#77727A] leading-relaxed pl-6">
                        {lab.desc}
                      </p>
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
