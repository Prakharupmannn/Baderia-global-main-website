import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { 
  UserCheck, Award, Quote, Mail, Phone, 
  ArrowRight, Sparkles, GraduationCap 
} from "lucide-react";
import { collegeData } from "@/lib/data/collegeData";

export const metadata = {
  title: "Leadership & Messages | Chairman & Director",
  description: "Read visionary addresses from Chairman Mr. Saurabh Baderia and Director Dr. Rajiv Khatri of Baderia Global Engineering College, Jabalpur."
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        badge="Visionary Stewardship"
        title="Leadership &amp; Institutional Governance"
        subtitle="Insights from the executive leadership steering Baderia Global toward academic distinction and corporate placement supremacy."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Leadership & Messages" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Chairman Section */}
          <div className="bg-[#FAF8F8] p-8 sm:p-10 rounded-3xl border border-gray-200/90 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#A30D2D] to-[#720D27] p-1.5 border-4 border-[#C5A15B] shadow-lg flex items-center justify-center text-white text-4xl font-serif font-black">
                  SB
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#242126]">
                    {collegeData.leadership.chairman.name}
                  </h3>
                  <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block mt-0.5">
                    {collegeData.leadership.chairman.title}
                  </span>
                  <span className="text-[11px] text-gray-500 block mt-1">
                    {collegeData.leadership.chairman.qualification}
                  </span>
                </div>
                <div className="inline-block bg-[#F9EDEF] text-[#A30D2D] text-xs font-bold px-3 py-1 rounded-full border border-[#A30D2D]/20">
                  Global Nature Care Sangathan
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-gray-200/80 pt-6 lg:pt-0 lg:pl-8">
                <div className="flex items-center gap-2 text-[#A30D2D] font-bold text-xs uppercase tracking-wider">
                  <Quote className="w-4 h-4 text-[#C5A15B]" />
                  Message from the Chairman
                </div>
                
                <h4 className="text-xl sm:text-2xl font-black text-[#242126] font-serif leading-snug">
                  &ldquo;Nurturing Minds to Engineer Solutions for Tomorrow&apos;s World&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  {collegeData.leadership.chairman.message}
                </p>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  In today&apos;s rapidly evolving technological epoch, education cannot remain confined to outdated textbook curricula. We have continually invested in cutting-edge laboratory infrastructure, advanced GPU computing workstations, high-speed campus fiber-optics, and active corporate partnerships with leading IT and manufacturing conglomerates. Our goal is to ensure every Baderia Global graduate steps into the professional realm with technical competence, creative fortitude, and ethical conviction.
                </p>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  I warmly welcome aspiring engineering and management scholars to experience the world of boundless opportunities at Baderia Global Engineering College.
                </p>
              </div>

            </div>
          </div>

          {/* Director Section */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border-2 border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-2 text-[#A30D2D] font-bold text-xs uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-[#C5A15B]" />
                  Address from the Principal &amp; Director
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-[#242126] font-serif leading-snug">
                  &ldquo;A Benchmark of Rigorous Learning &amp; Premier Career Placements&rdquo;
                </h4>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  {collegeData.leadership.director.message}
                </p>

                <p className="text-xs sm:text-sm text-[#77727A] leading-relaxed">
                  Affiliated with Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) and Rani Durgawati Vishwavidyalaya (RDVV), our academic pedagogy blends foundational theoretical rigor with intense practical experimentation across our 40+ departmental laboratories. Beyond academic excellence, our 1 MP Armored Squadron NCC unit, active sports teams, and celebrated cultural traditions like Grand Global Garba ensure that student life is vibrant, disciplined, and truly holistic.
                </p>

                <div className="pt-2 text-xs text-gray-500">
                  <span>Direct Desk: </span>
                  <a href={`mailto:${collegeData.contact.emails.director}`} className="text-[#A30D2D] font-bold hover:underline">
                    {collegeData.contact.emails.director}
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-gray-200/80 pb-6 lg:pb-0 lg:pl-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#720D27] to-[#A30D2D] p-1.5 border-4 border-[#C5A15B] shadow-lg flex items-center justify-center text-white text-4xl font-serif font-black">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#242126]">
                    {collegeData.leadership.director.name}
                  </h3>
                  <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block mt-0.5">
                    {collegeData.leadership.director.title}
                  </span>
                  <span className="text-[11px] text-gray-500 block mt-1">
                    {collegeData.leadership.director.qualification}
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Founder Memorial Card */}
          <div className="bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white p-8 sm:p-10 rounded-3xl shadow-xl border-2 border-[#C5A15B]/40">
            <div className="max-w-3xl space-y-3">
              <span className="text-[10px] font-bold bg-[#C5A15B] text-[#242126] px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                In Reverent Memory
              </span>
              <h3 className="text-2xl font-black font-serif text-white">
                {collegeData.leadership.founderDirector.name}
              </h3>
              <p className="text-xs text-[#DFC285] font-semibold">
                {collegeData.leadership.founderDirector.title}
              </p>
              <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed font-serif pt-1">
                &ldquo;{collegeData.leadership.founderDirector.message}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
