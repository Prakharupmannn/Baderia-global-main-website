import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Download, FileText, CheckCircle2, Search, ArrowRight } from "lucide-react";
import { mandatoryData } from "@/lib/data/mandatoryData";

export const metadata = {
  title: "Downloads & Documents | Syllabi, Brochures & Calendars",
  description: "Download academic calendars, university syllabi, AICTE approvals, bus route PDF schedules, and admission brochures from Baderia Global."
};

export default function DownloadsPage() {
  return (
    <>
      <PageHeader
        badge="Official Resources"
        title="Downloads &amp; Academic Documents"
        subtitle="Centralized repository of official prospectuses, university syllabi, academic calendars, AICTE approval letters, and administrative forms."
        breadcrumbs={[
          { label: "Institutional Information" },
          { label: "Downloads" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Document Archive
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Official University Circulars &amp; Downloadable PDFs
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              All documents listed below are certified public resources issued by Baderia Global Institute of Engineering &amp; Management in coordination with AICTE, RGPV Bhopal, and RDVV Jabalpur.
            </p>
          </div>

          {/* Downloads Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandatoryData.downloadsList.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F8] hover:bg-white p-5 rounded-2xl border border-gray-200/90 hover:border-[#A30D2D]/40 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      {item.format} • {item.size}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-[#242126] leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] text-gray-400 font-medium">Certified PDF</span>
                  <a
                    href={item.link}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A30D2D] hover:text-[#720D27]"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download File</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
