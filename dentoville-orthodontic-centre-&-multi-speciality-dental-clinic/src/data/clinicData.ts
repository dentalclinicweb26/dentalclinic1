import { TreatmentItem, FeatureCard, ReviewItem, GalleryItem, HealthTip } from '../types';

export const CLINIC_INFO = {
  name: "Dentoville Orthodontic Centre & Multi-Speciality Dental Clinic",
  shortName: "Dentoville",
  tagline: "Orthodontic Centre & Multi-Speciality Dental Clinic",
  doctorName: "Dr. Madhulika Sharma",
  doctorRole: "Consultant Dental Surgeon & Orthodontic Care Lead",
  phoneDisplay: "077180 94399",
  phoneRaw: "07718094399",
  phoneTel: "tel:07718094399",
  whatsappNumber: "+91 77180 94399",
  whatsappUrl: "https://wa.me/917718094399?text=Hello%20Dentoville,%20I%20would%20like%20to%20inquire%20about%20dental%20care.",
  googleRating: "5.0",
  googleReviewCount: "18",
  fullAddress: "Shop No. 4, Vasai Manor, Bhabola Chulna Road, Near Mount Carmel School, Sandor, Kaul Heritage City, Vasai West, Vasai-Virar, Maharashtra 401202",
  locality: "Vasai West, Maharashtra",
  landmark: "Near Mount Carmel School, Kaul Heritage City",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Dentoville+Orthodontic+Centre+Vasai+Manor+Bhabola+Chulna+Road+Vasai+West+Maharashtra+401202",
  googleMapsEmbedQuery: "https://maps.google.com/maps?q=Vasai%20Manor,%20Bhabola%20Chulna%20Road,%20Vasai%20West,%20Maharashtra%20401202&t=&z=15&ie=UTF8&iwloc=&output=embed",
  googleBusinessReviewsUrl: "https://www.google.com/maps/search/?api=1&query=Dentoville+Orthodontic+Centre+Vasai+West+Maharashtra",
  timings: [
    { days: "Monday – Saturday", hours: "10:00 AM – 1:30 PM & 5:00 PM – 9:00 PM" },
    { days: "Sunday", hours: "By Prior Consultation / Morning Hours" }
  ],
  doctorQuote: "“Clear guidance. Thoughtful care. Healthier, more confident smiles.”",
};

