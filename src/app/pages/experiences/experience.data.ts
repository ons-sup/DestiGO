import type { Experience, ExperienceCategory } from './experience.model';

export type { Experience, ExperienceCategory };

export const ITALY_EXPERIENCES: Experience[] = [
  {
    id: 'pasta-making',
    title: 'Pasta Making in Rome',
    description: 'Learn the art of traditional Italian pasta making with a local nonna in her kitchen.',
    imageUrl: 'assets/images/food.png',
    category: 'food-wine',
    relatedDestination: 'Rome'
  },
  {
    id: 'wine-tasting-chianti',
    title: 'Chianti Wine Tasting',
    description: 'Explore the rolling hills of Chianti and taste world-renowned Tuscan wines.',
    imageUrl: 'assets/images/food.png',
    category: 'food-wine',
    relatedDestination: 'Florence'
  },
  {
    id: 'venice-art-tour',
    title: 'Venice Art & Architecture Tour',
    description: 'Discover Renaissance masterpieces and hidden artistic gems in the floating city.',
    imageUrl: 'assets/images/venice.jpg',
    category: 'art-culture',
    relatedDestination: 'Venice'
  },
  {
    id: 'florence-uffizi',
    title: 'Uffizi Gallery Private Tour',
    description: 'Skip the lines and explore Botticelli, Michelangelo, and Da Vinci with an expert guide.',
    imageUrl: 'assets/images/florence.jpg',
    category: 'art-culture',
    relatedDestination: 'Florence'
  },
  {
    id: 'amalfi-boat-tour',
    title: 'Amalfi Coast Boat Tour',
    description: 'Sail along the dramatic coastline, visit hidden coves, and swim in crystal waters.',
    imageUrl: 'assets/images/amalfi.jpg',
    category: 'coast-beaches',
    relatedDestination: 'Amalfi Coast'
  },
  {
    id: 'cinque-terre-hiking',
    title: 'Cinque Terre Coastal Hiking',
    description: 'Hike the famous Sentiero Azzurro trail connecting five colorful fishing villages.',
    imageUrl: 'assets/images/cinque-terre.jpg',
    category: 'coast-beaches',
    relatedDestination: 'Cinque Terre'
  },
  {
    id: 'dolomites-hiking',
    title: 'Dolomites Mountain Adventure',
    description: 'Explore the stunning peaks of the Dolomites with guided hikes and via ferrata routes.',
    imageUrl: 'assets/images/italy-destinations.jpg',
    category: 'mountains-lakes',
    relatedDestination: 'Milan'
  },
  {
    id: 'lake-como-relax',
    title: 'Lake Como Luxury Retreat',
    description: 'Relax in elegant villas, enjoy boat rides, and savor local cuisine by the lake.',
    imageUrl: 'assets/images/italy-destinations.jpg',
    category: 'mountains-lakes',
    relatedDestination: 'Milan'
  }
];

export const EXPERIENCE_CATEGORIES: { value: ExperienceCategory; label: string }[] = [
  { value: 'all', label: 'All Experiences' },
  { value: 'food-wine', label: 'Food & Wine' },
  { value: 'art-culture', label: 'Art & Culture' },
  { value: 'coast-beaches', label: 'Coast & Beaches' },
  { value: 'mountains-lakes', label: 'Mountains & Lakes' }
];