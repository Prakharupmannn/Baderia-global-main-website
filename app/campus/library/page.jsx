import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { BookOpen, CheckCircle2, Clock, Globe, ArrowRight, ShieldCheck, Laptop } from "lucide-react";

export const metadata = {
  title: "Central Automated Library & Information Center | 50,000+ Books",
  description: "Explore the air-conditioned Central Library at Baderia Global Engineering College. 50,000+ volumes, IEEE, DELNET, book bank, and reading halls."
};

export default function LibraryPage() {
  const libStats = [
    { value: "50,000+", label: "Text & Reference Books" },
    { value: "120+", label: "Print & International Journals" },
    { value: "300+", label: "Reading Hall Capacity" },
    { value: "12,000+", label: "Sq. Ft. Air-Conditioned Floor" }
  ];

  const features = [
    "Integrated Library Management System (ILMS) with barcode-automated issue and return kiosks",
    "Digital e-Library section with 40+ networked terminals connected to high-speed fiber internet",
    "Subscriptions to prestigious online repositories including IEEE Xplore, DELNET, and ScienceDirect",
    "Comprehensive Book Bank facility providing complete course book sets to every student each semester",
    "Designated quiet research cubicles for faculty research publications and postgraduate thesis scholars",
    "Extensive multimedia video lecture archives including NPTEL, Swayam, and MIT OpenCourseWare"
  ];

  return (
    <>
      <PageHeader
        badge="Knowledge Hub"
        title="Central Automated Library &amp; Information Center"
        subtitle="A tranquil, air-conditioned intellectual sanctuary spanning 12,000+ sq. ft. equipped with over 50,000 volumes and digital research portals."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Central Library" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Key Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {libStats.map((st, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-5 rounded-2xl border border-gray-200 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#A30D2D] font-serif block">
                  {st.value}
                </span>
                <span className="text-xs font-semibold text-gray-600 block mt-1">
                  {st.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Intellectual Sanctuary
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Empowering Deep Inquiry Across Engineering, Management &amp; Applied Sciences
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                The Central Library of Baderia Global is an automated knowledge haven serving the instructional and investigative requirements of undergraduate, postgraduate, and polytechnic scholars. Meticulously organized according to Dewey Decimal Classification, our stacks house classic foundational treatises alongside the latest contemporary engineering editions.
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                The <strong>Digital E-Learning Wing</strong> grants students unhindered access to thousands of peer-reviewed conference proceedings, digital dissertations, patent databases, and specialized computing literature.
              </p>

              {/* Features List */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-[#242126]">Key Library Amenities</h3>
                <div className="space-y-2.5">
                  {features.map((feat, fIdx) => (
                    <div key={fIdx} className="bg-[#FAF8F8] p-3.5 rounded-xl border border-gray-200/80 flex items-start gap-3 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Timings & Rules */}
            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-3xl border-2 border-gray-200 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#A30D2D]">
                <Clock className="w-4 h-4" />
                <span>Operating Timings</span>
              </div>
              <div className="space-y-2 text-xs text-gray-700 divide-y divide-gray-200">
                <div className="pt-2 first:pt-0">
                  <span className="text-gray-500 block">Monday to Saturday</span>
                  <strong>8:30 AM – 7:00 PM</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">During Semester Exams</span>
                  <strong className="text-[#A30D2D]">Extended till 9:00 PM</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Sundays &amp; Holidays</span>
                  <span>Closed (Digital Library 24x7 online access)</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-gray-200 text-xs space-y-1 text-gray-600">
                <strong className="text-[#242126] block">Book Bank Facility:</strong>
                <span>Every enrolled student receives a full bundle of prescribed textbook titles for the semester at zero cost upon returning the previous bundle.</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
