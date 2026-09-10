import { X, CheckCircle2, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { TreatmentItem } from '../types';
import { CLINIC_INFO } from '../data/clinicData';

interface TreatmentModalProps {
  treatment: TreatmentItem | null;
  onClose: () => void;
}

export default function TreatmentModal({ treatment, onClose }: TreatmentModalProps) {
  if (!treatment) return null;

  const whatsappInquiryUrl = `https://wa.me/917718094399?text=Hello%20Dentoville,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(treatment.title)}%20at%20your%20clinic.`;

  return (
    <div
      id="treatment-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-2xl shadow-2xl border border-[#D8CBBA] overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image & close button */}
        <div className="relative h-48 sm:h-56 w-full bg-[#EFE9E1] shrink-0">
          <img
            src={treatment.image}
            alt={treatment.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/80 via-[#1C1917]/30 to-transparent" />
          
          <button
            id="close-treatment-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF7F2]/90 hover:bg-white text-[#1C1917] flex items-center justify-center shadow-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-white/90 text-[#8C6D43]">
              {treatment.category}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-1.5">
              {treatment.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-[#8C6D43] mb-1">
              {treatment.tagline}
            </h4>
            <p className="text-sm sm:text-base text-[#44403C] leading-relaxed font-light">
              {treatment.fullDescription}
            </p>
          </div>

          {/* Key Clinical Highlights */}
          <div className="p-5 rounded-xl bg-white border border-[#E8DFD5]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#8C6D43]" />
              Treatment Highlights & Inclusions
            </h4>
            <ul className="space-y-2.5">
              {treatment.keyHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#57534E]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation and Inquiry Prompt */}
          <div className="p-4 rounded-xl bg-[#EFE9E1] border border-[#D8CBBA]/70">
            <div className="text-xs text-[#57534E] leading-relaxed">
              <strong className="text-[#1C1917] font-semibold">Have questions about this treatment?</strong>
              <p className="mt-0.5">
                Contact Dr. Madhulika Sharma directly to understand treatment eligibility, estimated timeline, and preparation guidance.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
            <a
              id="modal-cta-phone"
              href={CLINIC_INFO.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#1C1917] bg-white border border-[#D8CBBA] hover:border-[#B8976C] rounded-lg shadow-xs transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8C6D43]" />
              <span>Call Clinic ({CLINIC_INFO.phoneDisplay})</span>
            </a>

            <a
              id="modal-cta-whatsapp"
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#2D4A3E] hover:bg-[#233A31] rounded-lg shadow-xs transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
