import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  CheckCircle2, ArrowRight, FileText, Phone, 
  HelpCircle, Sparkles, ShieldCheck, Download, AlertCircle 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Admission Procedure 2026-27 | DTE MP Counseling & CLC",
  description: "Complete guide to the admission procedure at Baderia Global Engineering College Jabalpur for B.Tech, M.Tech, MBA, and Polytechnic courses."
};

export default function AdmissionsPage() {
  const steps = [
    {
      step: "01",
      title: "Online DTE Registration & Choice Filling",
      desc: "Register on the Directorate of Technical Education (DTE) Madhya Pradesh portal (dte.mponline.gov.in). Select Baderia Global Institute of Engineering & Management (Code: 0188) as your priority college."
    },
    {
      step: "02",
      title: "Document Verification at Nodal Center",
      desc: "Get your original 10th, 12th mark sheets, JEE Main scorecard, domicile, and category certificates verified at the authorized help center on campus."
    },
    {
      step: "03",
      title: "Seat Allotment & Provisional Letter",
      desc: "Upon release of DTE counseling rounds, download your provisional allotment letter for your preferred engineering branch or MBA specialization."
    },
    {
      step: "04",
      title: "Physical Reporting at Campus & Fee Submission",
      desc: "Report to the Admission Cell at Global Square, Patan Bypass with required original documents and photographs to secure and confirm your admission."
    }
  ];

  const documents = [
    "DTE MP Online Seat Allotment Letter (Original + 3 copies)",
    "JEE Main / CMAT Scorecard (if applicable)",
    "Class 10th (High School) Mark Sheet & Certificate (Proof of Date of Birth)",
    "Class 12th (Higher Secondary) Mark Sheet (Physics, Chemistry & Maths)",
    "Graduation Mark Sheets & Degree Certificate (For M.Tech / MBA Applicants)",
    "Transfer Certificate (TC) & Character Certificate (Original from previous institution)",
    "Migration Certificate (Original for CBSE / ICSE / Other State Board candidates)",
    "M.P. Domicile / Resident Certificate (Mandatory for State Quota / Scholarships)",
    "Caste Certificate (SC / ST / OBC Non-Creamy Layer) issued by competent SDM/Tehsildar",
    "Current Family Income Certificate (For scholarship & fee concession eligibility)",
    "Aadhar Card of Candidate & Father / Mother",
    "Recent Passport Size Color Photographs (6 copies with white background)"
  ];

  return (
    <>
      <PageHeader
        badge="Admissions 2026-27"
        title="Admission Procedure &amp; Counseling Guidelines"
        subtitle="Step-by-step roadmap for securing enrollment in B.Tech, M.Tech, MBA, and Polytechnic Diploma programs at Baderia Global Engineering College."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Admission Procedure" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Top Banner: Free DTE Help Center on Campus */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border-2 border-[#A30D2D]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#A30D2D] bg-[#F9EDEF] px-2.5 py-0.5 rounded-full inline-block">
                Free Candidate Facilitation Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#242126] font-serif">
                Need Help with DTE MP Online Registration &amp; Choice Filling?
              </h3>
              <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                Visit the authorized Campus Admission Cell at Patan Bypass, Jabalpur. Our counseling experts will assist you with free online registration, preference choice-filling, and document verification.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <Link
                href="/admissions/apply"
                className="w-full sm:w-auto bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow transition-colors text-center"
              >
                Apply Online Now
              </Link>
              <a
                href={`tel:${collegeData.contact.phones[0]}`}
                className="w-full sm:w-auto bg-white border border-gray-300 hover:border-[#A30D2D] text-[#242126] font-bold text-xs py-3.5 px-5 rounded-xl transition-colors text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#A30D2D]" />
                <span>Call Helpline</span>
              </a>
            </div>
          </div>

          {/* 4 Step Process Grid */}
          <div className="space-y-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Structured Counseling Stages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif mt-1">
                4 Steps to Secure Your Seat
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-3 relative">
                  <span className="text-3xl font-black text-[#A30D2D] font-serif block">
                    {st.step}
                  </span>
                  <h3 className="text-sm font-bold text-[#242126] leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#77727A] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Alternative Entry Routes: CLC & Institutional Seats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-2xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block">
                Alternative Route 01
              </span>
              <h3 className="text-lg font-bold text-[#242126]">
                College Level Counseling (CLC)
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Vacant seats remaining after centralized DTE counseling rounds are filled directly through College Level Counseling (CLC). Candidates must report in person with qualifying Class 12th marks or JEE rankings for on-the-spot merit allotment.
              </p>
              <Link href="/admissions/apply" className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1 pt-1">
                Register for Upcoming CLC Rounds <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-2xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider bg-[#F9EDEF] text-[#A30D2D] px-2.5 py-0.5 rounded-full inline-block">
                Alternative Route 02
              </span>
              <h3 className="text-lg font-bold text-[#242126]">
                Institutional Preference Seats (IPS)
              </h3>
              <p className="text-xs text-[#77727A] leading-relaxed">
                As per DTE Madhya Pradesh norms, a designated quota of Institutional Preference Seats is available for meritorious candidates seeking direct branch reservation based on qualifying high school PCM aggregate.
              </p>
              <Link href="/admissions/apply" className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1 pt-1">
                Check IPS Seat Availability <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Required Documents Checklist */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200/90 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Mandatory Documentation
              </span>
              <h3 className="text-xl font-bold text-[#242126] mt-1">
                Checklist of Documents Required at Physical Reporting
              </h3>
              <p className="text-xs text-[#77727A] mt-1">
                Please bring original documents for in-person verification along with 3 sets of self-attested photocopies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {documents.map((doc, dIdx) => (
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
