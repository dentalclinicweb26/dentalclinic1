import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F6F1EA] border-t border-[#E8DFD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
            Location & Contact
          </span>
          <h2
            id="contact-main-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal"
          >
            Visit <span className="italic text-[#8C6D43]">Dentoville</span>
          </h2>
          <p className="text-base text-[#57534E] font-light max-w-xl mx-auto">
            Conveniently located at Vasai Manor, Kaul Heritage City in Vasai West. Contact us directly for consultations and directions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Clinic Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-7 sm:p-9 rounded-3xl bg-white border border-[#D8CBBA] shadow-sm space-y-8">
            <div>
              {/* Header inside Card */}
              <div className="border-b border-[#E8DFD5] pb-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#8C6D43] uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Orthodontic & Multi-Speciality Care</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1C1917] font-medium">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-sm font-semibold text-[#44403C] mt-1">
                  {CLINIC_INFO.doctorName}
                </p>
              </div>

              {/* Detailed Contact List */}
              <div className="space-y-6 pt-6">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-[#8C6D43]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      Clinic Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {CLINIC_INFO.fullAddress}
                    </p>
                    <p className="text-xs text-[#8C6D43] font-medium pt-0.5">
                      Landmark: {CLINIC_INFO.landmark}
                    </p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center shrink-0 mt-1">
                    <Phone className="w-5 h-5 text-[#8C6D43]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      Direct Telephone
                    </h4>
                    <a
                      href={CLINIC_INFO.phoneTel}
                      className="text-sm sm:text-base font-semibold text-[#1C1917] hover:text-[#8C6D43] transition-colors block"
                    >
                      {CLINIC_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#78716C]">
                      Available for patient queries & consultation timings
                    </p>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center shrink-0 mt-1">
                    <MessageCircle className="w-5 h-5 text-[#2D4A3E]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      WhatsApp Direct
                    </h4>
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold text-[#2D4A3E] hover:underline block"
                    >
                      {CLINIC_INFO.whatsappNumber}
                    </a>
                    <p className="text-xs text-[#78716C]">
                      Direct messaging for clinic assistance
                    </p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center shrink-0 mt-1">
                    <Clock className="w-5 h-5 text-[#8C6D43]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917]">
                      Consultation Hours
                    </h4>
                    {CLINIC_INFO.timings.map((t, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-[#57534E]">
                        <span className="font-medium text-[#1C1917]">{t.days}:</span> {t.hours}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons (Strictly Phone, WhatsApp & Directions) */}
            <div className="pt-6 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-stretch gap-3">
              <a
                id="contact-btn-call"
                href={CLINIC_INFO.phoneTel}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#292524] transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call Now</span>
              </a>

              <a
                id="contact-btn-whatsapp"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A31] transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
                <span>WhatsApp</span>
              </a>

              <a
                id="contact-btn-directions"
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-[#1C1917] bg-[#FAF7F2] border border-[#D8CBBA] hover:border-[#8C6D43] transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#8C6D43]" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Location Card */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-white border border-[#D8CBBA] overflow-hidden shadow-sm">
            {/* Map Header Bar */}
            <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#E8DFD5] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-[#2D4A3E] animate-pulse" />
                <span className="text-xs font-semibold text-[#1C1917]">
                  Kaul Heritage City • Vasai West
                </span>
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C6D43] hover:text-[#1C1917] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#EFE9E1]">
              <iframe
                title="Dentoville Orthodontic Centre Location Map"
                src={CLINIC_INFO.googleMapsEmbedQuery}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map Floating Location Pin Card */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#D8CBBA] shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#2D4A3E] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#86EFAC]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs font-semibold text-[#1C1917]">
                      Dentoville Orthodontic Centre
                    </h5>
                    <p className="text-[11px] text-[#57534E] truncate max-w-[220px]">
                      Vasai Manor, Bhabola Chulna Road, Sandor
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Landmark and Accessibility Helper */}
            <div className="p-5 bg-white border-t border-[#E8DFD5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
              <div>
                <strong className="text-[#1C1917] font-semibold">Easy Landmark:</strong> Near Mount Carmel School, Kaul Heritage City.
              </div>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-semibold text-[#2D4A3E] hover:underline"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Step-by-Step Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
