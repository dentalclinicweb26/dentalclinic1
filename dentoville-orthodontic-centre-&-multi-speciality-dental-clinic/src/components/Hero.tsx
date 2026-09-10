import { Phone, MessageCircle, Star, MapPin, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#F6F1EA] to-[#FAF7F2]"
    >
      {/* Subtle architectural background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8DFD5]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#C5A880]/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Clinic & Doctor Hierarchy Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9E1] border border-[#D8CBBA] text-xs font-medium text-[#44403C]">
              <span className="flex items-center gap-1.5 font-semibold text-[#1C1917]">
                <Sparkles className="w-3.5 h-3.5 text-[#8C6D43]" />
                {CLINIC_INFO.name}
              </span>
              <span className="text-[#A8A29E]">•</span>
              <span className="text-[#57534E] font-medium">{CLINIC_INFO.doctorName}</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] text-[#1C1917] tracking-tight font-normal"
            >
              Confident Smiles Begin With <span className="italic font-normal text-[#8C6D43]">Exceptional</span> Care.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#57534E] leading-relaxed max-w-2xl font-light">
              Specialized orthodontic and multi-speciality dental care focused on comfort, clarity and long-term oral health.
            </p>

            {/* Doctor & Location Callout Bar */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#44403C] pt-1">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2D4A3E]" />
                <span className="font-semibold text-[#1C1917]">Led by {CLINIC_INFO.doctorName}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#57534E]">
                <MapPin className="w-4 h-4 text-[#8C6D43]" />
                <span>Vasai West, Maharashtra</span>
              </div>
            </div>

            {/* Action Buttons (Strictly Phone & WhatsApp, No Appointment Form) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                id="hero-cta-call"
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#1C1917] hover:bg-[#292524] rounded-xl shadow-[0_4px_16px_rgba(28,25,23,0.18)] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>Call the Clinic</span>
              </a>

              <a
                id="hero-cta-whatsapp"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#1C1917] bg-white hover:bg-[#FAF7F2] border border-[#D8CBBA] hover:border-[#B8976C] rounded-xl shadow-xs transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-[#2D4A3E]" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Note about direct walk-ins and consultation */}
            <p className="text-xs text-[#78716C] pt-1">
              Call or message directly for consultation details, clinic directions, and treatment queries.
            </p>
          </div>

          {/* Right Column: Editorial Visual Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#D8CBBA]/80 bg-[#EFE9E1]">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=85"
                  alt="Dentoville Orthodontic Centre modern clinic interior"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                />
                
                {/* Soft gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-transparent to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8C6D43]">
                        Vasai West, Maharashtra
                      </p>
                      <h4 className="font-serif text-base text-[#1C1917] font-medium mt-0.5">
                        Dentoville Orthodontic Centre
                      </h4>
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8DFD5]">
                      <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      <span className="text-xs font-bold text-[#1C1917]">5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Reassurance Tag */}
              <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 py-2 px-3.5 rounded-xl bg-white border border-[#D8CBBA] shadow-md">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span className="text-xs font-semibold text-[#1C1917]">
                  Multi-Speciality Care
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credibility Indicators (Strictly Real Data: 5.0 Rating, 18 Reviews, Patient-Centred Care, Clear Treatment Guidance) */}
        <div
          id="hero-credibility-indicators"
          className="mt-14 pt-8 border-t border-[#E8DFD5] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Indicator 1 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E8DFD5]">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#D8CBBA] flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#1C1917] tracking-tight">5.0 ★ Rating</div>
              <div className="text-xs text-[#57534E]">Google Business Rating</div>
            </div>
          </div>

          {/* Indicator 2 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E8DFD5]">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#D8CBBA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#8C6D43]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#1C1917] tracking-tight">18 Google Reviews</div>
              <div className="text-xs text-[#57534E]">100% 5-Star Feedback</div>
            </div>
          </div>

          {/* Indicator 3 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E8DFD5]">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#D8CBBA] flex items-center justify-center shrink-0">
              <div className="w-3 h-3 rounded-full bg-[#2D4A3E]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#1C1917] tracking-tight">Patient-Centred Care</div>
              <div className="text-xs text-[#57534E]">Gentle & Unhurried</div>
            </div>
          </div>

          {/* Indicator 4 */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/70 border border-[#E8DFD5]">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#D8CBBA] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#8C6D43]" />
            </div>
            <div>
              <div className="text-base font-bold text-[#1C1917] tracking-tight">Clear Guidance</div>
              <div className="text-xs text-[#57534E]">Honest Treatment Steps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
