import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Trophy, CheckCircle2, ArrowRight, Activity, Medal, Flame } from "lucide-react";

export const metadata = {
  title: "Sports Complex & Gymnasium | Athletics & Fitness",
  description: "Sports infrastructure at Baderia Global Engineering College. Full-size cricket turf, football ground, basketball court, indoor games, and modern gym."
};

export default function SportsPage() {
  const sportsFacilities = [
    { title: "Full-Size Cricket Ground & Turf Nets", desc: "Standard cricket arena hosting inter-departmental tournaments, complete with grass wicket, practice net enclosures, and spectator pavilion." },
    { title: "Football & Athletics Track", desc: "Regulation football pitch surrounded by a 400m athletics running track host to annual track and field competitions." },
    { title: "Synthetic Basketball & Volleyball Arena", desc: "Floodlit concrete basketball court and international-dimension volleyball grounds for evening student leagues." },
    { title: "Indoor Sports Complex & Gym", desc: "Equipped with professional wooden badminton courts, table tennis tables, chess boards, carrom, and a modern cardiovascular fitness gym." }
  ];

  return (
    <>
      <PageHeader
        badge="Physical Valor"
        title="Sports Complex &amp; Modern Gymnasium"
        subtitle="Cultivating athleticism, competitive sportsmanship, and physical fitness across tournament-grade outdoor grounds and indoor arenas."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Sports & Fitness" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Athletic Culture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              A Sound Mind in a Sound Body
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              At Baderia Global, physical fitness and outdoor sports are essential complements to intensive academic learning. Supervised by qualified Physical Education Directors, students actively participate in university-level RGPV nodal tournaments, state athletics meets, and the college&apos;s annual flagship sports championship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sportsFacilities.map((sp, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 sm:p-7 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#A30D2D]" />
                  <h3 className="font-bold text-sm text-[#242126]">{sp.title}</h3>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  {sp.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF8F8] p-7 sm:p-9 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A30D2D] uppercase tracking-wider block">Annual Sports League</span>
              <h4 className="text-lg font-bold text-[#242126]">Global Champions Trophy &amp; Sports Meet</h4>
              <p className="text-xs text-[#77727A]">
                Week-long inter-branch sports spectacle drawing over 1,500 student athletes competing for the coveted Championship Rolling Shield.
              </p>
            </div>
            <Link
              href="/gallery"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              View Sports Gallery
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
