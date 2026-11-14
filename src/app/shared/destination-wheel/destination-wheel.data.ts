import { WheelCountry } from './destination-wheel.model';

export const DESTINATION_WHEEL_COUNTRIES: readonly WheelCountry[] = [
  {
    id: 'turkey',
    name: 'Türkiye',
    tagline: 'Where continents meet.',
    route: '/turkey',
    available: true,
    color: '#7a1fa2',
  },
  {
    id: 'italy',
    name: 'Italy',
    tagline: 'La dolce vita, from the Alps to the sea.',
    route: '/italy',
    available: false,
    color: '#c2185b',
  },
  {
    id: 'spain',
    name: 'Spain',
    tagline: 'Sun, rhythm, and timeless cities.',
    route: '/spain',
    available: false,
    color: '#c2410c',
  },
];
