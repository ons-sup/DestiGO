import type { ExperienceCategory } from '../../../pages/experiences/experience.model';

export type { ExperienceCategory };

export interface ExperienceHighlight {
  name: string;
  image: string;
  region: string;
  description: string;
}

export interface WineItem {
  name: string;
  region: string;
  description: string;
}

export interface WineSection {
  title: string;
  wines: WineItem[];
}

export interface WhereToTryItem {
  destinationId: string;
  destinationName: string;
  note: string;
}

export interface ExperienceDetail {
  id: string;
  category: ExperienceCategory;
  title: string;
  heroImage: string;
  description: string;
  highlights: ExperienceHighlight[];
  wineSection?: WineSection;
  whereToTry: WhereToTryItem[];
}

export const SPAIN_EXPERIENCE_DETAILS: ExperienceDetail[] = [
  {
    id: 'food-wine',
    category: 'food-wine',
    title: 'Food & Wine',
    heroImage: '/images/spain/food/Tapas.jpg',
    description: 'Spain\u2019s culinary heritage is a mosaic of regional traditions, from tapas and paella to jamón ibérico and churros. Every dish tells a story of place.',
    highlights: [
      { name: 'Paella Valenciana', image: '/images/spain/food/Patatas Bravas.jpg', region: 'Valencia', description: 'Saffron rice with chicken, rabbit and vegetables, the original paella.' },
      { name: 'Tapas', image: '/images/spain/food/Tapas.jpg', region: 'Nationwide', description: 'Small shared plates of olives, croquettes, jamón and more.' },
      { name: 'Tortilla Española', image: '/images/spain/food/Tortilla Española.jpg', region: 'Nationwide', description: 'Classic potato and onion omelette served in every bar.' },
      { name: 'Churros con Chocolate', image: '/images/spain/food/Churros.jpg', region: 'Madrid', description: 'Fried dough sticks dipped in thick hot chocolate.' }
    ],
    wineSection: {
      title: 'Iconic Spanish Wines',
      wines: [
        { name: 'Rioja', region: 'La Rioja', description: 'Tempranillo-based red, oak-aged, berry and vanilla notes.' },
        { name: 'Cava', region: 'Catalonia', description: 'Spanish sparkling wine, crisp and refreshing.' },
        { name: 'Sherry', region: 'Jerez', description: 'Fortified wine ranging from dry fino to sweet Pedro Ximénez.' }
      ]
    },
    whereToTry: [
      { destinationId: 'madrid', destinationName: 'Madrid', note: 'Tapas, churros, cocido madrileño' },
      { destinationId: 'barcelona', destinationName: 'Barcelona', note: 'Tapas, crema catalana, cava' },
      { destinationId: 'valencia', destinationName: 'Valencia', note: 'Paella valenciana, horchata, fideuà' },
      { destinationId: 'seville', destinationName: 'Seville', note: 'Gazpacho, salmorejo, churros' }
    ]
  },
  {
    id: 'art-culture',
    category: 'art-culture',
    title: 'Art & Culture',
    heroImage: '/images/spain/museums/Prado Museum – Madrid.jpg',
    description: 'Spain holds world-class museums and architectural wonders, from Gaudí\u2019s modernism to the Alhambra\u2019s Moorish palaces.',
    highlights: [
      { name: 'Prado Museum', image: '/images/spain/museums/Prado Museum – Madrid.jpg', region: 'Madrid', description: 'Velázquez, Goya, El Greco masterpieces.' },
      { name: 'Sagrada Família', image: '/images/spain/attractions/Sagrada Família.jpg', region: 'Barcelona', description: 'Gaudí\u2019s unfinished modernist basilica.' },
      { name: 'Alhambra', image: '/images/spain/attractions/Alhambra.jpg', region: 'Granada', description: 'Moorish palace and fortress complex.' },
      { name: 'Park Güell', image: '/images/spain/attractions/Park Güell.jpg', region: 'Barcelona', description: 'Colorful mosaic park by Gaudí.' }
    ],
    whereToTry: [
      { destinationId: 'madrid', destinationName: 'Madrid', note: 'Prado, Reina Sofía, Royal Palace' },
      { destinationId: 'barcelona', destinationName: 'Barcelona', note: 'Sagrada Familia, Park Güell, Picasso Museum' },
      { destinationId: 'granada', destinationName: 'Granada', note: 'Alhambra, Albaicín, Sacromonte' }
    ]
  },
  {
    id: 'coast-beaches',
    category: 'coast-beaches',
    title: 'Coast & Beaches',
    heroImage: '/images/spain/beaches/Costa Brava.jpg',
    description: 'Spain\u2019s coastlines offer dramatic cliffs, turquoise coves and vibrant beach towns from the Mediterranean to the Atlantic.',
    highlights: [
      { name: 'Costa Brava', image: '/images/spain/beaches/Costa Brava.jpg', region: 'Catalonia', description: 'Rocky coves and crystal waters.' },
      { name: 'Mallorca', image: '/images/spain/beaches/Mallorca (1).jpg', region: 'Balearic Islands', description: 'Turquoise coves and sandy beaches.' },
      { name: 'San Sebastián', image: '/images/spain/beaches/San Sebastián.jpg', region: 'Basque Country', description: 'Urban beach with great surfing.' },
      { name: 'Tenerife', image: '/images/spain/beaches/Tenerife.jpg', region: 'Canary Islands', description: 'Volcanic beaches and warm climate.' }
    ],
    whereToTry: [
      { destinationId: 'barcelona', destinationName: 'Barcelona', note: 'Barceloneta, Costa Brava day trips' },
      { destinationId: 'mallorca', destinationName: 'Mallorca', note: 'Cala Mondragó, Sóller, Port de Pollença' }
    ]
  },
  {
    id: 'mountains-lakes',
    category: 'mountains-lakes',
    title: 'Mountains & Nature',
    heroImage: '/images/spain/cities/Granada0.jpg',
    description: 'Spain\u2019s mountains and natural parks offer hiking, skiing and breathtaking landscapes from the Pyrenees to the Sierra Nevada.',
    highlights: [
      { name: 'Sierra Nevada', image: '/images/spain/cities/Granada1.jpg', region: 'Andalusia', description: 'Spain\u2019s highest peaks, skiing and hiking.' },
      { name: 'Serra de Tramuntana', image: '/images/spain/beaches/Mallorca (1).jpg', region: 'Mallorca', description: 'UNESCO mountain range with scenic drives.' },
      { name: 'Picos de Europa', image: '/images/spain/cities/seville4.jpg', region: 'Asturias/Cantabria', description: 'Dramatic limestone peaks and green valleys.' }
    ],
    whereToTry: [
      { destinationId: 'granada', destinationName: 'Granada', note: 'Sierra Nevada, Alpujarras' },
      { destinationId: 'mallorca', destinationName: 'Mallorca', note: 'Serra de Tramuntana hiking' }
    ]
  }
];

export function getExperienceDetail(id: string): ExperienceDetail | undefined {
  return SPAIN_EXPERIENCE_DETAILS.find(e => e.id === id);
}

export function getAllExperienceIds(): string[] {
  return SPAIN_EXPERIENCE_DETAILS.map(e => e.id);
}
