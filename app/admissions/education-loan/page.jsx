import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  CreditCard, Building2, CheckCircle2, ArrowRight, 
  FileText, ShieldCheck, Phone, HelpCircle 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Education Loan Assistance | Partner Bank Tie-ups",
  description: "Avail subsidized education loan facilities with nationalized banks and the Vidya Lakshmi portal for engineering and MBA courses at Baderia Global."
};

export default function EducationLoanPage() {
  const partnerBanks = [
    { name: "State Bank of India (SBI)", desc: "Direct SBI Scholar Loan / Student Loan Scheme with concession on interest rates for professional engineering programs." },
    { name: "Punjab National Bank (PNB)", desc: "PNB Saraswati Scheme providing hassle-free collateral-free loan sanction for technical and managerial courses." },
    { name: "Central Bank of India", desc: "Preferential education loan facilitation with fast-track processing through local Jabalpur branches." },
    { name: "HDFC Bank & ICICI Bank", desc: "Special private banking tie-ups offering swift education loan approvals for tuition, laptop, and hostel expenses." }
  ];

  const loanDocs = [
    "Admission Allotment Letter from DTE MP or College Bonafide Letter",
    "Detailed Institutional Fee Schedule certified by Registrar / Accounts Office",
    "Mark sheets of Class 10th, 12th, and Graduation (for PG applicants)",
    "Identity & Address Proof of Student and Co-borrower (Aadhar, PAN card)",
    "Last 6 Months Bank Statement of Parent / Co-borrower",
    "Income Tax Returns (ITR) or Form 16 / Salary Slips of Parent",
    "Passport size color photographs of Student and Parent"
  ];

  return (
    <>
      <PageHeader
        badge="Financial Support"
        title="Education Loan Assistance"
        subtitle="Empowering every ambitious student to pursue quality engineering education without financial constraints through nationalized bank partnerships."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Education Loan Assistance" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Hassle-Free Financing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Institutional Facilitation for Bank Education Loans
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              At Baderia Global Engineering College, we believe financial limitations must never impede a meritorious student&apos;s ambition. Our designated <strong>Student Financial Assistance Cell</strong> provides prompt issuance of official bonafide certificates, estimated fee structures, and customized bank letters required for quick loan approval.
            </p>
          </div>

          {/* Vidya Lakshmi Portal Banner */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border-2 border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xs">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block">
                Govt. of India Initiative
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#242126]">
                Vidya Lakshmi Portal Integration
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Vidya Lakshmi is a first-of-its-kind portal for students seeking Education Loans developed under the guidance of Department of Financial Services (Ministry of Finance), Department of Higher Education (Ministry of Education), and IBA. Apply directly to multiple banks through a single common education loan application form.
              </p>
            </div>
            <a
              href="https://www.vidyalakshmi.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-5 rounded-xl transition-colors shrink-0 shadow-xs"
            >
              Visit Vidya Lakshmi Portal
            </a>
          </div>

          {/* Partner Banks Grid */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#242126]">
              Leading Partner Banking Institutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerBanks.map((bank, bIdx) => (
                <div key={bIdx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#A30D2D]" />
                    <h4 className="font-bold text-sm text-[#242126]">{bank.name}</h4>
                  </div>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {bank.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents for Loan */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="text-lg font-bold text-[#242126]">
              Documents Required by Banks for Loan Sanction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {loanDocs.map((doc, dIdx) => (
                <div key={dIdx} className="bg-white p-3.5 rounded-xl border border-gray-200/80 flex items-start gap-2.5 text-xs text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
