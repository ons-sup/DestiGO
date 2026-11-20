export interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  region: string;
  landmarks: string[];
  dishes: string[];
  neighborhoods: string[];
  bestTimeToVisit: string;
  duration: string;
  tips: string[];
}

export interface CountryData {
  name: string;
  tagline: string;
  introduction: string;
  image: string;
  destinations: Destination[];
}
