import { CountryData } from '../models/destination.model';

export const TURKEY_DATA: CountryData = {
  name: 'Türkiye',
  tagline: 'Where continents meet.',
  introduction:
    'Straddling Europe and Asia, Türkiye is a crossroads of civilizations, ' +
    'landscapes, and flavors. From the minaret-dotted skyline of Istanbul to ' +
    'the fairy-chimney valleys of Cappadocia and the turquoise coast of Antalya, ' +
    'every region tells a different story.',
      image: '/images/turkey/turkey-hero.jpg',
  destinations: [
    {
      id: 'istanbul',
      name: 'Istanbul',
      tagline: 'The city on two continents.',
      description:
        'Istanbul spans the Bosphorus, uniting East and West in a single ' +
        'vibrant metropolis. Wander the historic peninsula, explore the ' +
        'Grand Bazaar, and watch the sunset over the Golden Horn.',
      image: '/images/turkey/istanbul.jpg',
      region: 'Marmara',
      highlights: [
        'Hagia Sophia',
        'Blue Mosque',
        'Grand Bazaar',
        'Bosphorus cruise',
      ],
      bestTimeToVisit: 'April to June, September to November',
    },
    {
      id: 'cappadocia',
      name: 'Cappadocia',
      tagline: 'Fairy chimneys and hot air balloons.',
      description:
        'Cappadocia\u2019s surreal landscape of cone-shaped rock formations ' +
        'and cave dwellings is best appreciated at dawn, from the basket of ' +
        'a hot air balloon drifting over the valley.',
      image: '/images/turkey/cappadocia.jpg',
      region: 'Central Anatolia',
      highlights: [
        'Göreme Open-Air Museum',
        'Hot air balloon ride',
        'Underground cities',
        'Ihlara Valley',
      ],
      bestTimeToVisit: 'April to June, September to October',
    },
    {
      id: 'antalya',
      name: 'Antalya',
      tagline: 'Turquoise coast and ancient ruins.',
      description:
        'Antalya blends Mediterranean beaches with Roman history. Stroll ' +
        'through the narrow streets of Kaleiçi, then head to the coast for ' +
        'turquoise water and Taurus Mountain views.',
      image: '/images/turkey/antalya.jpg',
      region: 'Mediterranean',
      highlights: [
        'Kaleiçi old town',
        'Hadrian\u2019s Gate',
        'Düden Waterfalls',
        'Konyaaltı Beach',
      ],
      bestTimeToVisit: 'May to October',
    },
  ],
};
