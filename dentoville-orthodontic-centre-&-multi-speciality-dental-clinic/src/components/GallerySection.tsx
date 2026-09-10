import { useState } from 'react';
import { Maximize2, Sparkles, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, CLINIC_INFO } from '../data/clinicData';
import { GalleryItem } from '../types';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const heroImage = GALLERY_ITEMS[0];
  const secondaryImages = GALLERY_ITEMS.slice(1);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#F6F1EA] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
            Clinic Atmosphere & Hygiene
          </span>
          <h2
            id="gallery-main-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal"
          >
            A Calm Space For <br className="hidden sm:inline" />
            <span className="italic text-[#8C6D43]">Better Dental Care</span>
          </h2>
          <p className="text-base text-[#57534E] font-light max-w-xl mx-auto">
            Experience a clean, peaceful, and hygienic clinic setting created to make every visit restful and reassuring.
          </p>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Large Editorial Image */}
          <div
            id={`gallery-item-${heroImage.id}`}
            onClick={() => setActiveItem(heroImage)}
            className="group md:col-span-8 relative h-[360px] sm:h-[440px] rounded-2xl overflow-hidden bg-[#EFE9E1] border border-[#D8CBBA] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={heroImage.imageUrl}
              alt={heroImage.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/20 to-transparent" />

            {/* Hover icon indicator */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-[#1C1917] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Caption Info */}
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                {heroImage.category}
              </span>
              <h3 className="font-serif text-2xl font-medium text-white mt-2">
                {heroImage.title}
              </h3>
              <p className="text-xs text-white/80 mt-1 max-w-lg hidden sm:block">
                {heroImage.caption}
              </p>
            </div>
          </div>

          {/* Right Column Stack (2 Images) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {secondaryImages.slice(0, 2).map((item) => (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => setActiveItem(item)}
                className="group relative h-[168px] sm:h-[208px] rounded-2xl overflow-hidden bg-[#EFE9E1] border border-[#D8CBBA] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#1C1917] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base font-medium text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row (3 Supporting Cards) */}
          {secondaryImages.slice(2, 5).map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group md:col-span-4 relative h-[220px] rounded-2xl overflow-hidden bg-[#EFE9E1] border border-[#D8CBBA] cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md text-[#1C1917] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-medium text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Location & Hygiene Guarantee Ribbon */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#E8DFD5] flex flex-wrap items-center justify-between gap-4 text-xs text-[#57534E]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8C6D43]" />
            <span>Strict Multi-Stage Sterilization & Autoclave Protocol Maintained for Every Patient.</span>
          </div>

          <div className="flex items-center gap-1.5 font-medium text-[#1C1917]">
            <MapPin className="w-3.5 h-3.5 text-[#8C6D43]" />
            <span>{CLINIC_INFO.locality}</span>
          </div>
        </div>
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        item={activeItem}
        items={GALLERY_ITEMS}
        onClose={() => setActiveItem(null)}
        onNavigate={(item) => setActiveItem(item)}
      />
    </section>
  );
}
