export interface TurkeyFactSource {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly publisher: string;
  readonly checkedOn: string;
  readonly notes?: string;
}

export const TURKEY_FACT_SOURCES: readonly TurkeyFactSource[] = [
  {
    id: 'unesco-turkiye-state-party',
    title: 'Türkiye — World Heritage Convention, States Parties',
    url: 'https://whc.unesco.org/en/statesparties/tr',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
    notes: 'Lists 22 inscribed properties (20 cultural, 2 mixed) and 80 tentative-list sites.',
  },
  {
    id: 'unesco-gobekli-tepe',
    title: 'Göbekli Tepe',
    url: 'https://whc.unesco.org/en/list/1572/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
  },
  {
    id: 'unesco-hierapolis-pamukkale',
    title: 'Hierapolis-Pamukkale',
    url: 'https://whc.unesco.org/en/list/485/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
  },
  {
    id: 'unesco-goreme-cappadocia',
    title: 'Göreme National Park and the Rock Sites of Cappadocia',
    url: 'https://whc.unesco.org/en/list/357/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
  },
  {
    id: 'unesco-ephesus',
    title: 'Ephesus',
    url: 'https://whc.unesco.org/en/list/1018/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
  },
  {
    id: 'unesco-istanbul',
    title: 'Historic Areas of Istanbul',
    url: 'https://whc.unesco.org/en/list/356/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
  },
  {
    id: 'unesco-sumela-tentative',
    title: 'Sümela Monastery (The Monastery of Virgin Mary) — Tentative List',
    url: 'https://whc.unesco.org/en/tentativelists/1397/',
    publisher: 'UNESCO World Heritage Centre',
    checkedOn: '2026-11-27',
    notes: 'Listed on the Tentative List in 2000; not an inscribed World Heritage property.',
  },
  {
    id: 'unesco-turkish-coffee',
    title: 'Turkish coffee culture and tradition',
    url: 'https://ich.unesco.org/en/RL/turkish-coffee-culture-and-tradition-00645',
    publisher: 'UNESCO Intangible Cultural Heritage',
    checkedOn: '2026-11-27',
    notes:
      'Inscribed in 2013 on the Representative List of the Intangible Cultural Heritage of Humanity.',
  },
  {
    id: 'goturkiye-home',
    title: 'Official Travel Guide of Türkiye',
    url: 'https://goturkiye.com/',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-istanbul',
    title: 'İstanbul Travel and Culture Guide',
    url: 'https://goturkiye.com/istanbul',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-bosphorus',
    title: 'Bosphorus Istanbul Travel Guide',
    url: 'https://goturkiye.com/istanbul/bosphorus',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-cappadocia',
    title: 'Cappadocia destinations and experiences',
    url: 'https://goturkiye.com/cappadocia',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-four-seasons',
    title: 'The 4 Seasons GoTürkiye',
    url: 'https://goturkiye.com/fourseasons',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-whirling-dervishes',
    title: 'Whirling Dervishes and the Mevlevi Sema Ceremony',
    url: 'https://goturkiye.com/mevlanarumi/whirling-dervishes',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-tea-route',
    title: 'Turkish Tea Route',
    url: 'https://goturkiye.com/culturaljourneys/tea-route',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-fethiye-paragliding',
    title: 'Paragliding in Fethiye / Ölüdeniz',
    url: 'https://goturkiye.com/fethiye/paragliding',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-turkish-riviera',
    title: 'Turkish Riviera and Fethiye guide',
    url: 'https://goturkiye.com/bluevoyage/turkish-riviera',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'goturkiye-black-sea',
    title: 'Black Sea Region Travel Guide',
    url: 'https://goturkiye.com/blacksea',
    publisher: 'GoTürkiye / Tourism Promotion and Development Agency',
    checkedOn: '2026-11-27',
  },
  {
    id: 'mfa-visa-information',
    title: 'Visa Information For Foreigners',
    url: 'https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa',
    publisher: 'Republic of Türkiye Ministry of Foreign Affairs',
    checkedOn: '2026-11-27',
  },
  {
    id: 'mfa-general-visas',
    title: 'General Information About Turkish Visas',
    url: 'https://www.mfa.gov.tr/general-information-about-turkish-visas.en.mfa',
    publisher: 'Republic of Türkiye Ministry of Foreign Affairs',
    checkedOn: '2026-11-27',
  },
  {
    id: 'cbrt-banknotes',
    title: 'Banknotes in Circulation and Their Security Features',
    url: 'https://www.tcmb.gov.tr/wps/wcm/connect/EN/TCMB+EN/Main+Menu/Banknotes/Banknotes+in+Circulation+and+Their+Security+Features',
    publisher: 'Central Bank of the Republic of Türkiye',
    checkedOn: '2026-11-27',
  },
];
