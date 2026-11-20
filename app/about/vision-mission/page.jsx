import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  Eye, Target, ShieldCheck, Heart, 
  Sparkles, CheckCircle2, ArrowRight 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Vision & Mission | Baderia Global Engineering College",
  description: "Explore the institutional vision, mission, core values, and educational philosophy of Baderia Global Institute of Engineering & Management, Jabalpur."
};

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        badge="Institutional Ideology"
        title="Vision, Mission &amp; Core Philosophy"
        subtitle="The enduring principles guiding academic distinction, multidisciplinary innovation, and social responsibility at Baderia Global."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision & Mission" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Vision Box */}
          <div className="bg-gradient-to-br from-[#720D27] to-[#A30D2D] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border-2 border-[#C5A15B]/40">
            <div className="relative z-10 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#C5A15B] text-[#242126] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                <Eye className="w-4 h-4 text-[#720D27]" />
                Institutional Vision
              </div>
              <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white leading-relaxed">
                &ldquo;{collegeData.vision}&rdquo;
              </h2>
              <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                We aspire to be recognized regionally and nationally as an institution that not only imparts textbook technical competence, but also instills ethical courage, environmental consciousness, and entrepreneurial drive.
              </p>
            </div>
          </div>

          {/* Mission Statements */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Strategic Roadmaps
              </span>
              <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-1">
                Our 4 Mission Commitments
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {collegeData.mission.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200/90 shadow-2xs space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-[#A30D2D] text-white font-bold text-xs flex items-center justify-center">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider">
                      Mission Pillar {idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#242126] leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-6 pt-4">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Ethical Bedrock
              </span>
              <h3 className="text-2xl font-extrabold text-[#242126] font-serif mt-1">
                Institutional Core Values
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collegeData.coreValues.map((val, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-xs hover:border-[#A30D2D] transition-colors space-y-2">
                  <span className="w-9 h-9 rounded-xl bg-[#F9EDEF] text-[#A30D2D] flex items-center justify-center font-bold text-sm">
                    ✓
                  </span>
                  <h4 className="text-sm font-bold text-[#242126]">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Policy Box */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-2xl border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
            <h4 className="font-bold text-base text-[#242126] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#A30D2D]" />
              Institutional Quality Policy
            </h4>
            <p className="leading-relaxed text-[#77727A]">
              Baderia Global Institute of Engineering and Management is committed to establishing continuous quality enhancement across all instructional, research, administrative, and placement processes. In conformity with AICTE, RGPV Bhopal, and RDVV standards, we undergo periodic academic audits, encourage faculty research publications, and systematically update laboratory infrastructure in collaboration with corporate industry leaders.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
