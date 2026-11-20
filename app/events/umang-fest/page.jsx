import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Sparkles, Trophy, Calendar, Users, ArrowRight, Music, Mic2 } from "lucide-react";
import { eventsData } from "@/lib/data/eventsData";

export const metadata = {
  title: "Umang Annual Youth & Cultural Fest | Music, Dance & Drama",
  description: "The inter-collegiate annual youth festival of Baderia Global Engineering College. Battle of bands, group dance, fashion runway, and celebrity star nights."
};

export default function UmangFestPage() {
  const fest = eventsData.find((e) => e.id === "umang-fest");

  const eventsList = [
    { name: "Battle of the Bands", desc: "Inter-collegiate rock and fusion band duels featuring original compositions and electric instrument solos." },
    { name: "Step Up: Group Dance Championship", desc: "Western, hip-hop, classical, and thematic folk group choreography competitions evaluated by professional judges." },
    { name: "Vogue Runway: Fashion Extravaganza", desc: "Thematic haute couture runway showcase highlighting student fashion design and poise." },
    { name: "Nukkad Natak (Street Theatre)", desc: "High-impact street theatrical performances addressing social awareness, mental health, and environmental conservation." },
    { name: "Star Celebrity Musical Night", desc: "Concert performance featuring leading national playback singers and EDM DJ artists on the main ground." }
  ];

  return (
    <>
      <PageHeader
        badge="Youth Festival"
        title="Umang — Annual Cultural &amp; Youth Extravaganza"
        subtitle="A 3-day multi-disciplinary carnival of music, choreography, theatrical drama, literature, and creative arts drawing colleges across MP."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Events", href: "/events" },
          { label: "Umang Fest" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
              Inter-College Festival
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
              Unleashing Youth Expression &amp; Artistic Brilliance
            </h2>
            <p className="text-sm text-[#77727A] leading-relaxed">
              Umang is the annual spring celebration of student creativity, leadership, and camaraderie at Baderia Global. Thousands of student delegates from universities across central India participate in 25+ competitive cultural, literary, and performing arts contests with substantial prize pools and rolling trophies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventsList.map((item, idx) => (
              <div key={idx} className="bg-[#FAF8F8] p-6 rounded-2xl border border-gray-200/90 shadow-2xs space-y-2">
                <div className="flex items-center gap-2">
                  <Music className="w-5 h-5 text-[#A30D2D]" />
                  <h3 className="font-bold text-sm text-[#242126]">{item.name}</h3>
                </div>
                <p className="text-xs text-[#77727A] leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#FAF8F8] p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-[#242126]">Experience the Moments in Our Media Gallery</h4>
              <p className="text-xs text-[#77727A]">
                Browse through high-resolution photo archives of previous Umang festival editions and star night concerts.
              </p>
            </div>
            <Link
              href="/gallery"
              className="bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-colors shrink-0 shadow-sm"
            >
              Open Photo Gallery
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
