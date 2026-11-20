import PageHeader from "@/components/common/PageHeader";
import Link from "next/link";
import { Flame, Sparkles, Trophy, Users, Calendar, ArrowRight, Award, ShieldCheck, Heart } from "lucide-react";
import { eventsData } from "@/lib/data/eventsData";

export const metadata = {
  title: "Grand Global Garba Utsav | Central India's Largest Cultural Fest",
  description: "The official signature cultural event of Baderia Global Group in Jabalpur. Over 10,000 participants, celebrity guests, traditional Dandiya, and awards."
};

export default function GlobalGarbaPage() {
  const garba = eventsData.find((e) => e.id === "global-garba");

  const contests = [
    { title: "Mr. Global & Ms. Global", desc: "The supreme cultural honors of the festival, awarded to the most charismatic and graceful dancers of the event." },
    { title: "Best Traditional Ethnic Costume", desc: "Recognizing outstanding authenticity, traditional mirror-work chaniya cholis, kediyus, and traditional pagdis." },
    { title: "Best Synchronized Garba Circle", desc: "Awarded to student and faculty group circles performing flawless rhythmic circular formations." },
    { title: "Best Child & Senior Performer", desc: "Special guest category honors celebrating community members and families who grace the festival." }
  ];

  return (
    <>
      <PageHeader
        badge="Cultural Trademark"
        title="Grand Global Garba Utsav"
        subtitle="Central India's most celebrated Navratri spectacle, uniting over 10,000 students, faculty, and citizens in an electrifying symphony of tradition."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Events", href: "/events" },
          { label: "Grand Global Garba" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero Banner */}
          <div className="bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#50071A] text-white p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden border-2 border-[#C5A15B]/50">
            <div className="relative z-10 max-w-3xl space-y-4">
              <span className="text-xs font-black uppercase tracking-wider bg-[#C5A15B] text-[#242126] px-3.5 py-1 rounded-full inline-block">
                Mahakoshal&apos;s Cultural Landmark
              </span>
              <h2 className="text-3xl sm:text-5xl font-black font-serif text-white tracking-tight leading-tight">
                A Decade of Festive Euphoria, Color &amp; Devotion
              </h2>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                What began as a modest campus gathering has evolved over the years into one of Madhya Pradesh&apos;s most anticipated cultural galas. Every autumn during the sacred festival of Navratri, the vast campus grounds of Baderia Global are transformed into an illuminated open-air arena welcoming over 10,000 enthusiastic participants.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#DFC285]">
                <span>✓ 10,000+ Footfall Record</span>
                <span>✓ Live Celebrity Singers &amp; Orchestra</span>
                <span>✓ Over ₹2 Lakhs in Cash Prizes</span>
                <span>✓ Strict Discipline &amp; Family Security</span>
              </div>
            </div>
          </div>

          {/* Highlights & Tradition Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-xs font-bold text-[#A30D2D] uppercase tracking-wider block">
                The Garba Tradition
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#242126] font-serif leading-tight">
                Preserving Heritage while Energizing Youth Spirit
              </h3>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Students and faculty prepare for weeks leading up to the grand festival, rehearsing authentic Gujarati steps, Dodhiya, and Dandiya Raas. The arena is outfitted with concert-grade sound arrays, intelligent beam lighting, and dedicated security checkposts ensuring complete safety for female participants and visiting families.
              </p>
              <p className="text-sm text-[#77727A] leading-relaxed">
                Renowned Bollywood playback artists, regional folk singers, and Gujarati garba troupes take to the stage, accompanied by traditional live dhol ensembles that keep the arena dancing late into the night.
              </p>

              {/* Highlights */}
              <div className="p-6 rounded-2xl bg-[#FAF8F8] border border-gray-200 space-y-3">
                <h4 className="text-base font-bold text-[#242126]">Festival Highlights</h4>
                <div className="space-y-2">
                  {garba?.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-800">
                      <Sparkles className="w-4 h-4 text-[#A30D2D] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Awards & Categories */}
            <div className="lg:col-span-4 bg-[#FAF8F8] p-6 rounded-3xl border-2 border-gray-200 space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B] block">
                Competition Categories
              </span>
              <h4 className="text-base font-bold text-[#242126]">
                Prizes &amp; Contest Titles
              </h4>
              <div className="space-y-3">
                {contests.map((c, cIdx) => (
                  <div key={cIdx} className="p-3 bg-white rounded-xl border border-gray-200/80 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-[#A30D2D]">
                      <Trophy className="w-3.5 h-3.5 text-[#C5A15B]" />
                      <span>{c.title}</span>
                    </div>
                    <p className="text-[11px] text-[#77727A] leading-snug">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/gallery"
                className="w-full bg-[#A30D2D] hover:bg-[#8C0B26] text-white text-xs font-bold py-3 px-4 rounded-xl text-center block transition-colors shadow-xs"
              >
                View Garba Photos in Gallery
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
