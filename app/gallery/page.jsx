"use client";

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";
import { 
  Sparkles, Image as ImageIcon, X, 
  ChevronRight, ChevronLeft, Eye, Filter 
} from "lucide-react";
import { galleryData, galleryCategories } from "@/lib/data/galleryData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = galleryData.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <>
      <PageHeader
        badge="Media Center"
        title="Photo &amp; Video Media Gallery"
        subtitle="Visual snapshots capturing 45+ acres of campus architecture, advanced engineering labs, Grand Global Garba, NCC drills, and placement celebrations."
        breadcrumbs={[
          { label: "Campus Life", href: "/campus" },
          { label: "Gallery" }
        ]}
      />

      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-gray-200 pb-4">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#A30D2D] text-white shadow-sm"
                    : "bg-[#FAF8F8] text-[#242126] hover:bg-gray-200/70"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid with Visual Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer bg-[#FAF8F8] rounded-2xl border border-gray-200/90 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual placeholder box with stylized SVG badge */}
                <div className="h-56 bg-gradient-to-br from-[#720D27]/90 via-[#A30D2D]/80 to-[#242126] p-6 relative flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/15 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full border border-white/20">
                      {item.category}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform">
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white font-serif leading-snug drop-shadow-sm group-hover:text-[#DFC285] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Caption Footer */}
                <div className="p-4 bg-white border-t border-gray-100 flex-1 flex flex-col justify-between">
                  <p className="text-xs text-[#77727A] leading-relaxed line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-[#A30D2D] flex items-center gap-1 group-hover:underline">
                    <span>Click to view snapshot</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
              <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative border-2 border-[#C5A15B]">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="h-64 sm:h-80 bg-gradient-to-br from-[#720D27] via-[#A30D2D] to-[#242126] p-8 flex flex-col justify-end text-white relative">
                  <div className="absolute inset-0 bg-[radial-gradient(#C5A15B_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15B] mb-2 block relative z-10">
                    {selectedImage.category} • BADERIA GLOBAL JABALPUR
                  </span>
                  <h3 className="text-2xl font-black font-serif text-white relative z-10 leading-snug">
                    {selectedImage.title}
                  </h3>
                </div>

                <div className="p-6 space-y-3 bg-[#FAF8F8]">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {selectedImage.caption}
                  </p>
                  <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
                    <span className="text-gray-500">Global Engineering College Campus Archive</span>
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="text-[#A30D2D] font-bold hover:underline"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}
