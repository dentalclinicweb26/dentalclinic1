import { CheckCircle2, Shield, HeartHandshake, Eye, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export default function TrustIntro() {
  const pillars = [
    {
      title: "Clear Explanations",
      desc: "Every step is explained thoroughly so you always feel informed and confident.",
      icon: Eye,
    },
    {
      title: "Professional Care",
      desc: "High standards of clinical excellence and sterilization in every treatment.",
      icon: Shield,
    },
    {
      title: "Comfortable Experience",
      desc: "A calm, gentle approach focused on alleviating anxiety and discomfort.",
      icon: HeartHandshake,
    },
    {
      title: "Personalized Guidance",
      desc: "Tailored treatment options suited to your individual health and smile goals.",
      icon: Sparkles,
    },
    {
      title: "Preventive Oral Care",
      desc: "Proactive care to protect natural teeth and prevent complex issues early.",
      icon: CheckCircle2,
    },
    {
      title: "Patient Trust",
      desc: "Ethical dental practice built upon honest consultation and 100% 5-star feedback.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Polished Copy & Pillars */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
                Our Philosophy & Approach
              </span>
              <h2
                id="trust-intro-heading"
                className="font-serif text-3xl sm:text-4xl lg:text-4xl text-[#1C1917] tracking-tight font-normal mt-3 leading-snug"
              >
                Dental Care With <br className="hidden sm:inline" />
                <span className="italic text-[#8C6D43]">Clarity, Comfort & Confidence</span>
              </h2>
            </div>

            <div className="space-y-4 text-[#57534E] text-base sm:text-lg leading-relaxed font-light">
              <p>
                At Dentoville, we believe a visit to the dentist should feel reassuring, transparent, and respectful of your time. Our clinic was established to provide Vasai West with a higher standard of orthodontic and multi-speciality dental care.
              </p>
              <p>
                Led by Dr. Madhulika Sharma, we take the time to evaluate your oral health in detail and explain every finding in straightforward, approachable terms. There is no rush and no pressure—just honest advice, meticulous hygiene, and gentle treatment designed for lasting oral wellness.
              </p>
            </div>

            {/* 6 Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-[#E8DFD5] shadow-xs hover:border-[#D8CBBA] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center shrink-0 mt-0.5">
                        <IconComponent className="w-4 h-4 text-[#8C6D43]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#1C1917]">{item.title}</h4>
                        <p className="text-xs text-[#57534E] mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Premium Split Visual Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Editorial Image */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#D8CBBA] bg-[#EFE9E1]">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern orthodontic and dental consultation at Dentoville"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Floating Reassurance Card */}
              <div className="absolute -bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-md p-6 rounded-xl bg-white border border-[#D8CBBA] shadow-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#2D4A3E] text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#86EFAC]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#1C1917] font-medium">
                      Thoughtful, Patient-First Protocol
                    </h4>
                    <p className="text-xs text-[#57534E] mt-1.5 leading-relaxed">
                      Every diagnostic scan, orthodontic milestone, and preventive cleaning is conducted with uncompromised clinical hygiene and complete patient comfort.
                    </p>
                    <div className="mt-3 pt-3 border-t border-[#F5EFE6] flex items-center justify-between text-[11px] text-[#78716C]">
                      <span>{CLINIC_INFO.shortName} • {CLINIC_INFO.locality}</span>
                      <span className="font-semibold text-[#2D4A3E]">Verified Standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
