import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { HelpCircle, ChevronRight, Phone, ArrowRight } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Admission FAQs | Common Questions Answered",
  description: "Frequently asked questions regarding DTE online counseling, eligibility, cutoff ranks, college bus routes, hostel, and placements at Baderia Global."
};

export default function AdmissionFaqsPage() {
  const faqs = [
    {
      q: "What is the official college counseling code for DTE MP Online Counseling?",
      a: "The official DTE counseling code for Baderia Global Institute of Engineering & Management (Global Engineering College, Jabalpur) is 0188. Use this code during preference choice filling on dte.mponline.gov.in."
    },
    {
      q: "Can I get admission if I did not appear for JEE Main?",
      a: "Yes. While first preference in DTE counseling is given to candidates with valid JEE Main scores, non-JEE candidates can participate in subsequent rounds and College Level Counseling (CLC) based on their Class 12th PCM aggregate percentage."
    },
    {
      q: "What is the eligibility requirement for B.Tech CSE and specialized AI/ML courses?",
      a: "Candidates must have passed 10+2 Examination with Physics and Mathematics as compulsory subjects, plus Chemistry, Computer Science, or Biotechnology, securing at least 45% aggregate marks (40% for candidates belonging to SC, ST, and OBC of MP)."
    },
    {
      q: "Are government scholarships available for MP domicile students?",
      a: "Yes. Eligible SC, ST, and OBC students of Madhya Pradesh can avail 100% Tuition Fee Reimbursement under the Post-Matric Scholarship Scheme through the MPTAAS portal. The college scholarship cell assists with registration and document verification."
    },
    {
      q: "Does the college provide campus bus transportation across Jabalpur?",
      a: "Yes. The college operates an extensive fleet of over 30 GPS-tracked buses covering every major area of Jabalpur city including Wright Town, Gorakhpur, Cantt, Ranjhi, Adhartal, Vijay Nagar, and Patan Bypass."
    },
    {
      q: "What is the highest and average placement package recorded at Baderia Global?",
      a: "The highest package recorded is ₹46.71 LPA (with international offers of ₹45.10 LPA from Gitpod). The average package across engineering disciplines consistently stands at ₹4.8 LPA, with over 1,200 offers bagged annually."
    },
    {
      q: "Is hostel accommodation available for students coming from outside Jabalpur?",
      a: "Yes. The Student Welfare Cell coordinates safe, vetted hostel and PG lodging for boys and girls in prime residential areas of Jabalpur, complete with hygienic mess food, 24x7 security, and dedicated bus transit."
    },
    {
      q: "Are Diploma Polytechnic holders eligible for direct 2nd-year B.Tech admission?",
      a: "Yes. 3-year Engineering Diploma holders with at least 45% marks (40% for reserved category) can gain direct lateral entry into the 3rd Semester (2nd Year) of B.Tech through DTE Lateral Entry counseling."
    }
  ];

  return (
    <>
      <PageHeader
        badge="Clarifications"
        title="Frequently Asked Questions (FAQs)"
        subtitle="Clear answers to the most common inquiries regarding counseling schedules, seat reservation, tuition fee concessions, and campus facilities."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "FAQs" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2"
              >
                <h3 className="text-sm sm:text-base font-bold text-[#242126] flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-md bg-[#A30D2D] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed pl-8">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Need more help banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#F9EDEF] border border-[#A30D2D]/20 text-center space-y-3">
            <h4 className="text-base font-bold text-[#720D27]">
              Have a Specific Question Not Listed Here?
            </h4>
            <p className="text-xs text-[#77727A] max-w-md mx-auto">
              Our admission officers are on standby to address your individual academic requirements and branch counseling queries.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${collegeData.contact.phones[0]}`}
                className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-colors shadow-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Admission Helpline</span>
              </a>
              <Link
                href="/admissions/apply"
                className="bg-white border border-gray-300 hover:border-gray-400 text-[#242126] font-bold text-xs py-2.5 px-5 rounded-xl transition-colors"
              >
                Submit Online Enquiry
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
