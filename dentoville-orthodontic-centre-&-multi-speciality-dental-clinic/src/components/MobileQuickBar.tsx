import { Phone, MessageCircle, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function MobileQuickBar() {
  return (
    <div
      id="mobile-quick-action-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#D8CBBA] px-4 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          id="quickbar-call"
          href={CLINIC_INFO.phoneTel}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#D8CBBA] text-[#1C1917] hover:bg-[#F5EFE6] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#8C6D43]" />
          <span className="text-[11px] font-semibold mt-1">Call Clinic</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="quickbar-whatsapp"
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#2D4A3E] text-white hover:bg-[#233A31] transition-colors shadow-xs"
        >
          <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
          <span className="text-[11px] font-semibold mt-1">WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          id="quickbar-directions"
          href={CLINIC_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#D8CBBA] text-[#1C1917] hover:bg-[#F5EFE6] transition-colors"
        >
          <Navigation className="w-4 h-4 text-[#8C6D43]" />
          <span className="text-[11px] font-semibold mt-1">Directions</span>
        </a>
      </div>
    </div>
  );
}
