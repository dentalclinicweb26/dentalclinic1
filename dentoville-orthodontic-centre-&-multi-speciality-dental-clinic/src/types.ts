export interface TreatmentItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  keyHighlights: string[];
  iconName: string;
  image: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeframe: string;
  reviewText: string;
  tag: string;
  isVerifiedGoogle: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
}

export interface HealthTip {
  id: string;
  title: string;
  description: string;
  actionableStep: string;
  iconName: string;
}
