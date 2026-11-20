import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Building2, Award, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";

export const metadata = {
  title: "Top Corporate Recruiters | 250+ Partner MNCs",
  description: "Directory of 250+ top recruiting companies visiting Baderia Global Engineering College, including TCS, Infosys, Cisco, Commvault, Gitpod, and Hexaware."
};

export default function RecruitersPage() {
  const categories = ["All Recruiters", "Product Tech", "IT Giant", "IT Services", "Analytics", "BFSI", "Core Engineering"];

  return (
    <>
      <PageHeader
        badge="Corporate Alliances"
        title="Our Prominent Corporate Recruiters"
        subtitle="Over 250 esteemed multinational technology corporations, analytics leaders, and core manufacturing giants actively recruit from Baderia Global."
        breadcrumbs={[
          { label: "Placements", href: "/placements" },
          { label: "Top Recruiters" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Recruitment Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Trusted by Premier Global &amp; Indian Enterprises
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Every academic year, the Corporate Resource Centre hosts over 250 recruitment drives spanning on-campus interviews, virtual pooled hiring, hackathons, and dream-offer fast tracks. Below is a curated directory of premier recruiting partners.
            </p>
          </div>

          {/* Recruiters Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementsData.topRecruiters.map((rec, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F8] hover:bg-white p-5 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2 py-0.5 rounded">
                      {rec.category}
                    </span>
                    <Building2 className="w-4 h-4 text-gray-400" />
                  </div>
                  <h3 className="text-sm font-bold text-[#242126]">
                    {rec.name}
                  </h3>
                  <span className="text-[11px] text-gray-500 block mt-0.5">
                    {rec.role}
                  </span>
                </div>

                <div className="pt-3 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#A30D2D]">
                    {rec.package}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">
                    Annual CTC
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Invitation for HR Panel */}
          <div className="bg-[#FAF8F8] p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#242126]">
                Are you a Corporate Recruiter looking to hire fresh talent?
              </h4>
              <p className="text-xs text-[#77727A]">
                Our Corporate Resource Centre facilitates end-to-end recruitment drives with dedicated interview halls and online test labs.
              </p>
            </div>
            <Link
              href="/placements/team"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Contact Placement Cell
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
