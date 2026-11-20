import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Bus, CheckCircle2, Clock, MapPin, ShieldCheck, Phone, Download } from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Bus Routes & Transportation Fleet | Jabalpur City Coverage",
  description: "Extensive bus transportation fleet covering all 20+ routes of Jabalpur city with GPS tracking, safety, and timings at Baderia Global Engineering College."
};

export default function TransportPage() {
  const routes = [
    { route: "Route 1: Wright Town & Napier Town", stops: "Madan Mahal Station, Wright Town Stadium, Golbazar, Russel Chowk, Teen Patti, Damoh Naka, Patan Bypass Campus." },
    { route: "Route 2: Gorakhpur & Cantt Area", stops: "Gorakhpur Main Market, Rampur Chowk, Gupteshwar, Sadar Cantt, High Court, ISBT Bus Stand, Campus." },
    { route: "Route 3: Vijay Nagar & Medical", stops: "Medical College Gate, Garha, Dhanwantri Nagar, Kachnar City, Shiv Nagar, Vijay Nagar, Deendayal Chowk, Campus." },
    { route: "Route 4: Ranjhi & Ghamapur", stops: "Ranjhi Bada Patthar, Shobhapur, Ghamapur Chowk, Belbagh, City Railway Station Platform 1, Adhartal, Campus." },
    { route: "Route 5: Adhartal & Suhagi", stops: "Suhagi Petrol Pump, Maharajpur, Krishi Upaj Mandi, Adhartal Chowk, Subhash Nagar, Karmeta, Campus." },
    { route: "Route 6: Bilhari & Tilhari", stops: "Tilhari Square, Bilhari Mandir, Mandla Road, Gwarighat Tiraha, Collectorate, Jabalpur Junction, Campus." }
  ];

  return (
    <>
      <PageHeader
        badge="Daily Commute"
        title="Fleet Transportation &amp; Bus Routes"
        subtitle="Ensuring safe, punctual, and comfortable daily transit for day-scholars across every corner of Jabalpur through 30+ GPS-tracked buses."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Transportation" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Safe &amp; Punctual Transit
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Comprehensive City-Wide Bus Transit Network
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Operating a fleet of over 30 modern luxury buses, the Transport Department of Baderia Global covers all primary residential sectors, suburbs, and transportation hubs of Jabalpur. Every bus is equipped with GPS tracking, speed governors, first-aid kits, and designated faculty bus in-charges to guarantee safety.
            </p>
          </div>

          {/* Bus Routes Table */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#242126]">
              Major Commuter Routes &amp; Pickup Points
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {routes.map((r, idx) => (
                <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2">
                    <Bus className="w-5 h-5 text-[#A30D2D]" />
                    <h4 className="font-bold text-sm text-[#242126]">{r.route}</h4>
                  </div>
                  <p className="text-xs text-[#77727A] leading-relaxed pl-7">
                    <strong>Major Stops:</strong> {r.stops}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Info Box */}
          <div className="bg-[#FAF8F8] p-6 sm:p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-[#A30D2D] uppercase tracking-wider block">Schedule</span>
              <h4 className="text-base font-bold text-[#242126]">Morning Campus Arrival: 8:45 AM • Evening Departure: 5:00 PM</h4>
              <p className="text-xs text-[#77727A]">
                Bus passes are issued per academic year. Download the complete route timetable for exact timings at each stop.
              </p>
            </div>
            <Link
              href="/downloads"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Bus Route PDF</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