export const TREATMENTS: TreatmentItem[] = [
  {
    id: "orthodontics",
    title: "Orthodontic Care",
    category: "Specialized Orthodontics",
    tagline: "Precision Alignment & Confident Smiles",
    shortDescription: "Specialized orthodontic solutions including traditional braces, aesthetic ceramic brackets, and clear aligners to correct crowding, spacing, and bite alignment.",
    fullDescription: "Orthodontic care at Dentoville is customized to each patient’s unique facial aesthetics and dental arch. Dr. Madhulika Sharma provides comprehensive orthodontic evaluations to guide teeth smoothly into their ideal positions. Whether addressing crooked teeth, overbites, underbites, or spacing concerns in teens and adults, our approach focuses on both functional harmony and smile aesthetics.",
    keyHighlights: [
      "Custom orthodontic evaluation & facial profile planning",
      "Metal & tooth-colored ceramic braces",
      "Clear aligner guidance & alignment management",
      "Correction of crowding, crossbites & spacing",
      "Retention planning for permanent stability"
    ],
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "preventive",
    title: "Preventive Dentistry",
    category: "Routine & Oral Health",
    tagline: "Proactive Protection for Lifelong Teeth",
    shortDescription: "Comprehensive oral examinations, gentle ultrasonic scaling, plaque removal, and enamel strengthening to prevent issues before they begin.",
    fullDescription: "Preventive dentistry forms the foundation of our philosophy at Dentoville. Regular professional checkups and gentle scaling protect teeth from decay, enamel erosion, and tartar accumulation. We provide personalized oral hygiene recommendations so you can maintain strong, healthy teeth at home between visits.",
    keyHighlights: [
      "Detailed diagnostic examination & oral screening",
      "Gentle ultrasonic plaque & tartar removal",
      "Enamel remineralization & protective fluoride guidance",
      "Early detection of hidden cavities & wear",
      "Personalized daily brushing & flossing coaching"
    ],
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "restorative",
    title: "Restorative Dentistry",
    category: "Restorative Care",
    tagline: "Preserving Natural Tooth Structure",
    shortDescription: "Tooth-colored aesthetic composite fillings, inlays, onlays, and durable dental crowns designed to restore function, strength, and appearance seamlessly.",
    fullDescription: "When teeth experience decay, chipping, or wear, our restorative care prioritizes conservative tooth preservation. Utilizing shade-matched biocompatible materials, we recreate the natural contours and strength of your teeth, ensuring long-lasting chewing comfort and natural aesthetics.",
    keyHighlights: [
      "Tooth-colored composite resin fillings",
      "Decay removal with minimal tooth structure loss",
      "Custom crowns & bridge restorations",
      "Chipped tooth repair & composite bonding",
      "Functional bite restoration"
    ],
    iconName: "Activity",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "gum-health",
    title: "Gum & Oral Health",
    category: "Periodontal Care",
    tagline: "Strong Foundations for Healthy Teeth",
    shortDescription: "Assessment and management of gum inflammation, bleeding gums, sensitivity, and periodontal care to ensure healthy foundations for your teeth.",
    fullDescription: "Healthy gums are essential for tooth longevity. We offer thorough periodontal examinations to diagnose early gingivitis and advanced gum issues. With gentle, targeted care, we help alleviate bleeding, tenderness, and inflammation to preserve your oral foundation.",
    keyHighlights: [
      "Periodontal screening & pocket depth evaluation",
      "Deep scaling & root surface smoothing",
      "Bleeding & swollen gums management",
      "Treatment for bad breath & gum recession",
      "Maintenance protocols for sustained gum health"
    ],
    iconName: "HeartPulse",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "aesthetic-smile",
    title: "Smile & Aesthetic Dentistry",
    category: "Aesthetic Care",
    tagline: "Refined Aesthetics & Natural Beauty",
    shortDescription: "Thoughtfully planned aesthetic treatments including gentle teeth brightening, aesthetic shaping, and smile enhancements tailored to your natural features.",
    fullDescription: "A confident smile can enhance your personal and professional presence. Dentoville approaches aesthetic dentistry with an emphasis on natural elegance rather than artificial appearance. We carefully evaluate tooth proportion, shade, and alignment to deliver harmonious, radiant results.",
    keyHighlights: [
      "Gentle professional teeth brightening & stain removal",
      "Aesthetic tooth contouring & smoothing",
      "Diastema (gap) closure & composite veneers",
      "Smile harmony evaluation",
      "Minimally invasive cosmetic enhancements"
    ],
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "general-care",
    title: "General Dental Care",
    category: "Primary Dental Care",
    tagline: "Gentle, Comprehensive Family Care",
    shortDescription: "Routine dental evaluations, gentle extractions when needed, emergency dental relief, and transparent treatment roadmaps for all age groups.",
    fullDescription: "From immediate relief of sudden toothaches to routine family dental evaluations, Dentoville provides calm and reassuring general dental care. Every step is clearly communicated, ensuring you understand why a treatment is recommended and what each stage entails.",
    keyHighlights: [
      "Painless examination & digital diagnostic review",
      "Emergency pain relief & toothache management",
      "Atraumatic, gentle tooth extractions",
      "Patient education & preventative planning",
      "Comfort-first environment for nervous patients"
    ],
    iconName: "Stethoscope",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=900&q=80"
  }
];

