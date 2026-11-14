export interface Experience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: ExperienceCategory;
  relatedDestination: string;
}

export type ExperienceCategory = 'food-wine' | 'art-culture' | 'coast-beaches' | 'mountains-lakes' | 'all';