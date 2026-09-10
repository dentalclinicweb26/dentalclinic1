import { CheckCircle2, Phone, MessageCircle, Quote, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function DoctorSection() {
  return (
    <section id="doctor" className="py-20 md:py-28 bg-[#F6F1EA] border-t border-[#E8DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Image Frame */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background shape */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[#D8CBBA] -z-10" />

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#D8CBBA] bg-[#EFE9E1]">
                <img
                  src="https://images.unsplash.com/photo-1594824813533-5d554a9388df?auto=format&fit=crop&w=900&q=85"
                  alt="Dr. Madhulika Sharma - Dentoville Orthodontic Centre & Multi-Speciality Dental Clinic"
                  className="w-full h-[450px] sm:h-[500px] object-cover object-top"
                  loading="lazy"
                />

                {/* Gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/75 via-transparent to-transparent" />

                {/* Overlay Name Tag */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/80 shadow-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#1C1917]">
                        {CLINIC_INFO.doctorName}
                      </h4>
                      <p className="text-xs text-[#8C6D43] font-medium mt-0.5">
                        {CLINIC_INFO.name}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-[#FAF7F2] border border-[#E8DFD5] text-[#2D4A3E]">
                      Vasai West
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio & Practice Ethos */}
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
                Clinical Leadership
              </span>
              <h2
                id="doctor-main-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal mt-2"
              >
                Meet <span className="italic text-[#8C6D43]">{CLINIC_INFO.doctorName}</span>
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[#78716C] mt-1 uppercase tracking-wider">
                {CLINIC_INFO.name}
              </p>
            </div>

            {/* Doctor's Quote Block */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#D8CBBA] shadow-xs relative">
              <Quote className="w-8 h-8 text-[#D8CBBA] absolute top-4 right-4 -scale-x-100" />
              <p className="font-serif text-lg sm:text-xl text-[#1C1917] italic leading-relaxed pr-6">
                {CLINIC_INFO.doctorQuote}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#8C6D43]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Dr. Madhulika Sharma</span>
              </div>
            </div>

            {/* Narrative Copy */}
            <div className="space-y-4 text-[#57534E] text-sm sm:text-base leading-relaxed font-light">
              <p>
                At Dentoville Orthodontic Centre & Multi-Speciality Dental Clinic, Dr. Madhulika Sharma leads with a philosophy centered on patient comfort, gentle technique, and absolute clarity.
              </p>
              <p>
                She believes that the best dental care begins with active listening. Every patient receives dedicated time to discuss their concerns without feeling rushed, followed by clear, step-by-step guidance on their dental condition and recommended care.
              </p>
              <p>
                Whether you are seeking specialized orthodontic treatment, preventive routine care, or restorative solutions, Dr. Sharma provides personalized recommendations designed to preserve your natural smile and foster long-term oral well-being.
              </p>
            </div>

            {/* Focus Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Patient-Focused Dental Care</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Clear & Open Communication</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Comfortable Patient Experience</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#44403C]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                <span>Personalized Treatment Guidance</span>
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#E8DFD5]">
              <a
                id="doctor-call-cta"
                href={CLINIC_INFO.phoneTel}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1C1917] hover:bg-[#292524] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Call for Consultation</span>
              </a>

              <a
                id="doctor-whatsapp-cta"
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1C1917] bg-white border border-[#D8CBBA] hover:border-[#B8976C] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#2D4A3E]" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
