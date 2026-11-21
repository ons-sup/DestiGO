import { WheelCountry } from './destination-wheel.model';

export const HOME_DESTINATION: WheelCountry = {
  id: 'home',
  name: 'Home',
  tagline: 'Your starting point for all journeys.',
  route: '/',
  available: true,
  color: '#d4a96a',
};

export const DESTINATION_WHEEL_COUNTRIES: readonly WheelCountry[] = [
  {
    id: 'turkey',
    name: 'Türkiye',
    tagline: 'Where continents meet.',
    route: '/turkey',
    available: true,
    color: '#c0392b',
  },
  {
    id: 'italy',
    name: 'Italy',
    tagline: 'La dolce vita, from the Alps to the sea.',
    route: '/italy',
    available: true,
    color: '#1a7a4c',
  },
  {
    id: 'spain',
    name: 'Spain',
    tagline: 'Sun, rhythm, and timeless cities.',
    route: '/spain',
    available: false,
    color: '#c2710c',
  },
];
