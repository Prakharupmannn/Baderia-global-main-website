import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { ShieldCheck, FileText, Download, CheckCircle2, Building, ExternalLink } from "lucide-react";
import { mandatoryData } from "@/lib/data/mandatoryData";

export const metadata = {
  title: "Mandatory Disclosures | AICTE EOA & Statutory Compliances",
  description: "Official mandatory disclosure statement of Baderia Global Institute of Engineering & Management as per AICTE norms."
};

export default function MandatoryDisclosuresPage() {
  const details = mandatoryData.institutionDetails;

  return (
    <>
      <PageHeader
        badge="Statutory Compliance"
        title="AICTE Mandatory Disclosures"
        subtitle="Public disclosure of institutional accreditations, approvals, land records, governance framework, and academic infrastructure in compliance with AICTE guidelines."
        breadcrumbs={[
          { label: "Institutional Information" },
          { label: "Mandatory Disclosures" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Institutional Identification Table */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200/90 shadow-2xs space-y-6">
            <div>
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Official Institution Profile
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#242126] mt-0.5">
                AICTE Permanent Identification &amp; Statutory Affiliations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1">
                <span className="text-gray-400 font-bold uppercase text-[10px]">Name of Institution</span>
                <p className="font-bold text-[#242126] text-sm">{details.name}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1">
                <span className="text-gray-400 font-bold uppercase text-[10px]">AICTE Permanent ID</span>
                <p className="font-bold text-[#A30D2D] text-sm">{details.aictePermanentId}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1">
                <span className="text-gray-400 font-bold uppercase text-[10px]">Administering Society / Trust</span>
                <p className="font-bold text-[#242126]">{details.society}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1">
                <span className="text-gray-400 font-bold uppercase text-[10px]">DTE MP Counseling Code</span>
                <p className="font-bold text-[#A30D2D]">{details.dteCode}</p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-gray-200 space-y-1 md:col-span-2">
                <span className="text-gray-400 font-bold uppercase text-[10px]">Campus Address &amp; Location</span>
                <p className="font-medium text-gray-700">{details.address}</p>
              </div>
            </div>
          </div>

          {/* Statutory Committees */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#242126]">
              Statutory Committees &amp; Redressal Cells
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mandatoryData.committees.map((comm, cIdx) => (
                <div key={cIdx} className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#A30D2D]" />
                    <h4 className="font-bold text-sm text-[#242126]">{comm.name}</h4>
                  </div>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {comm.desc}
                  </p>
                  <div className="pt-2 text-xs text-gray-600 border-t border-gray-200/60 space-y-1">
                    <div><strong>Head:</strong> {comm.head}</div>
                    <div><strong>Helpline / Contact:</strong> <span className="text-[#A30D2D] font-semibold">{comm.email}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Official Disclosure PDFs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#242126]">
                Official Compliance Documents &amp; EoA Orders
              </h3>
              <Link href="/downloads" className="text-xs font-bold text-[#A30D2D] hover:underline flex items-center gap-1">
                View All Downloads <ExternalLink className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {mandatoryData.downloadsList.slice(0, 6).map((doc, dIdx) => (
                <div key={dIdx} className="p-4 rounded-xl bg-white border border-gray-200/90 shadow-2xs hover:border-[#A30D2D] transition-colors flex items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase bg-[#F9EDEF] text-[#A30D2D] px-2 py-0.5 rounded">
                      {doc.category}
                    </span>
                    <h5 className="font-bold text-xs text-[#242126] line-clamp-1 mt-1">{doc.title}</h5>
                    <span className="text-[10px] text-gray-400 block">{doc.format} • {doc.size}</span>
                  </div>
                  <a
                    href={doc.link}
                    className="p-2 rounded-lg bg-[#FAF8F8] hover:bg-[#A30D2D] text-gray-600 hover:text-white transition-colors shrink-0"
                    aria-label={`Download ${doc.title}`}
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
