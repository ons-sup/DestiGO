export type TurkeyRegion =
  | 'Marmara'
  | 'Central Anatolia'
  | 'Mediterranean'
  | 'Aegean'
  | 'Black Sea'
  | 'Southeastern Anatolia';

export type TurkeyExperienceCategory =
  'culture' | 'food' | 'nature' | 'coast' | 'adventure' | 'history';

export interface TurkeyOverview {
  readonly name: string;
  readonly continents: string;
  readonly summary: string;
  readonly image: string;
  readonly sourceIds: readonly string[];
}

export interface TurkeyHeritageSite {
  readonly id: string;
  readonly name: string;
  readonly category: 'Cultural' | 'Mixed';
  readonly inscriptionYear: number;
  readonly sourceIds: readonly string[];
}

export interface TurkeyWorldHeritageSnapshot {
  readonly inscribedProperties: number;
  readonly cultural: number;
  readonly mixed: number;
  readonly asOf: string;
  readonly sites: readonly TurkeyHeritageSite[];
  readonly sourceIds: readonly string[];
}

export interface TurkeyDestinationDetail {
  readonly id: string;
  readonly name: string;
  readonly region: TurkeyRegion;
  readonly image: string;
  readonly altText: string;
  readonly summary: string;
  readonly significance: string;
  readonly signatureExperiences: readonly string[];
  readonly suggestedStay: string;
  readonly bestSeasons: string;
  readonly sourceIds: readonly string[];
}

export interface TurkeyExperienceGuide {
  readonly id: string;
  readonly title: string;
  readonly category: TurkeyExperienceCategory;
  readonly location: string;
  readonly image: string;
  readonly altText: string;
  readonly description: string;
  readonly bestTime: string;
  readonly tags: readonly string[];
  readonly sourceIds: readonly string[];
}

export interface TurkeyCultureNote {
  readonly id: string;
  readonly title: string;
  readonly body: string;
  readonly image?: string;
  readonly sourceIds: readonly string[];
}

export interface TurkeyPracticalFact {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly sourceIds: readonly string[];
}

export const TURKEY_OVERVIEW: TurkeyOverview = {
  name: 'Türkiye',
  continents: 'Europe and Asia',
  summary:
    'The Bosphorus divides Istanbul between Europe and Asia, and the country holds 22 UNESCO World Heritage properties spanning prehistoric sites, ancient cities, Ottoman landmarks and distinctive landscapes.',
  image: '/images/turkey/editorial/hagia-sophia-interior.jpg',
  sourceIds: ['goturkiye-bosphorus', 'unesco-turkiye-state-party'],
};

export const TURKEY_WORLD_HERITAGE: TurkeyWorldHeritageSnapshot = {
  inscribedProperties: 22,
  cultural: 20,
  mixed: 2,
  asOf: '2026-11-27',
  sites: [
    {
      id: 'historic-areas-of-istanbul',
      name: 'Historic Areas of Istanbul',
      category: 'Cultural',
      inscriptionYear: 1985,
      sourceIds: ['unesco-turkiye-state-party', 'unesco-istanbul'],
    },
    {
      id: 'goreme-cappadocia',
      name: 'Göreme National Park and the Rock Sites of Cappadocia',
      category: 'Mixed',
      inscriptionYear: 1985,
      sourceIds: ['unesco-turkiye-state-party', 'unesco-goreme-cappadocia'],
    },
    {
      id: 'nemrut-dag',
      name: 'Nemrut Dağ',
      category: 'Cultural',
      inscriptionYear: 1987,
      sourceIds: ['unesco-turkiye-state-party'],
    },
    {
      id: 'hierapolis-pamukkale',
      name: 'Hierapolis-Pamukkale',
      category: 'Mixed',
      inscriptionYear: 1988,
      sourceIds: ['unesco-turkiye-state-party', 'unesco-hierapolis-pamukkale'],
    },
    {
      id: 'city-of-safranbolu',
      name: 'City of Safranbolu',
      category: 'Cultural',
      inscriptionYear: 1994,
      sourceIds: ['unesco-turkiye-state-party'],
    },
    {
      id: 'ephesus',
      name: 'Ephesus',
      category: 'Cultural',
      inscriptionYear: 2015,
      sourceIds: ['unesco-turkiye-state-party', 'unesco-ephesus'],
    },
    {
      id: 'gobekli-tepe',
      name: 'Göbekli Tepe',
      category: 'Cultural',
      inscriptionYear: 2018,
      sourceIds: ['unesco-turkiye-state-party', 'unesco-gobekli-tepe'],
    },
  ],
  sourceIds: ['unesco-turkiye-state-party'],
};

