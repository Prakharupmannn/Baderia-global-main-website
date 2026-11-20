import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Cpu, Sparkles, CheckCircle2, ArrowRight, Laptop, Award, ShieldCheck } from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export const metadata = {
  title: "B.Tech CSE in Artificial Intelligence & Machine Learning (AI & ML)",
  description: "Advanced B.Tech program in AI & ML at Baderia Global Engineering College. GPU clusters, neural networks, computer vision, and top placements."
};

export default function AIMLDeptPage() {
  const prog = programsData.find((p) => p.id === "aiml");

  return (
    <>
      <PageHeader
        badge="Specialized B.Tech"
        title="CSE (Artificial Intelligence &amp; Machine Learning)"
        subtitle="Mastering deep learning, neural networks, natural language processing, and computer vision on high-performance GPU workstations."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "CSE (AI & ML)" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Specialized Engineering Degree
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Architecting the Intelligent Future with Deep Learning &amp; AI
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                {prog.overview}
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                The Department of Computer Science &amp; Engineering has established a state-of-the-art <strong>NVIDIA GPU-Accelerated Research Center</strong> specifically for this program. Students build, train, and deploy real-world machine intelligence models across natural language processing, automated robotics perception, generative AI, and medical image diagnostics.
              </p>

              {/* Highlights */}
              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h3 className="text-base font-bold text-[#242126]">Key Program Highlights</h3>
                <div className="space-y-2">
                  {prog.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-800">
                      <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-[#242126]">Career Pathways &amp; Job Profiles</h3>
                <div className="flex flex-wrap gap-2">
                  {prog.careers.map((car, cIdx) => (
                    <span key={cIdx} className="bg-white border border-gray-200 shadow-2xs text-xs font-semibold text-[#242126] px-3 py-1.5 rounded-lg">
                      {car}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Quick Info & Apply */}
            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-3xl border-2 border-gray-200 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                Program Credentials
              </span>
              <div className="space-y-3 text-xs divide-y divide-gray-200">
                <div className="pt-2 first:pt-0">
                  <span className="text-gray-500 block">Duration</span>
                  <strong className="text-sm text-[#242126]">{prog.duration}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Approved Intake</span>
                  <strong className="text-sm text-[#A30D2D]">{prog.intake}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Affiliation</span>
                  <strong className="text-xs text-[#242126]">{prog.affiliation}</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Eligibility</span>
                  <p className="text-[11px] text-gray-700 leading-snug mt-1">{prog.eligibility}</p>
                </div>
              </div>

              <Link
                href="/admissions/apply"
                className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-4 rounded-xl text-center block transition-colors shadow-sm"
              >
                Apply for AI &amp; ML Admission
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
