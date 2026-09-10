import { MapPin, Phone, MessageCircle, Star, ArrowUp, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#1C1917] text-[#D6D3D1] pt-16 pb-24 lg:pb-16 border-t border-[#292524]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#292524]">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#292524] border border-[#44403C] flex items-center justify-center text-[#D4AF37]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl tracking-tight text-white font-medium block">
                  Dentoville
                </span>
                <span className="text-[11px] tracking-wider uppercase text-[#A8A29E] font-medium block">
                  Orthodontic Centre & Multi-Speciality Dental Clinic
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A29E] leading-relaxed font-light max-w-sm">
              Specialized orthodontic and multi-speciality dental care led by <strong className="text-white font-medium">{CLINIC_INFO.doctorName}</strong>. Dedicated to providing patient-centred care, unhurried consultations, and healthy, confident smiles in Vasai West.
            </p>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#E7E5E4] font-medium">
                {CLINIC_INFO.googleRating} Google Rating ({CLINIC_INFO.googleReviewCount} Reviews)
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base text-white font-medium tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Practice Ethos</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Treatments & Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Patients Choose Us</a>
              </li>
              <li>
                <a href="#doctor" className="hover:text-white transition-colors">Meet Dr. Madhulika Sharma</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Google Patient Reviews</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">Clinic Atmosphere</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Timings */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-base text-white font-medium tracking-wide">
              Clinic Location
            </h4>
            
            <div className="space-y-3 text-xs text-[#A8A29E]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={CLINIC_INFO.phoneTel} className="hover:text-white transition-colors font-medium text-[#FAF7F2]">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#86EFAC] shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#86EFAC] transition-colors font-medium text-[#FAF7F2]"
                >
                  WhatsApp: {CLINIC_INFO.whatsappNumber}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#C5A880] hover:text-white transition-colors font-medium"
              >
                <span>Get Google Maps Directions</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
          <p className="text-center sm:text-left">
            © 2026 Dentoville Orthodontic Centre & Multi-Speciality Dental Clinic. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[#A8A29E] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
