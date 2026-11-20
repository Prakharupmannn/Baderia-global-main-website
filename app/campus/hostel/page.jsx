import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Home, ShieldCheck, CheckCircle2, Phone, Heart, Users } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Hostel & Living Assistance | Student Accommodation in Jabalpur",
  description: "Safe, verified student hostel and PG accommodation arrangements for outstation boys and girls studying at Baderia Global Engineering College."
};

export default function HostelPage() {
  const highlights = [
    { title: "Separate Boys & Girls Accommodation", desc: "Safe residential hostel tie-ups situated in prime, peaceful localities of Jabalpur with disciplined study ambiance." },
    { title: "Nutritious & Pure Vegetarian Mess", desc: "Four hygienic meals daily (breakfast, lunch, evening tea/snacks, and dinner) prepared under strict hygiene supervision." },
    { title: "24x7 Security & CCTV Surveillance", desc: "Dedicated security guards, biometric entry, CCTV monitoring, and strict night curfew protocols ensuring parent peace of mind." },
    { title: "Dedicated College Bus Transit", desc: "Daily morning pickup and evening drop-off connecting hostel clusters directly to the Patan Bypass campus." }
  ];

  return (
    <>
      <PageHeader
        badge="Residential Support"
        title="Hostel &amp; Living Assistance"
        subtitle="Ensuring a safe, comfortable, and supportive second home for outstation students relocating to Jabalpur for higher education."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Hostel & Living" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Student Welfare
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              A Secure &amp; Nurturing Environment Away from Home
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              For students joining Baderia Global from other districts of Madhya Pradesh, Uttar Pradesh, Bihar, Maharashtra, and across India, our <strong>Student Welfare Cell</strong> coordinates verified, vetted residential hostels and paying guest (PG) lodgings. With resident wardens, high-speed Wi-Fi, hygienic dining, and direct bus connectivity, scholars can focus fully on academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-[#A30D2D]" />
                  <h3 className="font-bold text-sm text-[#242126]">{h.title}</h3>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Need Hostel Help Card */}
          <div className="bg-[#FAF8F8] p-7 sm:p-9 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A30D2D] uppercase tracking-wider block">Assistance Desk</span>
              <h4 className="text-lg font-bold text-[#242126]">Need Accommodation Assistance for 2026?</h4>
              <p className="text-xs text-[#77727A]">
                Contact our Student Welfare Officer during admission reporting for verified hostel allocations and fee details.
              </p>
            </div>
            <a
              href={`tel:${collegeData.contact.phones[0]}`}
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Welfare Desk: {collegeData.contact.phones[0]}</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
