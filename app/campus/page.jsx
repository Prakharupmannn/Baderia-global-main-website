import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Building2, BookOpen, ShieldCheck, Bus, 
  Coffee, Trophy, ArrowRight, Sparkles, CheckCircle2, Wifi 
} from "lucide-react";
import { facilitiesData } from "@/lib/data/facilitiesData";

export const metadata = {
  title: "Campus & Infrastructure | 45+ Acre Green Campus in Jabalpur",
  description: "Explore the 45-acre Wi-Fi enabled green campus of Baderia Global Engineering College. Central library, GPU labs, NCC unit, sports, and cafeterias."
};

export default function CampusOverviewPage() {
  return (
    <>
      <PageHeader
        badge="Campus Life"
        title="Campus Infrastructure &amp; Living Experience"
        subtitle="Sprawled across 45+ acres along Patan Bypass in Jabalpur, blending state-of-the-art academic architecture with pristine natural greens."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Infrastructure Overview" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Key 4 Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
              <span className="text-3xl font-black text-[#A30D2D] font-serif block">45+ Acres</span>
              <span className="text-xs font-semibold text-gray-600 block mt-1">Lush Green Estate</span>
            </div>
            <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
              <span className="text-3xl font-black text-[#A30D2D] font-serif block">50,000+</span>
              <span className="text-xs font-semibold text-gray-600 block mt-1">Library Books &amp; E-Journals</span>
            </div>
            <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
              <span className="text-3xl font-black text-[#A30D2D] font-serif block">1 Gbps</span>
              <span className="text-xs font-semibold text-gray-600 block mt-1">Wi-Fi Fiber Backbone</span>
            </div>
            <div className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
              <span className="text-3xl font-black text-[#A30D2D] font-serif block">30+ Buses</span>
              <span className="text-xs font-semibold text-gray-600 block mt-1">Fleet Transit Network</span>
            </div>
          </div>

          {/* Overview Narrative */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Architectural Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              A Serene Oasis of Intellect, Athleticism &amp; Cultural Dynamism
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Situated on Patan Bypass, Raigwan, in Jabalpur, the Baderia Global campus offers an idyllic environment free from urban congestion yet swiftly accessible from every corner of the city. The architectural master plan separates academic zones, heavy workshop bays, sports pavilions, and leisure cafeterias into seamless, interconnected clusters.
            </p>
          </div>

          {/* All Facilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilitiesData.map((fac) => (
              <div
                key={fac.id}
                className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full">
                      Facility
                    </span>
                    <span className="text-xs text-gray-400 font-mono">BGIEM</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#242126]">
                    {fac.title}
                  </h3>
                  <span className="text-xs text-[#A30D2D] font-medium block">
                    {fac.tagline}
                  </span>

                  <p className="text-xs text-[#77727A] leading-relaxed line-clamp-3">
                    {fac.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200/60">
                  <Link
                    href={`/campus/${fac.slug}`}
                    className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1"
                  >
                    Explore Facility In-Depth <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
