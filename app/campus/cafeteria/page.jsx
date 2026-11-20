import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Coffee, CheckCircle2, Clock, ShieldCheck, Heart, Sparkles } from "lucide-react";

export const metadata = {
  title: "Cafeteria & Food Court | Nutritious Campus Dining",
  description: "Hygienic dining, snacks, north and south Indian meals, Nescafe corner, and student cafeteria facilities at Baderia Global Engineering College."
};

export default function CafeteriaPage() {
  const highlights = [
    { title: "Hygienic Kitchen & Food Audits", desc: "Strict cleanliness, daily quality audits, and fresh ingredient sourcing supervised by the campus Food Welfare Committee." },
    { title: "Nutritious & Affordable Meals", desc: "Fresh north and south Indian thalis, breakfast poori-sabzi, poha, dosas, sandwiches, and fresh seasonal fruit juices at subsidized student prices." },
    { title: "Nescafe Coffee & Bakery Kiosk", desc: "Dedicated quick-service counter serving hot cappuccinos, teas, fresh patties, baked goods, and confectioneries during lecture breaks." },
    { title: "Spacious Open Seating", desc: "Airy indoor seating capacity accommodating 300+ students and faculty, with outdoor patio benches under verdant trees." }
  ];

  return (
    <>
      <PageHeader
        badge="Campus Amenities"
        title="Cafeteria &amp; Student Food Court"
        subtitle="A vibrant culinary social hub serving nutritious, hygienic, freshly prepared meals, snacks, and beverages at subsidized student prices."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Cafeteria" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Student Dining
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Fueling Intellect with Quality Nutrition &amp; Warm Social Camaraderie
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              The campus cafeteria is a bustling, lively space where students unwind, debate project ideas, celebrate assignment submissions, and bond over fresh food. Operates with strict adherence to food safety norms, stainless steel cookware, and digital payment conveniences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((h, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <Coffee className="w-5 h-5 text-[#A30D2D]" />
                  <h3 className="font-bold text-sm text-[#242126]">{h.title}</h3>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#A30D2D] shrink-0" />
              <div>
                <span className="text-xs font-bold text-[#242126] block">Cafeteria Operating Timings</span>
                <span className="text-xs text-[#77727A]">Monday to Saturday: 8:00 AM to 6:00 PM</span>
              </div>
            </div>
            <span className="text-xs font-bold bg-[#F9EDEF] text-[#A30D2D] px-3 py-1 rounded-full border border-[#A30D2D]/20">
              Cashless Digital UPI Accepted
            </span>
          </div>

        </div>
      </section>
    </>
  );
}
