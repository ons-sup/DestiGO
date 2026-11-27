export interface FamousPlace {
  name: string;
  image: string;
  description: string;
}

export interface FoodItem {
  name: string;
  image: string;
  description: string;
}

export interface Neighborhood {
  name: string;
  description: string;
}

export interface GoodToKnow {
  bestTimeToVisit: string;
  recommendedStay: string;
  tips: string[];
}

export interface DestinationDetail {
  id: string;
  name: string;
  tagline: string;
  heroImage: string;
  about: string[];
  famousPlaces: FamousPlace[];
  food: FoodItem[];
  neighborhoods: Neighborhood[];
  goodToKnow: GoodToKnow;
}

export const DESTINATION_DETAILS: DestinationDetail[] = [
  {
    id: 'madrid',
    name: 'Madrid',
    tagline: 'Royal capital and golden triangle of art',
    heroImage: '/images/spain/destinations/madrid.webp',
    about: [
      'Madrid is Spain\u2019s lively capital, where grand boulevards meet world-class museums and late-night tapas culture. Wander the historic center, admire masterpieces at the Prado, and feel the energy of a city that never sleeps.',
      'Beyond the monuments, Madrid lives in its neighborhoods: Malasa\u00f1a\u2019s vintage boutiques, Chueca\u2019s vibrant streets, Salamanca\u2019s elegant avenues. Every plaza has its rhythm, every bar serves vermouth, and every meal is a celebration of Spanish cuisine.',
      'The city rewards slow exploration. Pause for espresso at a marble bar, watch the sunset from the Temple of Debod, lose yourself in the Retiro Park. Madrid doesn\u2019t just show you history; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'Royal Palace', image: '/images/spain/attractions/royal-palace.webp', description: 'The official residence of the Spanish Royal Family, with over 3,000 rooms and stunning gardens.' },
      { name: 'Prado Museum', image: '/images/spain/attractions/prado-museum.webp', description: 'One of the world\u2019s finest art museums, home to Vel\u00e1zquez, Goya and El Greco.' },
      { name: 'Retiro Park', image: '/images/spain/attractions/retiro-park.webp', description: 'A vast green oasis in the heart of the city, perfect for boating, strolling and sunset views.' },
      { name: 'Plaza Mayor', image: '/images/spain/attractions/plaza-mayor.webp', description: 'Grand central square surrounded by arcaded buildings, caf\u00e9s and history.' },
      { name: 'Puerta del Sol', image: '/images/spain/attractions/puerta-del-sol.webp', description: 'The bustling heart of Madrid and the symbolic center of Spain.' },
    ],
    food: [
      { name: 'Tortilla Espa\u00f1ola', image: '/images/spain/food/tortilla-espanola.webp', description: 'Classic Spanish omelette with potatoes and onions, served at every bar.' },
      { name: 'Patatas Bravas', image: '/images/spain/food/patatas-bravas.webp', description: 'Crispy fried potatoes with spicy brava sauce and garlic aioli.' },
      { name: 'Churros con Chocolate', image: '/images/spain/food/churros.webp', description: 'Fried dough sticks dipped in thick hot chocolate, a Madrid breakfast tradition.' },
    ],
    neighborhoods: [
      { name: 'Malasa\u00f1a', description: 'Trendy, bohemian quarter with vintage shops, street art and lively nightlife.' },
      { name: 'Chueca', description: 'Vibrant LGBTQ+ friendly district with caf\u00e9s, boutiques and great tapas.' },
      { name: 'Salamanca', description: 'Elegant neighborhood known for luxury shopping and refined dining.' },
      { name: 'Centro', description: 'Historic heart around Puerta del Sol and Plaza Mayor.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'March to May and September to November for pleasant weather.',
      recommendedStay: '3-4 days to see the major sites; a week allows deeper exploration.',
      tips: ['Many museums close on Mondays.', 'Dinner starts late, around 21:00.', 'Use the metro; it is fast and affordable.', 'Tap water is safe to drink.'],
    },
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    tagline: 'Modernist architecture by the sea',
    heroImage: '/images/spain/destinations/barcelona.webp',
    about: [
      'Barcelona blends Gaud\u00ed\u2019s fantastical architecture with Mediterranean beaches and a vibrant street life. Explore the Sagrada Familia, wander the Gothic Quarter, and relax along La Rambla.',
      'Beyond the monuments, Barcelona lives in its neighborhoods: Eixample\u2019s modernist grid, Gr\u00e0cia\u2019s village feel, Barceloneta\u2019s beachfront. Every corner reveals design, from Gaud\u00ed to Mir\u00f3, and every meal celebrates Catalan cuisine.',
      'The city rewards slow exploration. Pause for vermouth at a terrace, watch the sunset from Park G\u00fcell, lose yourself in the Gothic Quarter. Barcelona doesn\u2019t just show you art; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'Sagrada Familia', image: '/images/spain/attractions/sagrada-familia.webp', description: 'Gaud\u00ed\u2019s unfinished basilica, a masterpiece of modernist architecture.' },
      { name: 'Park G\u00fcell', image: '/images/spain/attractions/park-guell.webp', description: 'Colorful park with mosaic terraces and Gaud\u00ed\u2019s iconic designs.' },
      { name: 'Casa Batll\u00f3', image: '/images/spain/attractions/casa-batllo.webp', description: 'Gaud\u00ed\u2019s modernist masterpiece on Passeig de Gr\u00e0cia.' },
      { name: 'La Rambla', image: '/images/spain/attractions/la-rambla.webp', description: 'The famous tree-lined boulevard leading to the sea.' },
      { name: 'Gothic Quarter', image: '/images/spain/attractions/gothic-quarter.webp', description: 'Medieval streets and hidden squares in the old city.' },
    ],
    food: [
      { name: 'Paella', image: '/images/spain/food/paella.webp', description: 'Saffron rice with seafood or chicken, a Spanish classic.' },
      { name: 'Tapas', image: '/images/spain/food/tapas.webp', description: 'Small shared plates of olives, croquettes, and more.' },
      { name: 'Crema Catalana', image: '/images/spain/food/crema-catalana.webp', description: 'Catalan cr\u00e8me br\u00fbl\u00e9e with a caramelized sugar top.' },
    ],
    neighborhoods: [
      { name: 'Eixample', description: 'Modernist grid with Gaud\u00ed buildings and upscale shopping.' },
      { name: 'G\u00f2tic', description: 'Medieval old town with narrow streets and plazas.' },
      { name: 'Gr\u00e0cia', description: 'Bohemian village feel with local caf\u00e9s and squares.' },
      { name: 'Barceloneta', description: 'Beachfront neighborhood with seafood restaurants.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'May to June and September to October.',
      recommendedStay: '4-5 days for major sites and beaches.',
      tips: ['Book Sagrada Familia tickets in advance.', 'Watch for pickpockets in crowded areas.', 'Use the metro; it is efficient.', 'Beach areas get crowded in summer.'],
    },
  },
  {
    id: 'seville',
    name: 'Seville',
    tagline: 'Flamenco, orange trees, and Moorish palaces',
    heroImage: '/images/spain/destinations/seville.webp',
    about: [
      'Seville is the heart of Andalusia, with the Alc\u00e1zar, a towering cathedral, and the sweeping Plaza de Espa\u00f1a. Flamenco fills the narrow streets of Triana.',
      'Beyond the monuments, Seville lives in its neighborhoods: Santa Cruz\u2019s winding alleys, Triana\u2019s flamenco soul, Macarena\u2019s local life. Every corner reveals history, from the Moors to the Golden Age.',
      'The city rewards slow exploration. Pause for tapas in a shaded plaza, watch a flamenco show, lose yourself in the Alc\u00e1zar gardens. Seville doesn\u2019t just show you history; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'Alc\u00e1zar', image: '/images/spain/attractions/alcazar.webp', description: 'Royal palace with stunning Moorish architecture and gardens.' },
      { name: 'Seville Cathedral', image: '/images/spain/attractions/seville-cathedral.webp', description: 'The largest Gothic cathedral in the world, home to Columbus\u2019 tomb.' },
      { name: 'Plaza de Espa\u00f1a', image: '/images/spain/attractions/plaza-de-espana.webp', description: 'Grand semicircular plaza with tiled alcoves and a canal.' },
      { name: 'Triana', image: '/images/spain/attractions/triana.webp', description: 'Historic neighborhood across the river, birthplace of flamenco.' },
    ],
    food: [
      { name: 'Gazpacho', image: '/images/spain/food/gazpacho.webp', description: 'Cold tomato soup, refreshing in summer heat.' },
      { name: 'Salmorejo', image: '/images/spain/food/salmorejo.webp', description: 'Thick cold tomato soup topped with jam\u00f3n and egg.' },
      { name: 'Churros', image: '/images/spain/food/churros.webp', description: 'Fried dough, often dipped in chocolate.' },
    ],
    neighborhoods: [
      { name: 'Santa Cruz', description: 'Winding alleys and hidden plazas in the old Jewish quarter.' },
      { name: 'Triana', description: 'Flamenco soul and ceramic workshops across the river.' },
      { name: 'Macarena', description: 'Local life and the famous Basilica.' },
      { name: 'Los Remedios', description: 'Residential area with the April Fair grounds.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'March to May and October to November.',
      recommendedStay: '2-3 days for major sites.',
      tips: ['Avoid midsummer heat.', 'Flamenco shows book up quickly.', 'Walk or use tram in the center.', 'Tap water is safe.'],
    },
  },
  {
    id: 'valencia',
    name: 'Valencia',
    tagline: 'City of Arts and Sciences and paella',
    heroImage: '/images/spain/destinations/valencia.webp',
    about: [
      'Valencia mixes futuristic architecture with historic markets. Visit the City of Arts and Sciences, taste authentic paella, and stroll the Turia Gardens.',
      'Beyond the monuments, Valencia lives in its neighborhoods: Ciutat Vella\u2019s historic charm, Ruzafa\u2019s creative scene, El Carmen\u2019s street art. Every corner reveals a blend of old and new.',
      'The city rewards slow exploration. Pause for horchata, watch the sunset over the Turia, lose yourself in the Central Market. Valencia doesn\u2019t just show you Spain; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'City of Arts and Sciences', image: '/images/spain/attractions/city-of-arts-and-sciences.webp', description: 'Futuristic complex of museums, aquarium and opera house.' },
      { name: 'Central Market', image: '/images/spain/attractions/central-market.webp', description: 'One of Europe\u2019s largest and most beautiful markets.' },
      { name: 'La Lonja', image: '/images/spain/attractions/la-lonja.webp', description: 'Gothic silk exchange, a UNESCO World Heritage site.' },
      { name: 'Turia Gardens', image: '/images/spain/attractions/turia-gardens.webp', description: 'A 9km park in a former riverbed.' },
    ],
    food: [
      { name: 'Paella Valenciana', image: '/images/spain/food/paella.webp', description: 'The original paella with chicken, rabbit and saffron rice.' },
      { name: 'Horchata', image: '/images/spain/food/horchata.webp', description: 'Sweet tiger nut drink, a Valencian specialty.' },
      { name: 'Fideu\u00e0', image: '/images/spain/food/fideua.webp', description: 'Noodle version of paella, cooked in a wide pan.' },
    ],
    neighborhoods: [
      { name: 'Ciutat Vella', description: 'Historic center with the cathedral and old town.' },
      { name: 'Ruzafa', description: 'Creative, trendy area with caf\u00e9s and galleries.' },
      { name: 'El Carmen', description: 'Street art and medieval gates.' },
      { name: 'Malvarrosa', description: 'Beachfront neighborhood.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'March to June and September to October.',
      recommendedStay: '2-3 days.',
      tips: ['Las Fallas festival is in March.', 'Rent a bike for the Turia Gardens.', 'Paella is a lunch dish, not dinner.', 'Tap water is safe.'],
    },
  },
  {
    id: 'granada',
    name: 'Granada',
    tagline: 'The Alhambra and the Albaic\u00edn',
    heroImage: '/images/spain/destinations/granada.webp',
    about: [
      'Granada sits at the foot of the Sierra Nevada, crowned by the Alhambra palace. Wander the Albaic\u00edn quarter and enjoy free tapas with drinks.',
      'Beyond the monuments, Granada lives in its neighborhoods: Albaic\u00edn\u2019s Moorish streets, Realejo\u2019s creative vibe, Sacromonte\u2019s cave dwellings. Every corner reveals history, from the Moors to the present.',
      'The city rewards slow exploration. Pause for tea in a teter\u00eda, watch the sunset from Mirador de San Nicol\u00e1s, lose yourself in the Alhambra gardens. Granada doesn\u2019t just show you history; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'Alhambra', image: '/images/spain/attractions/alhambra.webp', description: 'Moorish palace and fortress complex, a UNESCO World Heritage site.' },
      { name: 'Albaic\u00edn', image: '/images/spain/attractions/albaicin.webp', description: 'Historic Moorish quarter with narrow streets and viewpoints.' },
      { name: 'Generalife', image: '/images/spain/attractions/generalife.webp', description: 'Summer palace and gardens of the Nasrid rulers.' },
      { name: 'Sacromonte', image: '/images/spain/attractions/sacromonte.webp', description: 'Cave dwellings and flamenco in the hills.' },
    ],
    food: [
      { name: 'Pisto', image: '/images/spain/food/pisto.webp', description: 'Spanish ratatouille with peppers, zucchini and egg.' },
      { name: 'Tapas', image: '/images/spain/food/tapas.webp', description: 'Free tapas with every drink, a Granada tradition.' },
      { name: 'Tortilla del Sacromonte', image: '/images/spain/food/tortilla-espanola.webp', description: 'Omelette with brains and testicles, a local specialty.' },
    ],
    neighborhoods: [
      { name: 'Albaic\u00edn', description: 'Moorish quarter with viewpoints and tea houses.' },
      { name: 'Realejo', description: 'Creative area with street art and tapas bars.' },
      { name: 'Centro', description: 'Historic center around the cathedral.' },
      { name: 'Sacromonte', description: 'Cave houses and flamenco in the hills.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'April to June and September to October.',
      recommendedStay: '2-3 days.',
      tips: ['Alhambra tickets sell out weeks ahead.', 'Sunset views from Mirador de San Nicol\u00e1s.', 'Free tapas with drinks.', 'Tap water is safe.'],
    },
  },
  {
    id: 'mallorca',
    name: 'Mallorca',
    tagline: 'Island coves and mountain roads',
    heroImage: '/images/spain/destinations/mallorca.webp',
    about: [
      'Mallorca offers turquoise coves, the Serra de Tramuntana, and the Gothic Palma Cathedral. Drive winding roads and relax on quiet beaches.',
      'Beyond the monuments, Mallorca lives in its towns: Palma\u2019s old town, S\u00f3ller\u2019s orange groves, Dei\u00e0\u2019s artistic vibe. Every corner reveals Mediterranean beauty.',
      'The island rewards slow exploration. Pause for ensaimada, watch the sunset from a cove, lose yourself in the Tramuntana. Mallorca doesn\u2019t just show you Spain; it lets you live inside it.',
    ],
    famousPlaces: [
      { name: 'Palma Cathedral', image: '/images/spain/attractions/palma-cathedral.webp', description: 'Gothic cathedral overlooking the bay of Palma.' },
      { name: 'Serra de Tramuntana', image: '/images/spain/attractions/serra-de-tramuntana.webp', description: 'Mountain range with scenic drives and hiking.' },
      { name: 'Cala Mondrag\u00f3', image: '/images/spain/attractions/cala-mondrago.webp', description: 'Turquoise cove with crystal-clear water.' },
      { name: 'S\u00f3ller', image: '/images/spain/attractions/soller.webp', description: 'Charming town with orange groves and a historic tram.' },
    ],
    food: [
      { name: 'Ensaimada', image: '/images/spain/food/ensaimada.webp', description: 'Spiral pastry dusted with powdered sugar.' },
      { name: 'Sobrassada', image: '/images/spain/food/sobrassada.webp', description: 'Spreadable cured sausage with paprika.' },
      { name: 'Tumbet', image: '/images/spain/food/tapas.webp', description: 'Baked vegetable dish with tomato and garlic.' },
    ],
    neighborhoods: [
      { name: 'Palma Old Town', description: 'Gothic streets and the cathedral.' },
      { name: 'S\u00f3ller', description: 'Orange groves and mountain views.' },
      { name: 'Dei\u00e0', description: 'Artistic village with sea views.' },
      { name: 'Port de Pollen\u00e7a', description: 'Beach resort and marina.' },
    ],
    goodToKnow: {
      bestTimeToVisit: 'May to September.',
      recommendedStay: '4-6 days.',
      tips: ['Rent a car for the Tramuntana.', 'Book popular coves early in summer.', 'Avoid peak August crowds.', 'Tap water is safe.'],
    },
  },
];

export function getDestinationDetail(id: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS.find((d) => d.id === id);
}

export function getAllDestinationIds(): string[] {
  return DESTINATION_DETAILS.map((d) => d.id);
}

export function getPreviousDestinationId(id: string): string | undefined {
  const index = DESTINATION_DETAILS.findIndex((d) => d.id === id);
  if (index <= 0) return undefined;
  return DESTINATION_DETAILS[index - 1].id;
}

export function getNextDestinationId(id: string): string | undefined {
  const index = DESTINATION_DETAILS.findIndex((d) => d.id === id);
  if (index < 0 || index >= DESTINATION_DETAILS.length - 1) return undefined;
  return DESTINATION_DETAILS[index + 1].id;
}