export const WHY_CHOOSE_US: FeatureCard[] = [
  {
    id: "clear-explanations",
    title: "Clear Explanations",
    description: "Patients are guided through their dental condition and treatment options in an easy-to-understand manner with zero medical jargon or confusion.",
    iconName: "MessageSquareText"
  },
  {
    id: "gentle-care",
    title: "Gentle, Comfortable Care",
    description: "A calm and patient-focused treatment experience designed with gentle techniques to put even the most anxious patients at ease.",
    iconName: "Heart"
  },
  {
    id: "doctor-expertise",
    title: "Professional Expertise",
    description: "Care led directly by Dr. Madhulika Sharma, combining clinical precision with a gentle, patient-first approach to oral health.",
    iconName: "Award"
  },
  {
    id: "personalized-treatment",
    title: "Personalized Treatment",
    description: "Every treatment recommendation is customized based on individual dental needs, lifestyle, and long-term oral health goals.",
    iconName: "UserCheck"
  },
  {
    id: "preventive-approach",
    title: "Preventive Approach",
    description: "We emphasize early detection, conservative care, and preserving your natural teeth rather than rushing into invasive procedures.",
    iconName: "Shield"
  },
  {
    id: "patient-trust",
    title: "Unwavering Patient Trust",
    description: "Built upon real 5.0 Google feedback, ethical practices, transparent guidance, and genuine patient satisfaction across Vasai.",
    iconName: "Star"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "Dr. Madhulika Sharma is exceptionally polite, kind, and knowledgeable. She took the time to explain the entire procedure beforehand, which made me feel completely relaxed and confident in the treatment.",
    tag: "Clear Explanations",
    isVerifiedGoogle: true
  },
  {
    id: "rev-2",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "Had a very smooth and painless dental treatment. The clinic is spotlessly clean, highly hygienic, and equipped with modern facilities. Truly an outstanding dental experience in Vasai West.",
    tag: "Painless Experience",
    isVerifiedGoogle: true
  },
  {
    id: "rev-3",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "What I appreciated most is that the doctor does not rush into unnecessary treatments. She gave me honest, clear guidance and a very comfortable treatment roadmap.",
    tag: "Ethical & Honest Care",
    isVerifiedGoogle: true
  },
  {
    id: "rev-4",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "Excellent orthodontic consultation! Dr. Madhulika is extremely gentle, attentive, and genuinely cares about long-term dental health. The clinic ambiance is very calming.",
    tag: "Orthodontic Excellence",
    isVerifiedGoogle: true
  },
  {
    id: "rev-5",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "A very calm, professional, and modern clinic. Dr. Sharma explains every step in simple terms and ensures zero discomfort throughout. Deserves every bit of its 5-star rating!",
    tag: "Professional & Kind",
    isVerifiedGoogle: true
  },
  {
    id: "rev-6",
    author: "Patient Review",
    rating: 5,
    timeframe: "Verified Google Review",
    reviewText: "Very professional approach. The doctor listened patiently to my concerns and addressed them with utmost care, hygiene, and precision. Highly recommended to anyone in Vasai.",
    tag: "Patient-Centred Care",
    isVerifiedGoogle: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Modern Clinical Operatory",
    category: "Clinic Environment",
    imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85",
    caption: "Modern, hygienic dental operatory designed for optimal patient comfort and clinical precision."
  },
  {
    id: "gal-2",
    title: "Patient Consultation Lounge",
    category: "Consultation Space",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    caption: "A calm, warm atmosphere where treatment plans and diagnostic reports are discussed openly."
  },
  {
    id: "gal-3",
    title: "Precision Dental Technology",
    category: "Equipment & Hygiene",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    caption: "Advanced dental instruments sterilized according to strict clinical hygiene protocols."
  },
  {
    id: "gal-4",
    title: "Comfort-Driven Treatment Suite",
    category: "Patient Comfort",
    imageUrl: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    caption: "Ergonomic dental chair setup ensuring a peaceful and relaxed experience during every visit."
  },
  {
    id: "gal-5",
    title: "Orthodontic & Aesthetic Planning",
    category: "Smile Design",
    imageUrl: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    caption: "Detailed smile analysis and orthodontic tracking for functional and aesthetic alignment."
  },
  {
    id: "gal-6",
    title: "Spotless Reception & Welcome Area",
    category: "Atmosphere",
    imageUrl: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    caption: "A serene, welcoming entryway welcoming patients from Vasai West and beyond."
  }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: "tip-1",
    title: "Consistent Enamel & Gum Hygiene",
    description: "Brushing twice daily with a soft-bristled brush and gentle circular motions preserves enamel thickness while massaging delicate gum tissues without abrasion.",
    actionableStep: "Use a gentle hand and replace your brush every 3 months or after illness.",
    iconName: "Sparkles"
  },
  {
    id: "tip-2",
    title: "Hydration & Saliva Balance",
    description: "Saliva is nature's natural defence against enamel demineralization. Drinking adequate water maintains healthy salivary flow, which neutralizes harmful food acids.",
    actionableStep: "Rinse with plain water after tea, coffee, or snacks to protect your tooth surfaces.",
    iconName: "Droplets"
  },
  {
    id: "tip-3",
    title: "Seasonal Routine & Sensitivity Care",
    description: "Weather and dietary shifts (such as sudden hot or cold foods during seasonal changes) can trigger minor sensitivity or gum tenderness.",
    actionableStep: "Never ignore early sensitivity or minor bleeding; prompt attention prevents deeper issues.",
    iconName: "CloudSun"
  },
  {
    id: "tip-4",
    title: "Proactive Bi-Annual Checkups",
    description: "Many dental concerns, such as interdental micro-cavities or early plaque buildup, develop silently without causing pain until advanced.",
    actionableStep: "Schedule a comprehensive evaluation every 6 months to maintain long-term oral wellness.",
    iconName: "CalendarCheck"
  }
];
