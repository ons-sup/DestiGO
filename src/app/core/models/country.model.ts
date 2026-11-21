export type CountryCode = 'italy' | 'turkey' | 'spain';

export interface Country {
  code: CountryCode;
  name: string;
  flag: string;
  heroVideo?: string;
  heroImage?: string;
  destinations: any[];
}

export const COUNTRIES: Record<CountryCode, Country> = {
  italy: {
    code: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    heroVideo: '/assets/videos/italy-hero.mp4',
    heroImage: '/assets/images/italy-destinations.jpg',
    destinations: []
  },
  turkey: {
    code: 'turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    destinations: []
  },
  spain: {
    code: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    heroImage: '/images/spain/hero.jpg',
    destinations: []
  }
};