export const TURKEY_DESTINATION_DETAILS: readonly TurkeyDestinationDetail[] = [
  {
    id: 'istanbul',
    name: 'Istanbul',
    region: 'Marmara',
    image: '/images/turkey/destinations/istanbul.jpg',
    altText: 'Istanbul skyline and historic architecture',
    summary:
      'The Bosphorus strait divides Istanbul between its European and Asian sides. GoTürkiye notes that the two shores are only about 500 metres apart in places and that local ferries cross between continents within minutes.',
    significance:
      'The Historic Areas of Istanbul were inscribed on the UNESCO World Heritage List in 1985.',
    signatureExperiences: [
      'Bosphorus ferry',
      'Historic peninsula',
      'Historic bazaars',
      'Hagia Sophia',
    ],
    suggestedStay: '2–4 days',
    bestSeasons: 'Spring and autumn are generally comfortable for sightseeing.',
    sourceIds: [
      'goturkiye-bosphorus',
      'goturkiye-istanbul',
      'unesco-istanbul',
      'goturkiye-four-seasons',
    ],
  },
  {
    id: 'cappadocia',
    name: 'Cappadocia',
    region: 'Central Anatolia',
    image: '/images/turkey/destinations/cappadocia.jpg',
    altText: 'Hot air balloons over the fairy chimneys of Cappadocia',
    summary:
      'A volcanic landscape shaped by erosion into valleys and pinnacles known as fairy chimneys. GoTürkiye describes dawn balloon departures around Göreme and highlights the region’s carpets, cuisine and cave stays.',
    significance:
      'Göreme National Park and the Rock Sites of Cappadocia were inscribed in 1985 as a mixed UNESCO property, with rock-hewn sanctuaries, villages and underground cities.',
    signatureExperiences: [
      'Dawn balloon flight',
      'Rock-cut churches',
      'Cave accommodation',
      'Avanos pottery',
    ],
    suggestedStay: '2–3 days',
    bestSeasons: 'Spring and autumn; winter visits are possible with seasonal differences.',
    sourceIds: ['goturkiye-cappadocia', 'unesco-goreme-cappadocia', 'goturkiye-four-seasons'],
  },
  {
    id: 'antalya',
    name: 'Antalya',
    region: 'Mediterranean',
    image: '/images/turkey/destinations/antalya.jpg',
    altText: 'Antalya old town harbour',
    summary:
      'A Mediterranean gateway with an old town and harbourside, close to the coves and ancient sites of the Turkish Riviera. GoTürkiye describes the riviera as the meeting of Türkiye’s Mediterranean and Aegean coasts.',
    significance:
      'A base for exploring the ancient cities and coastal landscapes of the Turkish Riviera.',
    signatureExperiences: [
      'Kaleiçi old town',
      'Harbour walk',
      'Coastal day trips',
      'Ancient ruins',
    ],
    suggestedStay: '3–5 days',
    bestSeasons: 'Summer for the coast; GoTürkiye describes Antalya winters as mild and sunny.',
    sourceIds: ['goturkiye-turkish-riviera', 'goturkiye-four-seasons'],
  },
  {
    id: 'pamukkale',
    name: 'Pamukkale',
    region: 'Aegean',
    image: '/images/turkey/destinations/pamukkale.jpg',
    altText: 'White travertine terraces at Pamukkale',
    summary:
      'Calcite-laden spring water emerging from a cliff almost 200 metres high has formed terraced basins, petrified waterfalls and white deposits; the Turkish name means “cotton castle”.',
    significance:
      'Hierapolis-Pamukkale was inscribed in 1988 as a mixed UNESCO property. The Attalid kings established a thermal spa at Hierapolis at the end of the 2nd century BCE.',
    signatureExperiences: [
      'Travertine terraces',
      'Hierapolis ruins',
      'Ancient theatre',
      'Thermal springs',
    ],
    suggestedStay: '1–2 days',
    bestSeasons: 'Spring and autumn for comfortable walking; summer is hot in the inland valleys.',
    sourceIds: ['unesco-hierapolis-pamukkale', 'goturkiye-four-seasons'],
  },
  {
    id: 'ephesus',
    name: 'Ephesus',
    region: 'Aegean',
    image: '/images/turkey/destinations/ephesus.jpg',
    altText: 'Library of Celsus in Ephesus',
    summary:
      'A Roman port city whose excavations reveal grand monuments including the Library of Celsus and the Great Theatre. Little remains of the Temple of Artemis, once one of the Seven Wonders of the World.',
    significance: 'Ephesus was inscribed on the UNESCO World Heritage List in 2015.',
    signatureExperiences: [
      'Library of Celsus',
      'Great Theatre',
      'Curetes Street',
      'House of the Virgin Mary',
    ],
    suggestedStay: '1–2 days',
    bestSeasons:
      'Spring and autumn are generally the most comfortable seasons for exploring ruins.',
    sourceIds: ['unesco-ephesus', 'goturkiye-four-seasons'],
  },
  {
    id: 'gobeklitepe',
    name: 'Göbekli Tepe',
    region: 'Southeastern Anatolia',
    image: '/images/turkey/destinations/gobeklitepe.jpg',
    altText: 'Excavated pillars at Göbekli Tepe near Şanlıurfa',
    summary:
      'Monumental round-oval and rectangular megalithic structures in the Germuş mountains, erected by hunter-gatherers in the Pre-Pottery Neolithic between 9600 and 8200 BCE. T-shaped pillars are carved with images of wild animals.',
    significance: 'Göbekli Tepe was inscribed on the UNESCO World Heritage List in 2018.',
    signatureExperiences: [
      'Main excavation area',
      'T-shaped carved pillars',
      'Şanlıurfa city visit',
    ],
    suggestedStay: '1 day from Şanlıurfa',
    bestSeasons:
      'Spring and autumn tend to be the most comfortable seasons for the southeastern interior.',
    sourceIds: ['unesco-gobekli-tepe', 'unesco-turkiye-state-party', 'goturkiye-four-seasons'],
  },
  {
    id: 'nemrut-dagi',
    name: 'Nemrut Dağ',
    region: 'Southeastern Anatolia',
    image: '/images/turkey/destinations/nemrut-dagi.jpg',
    altText: 'Monumental stone figures on the east terrace of Nemrut Dağ',
    summary:
      'An archaeological site in southeastern Anatolia known for its monumental ancient stone figures. The UNESCO World Heritage List entry for Nemrut Dağ was inscribed in 1987.',
    significance: 'Inscribed as a cultural World Heritage property in 1987.',
    signatureExperiences: [
      'East terrace statuary',
      'Mountain viewpoints',
      'Photography at sunrise or sunset',
    ],
    suggestedStay: '1–2 days',
    bestSeasons:
      'Spring and autumn are generally the most comfortable seasons for the southeastern interior.',
    sourceIds: ['unesco-turkiye-state-party', 'goturkiye-four-seasons'],
  },
  {
    id: 'safranbolu',
    name: 'Safranbolu',
    region: 'Black Sea',
    image: '/images/turkey/destinations/safranbolu.jpg',
    altText: 'Traditional Ottoman-era houses in Safranbolu',
    summary:
      'A town known for its preserved traditional houses in the Black Sea hinterland, valued as an example of an Ottoman-era urban settlement.',
    significance: 'The City of Safranbolu was inscribed on the UNESCO World Heritage List in 1994.',
    signatureExperiences: ['Historic houses', 'Old town streets', 'Local tea houses'],
    suggestedStay: '1–2 days',
    bestSeasons:
      'Spring and autumn; GoTürkiye notes cold weather and snowfall in inland regions during winter.',
    sourceIds: ['unesco-turkiye-state-party', 'goturkiye-four-seasons'],
  },
  {
    id: 'sumela-monastery',
    name: 'Sümela Monastery',
    region: 'Black Sea',
    image: '/images/turkey/destinations/sumela-monastery.jpg',
    altText: 'Sümela Monastery seen across the Altındere valley near Trabzon',
    summary:
      'A monastery near Trabzon that GoTürkiye describes as one of the most impressive sights of the Black Sea coast, set in a steep, rocky valley.',
    significance:
      'On the UNESCO Tentative List since 2000; it is not an inscribed World Heritage property.',
    signatureExperiences: ['Monastery visit', 'Valley views', 'Black Sea coastal road'],
    suggestedStay: '1 day from Trabzon',
    bestSeasons: 'Spring through autumn for the green Black Sea landscape.',
    sourceIds: ['unesco-sumela-tentative', 'goturkiye-black-sea', 'goturkiye-four-seasons'],
  },
  {
    id: 'oludeniz',
    name: 'Ölüdeniz',
    region: 'Mediterranean',
    image: '/images/turkey/destinations/oludeniz.jpg',
    altText: 'Turquoise lagoon and beach at Ölüdeniz near Fethiye',
    summary:
      'A protected coastal lagoon near Fethiye where the Mediterranean meets the Aegean. GoTürkiye describes a long beach, calm turquoise water and paragliding from the mountain behind the resort.',
    significance:
      'A protected lagoon and a well-known paragliding destination on the Turkish Riviera.',
    signatureExperiences: ['Blue Lagoon', 'Beach time', 'Paragliding from Babadağ', 'Boat trips'],
    suggestedStay: '2–3 days',
    bestSeasons: 'Late spring to early autumn for swimming and flying conditions.',
    sourceIds: [
      'goturkiye-turkish-riviera',
      'goturkiye-fethiye-paragliding',
      'goturkiye-four-seasons',
    ],
  },
];

