import type { MouseEvent } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export default function LightboxModal({ item, items, onClose, onNavigate }: LightboxModalProps) {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };


  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#1C1917]/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full flex flex-col items-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="lightbox-close-btn"
          onClick={onClose}
          className="absolute -top-12 right-0 sm:right-0 p-2 text-white/80 hover:text-white transition-colors focus:outline-none"
          aria-label="Close lightbox"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Image Display */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[75vh] flex items-center justify-center border border-white/10">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-auto max-h-[75vh] object-contain"
          />

          {/* Previous / Next Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Details */}
        <div className="w-full mt-4 px-2 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white/90 gap-2">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
              {item.category}
            </span>
            <h4 className="font-serif text-lg text-white font-medium">
              {item.title}
            </h4>
            <p className="text-xs text-white/70 mt-0.5 max-w-xl">
              {item.caption}
            </p>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-white/60 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{CLINIC_INFO.shortName} • {CLINIC_INFO.locality}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
