import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Wrench, CheckCircle2, ArrowRight, ShieldCheck, Cog, Laptop, Building2 } from "lucide-react";
import { programsData } from "@/lib/data/programsData";

export const metadata = {
  title: "Polytechnic Diploma in Engineering | RGPV Bhopal",
  description: "3-year Polytechnic Diploma in Computer Science, Mechanical, and Civil Engineering after Class 10th. Hands-on workshop training and direct lateral entry to B.Tech."
};

export default function PolytechnicDeptPage() {
  const prog = programsData.find((p) => p.id === "polytechnic");

  const branches = [
    { name: "Diploma in Computer Science", seats: "60 Seats", desc: "Foundational programming in C/C++, Python, computer hardware maintenance, web technologies, and networking." },
    { name: "Diploma in Mechanical Engineering", seats: "60 Seats", desc: "Machine shop practice, CNC operation, lathe turning, welding, CAD drafting, and manufacturing technology." },
    { name: "Diploma in Civil Engineering", seats: "60 Seats", desc: "Site construction supervision, survey instruments, concrete testing, building drawing, and CAD drafting." }
  ];

  return (
    <>
      <PageHeader
        badge="Polytechnic Wing"
        title="Polytechnic Diploma in Engineering"
        subtitle="Practice-intensive 3-year technical education directly after Class 10th, with seamless direct lateral entry to 2nd-year B.Tech."
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Polytechnic Diploma" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                Foundational Technical Craft
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Empowering Students with Hands-on Engineering Skills Right After 10th Grade
              </h2>
              <p className="text-sm text-[#77727A] leading-relaxed">
                {prog.overview}
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (Polytechnic Division), Bhopal, and approved by AICTE, our diploma programs prepare junior engineering technicians, CAD draftsmen, and plant supervisors who can immediately join industry or pursue direct lateral entry into the 2nd Year (3rd Semester) of B.Tech.
              </p>

              {/* 3 Branches Cards */}
              <div className="space-y-4 pt-2">
                <h3 className="text-lg font-bold text-[#242126]">Diploma Disciplines Offered</h3>
                <div className="space-y-3">
                  {branches.map((b, bIdx) => (
                    <div key={bIdx} className="p-5 rounded-2xl bg-[#FAF8F8] border border-gray-200/90 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm text-[#242126]">{b.name}</h4>
                        <span className="text-[10px] font-bold bg-[#F9EDEF] text-[#A30D2D] px-2 py-0.5 rounded">
                          {b.seats}
                        </span>
                      </div>
                      <p className="text-xs text-[#77727A] leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Lateral Entry Advantage */}
              <div className="p-6 rounded-2xl bg-[#F9EDEF]/60 border border-[#A30D2D]/20 space-y-2">
                <h4 className="text-sm font-bold text-[#720D27] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A30D2D]" />
                  Direct B.Tech Lateral Entry Pathway
                </h4>
                <p className="text-xs text-[#77727A] leading-relaxed">
                  Upon completing the 3-year Diploma with 45% marks (40% for reserved category), scholars can gain direct admission into the 2nd Year (3rd Semester) of B.Tech at Baderia Global without needing to appear for Class 12th or JEE Main.
                </p>
              </div>
            </div>

            {/* Right Card */}
            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-3xl border-2 border-gray-200 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                Polytechnic Admissions
              </span>
              <div className="space-y-3 text-xs divide-y divide-gray-200">
                <div className="pt-2 first:pt-0">
                  <span className="text-gray-500 block">Duration</span>
                  <strong className="text-sm text-[#242126]">3 Years (6 Semesters)</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Eligibility</span>
                  <strong className="text-xs text-[#242126]">Passed 10th (SSC) with min 35% marks</strong>
                </div>
                <div className="pt-2">
                  <span className="text-gray-500 block">Counseling</span>
                  <strong className="text-xs text-[#242126]">DTE MP Online PPT / CLC Rounds</strong>
                </div>
              </div>

              <Link
                href="/admissions/apply"
                className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-4 rounded-xl text-center block transition-colors shadow-sm"
              >
                Apply for Polytechnic Diploma
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
