import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  CreditCard, ShieldCheck, Award, ArrowRight, 
  CheckCircle2, AlertCircle, HelpCircle 
} from "lucide-react";

export const metadata = {
  title: "Fee Structure & Scholarships | AFRC Approved Norms",
  description: "Transparent fee schedules, state post-matric scholarship information, bus fees, and educational loan assistance at Baderia Global Engineering College."
};

export default function FeesPage() {
  const feeTable = [
    { course: "B.Tech in Computer Science & Engineering", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "180 Seats" },
    { course: "B.Tech in CSE (AI & Machine Learning)", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "B.Tech in CSE (IoT & Cyber Security)", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "B.Tech in CSE (Data Science)", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "B.Tech in Civil Engineering", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "B.Tech in Mechanical Engineering", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "B.Tech in Electronics & Communication", duration: "4 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "Master of Business Administration (MBA)", duration: "2 Years", tuitionPerYear: "As per AFRC MP norms", intake: "120 Seats" },
    { course: "MBA in Hospital Administration", duration: "2 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats" },
    { course: "M.Tech in Computer Science / Structural Engg", duration: "2 Years", tuitionPerYear: "As per AFRC MP norms", intake: "18 Seats" },
    { course: "Polytechnic Diploma in Engineering (CS, Civil, Mech)", duration: "3 Years", tuitionPerYear: "As per AFRC MP norms", intake: "60 Seats / Branch" }
  ];

  return (
    <>
      <PageHeader
        badge="Financial Clarity"
        title="Fee Structure &amp; State Scholarships"
        subtitle="Transparent, state-regulated fee norms governed by the Admission and Fee Regulatory Committee (AFRC) of Madhya Pradesh, complemented by 100% scholarship facilitation."
        breadcrumbs={[
          { label: "Admissions", href: "/admissions" },
          { label: "Fee Structure & Scholarships" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* State Scholarship Banner */}
          <div className="bg-gradient-to-br from-[#720D27] to-[#A30D2D] text-white p-7 sm:p-9 rounded-3xl shadow-xl relative overflow-hidden border-2 border-[#C5A15B]/40">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C5A15B] text-[#242126] px-3 py-1 rounded-full inline-block">
                MP Government Scholarship Facilitation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black font-serif tracking-tight text-white">
                Zero Tuition Fee Scheme for Eligible SC / ST / OBC Scholars
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Under the Post-Matric Scholarship Scheme administered by the Tribal Welfare Department and Backward Classes Welfare Department, Govt. of Madhya Pradesh, eligible students belonging to SC, ST, and OBC categories with verified family income criteria are eligible for <strong>100% Tuition Fee Reimbursement</strong>. Our on-campus Scholarship Desk assists candidates in seamless portal registration and verification.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#DFC285]">
                <span>✓ MPTAAS Portal Integration</span>
                <span>✓ AICTE Pragati &amp; Saksham Schemes</span>
                <span>✓ Direct Benefit Transfer (DBT)</span>
              </div>
            </div>
          </div>

          {/* Fee Schedules Table */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Tuition Fee Reference
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#242126] mt-0.5">
                AFRC Regulated Annual Fee Structure
              </h3>
              <p className="text-xs text-[#77727A] mt-1">
                Fees are officially designated by the Admission &amp; Fee Regulatory Committee (AFRC), Madhya Pradesh. No capitation or unauthorized donation is ever charged.
              </p>
            </div>

            <div className="bg-[#FAF8F8] rounded-2xl border border-gray-200 overflow-hidden shadow-2xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#720D27] text-white font-bold uppercase text-[10px] tracking-wider">
                    <tr>
                      <th className="p-3.5 sm:p-4">Programme &amp; Discipline</th>
                      <th className="p-3.5 sm:p-4">Duration</th>
                      <th className="p-3.5 sm:p-4">Approved Intake</th>
                      <th className="p-3.5 sm:p-4">Annual Tuition Norms</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {feeTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white transition-colors">
                        <td className="p-3.5 sm:p-4 font-semibold text-[#242126]">{row.course}</td>
                        <td className="p-3.5 sm:p-4 text-gray-600">{row.duration}</td>
                        <td className="p-3.5 sm:p-4 text-gray-600">{row.intake}</td>
                        <td className="p-3.5 sm:p-4 font-bold text-[#A30D2D]">{row.tuitionPerYear}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Transportation & Hostel Fees info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs space-y-3">
              <h4 className="text-sm font-bold text-[#242126] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#A30D2D]" />
                Transportation Fee (Optional)
              </h4>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Bus transportation fee is calculated reasonably based on pickup zones across Jabalpur (Patan Bypass, Wright Town, Gorakhpur, Cantt, Ranjhi, Adhartal, Vijay Nagar, etc.). Charges include round-trip transit for 10 academic months with GPS tracking.
              </p>
              <Link href="/campus/transport" className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1">
                View Bus Routes &amp; Stops <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200/90 shadow-2xs space-y-3">
              <h4 className="text-sm font-bold text-[#242126] flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#A30D2D]" />
                Authorized Payment Gateways
              </h4>
              <p className="text-xs text-[#77727A] leading-relaxed">
                Students and parents can remit semester fees via Net Banking, UPI (Google Pay, PhonePe, Paytm), RTGS / NEFT transfer, or through Bank Demand Draft drawn in favor of <strong>&quot;Baderia Global Institute of Engineering &amp; Management&quot;</strong> payable at Jabalpur.
              </p>
              <Link href="/contact" className="text-xs font-bold text-[#A30D2D] hover:underline inline-flex items-center gap-1">
                Contact Accounts Office <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