export const TURKEY_EXPERIENCE_GUIDES: readonly TurkeyExperienceGuide[] = [
  {
    id: 'turkish-coffee',
    title: 'Turkish Coffee Culture',
    category: 'food',
    location: 'Nationwide, with strong café traditions in Istanbul',
    image: '/images/turkey/experiences/turkish-coffee.jpg',
    altText: 'Small cups of Turkish coffee served together',
    description:
      'Finely ground coffee, cold water and sugar are brewed slowly in a coffee pot to produce foam, then served in small cups with a glass of water. UNESCO inscribed Turkish coffee culture and tradition in 2013.',
    bestTime: 'Any time of day',
    tags: ['UNESCO intangible heritage', 'Hospitality', 'Cafés'],
    sourceIds: ['unesco-turkish-coffee'],
  },
  {
    id: 'grand-bazaar',
    title: 'Istanbul Historic Bazaars',
    category: 'culture',
    location: 'Istanbul',
    image: '/images/turkey/experiences/grand-bazaar.jpg',
    altText: 'Interior arcade of the Grand Bazaar in Istanbul',
    description:
      'GoTürkiye highlights the labyrinths of marketplaces and shopping arcades at the heart of Istanbul as part of the city’s blend of past and present.',
    bestTime: 'Morning or early afternoon',
    tags: ['Markets', 'Shopping', 'Historic peninsula'],
    sourceIds: ['goturkiye-istanbul'],
  },
  {
    id: 'mevlevi-sema',
    title: 'Mevlevi Sema Ceremony',
    category: 'culture',
    location: 'Konya and Mevlevi lodges in Istanbul',
    image: '/images/turkey/experiences/whirling-dervishes.jpg',
    altText: 'Whirling dervishes during a Mevlevi Sema ceremony',
    description:
      'GoTürkiye describes the Sema as a mystical ceremony performed with traditional Mevlevi music, centred on the Mevlevi order founded in Konya in 1273, and notes its inscription on UNESCO’s Representative List in 2008.',
    bestTime: 'Check local ceremony schedules; Şeb-i Arûs is held in early December',
    tags: ['Music', 'Spiritual tradition', 'Konya'],
    sourceIds: ['goturkiye-whirling-dervishes'],
  },
  {
    id: 'black-sea-tea',
    title: 'Rize Tea Gardens',
    category: 'food',
    location: 'Rize, Black Sea region',
    image: '/images/turkey/experiences/black-sea-tea.jpg',
    altText: 'Terraced tea plantation near Rize on the Black Sea coast',
    description:
      'GoTürkiye calls Rize the homeland of Turkish tea and describes the Eastern Black Sea tea route through Rize, Trabzon and Artvin, with terraced gardens and tea houses.',
    bestTime: 'Late spring to early autumn',
    tags: ['Tea', 'Landscape', 'Black Sea'],
    sourceIds: ['goturkiye-tea-route', 'goturkiye-black-sea'],
  },
  {
    id: 'paragliding-oludeniz',
    title: 'Paragliding over Ölüdeniz',
    category: 'adventure',
    location: 'Babadağ and Ölüdeniz, Fethiye',
    image: '/images/turkey/editorial/paragliding-oludeniz.jpg',
    altText: 'Paraglider flying above the Ölüdeniz coast',
    description:
      'GoTürkiye describes a paragliding descent from Babadağ, almost 2,000 metres high, taking about 30 minutes to reach the white sands of Ölüdeniz.',
    bestTime: 'Check local flying conditions with operators',
    tags: ['Adventure', 'Coast', 'Fethiye'],
    sourceIds: ['goturkiye-fethiye-paragliding'],
  },
  {
    id: 'hagia-sophia',
    title: 'Hagia Sophia / Ayasofya',
    category: 'history',
    location: 'Istanbul historic peninsula',
    image: '/images/turkey/editorial/hagia-sophia-interior.jpg',
    altText: 'Interior of Hagia Sophia in Istanbul',
    description:
      'A landmark of the Istanbul skyline and a İstanbul Bosphorus sight described by GoTürkiye as Ayasofya Grand Mosque; it sits within the UNESCO-inscribed Historic Areas of Istanbul.',
    bestTime: 'Outside busy prayer and visiting times',
    tags: ['Byzantine', 'Ottoman', 'Architecture'],
    sourceIds: ['goturkiye-bosphorus', 'unesco-istanbul'],
  },
];

