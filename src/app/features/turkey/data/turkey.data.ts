import { Destination, CountryData } from '../models/destination.model';
import { TURKEY_DESTINATION_DETAILS } from './turkey-content.data';

const ADDITIONAL_DESTINATIONS: Destination[] = TURKEY_DESTINATION_DETAILS.filter(
  (detail) => !['istanbul', 'cappadocia', 'antalya', 'pamukkale', 'ephesus'].includes(detail.id),
).map((detail) => ({
  id: detail.id,
  name: detail.name,
  tagline: detail.signatureExperiences[0] ?? detail.region,
  description: detail.summary,
  image: detail.image,
  region: detail.region,
  highlights: [...detail.signatureExperiences],
  bestTimeToVisit: detail.bestSeasons,
}));

export interface TurkeyExperience {
  id: string;
  title: string;
  description: string;
  location: string;
  image: string;
  category: 'culture' | 'food' | 'nature' | 'coast' | 'markets' | 'adventure';
  duration: string;
}

export const TURKEY_EXPERIENCES: TurkeyExperience[] = [
  {
    id: 'balloon-flight',
    title: 'Cappadocia Sunrise Balloon Flight',
    description: 'Watch fairy chimneys and valleys glow at dawn from a hot air balloon, one of Türkiye’s most iconic travel experiences.',
    location: 'Cappadocia',
    image: '/images/turkey/experiences/balloon-flight.jpg',
    category: 'adventure',
    duration: 'Half day',
  },
  {
    id: 'turkish-cuisine',
    title: 'Turkish Cuisine & Baklava Tasting',
    description: 'Discover the flavors of Türkiye through meze, regional dishes, and traditional sweets like baklava and Turkish delight.',
    location: 'Istanbul & Gaziantep traditions',
    image: '/images/turkey/experiences/turkish-cuisine.jpg',
    category: 'food',
    duration: '2-3 hours',
  },
  {
    id: 'bosphorus-cruise',
    title: 'Bosphorus Cruise',
    description: 'Sail between Europe and Asia, passing Ottoman palaces, mosques, and waterfront neighborhoods along the strait.',
    location: 'Istanbul',
    image: '/images/turkey/experiences/bosphorus-cruise.jpg',
    category: 'culture',
    duration: '2 hours',
  },
  {
    id: 'ancient-history',
    title: 'Ancient Ephesus Walk',
    description: 'Explore marble streets, grand theaters, and the Library of Celsus in one of the Mediterranean’s best-preserved ancient cities.',
    location: 'Ephesus, near Izmir',
    image: '/images/turkey/experiences/ancient-history.jpg',
    category: 'culture',
    duration: 'Half day',
  },
  {
    id: 'nature-terraces',
    title: 'Pamukkale Thermal Terraces',
    description: 'Walk beside the white travertine terraces of Pamukkale and take in the natural landscape shaped by thermal waters.',
    location: 'Pamukkale, Denizli',
    image: '/images/turkey/experiences/nature-terraces.jpg',
    category: 'nature',
    duration: 'Half day',
  },
  {
    id: 'street-food',
    title: 'Istanbul Street Food Evening',
    description: 'Taste local favorites from döner to simit while experiencing the lively evening atmosphere of Istanbul’s food streets.',
    location: 'Istanbul',
    image: '/images/turkey/experiences/street-food.jpg',
    category: 'food',
    duration: 'Evening',
  },
];

export const TURKEY_DATA: CountryData = {
  name: 'Türkiye',
  tagline: 'Where continents meet.',
  introduction:
    'Straddling Europe and Asia, Türkiye is a crossroads of civilizations, landscapes, and flavors. From the minaret-dotted skyline of Istanbul to the fairy-chimney valleys of Cappadocia and the turquoise coast of Antalya, every region tells a different story.',
  image: '/images/turkey/destinations/cappadocia.jpg',
  destinations: [
    {
      id: 'istanbul',
      name: 'Istanbul',
      tagline: 'The city on two continents.',
      description: 'Istanbul spans the Bosphorus, uniting East and West in a single vibrant metropolis. Wander the historic peninsula, explore bazaars, and watch ferries cross between continents.',
      image: '/images/turkey/destinations/istanbul.jpg',
      region: 'Marmara',
      highlights: ['Hagia Sophia', 'Blue Mosque', 'Grand Bazaar', 'Bosphorus cruise'],
      bestTimeToVisit: 'April to June, September to November',
    },
    {
      id: 'cappadocia',
      name: 'Cappadocia',
      tagline: 'Fairy chimneys and hot air balloons.',
      description: 'Cappadocia’s surreal landscape of rock formations and cave dwellings is best appreciated at dawn, when balloons rise over valleys and stone-carved history.',
  image: '/images/turkey/cappadocia.jpg',
      region: 'Central Anatolia',
      highlights: ['Göreme Open-Air Museum', 'Hot air balloon ride', 'Underground cities', 'Ihlara Valley'],
      bestTimeToVisit: 'April to June, September to October',
    },
    {
      id: 'antalya',
      name: 'Antalya',
      tagline: 'Turquoise coast and ancient ruins.',
      description: 'Antalya blends Mediterranean beaches with Roman history. Stroll through Kaleiçi’s old town, then head to the coast for turquoise water and mountain views.',
      image: '/images/turkey/destinations/antalya.jpg',
      region: 'Mediterranean',
      highlights: ['Kaleiçi old town', 'Hadrian’s Gate', 'Düden Waterfalls', 'Konyaaltı Beach'],
      bestTimeToVisit: 'May to October',
    },
    {
      id: 'pamukkale',
      name: 'Pamukkale',
      tagline: 'White terraces shaped by nature.',
      description: 'Pamukkale’s travertine terraces create a striking white landscape beside the ancient city of Hierapolis, offering a unique blend of nature and history.',
      image: '/images/turkey/destinations/pamukkale.jpg',
      region: 'Aegean',
      highlights: ['Travertine terraces', 'Hierapolis ancient city', 'Cleopatra Pool', 'Sunset views'],
      bestTimeToVisit: 'April to June, September to October',
    },
    {
      id: 'ephesus',
      name: 'Ephesus',
      tagline: 'A walk through ancient history.',
      description: 'Ephesus is one of the Mediterranean’s most remarkable ancient cities, home to the Library of Celsus, grand streets, and Roman-era architecture.',
      image: '/images/turkey/destinations/ephesus.jpg',
      region: 'Aegean',
      highlights: ['Library of Celsus', 'Great Theatre', 'Temple of Artemis site', 'Marble Road'],
      bestTimeToVisit: 'April to May, September to October',
    },
    ...ADDITIONAL_DESTINATIONS,
  ],
};