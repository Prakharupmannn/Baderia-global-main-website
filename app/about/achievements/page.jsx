import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Award, Trophy, Star, Medal, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Awards & Achievements | Institutional Milestones",
  description: "Recognitions, placement laurels, university ranks, and institutional achievements of Baderia Global Engineering College, Jabalpur."
};

export default function AchievementsPage() {
  const achievementsList = [
    {
      year: "2026",
      title: "Record Landmark Placement CTC: ₹46.71 LPA",
      body: "Recognized as the premier technical institution in the Mahakoshal region for high-package tech recruitment offers including international cloud engineering roles."
    },
    {
      year: "2025",
      title: "Best Cultural Engagement Award — Grand Global Garba",
      body: "Honored by regional socio-cultural authorities for organizing central India's largest, safest, and most disciplined college cultural gathering drawing over 10,000 participants."
    },
    {
      year: "2024",
      title: "1 MP Armored Squadron NCC Championship Trophy",
      body: "The Senior Division NCC unit of Baderia Global lifted the overall best drill and firing squad championship trophy at the Combined Annual Training Camp."
    },
    {
      year: "2023",
      title: "Top Institutional Placement Conversion in Mahakoshal",
      body: "Acknowledged by corporate staffing platforms for logging 1,200+ offer letters across 250+ top MNCs and Fortune 500 recruitment panels."
    },
    {
      year: "2022",
      title: "20 Years of Educational Excellence Commemoration",
      body: "Celebrating two decades of uninterrupted quality professional education, research publications, and graduating over 10,000 successful alumni across the globe."
    }
  ];

  return (
    <>
      <PageHeader
        badge="Institutional Laurels"
        title="Awards &amp; Milestones"
        subtitle="A chronological journey celebrating academic laurels, state university ranks, corporate recruitment awards, and cultural benchmarks."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Awards & Achievements" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Recognized Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              A Legacy Forged Through Merit, Hard Work &amp; Innovation
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              From our campus in Jabalpur to global tech headquarters in Silicon Valley, Bengaluru, and Hyderabad, Baderia Global students and faculty have continuously set new standards of achievement.
            </p>
          </div>

          {/* Timeline of Achievements */}
          <div className="space-y-6">
            {achievementsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F8] p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-2xs hover:border-[#A30D2D]/40 transition-all flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex flex-col items-center justify-center font-bold font-serif shrink-0 shadow-xs">
                  <Trophy className="w-5 h-5 text-[#C5A15B]" />
                  <span className="text-[10px] mt-0.5">{item.year}</span>
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#242126]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
