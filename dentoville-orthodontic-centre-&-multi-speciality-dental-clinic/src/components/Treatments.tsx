import { useState } from 'react';
import { 
  Smile, 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  Sparkles, 
  Stethoscope, 
  ArrowRight, 
  MessageCircle,
  LucideIcon 
} from 'lucide-react';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import { TreatmentItem } from '../types';
import TreatmentModal from './TreatmentModal';

const iconMap: Record<string, LucideIcon> = {
  Smile,
  ShieldCheck,
  Activity,
  HeartPulse,
  Sparkles,
  Stethoscope,
};

export default function Treatments() {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'Specialized Orthodontics', label: 'Orthodontics' },
    { id: 'Routine & Oral Health', label: 'Preventive Care' },
    { id: 'Restorative Care', label: 'Restorative' },
    { id: 'Periodontal Care', label: 'Gum Health' },
    { id: 'Aesthetic Care', label: 'Smile Design' },
  ];

  const filteredTreatments = activeFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeFilter);

  return (
    <section id="treatments" className="py-20 md:py-28 bg-[#F6F1EA] border-t border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
            Multi-Speciality Expertise
          </span>
          <h2
            id="treatments-main-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal"
          >
            Comprehensive Dental Care, <br className="hidden sm:inline" />
            <span className="italic text-[#8C6D43]">Under One Roof</span>
          </h2>
          <p className="text-base text-[#57534E] font-light max-w-xl mx-auto">
            From modern orthodontic alignment to gentle preventive maintenance and restorative tooth care, tailored for every member of the family.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-white/80 text-[#57534E] hover:bg-white hover:text-[#1C1917] border border-[#E8DFD5]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTreatments.map((treatment) => {
            const IconComponent = iconMap[treatment.iconName] || Smile;
            return (
              <div
                key={treatment.id}
                id={`treatment-card-${treatment.id}`}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D8CBBA] shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-[#EFE9E1]">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/60 via-transparent to-transparent opacity-70" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider bg-white/95 text-[#8C6D43] shadow-xs">
                      {treatment.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                    <div className="w-7 h-7 rounded-md bg-[#FAF7F2]/90 flex items-center justify-center text-[#8C6D43] shadow-sm">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-white drop-shadow-xs">
                      {treatment.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-[#8C6D43] tracking-wide mb-1">
                      {treatment.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light line-clamp-3">
                      {treatment.shortDescription}
                    </p>
                  </div>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 pt-2 border-t border-[#F5EFE6]">
                    {treatment.keyHighlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-[#78716C]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8976C]" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="pt-3 border-t border-[#F5EFE6] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setSelectedTreatment(treatment)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1C1917] hover:text-[#8C6D43] transition-colors focus:outline-none"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <a
                      href={`https://wa.me/917718094399?text=Hello%20Dentoville,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(treatment.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2D4A3E] hover:text-[#1C1917] p-1 rounded transition-colors"
                      title="Quick Inquiry on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Consultation Assistance Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#D8CBBA] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-lg text-[#1C1917] font-medium">
              Not sure which treatment is right for your smile?
            </h4>
            <p className="text-xs sm:text-sm text-[#57534E]">
              Consult directly with Dr. Madhulika Sharma for a comprehensive evaluation and personalized treatment roadmap.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.phoneTel}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-[#1C1917] bg-[#FAF7F2] border border-[#D8CBBA] hover:border-[#B8976C] transition-colors"
            >
              Call {CLINIC_INFO.phoneDisplay}
            </a>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A31] transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <TreatmentModal
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
      />
    </section>
  );
}
