import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { ShieldCheck, Award, CheckCircle2, ArrowRight, Target, Users, Medal } from "lucide-react";

export const metadata = {
  title: "NCC Unit (1 MP Armored Squadron) | Defense Training & Leadership",
  description: "Official National Cadet Corps (NCC) Senior Division unit at Baderia Global Engineering College affiliated with 1 MP Armored Squadron Jabalpur."
};

export default function NccPage() {
  const nccHighlights = [
    { title: "Direct SSB Armed Forces Entry", desc: "Cadets securing 'C' Certificate with 'A' grade are eligible for direct SSB interviews for Indian Army, Navy, and Air Force officer commissions without appearing in UPSC CDS written exams." },
    { title: "Rigorous Military Drill & Weapons", desc: "Weekly morning parade drills on campus, .22 rifle and 7.62mm SLR firing range training, and field obstacle navigation courses conducted by military instructors." },
    { title: "Special Reservation for Girls", desc: "Dedicated SW (Senior Wing) platoon encouraging female engineering and MBA scholars to pursue defense careers, discipline, and physical fitness." },
    { title: "Prestigious Camp Selections", desc: "Cadets regularly represent the college and MP & CG Directorate at the Republic Day Camp (RDC) in New Delhi and Thal Sainik Camp (TSC)." }
  ];

  return (
    <>
      <PageHeader
        badge="National Pride"
        title="National Cadet Corps (NCC Unit)"
        subtitle="Affiliated to the prestigious 1 MP Armored Squadron, Jabalpur — Instilling iron discipline, selflessness, and officer-like qualities."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "NCC Unit" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden border-2 border-[#C5A15B]/40">
            <div className="max-w-3xl space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C5A15B] text-[#242126] px-3 py-1 rounded-full inline-block">
                1 MP Armored Squadron, Jabalpur
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-serif tracking-tight text-white">
                Discipline, Valor &amp; Unwavering Patriotism
              </h2>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                Baderia Global Engineering College takes immense institutional pride in hosting an active Senior Division (SD) and Senior Wing (SW) NCC company under the 1 MP Armored Squadron. Under the guidance of our Associate NCC Officer (ANO) and regular Indian Army non-commissioned officers, cadets undergo comprehensive physical conditioning, military tactic simulations, weapon training, and community service.
              </p>
            </div>
          </div>

          {/* 4 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nccHighlights.map((hl, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#A30D2D]" />
                  <h3 className="font-bold text-sm text-[#242126]">{hl.title}</h3>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  {hl.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Activities & Certifications */}
          <div className="bg-[#FAF8F8] p-8 rounded-3xl border border-gray-200 space-y-6">
            <h3 className="text-xl font-bold text-[#242126]">
              NCC Certificate Pathways &amp; Annual Camps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-700">
              <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                <span className="font-bold text-[#A30D2D] text-sm block">&apos;B&apos; Certificate Training</span>
                <p className="leading-relaxed text-[#77727A]">
                  Conducted in Year 2 of degree. Involves minimum 75% parade attendance, firing practices, map reading, and completion of one 10-day Combined Annual Training Camp (CATC).
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                <span className="font-bold text-[#A30D2D] text-sm block">&apos;C&apos; Certificate Mastery</span>
                <p className="leading-relaxed text-[#77727A]">
                  The highest NCC credential. Conferred in Year 3 following leadership camps, advanced tactics, and written examinations evaluated by the NCC Directorate.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-2">
                <span className="font-bold text-[#A30D2D] text-sm block">Social Outreach Drives</span>
                <p className="leading-relaxed text-[#77727A]">
                  Cadets spearhead regional blood donation camps, disaster management relief drills, traffic safety drives, and environmental tree plantation movements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
