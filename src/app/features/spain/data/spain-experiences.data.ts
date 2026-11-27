export type SpainExperienceCategory =
  'food-wine' | 'art-culture' | 'coast-beaches' | 'mountains-lakes';

export interface SpainExperience {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: SpainExperienceCategory;
  relatedDestination: string;
}

export const SPAIN_EXPERIENCES: SpainExperience[] = [
  {
    id: 'tapas-tour-madrid',
    title: 'Tapas Tour in Madrid',
    description:
      'Hop between traditional taverns and taste jamón, patatas bravas and vermouth with a local guide.',
    imageUrl: '/images/spain/experiences/tapas-tour-madrid.webp',
    category: 'food-wine',
    relatedDestination: 'Madrid',
  },
  {
    id: 'paella-valencia',
    title: 'Paella Cooking in Valencia',
    description:
      'Learn to cook authentic paella valenciana with a local chef by the Turia Gardens.',
    imageUrl: '/images/spain/experiences/paella-valencia.webp',
    category: 'food-wine',
    relatedDestination: 'Valencia',
  },
  {
    id: 'sagrada-familia-tour',
    title: 'Sagrada Família Guided Tour',
    description: 'Skip the lines and explore Gaudí’s masterpiece with an expert architect guide.',
    imageUrl: '/images/spain/experiences/sagrada-familia-tour.webp',
    category: 'art-culture',
    relatedDestination: 'Barcelona',
  },
  {
    id: 'prado-museum',
    title: 'Prado Museum Private Tour',
    description: 'Discover Velázquez, Goya and El Greco with an art historian.',
    imageUrl: '/images/spain/experiences/prado-museum-tour.webp',
    category: 'art-culture',
    relatedDestination: 'Madrid',
  },
  {
    id: 'costa-brava-beaches',
    title: 'Costa Brava Beach Day',
    description: 'Sail to hidden coves and swim in crystal-clear Mediterranean waters.',
    imageUrl: '/images/spain/beaches/costa-brava.webp',
    category: 'coast-beaches',
    relatedDestination: 'Barcelona',
  },
  {
    id: 'mallorca-coves',
    title: 'Mallorca Coves & Snorkeling',
    description: 'Explore turquoise coves and snorkel in the Balearic Sea.',
    imageUrl: '/images/spain/experiences/mallorca-coves.webp',
    category: 'coast-beaches',
    relatedDestination: 'Mallorca',
  },
  {
    id: 'alhambra-tour',
    title: 'Alhambra Guided Visit',
    description: 'Walk through the Nasrid palaces and Generalife gardens with a historian.',
    imageUrl: '/images/spain/experiences/alhambra-tour.webp',
    category: 'art-culture',
    relatedDestination: 'Granada',
  },
  {
    id: 'tramuntana-hiking',
    title: 'Serra de Tramuntana Hiking',
    description: 'Hike the UNESCO mountain range with panoramic sea views.',
    imageUrl: '/images/spain/experiences/tramuntana-hiking.webp',
    category: 'mountains-lakes',
    relatedDestination: 'Mallorca',
  },
];

export const SPAIN_EXPERIENCE_CATEGORIES: {
  value: SpainExperienceCategory | 'all';
  label: string;
}[] = [
  { value: 'all', label: 'All' },
  { value: 'food-wine', label: 'Food & Wine' },
  { value: 'art-culture', label: 'Art & Culture' },
  { value: 'coast-beaches', label: 'Coast & Beaches' },
  { value: 'mountains-lakes', label: 'Mountains & Nature' },
];

export function getSpainExperience(id: string): SpainExperience | undefined {
  return SPAIN_EXPERIENCES.find((e) => e.id === id);
}

export function getSpainExperienceCategoryLabel(category: string): string {
  return SPAIN_EXPERIENCE_CATEGORIES.find((c) => c.value === category)?.label ?? category;
}
