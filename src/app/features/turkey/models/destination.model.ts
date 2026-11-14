export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  region: string;
  highlights: string[];
  bestTimeToVisit: string;
}

export interface CountryData {
  name: string;
  tagline: string;
  introduction: string;
  image: string;
  destinations: Destination[];
}
