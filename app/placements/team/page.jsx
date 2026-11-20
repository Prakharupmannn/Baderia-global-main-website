import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Users, Phone, Mail, MapPin, ArrowRight, ShieldCheck } from "lucide-react";
import { placementsData } from "@/lib/data/placementsData";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Placement Team & Contact | Corporate Resource Centre",
  description: "Contact details of Training and Placement Officers, branch coordinators, and student placement representatives at Baderia Global."
};

export default function PlacementTeamPage() {
  const teamMembers = [
    { name: "Prof. Vishal Paranjape", role: "Head - Training & Corporate Relations", dept: "Central Placement Cell", contact: "+91-9575300122", email: "placements@global.org.in" },
    { name: "Prof. Abhishek Singh", role: "Training In-Charge (EC & Core)", dept: "Electronics & Communication", contact: "+91-9575300123", email: "tpo.ec@global.org.in" },
    { name: "Prof. Ankit Patel", role: "Placement Coordinator (CSE & IT)", dept: "Computer Science & Engineering", contact: "0761-4062300", email: "tpo.cse@global.org.in" },
    { name: "Dr. Ritu Saxena", role: "Corporate Relations Lead (MBA)", dept: "Management Studies", contact: "0761-3077200", email: "tpo.mba@global.org.in" },
    { name: "Prof. Rahul Jain", role: "Core Engineering Coordinator", dept: "Mechanical & Civil Engineering", contact: "+91-9575300122", email: "tpo.core@global.org.in" }
  ];

  return (
    <>
      <PageHeader
        badge="Corporate Relations"
        title="Training &amp; Placement Cell Team"
        subtitle="Dedicated officers, faculty branch coordinators, and corporate interface liaisons committed to student placement success."
        breadcrumbs={[
          { label: "Placements", href: "/placements" },
          { label: "Placement Team" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Dedicated Team
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Corporate Relations Officers &amp; Branch Coordinators
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Our placement officers work closely with corporate human resource leaders to coordinate pre-placement talks, online technical evaluations, coding hackathons, and personal interview rounds on campus.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((m, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A30D2D] to-[#720D27] text-white flex items-center justify-center font-bold font-serif text-sm">
                    {m.name.split(" ").slice(1, 3).map(n => n[0]).join("") || "TP"}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#242126]">{m.name}</h3>
                    <span className="text-xs font-semibold text-[#A30D2D] block mt-0.5">{m.role}</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-gray-200/60 text-xs space-y-1.5 text-gray-700">
                  <div className="text-gray-500 text-[11px]">
                    <strong>Department:</strong> {m.dept}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <span>{m.contact}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C5A15B]" />
                    <a href={`mailto:${m.email}`} className="text-[#A30D2D] hover:underline truncate">
                      {m.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Placement Office Contact Details */}
          <div className="bg-[#FAF8F8] p-7 sm:p-9 rounded-3xl border border-gray-200 space-y-4">
            <h3 className="text-lg font-bold text-[#242126]">
              Corporate Resource Centre Location &amp; Facilities
            </h3>
            <p className="text-xs text-[#77727A] leading-relaxed">
              <strong>Location:</strong> Ground Floor, Administrative Block, Global Square, Patan Bypass, Raigwan, Jabalpur (M.P.) – 482002.<br />
              <strong>Facilities Available for Recruiter Panels:</strong> 500-seat Placement Auditorium, 10 Personal Interview Rooms, 2 Air-conditioned Boardrooms, 180-terminal Computerized Online Testing Lab, and Guest House Suites for visiting corporate executives.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
