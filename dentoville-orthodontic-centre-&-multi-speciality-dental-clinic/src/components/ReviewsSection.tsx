import { useState } from 'react';
import { Star, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../data/clinicData';

export default function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const tags = ['all', 'Clear Explanations', 'Painless Experience', 'Ethical & Honest Care', 'Orthodontic Excellence', 'Professional & Kind'];

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS
    : REVIEWS.filter(r => r.tag === activeFilter);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FAF7F2] border-t border-[#E8DFD5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Real Rating Scoreboard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#8C6D43]">
              Real Google Feedback
            </span>
            <h2
              id="reviews-main-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] tracking-tight font-normal"
            >
              Trusted by <span className="italic text-[#8C6D43]">Our Patients</span>
            </h2>
            <p className="text-base text-[#57534E] font-light">
              Read authentic feedback from patients who experienced our gentle, clear, and unhurried approach to dental care in Vasai West.
            </p>
          </div>

          {/* Rating Badge Box */}
          <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#D8CBBA] shadow-xs shrink-0">
            <div className="text-center pr-4 border-r border-[#E8DFD5]">
              <div className="font-serif text-3xl sm:text-4xl font-semibold text-[#1C1917]">
                {CLINIC_INFO.googleRating}
              </div>
              <div className="flex items-center justify-center gap-1 text-[#D4AF37] mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1C1917]">
                <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                <span>{CLINIC_INFO.googleReviewCount} Google Reviews</span>
              </div>
              <p className="text-[11px] text-[#78716C]">
                100% 5-Star Verified Ratings
              </p>
              <a
                href={CLINIC_INFO.googleBusinessReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8C6D43] hover:text-[#1C1917] transition-colors pt-0.5"
              >
                <span>Read More Patient Reviews</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === tag
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-white text-[#57534E] hover:bg-[#F5EFE6] border border-[#E8DFD5]'
              }`}
            >
              {tag === 'all' ? 'All Reviews' : tag}
            </button>
          ))}
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#E8DFD5] hover:border-[#D8CBBA] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Top Row: Stars & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#FAF7F2] text-[#8C6D43] border border-[#E8DFD5]">
                    {review.tag}
                  </span>
                </div>

                {/* Review Text */}
                <div className="relative">
                  <Quote className="w-6 h-6 text-[#E8DFD5] absolute -top-2 -left-1 -z-0 opacity-60" />
                  <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-light italic relative z-10 pt-1">
                    "{review.reviewText}"
                  </p>
                </div>
              </div>

              {/* Author and Google Badge */}
              <div className="pt-5 mt-4 border-t border-[#F5EFE6] flex items-center justify-between text-xs text-[#78716C]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#EFE9E1] text-[#1C1917] font-semibold text-[11px] flex items-center justify-center">
                    P
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917] block">{review.author}</span>
                    <span className="text-[10px] text-[#A8A29E]">{review.timeframe}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-[#2D4A3E] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D4A3E]" />
                  <span>Google</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* External Google Reviews Action Link */}
        <div className="mt-12 text-center">
          <a
            id="read-all-google-reviews-btn"
            href={CLINIC_INFO.googleBusinessReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#1C1917] bg-white border border-[#D8CBBA] hover:border-[#8C6D43] hover:bg-[#FAF7F2] shadow-xs transition-all duration-200"
          >
            <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
            <span>Read More Patient Reviews on Google Business</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8C6D43]" />
          </a>
        </div>
      </div>
    </section>
  );
}
