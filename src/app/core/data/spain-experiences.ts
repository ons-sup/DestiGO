import type { Experience, ExperienceCategory } from '../../pages/experiences/experience.model';

export type { Experience, ExperienceCategory };

export const SPAIN_EXPERIENCES: Experience[] = [
  {
    id: 'tapas-tour-madrid',
    title: 'Tapas Tour in Madrid',
    description: 'Hop between traditional taverns and taste jamón, patatas bravas and vermouth with a local guide.',
    imageUrl: '/images/spain/food/Tapas.jpg',
    category: 'food-wine',
    relatedDestination: 'Madrid'
  },
  {
    id: 'paella-valencia',
    title: 'Paella Cooking in Valencia',
    description: 'Learn to cook authentic paella valenciana with a local chef by the Turia Gardens.',
    imageUrl: '/images/spain/food/Patatas Bravas.jpg',
    category: 'food-wine',
    relatedDestination: 'Valencia'
  },
  {
    id: 'sagrada-familia-tour',
    title: 'Sagrada Família Guided Tour',
    description: 'Skip the lines and explore Gaudí\u2019s masterpiece with an expert architect guide.',
    imageUrl: '/images/spain/attractions/Sagrada Família.jpg',
    category: 'art-culture',
    relatedDestination: 'Barcelona'
  },
  {
    id: 'prado-museum',
    title: 'Prado Museum Private Tour',
    description: 'Discover Velázquez, Goya and El Greco with an art historian.',
    imageUrl: '/images/spain/museums/Prado Museum – Madrid.jpg',
    category: 'art-culture',
    relatedDestination: 'Madrid'
  },
  {
    id: 'costa-brava-beaches',
    title: 'Costa Brava Beach Day',
    description: 'Sail to hidden coves and swim in crystal-clear Mediterranean waters.',
    imageUrl: '/images/spain/beaches/Costa Brava.jpg',
    category: 'coast-beaches',
    relatedDestination: 'Barcelona'
  },
  {
    id: 'mallorca-coves',
    title: 'Mallorca Coves & Snorkeling',
    description: 'Explore turquoise coves and snorkel in the Balearic Sea.',
    imageUrl: '/images/spain/beaches/Mallorca (1).jpg',
    category: 'coast-beaches',
    relatedDestination: 'Mallorca'
  },
  {
    id: 'alhambra-tour',
    title: 'Alhambra Guided Visit',
    description: 'Walk through the Nasrid palaces and Generalife gardens with a historian.',
    imageUrl: '/images/spain/attractions/Alhambra.jpg',
    category: 'art-culture',
    relatedDestination: 'Granada'
  },
  {
    id: 'tramuntana-hiking',
    title: 'Serra de Tramuntana Hiking',
    description: 'Hike the UNESCO mountain range with panoramic sea views.',
    imageUrl: '/images/spain/beaches/San Sebastián.jpg',
    category: 'mountains-lakes',
    relatedDestination: 'Mallorca'
  }
];
