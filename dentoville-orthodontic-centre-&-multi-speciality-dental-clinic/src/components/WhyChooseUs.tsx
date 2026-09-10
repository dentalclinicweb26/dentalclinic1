import { 
  MessageSquareText, 
  Heart, 
  Award, 
  UserCheck, 
  Shield, 
  Star,
  LucideIcon 
} from 'lucide-react';
import { WHY_CHOOSE_US, CLINIC_INFO } from '../data/clinicData';

const iconMap: Record<string, LucideIcon> = {
  MessageSquareText,
  Heart,
  Award,
  UserCheck,
  Shield,
  Star,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
            Dedicated To Patient Comfort
          </span>
          <h2
            id="why-choose-us-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal"
          >
            Why Patients Choose <span className="italic text-[#8C6D43]">Dentoville</span>
          </h2>
          <p className="text-base text-[#57534E] font-light max-w-xl mx-auto">
            Our practice is defined by ethical guidance, gentle techniques, and clinical precision in a calm, modern atmosphere.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Star;
            return (
              <div
                key={item.id}
                id={`feature-card-${item.id}`}
                className="group p-8 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D8CBBA] shadow-xs hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] group-hover:border-[#B8976C] group-hover:bg-[#F5EFE6] flex items-center justify-center transition-colors">
                      <IconComponent className="w-6 h-6 text-[#8C6D43]" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#A8A29E] group-hover:text-[#8C6D43] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#1C1917] mb-3 group-hover:text-[#8C6D43] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom accent line */}
                <div className="w-8 h-[2px] bg-[#E8DFD5] group-hover:w-16 group-hover:bg-[#8C6D43] transition-all duration-300 mt-6" />
              </div>
            );
          })}
        </div>

        {/* Real Google Rating Reassurance Box */}
        <div className="mt-12 p-6 rounded-xl bg-[#EFE9E1]/70 border border-[#D8CBBA] max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-1.5 text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-xs sm:text-sm text-[#44403C] font-medium">
            Rated <strong className="text-[#1C1917]">{CLINIC_INFO.googleRating} Stars</strong> with <strong className="text-[#1C1917]">{CLINIC_INFO.googleReviewCount} Google Reviews</strong> from verified patients across Vasai.
          </span>
        </div>
      </div>
    </section>
  );
}