export const TURKEY_CULTURE_NOTES: readonly TurkeyCultureNote[] = [
  {
    id: 'two-continents',
    title: 'A city on two continents',
    body: 'GoTürkiye states that the Bosphorus divides Istanbul into a European half and an Asian half, with the shores as close as 500 metres in places.',
    sourceIds: ['goturkiye-bosphorus'],
  },
  {
    id: 'heritage-depth',
    title: 'Layered heritage',
    body: 'UNESCO lists 22 World Heritage properties in Türkiye — 20 cultural and 2 mixed — ranging from Göbekli Tepe (2018) to Hierapolis-Pamukkale (1988) and the Historic Areas of Istanbul (1985).',
    sourceIds: ['unesco-turkiye-state-party'],
  },
  {
    id: 'coffee-tradition',
    title: 'Coffee as hospitality',
    body: 'UNESCO describes Turkish coffee as a brewing technique combined with communal tradition: slowly brewed grounds served in small cups with water, associated with conversation, friendship and ceremonies.',
    image: '/images/turkey/experiences/turkish-coffee.jpg',
    sourceIds: ['unesco-turkish-coffee'],
  },
  {
    id: 'four-seasons',
    title: 'Four distinct travel seasons',
    body: 'GoTürkiye notes that the Mediterranean can still be warm enough to swim in November, that Antalya has mild sunny winters, and that central and eastern Anatolia offer snowfall and skiing.',
    image: '/images/turkey/destinations/cappadocia.jpg',
    sourceIds: ['goturkiye-four-seasons'],
  },
];

