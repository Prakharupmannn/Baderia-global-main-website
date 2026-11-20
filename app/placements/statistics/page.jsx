import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Trophy, TrendingUp, Award, BarChart3, ArrowRight, CheckCircle2 } from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";

export const metadata = {
  title: "Placement Statistics & Records | ₹46.71 LPA Highest Package",
  description: "Verified placement statistics, average compensation trends, package distribution bands, and recruiter participation data at Baderia Global."
};

export default function PlacementStatisticsPage() {
  const branchStats = [
    { branch: "Computer Science & Engineering", eligible: "160+", placed: "96%", highest: "₹46.71 LPA", avg: "₹5.2 LPA" },
    { branch: "CSE (AI & Machine Learning)", eligible: "55+", placed: "94%", highest: "₹24.0 LPA", avg: "₹5.4 LPA" },
    { branch: "Electronics & Communication (ECE)", eligible: "50+", placed: "88%", highest: "₹12.0 LPA", avg: "₹4.6 LPA" },
    { branch: "Civil Engineering", eligible: "45+", placed: "82%", highest: "₹7.5 LPA", avg: "₹4.2 LPA" },
    { branch: "Mechanical Engineering", eligible: "50+", placed: "84%", highest: "₹8.0 LPA", avg: "₹4.3 LPA" },
    { branch: "Master of Business Administration (MBA)", eligible: "110+", placed: "90%", highest: "₹10.5 LPA", avg: "₹4.8 LPA" }
  ];

  return (
    <>
      <PageHeader
        badge="Placement Metrics"
        title="Placement Statistics &amp; Performance Trends"
        subtitle="Transparent, verified placement metrics documenting highest CTC packages, average salary trends, and recruiter volume."
        breadcrumbs={[
          { label: "Placements", href: "/placements" },
          { label: "Placement Statistics" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* 4 Big Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placementsData.highlights.slice(0, 4).map((h, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200 text-center">
                <span className="text-3xl font-black text-[#A30D2D] font-serif block">
                  {h.value}
                </span>
                <span className="text-xs font-bold text-[#242126] block mt-1">
                  {h.label}
                </span>
                <span className="text-[11px] text-gray-500 block mt-0.5">
                  {h.detail}
                </span>
              </div>
            ))}
          </div>

          {/* Package Distribution Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#242126]">
              Package Distribution by CTC Range
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {placementsData.packageBands.map((band, bIdx) => (
                <div key={bIdx} className="p-5 rounded-2xl bg-[#FAF8F8] border border-gray-200/90 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2 py-0.5 rounded">
                    {band.badge}
                  </span>
                  <div className="text-2xl font-black text-[#242126] font-serif">
                    {band.count}
                  </div>
                  <div className="text-xs font-semibold text-[#A30D2D]">
                    {band.range}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branch-wise Performance Table */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Discipline Performance
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#242126] mt-0.5">
                Department-wise Placement Record
              </h3>
            </div>

            <div className="bg-[#FAF8F8] rounded-2xl border border-gray-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#720D27] text-white font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Department / Branch</th>
                      <th className="p-3.5 sm:p-4">Eligible Registered</th>
                      <th className="p-3.5 sm:p-4">Placement Rate</th>
                      <th className="p-3.5 sm:p-4">Highest Package</th>
                      <th className="p-3.5 sm:p-4">Average Package</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {branchStats.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-[#242126]">{row.branch}</td>
                        <td className="p-3.5 sm:p-4 text-gray-600">{row.eligible}</td>
                        <td className="p-3.5 sm:p-4 font-bold text-green-700">{row.placed}</td>
                        <td className="p-3.5 sm:p-4 font-bold text-[#A30D2D]">{row.highest}</td>
                        <td className="p-3.5 sm:p-4 font-semibold text-gray-800">{row.avg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
