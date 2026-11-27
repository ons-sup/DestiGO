import { CountryData } from '../models/destination.model';

export const SPAIN_DATA: CountryData = {
  name: 'Spain',
  tagline: 'Sun, art, and fiesta.',
  introduction:
    'Spain is a country of vibrant cities, sun-drenched coasts, and rich ' +
    'heritage. From the royal grandeur of Madrid to the modernist wonders of ' +
    'Barcelona and the Moorish palaces of Granada, every region offers a ' +
    'distinct rhythm and flavor.',
  image: '/images/spain/spain.webp',
  destinations: [
    {
      id: 'madrid',
      name: 'Madrid',
      tagline: 'Royal capital and golden triangle of art.',
      description:
        'Madrid is Spain\u2019s lively capital, where grand boulevards meet ' +
        'world-class museums. Stroll through Retiro Park, admire masterpieces ' +
        'at the Prado, and enjoy tapas late into the night.',
      image: '/images/spain/destinations/madrid.webp',
      region: 'Community of Madrid',
      landmarks: ['Royal Palace', 'Prado Museum', 'Retiro Park', 'Plaza Mayor', 'Puerta del Sol'],
      dishes: ['tortilla espa\u00f1ola', 'jam\u00f3n ib\u00e9rico', 'patatas bravas', 'churros con chocolate'],
      neighborhoods: ['Centro', 'Salamanca', 'Malasa\u00f1a', 'Chueca'],
      bestTimeToVisit: 'March to May, September to November',
      duration: '3-4 days',
      tips: ['Many museums close on Mondays.', 'Dinner starts late, around 21:00.'],
    },
    {
      id: 'barcelona',
      name: 'Barcelona',
      tagline: 'Modernist architecture by the sea.',
      description:
        'Barcelona blends Gaud\u00ed\u2019s fantastical architecture with ' +
        'Mediterranean beaches. Explore the Sagrada Familia, wander the ' +
        'Gothic Quarter, and relax along La Rambla.',
      image: '/images/spain/destinations/barcelona.webp',
      region: 'Catalonia',
      landmarks: ['Sagrada Familia', 'Park G\u00fcell', 'Casa Batll\u00f3', 'La Rambla', 'Gothic Quarter'],
      dishes: ['paella', 'tapas', 'crema catalana', 'pan con tomate'],
      neighborhoods: ['Eixample', 'G\u00f2tic', 'Gr\u00e0cia', 'Barceloneta'],
      bestTimeToVisit: 'May to June, September to October',
      duration: '4-5 days',
      tips: ['Book Sagrada Familia tickets in advance.', 'Watch for pickpockets in crowded areas.'],
    },
    {
      id: 'seville',
      name: 'Seville',
      tagline: 'Flamenco, orange trees, and Moorish palaces.',
      description:
        'Seville is the heart of Andalusia, with the Alc\u00e1zar, a towering ' +
        'cathedral, and the sweeping Plaza de Espa\u00f1a. Flamenco fills the ' +
        'narrow streets of Triana.',
      image: '/images/spain/destinations/seville.webp',
      region: 'Andalusia',
      landmarks: ['Alc\u00e1zar', 'Seville Cathedral', 'Plaza de Espa\u00f1a', 'Triana'],
      dishes: ['gazpacho', 'salmorejo', 'espinacas con garbanzos', 'churros'],
      neighborhoods: ['Santa Cruz', 'Triana', 'Macarena', 'Los Remedios'],
      bestTimeToVisit: 'March to May, October to November',
      duration: '2-3 days',
      tips: ['Avoid midsummer heat.', 'Flamenco shows book up quickly.'],
    },
    {
      id: 'valencia',
      name: 'Valencia',
      tagline: 'City of Arts and Sciences and paella.',
      description:
        'Valencia mixes futuristic architecture with historic markets. Visit ' +
        'the City of Arts and Sciences, taste authentic paella, and stroll ' +
        'the Turia Gardens.',
      image: '/images/spain/destinations/valencia.webp',
      region: 'Valencian Community',
      landmarks: ['City of Arts and Sciences', 'Central Market', 'La Lonja', 'Turia Gardens'],
      dishes: ['paella valenciana', 'horchata', 'fideu\u00e0', 'bu\u00f1uelos'],
      neighborhoods: ['Ciutat Vella', 'Ruzafa', 'El Carmen', 'Malvarrosa'],
      bestTimeToVisit: 'March to June, September to October',
      duration: '2-3 days',
      tips: ['Las Fallas festival is in March.', 'Rent a bike for the Turia Gardens.'],
    },
    {
      id: 'granada',
      name: 'Granada',
      tagline: 'The Alhambra and the Albaic\u00edn.',
      description:
        'Granada sits at the foot of the Sierra Nevada, crowned by the ' +
        'Alhambra palace. Wander the Albaic\u00edn quarter and enjoy free ' +
        'tapas with drinks.',
      image: '/images/spain/destinations/granada.webp',
      region: 'Andalusia',
      landmarks: ['Alhambra', 'Albaic\u00edn', 'Generalife', 'Sacromonte'],
      dishes: ['pisto', 'tortilla del Sacromonte', 'remoj\u00f3n', 'tapas'],
      neighborhoods: ['Albaic\u00edn', 'Realejo', 'Centro', 'Sacromonte'],
      bestTimeToVisit: 'April to June, September to October',
      duration: '2-3 days',
      tips: ['Alhambra tickets sell out weeks ahead.', 'Sunset views from Mirador de San Nicol\u00e1s.'],
    },
    {
      id: 'mallorca',
      name: 'Mallorca',
      tagline: 'Island coves and mountain roads.',
      description:
        'Mallorca offers turquoise coves, the Serra de Tramuntana, and the ' +
        'Gothic Palma Cathedral. Drive winding roads and relax on quiet beaches.',
      image: '/images/spain/destinations/mallorca.webp',
      region: 'Balearic Islands',
      landmarks: ['Palma Cathedral', 'Serra de Tramuntana', 'Cala Mondrag\u00f3', 'S\u00f3ller'],
      dishes: ['ensaimada', 'sobrassada', 'tumbet', 'pa amb oli'],
      neighborhoods: ['Palma Old Town', 'S\u00f3ller', 'Dei\u00e0', 'Port de Pollen\u00e7a'],
      bestTimeToVisit: 'May to September',
      duration: '4-6 days',
      tips: ['Rent a car for the Tramuntana.', 'Book popular coves early in summer.'],
    },
  ],
};

export function getAllDestinationIds(): string[] {
  return SPAIN_DATA.destinations.map((d) => d.id);
}
