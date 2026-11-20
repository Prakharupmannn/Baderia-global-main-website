import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Calendar, Users, Flame, Trophy, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { eventsData } from "@/lib/data/eventsData";

export const metadata = {
  title: "Events & Campus Life | Cultural, Technical & Sports Fests",
  description: "Explore the vibrant cultural calendar, Grand Global Garba, Umang annual fest, Technova hackathons, and sports meets at Baderia Global Engineering College."
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        badge="Campus Culture"
        title="College Events, Festivals &amp; Symposia"
        subtitle="Experience central India's most vibrant campus cultural scene, celebrated national hackathons, and signature festive traditions."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Events & Festivals" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Vibrant Student Life
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Where Creativity, Technology &amp; Culture Converge
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              At Baderia Global, university life extends far beyond lecture halls and code compilers. Our calendar is illuminated by monumental regional festivals, intense competitive hackathons, inter-collegiate sports championships, and humanitarian blood donation drives.
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-8">
            {eventsData.map((ev) => (
              <div
                key={ev.id}
                className={`p-7 sm:p-9 rounded-3xl border transition-all ${
                  ev.featured
                    ? "bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white border-2 border-[#C5A15B]/50 shadow-xl"
                    : "bg-[#FAF8F8] text-[#242126] border-gray-200/90 shadow-2xs hover:shadow-md"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="space-y-3 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        ev.featured ? "bg-[#C5A15B] text-[#242126]" : "bg-[#F9EDEF] text-[#A30D2D]"
                      }`}>
                        {ev.category}
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${
                        ev.featured ? "text-white/80" : "text-gray-500"
                      }`}>
                        <Calendar className="w-3.5 h-3.5 text-[#C5A15B]" />
                        {ev.date}
                      </span>
                      <span className={`text-xs flex items-center gap-1 ${
                        ev.featured ? "text-white/80" : "text-gray-500"
                      }`}>
                        <Users className="w-3.5 h-3.5 text-[#C5A15B]" />
                        {ev.footfall}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-3xl font-black font-serif tracking-tight ${
                      ev.featured ? "text-white" : "text-[#242126]"
                    }`}>
                      {ev.title}
                    </h3>
                    <span className={`text-xs font-semibold block ${
                      ev.featured ? "text-[#DFC285]" : "text-[#A30D2D]"
                    }`}>
                      {ev.subtitle}
                    </span>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      ev.featured ? "text-white/90" : "text-[#77727A]"
                    }`}>
                      {ev.description}
                    </p>

                    <div className="space-y-1 pt-2">
                      {ev.highlights.slice(0, 3).map((hl, hIdx) => (
                        <div key={hIdx} className={`flex items-start gap-1.5 text-xs ${
                          ev.featured ? "text-white/90" : "text-gray-700"
                        }`}>
                          <Sparkles className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col gap-2">
                    <Link
                      href={
                        ev.id === "global-garba" ? "/events/global-garba" :
                        ev.id === "umang-fest" ? "/events/umang-fest" :
                        "/gallery"
                      }
                      className={`px-6 py-3.5 rounded-xl font-bold text-xs text-center transition-colors shadow-sm flex items-center justify-center gap-1.5 ${
                        ev.featured
                          ? "bg-[#C5A15B] hover:bg-[#b08c47] text-[#242126]"
                          : "bg-[#A30D2D] hover:bg-[#8C0B26] text-white"
                      }`}
                    >
                      <span>Explore Event Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/gallery"
                      className={`text-xs text-center py-2 underline transition-colors ${
                        ev.featured ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-[#A30D2D]"
                      }`}
                    >
                      View Photo Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
