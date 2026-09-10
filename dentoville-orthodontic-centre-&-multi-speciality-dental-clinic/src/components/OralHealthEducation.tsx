import { Sparkles, Droplets, CloudSun, CalendarCheck, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { HEALTH_TIPS, CLINIC_INFO } from '../data/clinicData';

const iconMap = {
  Sparkles,
  Droplets,
  CloudSun,
  CalendarCheck,
};

export default function OralHealthEducation() {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Educational Content & Tips Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
                Daily & Seasonal Care Guidance
              </span>
              <h2
                id="education-main-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal mt-2"
              >
                Healthy Teeth. <br className="hidden sm:inline" />
                <span className="italic text-[#8C6D43]">Healthy Smile.</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-light">
              Maintaining optimal oral hygiene goes beyond brushing. Shifts in weather, diet, routine, and seasonal changes can subtly affect saliva levels, enamel sensitivity, and gum health. Simple, proactive dental habits ensure your teeth stay protected year-round.
            </p>

            {/* 4 Clean Actionable Tip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {HEALTH_TIPS.map((tip) => {
                const IconComponent = iconMap[tip.iconName as keyof typeof iconMap] || Sparkles;
                return (
                  <div
                    key={tip.id}
                    className="p-5 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D8CBBA] shadow-xs flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center mb-3">
                        <IconComponent className="w-4 h-4 text-[#8C6D43]" />
                      </div>
                      <h4 className="font-serif text-base font-medium text-[#1C1917]">
                        {tip.title}
                      </h4>
                      <p className="text-xs text-[#57534E] leading-relaxed mt-1.5 font-light">
                        {tip.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F5EFE6] flex items-start gap-1.5 text-[11px] text-[#2D4A3E] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{tip.actionableStep}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#2D4A3E] to-[#1E332A] text-white shadow-xl relative overflow-hidden">
              {/* Subtle ambient decorative circle */}
              <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full bg-white/5 pointer-events-none" />

              <span className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-white/15 border border-white/20 text-[#86EFAC] inline-block mb-6">
                Preventive Wellness Focus
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                Early Care Saves Your Natural Smile.
              </h3>

              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-light mt-4">
                Routine evaluations allow Dr. Madhulika Sharma to catch minor enamel demineralization, alignment shifts, or gingival inflammation before they cause pain or require complex interventions.
              </p>

              <div className="my-6 p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#86EFAC]">
                  <Sparkles className="w-4 h-4" />
                  <span>Simple Consultation Reminder</span>
                </div>
                <p className="text-xs text-white/90">
                  If you haven’t had a routine dental checkup in over 6 months or are experiencing mild sensitivity, connect with us for gentle guidance.
                </p>
              </div>

              {/* Direct Quick Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={CLINIC_INFO.phoneTel}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1C1917] bg-white hover:bg-[#FAF7F2] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8C6D43]" />
                  <span>Call {CLINIC_INFO.phoneDisplay}</span>
                </a>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/20 hover:bg-white/30 border border-white/30 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
                  <span>WhatsApp Query</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