export const TURKEY_PRACTICAL_FACTS: readonly TurkeyPracticalFact[] = [
  {
    id: 'entry-requirements',
    label: 'Entry requirements',
    value:
      'Visa rules depend on nationality: some visitors are visa-exempt, many can obtain an e-Visa online for tourism or business, and others must apply through Turkish embassies or consulates.',
    sourceIds: ['mfa-visa-information', 'mfa-general-visas'],
  },
  {
    id: 'passport-validity',
    label: 'Passport validity',
    value:
      'The Ministry of Foreign Affairs advises a passport valid for at least 6 months from the date of arrival, and states that travel documents should expire at least 60 days beyond the intended duration of stay.',
    sourceIds: ['mfa-visa-information', 'mfa-general-visas'],
  },
  {
    id: 'currency',
    label: 'Currency',
    value:
      'The Turkish lira is the official currency. The central bank lists banknotes in circulation in denominations of 5, 10, 20, 50, 100 and 200 lira.',
    sourceIds: ['cbrt-banknotes'],
  },
  {
    id: 'best-seasons',
    label: 'When to go',
    value:
      'Spring and autumn suit most sightseeing; summer suits the Aegean and Mediterranean coasts; winters are mild around Antalya but cold with snowfall in central and eastern Anatolia.',
    sourceIds: ['goturkiye-four-seasons'],
  },
  {
    id: 'istanbul-ferries',
    label: 'Crossing Istanbul',
    value:
      'Local ferries are a practical way to cross the Bosphorus between Istanbul’s European and Asian sides, taking only a few minutes.',
    sourceIds: ['goturkiye-bosphorus'],
  },
];
