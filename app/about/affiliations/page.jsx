import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, FileText, ArrowRight, Download } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Approvals & Affiliations | AICTE, RGPV Bhopal, RDVV Jabalpur",
  description: "Official approvals and university affiliations of Baderia Global Institute of Engineering & Management, Jabalpur."
};

export default function AffiliationsPage() {
  return (
    <>
      <PageHeader
        badge="Statutory Compliance"
        title="Approvals, Affiliations &amp; Accreditations"
        subtitle="Full statutory authorization from AICTE New Delhi, Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) Bhopal, and Rani Durgawati Vishwavidyalaya (RDVV) Jabalpur."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Approvals & Affiliations" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Official Regulatory Accreditations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Rigorous Adherence to State and National Educational Standards
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Every academic degree conferred through Baderia Global Engineering College is backed by statutory approvals from regulatory councils and state technological universities, guaranteeing national and international acceptance for higher studies and government employments.
            </p>
          </div>

          {/* Detailed Approvals Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-[#FAF8F8] p-6 rounded-2xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#A30D2D] bg-[#F9EDEF] px-3 py-1 rounded-full border border-[#A30D2D]/20">
                  AICTE Approval
                </span>
                <ShieldCheck className="w-6 h-6 text-[#C5A15B]" />
              </div>
              <h3 className="text-lg font-bold text-[#242126]">
                All India Council for Technical Education, New Delhi
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Approved by statutory council under the Ministry of Education, Govt. of India, for offering Bachelor of Technology (B.Tech), Master of Technology (M.Tech), and Polytechnic Diploma courses in all engineering branches.
              </p>
              <div className="pt-2 text-xs text-gray-500 font-medium">
                Permanent AICTE Institute ID: <strong>1-4198231</strong>
              </div>
            </div>

            <div className="bg-[#FAF8F8] p-6 rounded-2xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#A30D2D] bg-[#F9EDEF] px-3 py-1 rounded-full border border-[#A30D2D]/20">
                  RGPV Affiliation
                </span>
                <ShieldCheck className="w-6 h-6 text-[#C5A15B]" />
              </div>
              <h3 className="text-lg font-bold text-[#242126]">
                Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                The State Technological University of Madhya Pradesh. Degrees for all B.Tech branches (CSE, AI/ML, Cyber Security, Civil, Mechanical, ECE) and M.Tech programs are awarded strictly under RGPV curriculum and semester evaluation norms.
              </p>
              <div className="pt-2 text-xs text-gray-500 font-medium">
                University Affiliation Code: <strong>0188 (GEC Jabalpur)</strong>
              </div>
            </div>

            <div className="bg-[#FAF8F8] p-6 rounded-2xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#A30D2D] bg-[#F9EDEF] px-3 py-1 rounded-full border border-[#A30D2D]/20">
                  RDVV Affiliation
                </span>
                <ShieldCheck className="w-6 h-6 text-[#C5A15B]" />
              </div>
              <h3 className="text-lg font-bold text-[#242126]">
                Rani Durgawati Vishwavidyalaya, Jabalpur
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                A prestigious historic university in Jabalpur. Affiliation granted for Master of Business Administration (MBA Dual Specialization) and MBA in Hospital Administration, with curriculum certified to global corporate standards.
              </p>
              <div className="pt-2 text-xs text-gray-500 font-medium">
                Department: <strong>Faculty of Management Studies</strong>
              </div>
            </div>

            <div className="bg-[#FAF8F8] p-6 rounded-2xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-extrabold text-[#A30D2D] bg-[#F9EDEF] px-3 py-1 rounded-full border border-[#A30D2D]/20">
                  DTE MP Recognition
                </span>
                <ShieldCheck className="w-6 h-6 text-[#C5A15B]" />
              </div>
              <h3 className="text-lg font-bold text-[#242126]">
                Directorate of Technical Education, Govt. of M.P.
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Authorized state counseling center and participating institution in online centralized counseling for all JEE Main, CMAT, and PPT qualified candidates across MP Domicile and All India pools.
              </p>
              <div className="pt-2 text-xs text-gray-500 font-medium">
                Centralized Counseling Code: <strong>0188</strong>
              </div>
            </div>

          </div>

          {/* Downloadable Official Documents Notice */}
          <div className="p-6 rounded-2xl bg-[#F9EDEF]/60 border border-[#A30D2D]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#720D27]">
                Looking for Official Extension of Approval (EoA) Letters?
              </h4>
              <p className="text-xs text-[#77727A] mt-0.5">
                Download certified PDF copies of recent AICTE approval orders and university affiliation certificates.
              </p>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#A30D2D] hover:bg-[#8C0B26] px-4 py-2.5 rounded-lg transition-colors shrink-0 shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Go to Downloads &amp; Letters</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
