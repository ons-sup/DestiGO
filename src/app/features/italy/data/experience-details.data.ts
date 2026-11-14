export interface ExperienceDetail {
  id: string;
  category: ExperienceCategory;
  title: string;
  heroImage: string;
  description: string;
  highlights: ExperienceHighlight[];
  wineSection?: WineSection;
  whereToTry: WhereToTryItem[];
}

export type ExperienceCategory = 'food-wine' | 'art-culture' | 'coast-beaches' | 'mountains-lakes';

export interface ExperienceHighlight {
  name: string;
  image: string;
  region: string;
  description: string;
}

export interface WineSection {
  title: string;
  wines: WineItem[];
}

export interface WineItem {
  name: string;
  region: string;
  description: string;
}

export interface WhereToTryItem {
  destinationId: string;
  destinationName: string;
  note: string;
}

export const EXPERIENCE_DETAILS: ExperienceDetail[] = [
  {
    id: 'food-wine',
    category: 'food-wine',
    title: 'Food & Wine',
    heroImage: '/assets/images/food.png',
    description: 'Italy\'s culinary heritage is a mosaic of regional traditions, each shaped by geography, history, and local ingredients. From the butter-rich risottos of the north to the tomato-forward pastas of the south, every dish tells a story of place.',
    highlights: [
      { name: 'Pizza Margherita', image: '/assets/images/pizza-margherita.jpg', region: 'Naples, Campania', description: 'San Marzano tomatoes, mozzarella di bufala, fresh basil, extra virgin olive oil on wood-fired dough.' },
      { name: 'Spaghetti Carbonara', image: '/assets/images/carbonara.jpg', region: 'Rome, Lazio', description: 'Guanciale, egg yolks, Pecorino Romano, black pepper — creamy without a drop of cream.' },
      { name: 'Lasagna alla Bolognese', image: '/assets/images/lasagna.jpg', region: 'Bologna, Emilia-Romagna', description: 'Fresh egg pasta sheets layered with slow-cooked ragù, béchamel, and Parmigiano Reggiano.' },
      { name: 'Risotto alla Milanese', image: '/assets/images/risotto-milanese.jpg', region: 'Milan, Lombardy', description: 'Carnaroli rice, saffron, beef broth, bone marrow, Parmigiano — golden and luxuriously creamy.' },
      { name: 'Tiramisù', image: '/assets/images/tiramisu.jpg', region: 'Treviso, Veneto', description: 'Savoiardi biscuits soaked in espresso, layered with mascarpone cream, dusted with cocoa.' },
      { name: 'Gelato', image: '/assets/images/gelato.jpg', region: 'Florence, Tuscany (origins)', description: 'Denser than ice cream, less fat, more flavor — pistachio, stracciatella, nocciola, and seasonal fruit.' },
      { name: 'Panna Cotta', image: '/assets/images/panna-cotta.jpg', region: 'Piedmont', description: 'Silky cooked cream set with gelatin, served with berry compote or caramel sauce.' },
      { name: 'Bruschetta', image: '/assets/images/bruschetta.jpg', region: 'Tuscany / Central Italy', description: 'Grilled bread rubbed with garlic, topped with diced tomatoes, basil, olive oil, and salt.' }
    ],
    wineSection: {
      title: 'Iconic Italian Wines',
      wines: [
        { name: 'Chianti Classico', region: 'Tuscany', description: 'Sangiovese-based, bright acidity, cherry and earth notes — the quintessential Tuscan red.' },
        { name: 'Prosecco', region: 'Veneto / Friuli', description: 'Glera grape, tank-method sparkler — fresh, floral, apple-pear notes, perfect for aperitivo.' },
        { name: 'Barolo', region: 'Piedmont', description: 'Nebbiolo, the "king of wines" — powerful, tannic, rose-tar-truffle complexity, ages for decades.' },
        { name: 'Montepulciano d\'Abruzzo', region: 'Abruzzo', description: 'Approachable, fruit-forward red with plum and spice — excellent value and food-friendly.' }
      ]
    },
    whereToTry: [
      { destinationId: 'rome', destinationName: 'Rome', note: 'Carbonara, cacio e pepe, supplì, Jewish-Roman carciofi alla giudia' },
      { destinationId: 'florence', destinationName: 'Florence', note: 'Bistecca alla fiorentina, ribollita, lampredotto, Chianti Classico' },
      { destinationId: 'milan', destinationName: 'Milan', note: 'Risotto alla Milanese, cotoletta, panettone, Franciacorta sparkling' },
      { destinationId: 'venice', destinationName: 'Venice', note: 'Cicchetti, sarde in saor, risotto al nero, Prosecco from nearby Valdobbiadene' },
      { destinationId: 'amalfi', destinationName: 'Amalfi Coast', note: 'Scialatielli ai frutti di mare, delizia al limone, local whites (Falanghina, Greco)' },
      { destinationId: 'cinque-terre', destinationName: 'Cinque Terre', note: 'Trofie al pesto, anchovies, farinata, Sciacchetrà dessert wine' }
    ]
  },
  {
    id: 'art-culture',
    category: 'art-culture',
    title: 'Art & Culture',
    heroImage: '/assets/images/art-culture.jpg',
    description: 'Italy holds more UNESCO World Heritage sites than any other country — an open-air museum where Etruscan tombs, Roman temples, Byzantine mosaics, Renaissance palaces, and Baroque churches coexist in living cities.',
    highlights: [
      { name: 'Uffizi Gallery', image: '/assets/images/uffizi.jpg', region: 'Florence, Tuscany', description: 'Botticelli\'s Birth of Venus, Leonardo\'s Annunciation, Michelangelo\'s Doni Tondo — the Renaissance canon.' },
      { name: 'Vatican Museums & Sistine Chapel', image: '/assets/images/sistine-chapel.jpg', region: 'Rome, Lazio', description: 'Raphael Rooms, ancient sculpture collections, Michelangelo\'s ceiling and Last Judgment.' },
      { name: 'Pompeii Archaeological Park', image: '/assets/images/pompeii.jpg', region: 'Naples, Campania', description: 'Roman city frozen in time by Vesuvius — streets, villas, frescoes, and plaster casts of victims.' },
      { name: 'Basilica of San Francesco', image: '/assets/images/assisi.jpg', region: 'Assisi, Umbria', description: 'Giotto\'s revolutionary fresco cycle depicting St. Francis\' life — a pivot point in Western art.' },
      { name: 'Matera Sassi', image: '/assets/images/matera.jpg', region: 'Matera, Basilicata', description: 'Ancient cave dwellings continuously inhabited for 9,000+ years — a living troglodyte city.' },
      { name: 'Palazzo Ducale (Doge\'s Palace)', image: '/assets/images/doges-palace.jpg', region: 'Venice, Veneto', description: 'Gothic seat of Venetian power, Tintoretto\'s Paradise, Bridge of Sighs, prison cells.' }
    ],
    whereToTry: [
      { destinationId: 'rome', destinationName: 'Rome', note: 'Vatican Museums, Borghese Gallery, Capitoline Museums, Pantheon, Roman Forum' },
      { destinationId: 'florence', destinationName: 'Florence', note: 'Uffizi, Accademia (David), Bargello, Palazzo Pitti, Boboli Gardens' },
      { destinationId: 'venice', destinationName: 'Venice', note: 'Doge\'s Palace, Accademia, Peggy Guggenheim, Basilica di San Marco, Scuola Grande di San Rocco' },
      { destinationId: 'milan', destinationName: 'Milan', note: 'Last Supper, Pinacoteca di Brera, Duomo Museum, Sforza Castle, Triennale Design Museum' }
    ]
  },
  {
    id: 'coast-beaches',
    category: 'coast-beaches',
    title: 'Coast & Beaches',
    heroImage: '/assets/images/amalfi.jpg',
    description: 'Italy\'s 7,600 km of coastline offers everything from glamorous rivieras to wild, inaccessible coves. The Mediterranean laps at cliffs dotted with pastel villages, while islands hold secrets known only to locals.',
    highlights: [
      { name: 'Amalfi Coast', image: '/assets/images/amalfi.jpg', region: 'Campania', description: 'UNESCO cliffside villages — Positano\'s cascade, Ravello\'s gardens, Amalfi\'s cathedral, lemon terraces.' },
      { name: 'Cinque Terre', image: '/assets/images/cinque-terre.jpg', region: 'Liguria', description: 'Five car-free villages linked by trails and trains — Vernazza\'s harbor, Monterosso\'s beach, Manarola\'s sunset.' },
      { name: 'Positano', image: '/assets/images/positano.jpg', region: 'Campania', description: 'Vertical village of peach-pink-white houses tumbling to a pebble beach — the coast\'s icon.' },
      { name: 'Sardinia — Costa Smeralda', image: '/assets/images/costa-smeralda.jpg', region: 'Sardinia', description: 'Emerald waters, white granite coves, luxury resorts, and Nuragic ruins inland.' },
      { name: 'Puglia — Polignano a Mare', image: '/assets/images/polignano.jpg', region: 'Puglia', description: 'White town perched on limestone cliffs above Adriatic grottoes — famous for cliff diving.' },
      { name: 'Isola d\'Elba', image: '/assets/images/elba.jpg', region: 'Tuscan Archipelago', description: 'Napoleon\'s exile island — 150+ beaches, crystal water, hiking trails, mineral springs.' }
    ],
    whereToTry: [
      { destinationId: 'amalfi', destinationName: 'Amalfi Coast', note: 'Positano, Ravello, Amalfi town, Path of the Gods, boat to Capri' },
      { destinationId: 'cinque-terre', destinationName: 'Cinque Terre', note: 'Vernazza, Manarola, Monterosso, Corniglia, Riomaggiore, Sentiero Azzurro' },
      { destinationId: 'milan', destinationName: 'Milan (for lakes)', note: 'Lake Como, Lake Garda day trips — ferry tours, villa gardens, lakeside dining' }
    ]
  },
  {
    id: 'mountains-lakes',
    category: 'mountains-lakes',
    title: 'Mountains & Lakes',
    heroImage: '/assets/images/dolomites.jpg',
    description: 'The Italian Alps and Dolomites rise in jagged limestone cathedrals, while glacial lakes mirror the peaks. This is a landscape for hiking, climbing, skiing, and slow contemplation — where German, Ladin, and Italian cultures meet.',
    highlights: [
      { name: 'Dolomites', image: '/assets/images/dolomites.jpg', region: 'Trentino / South Tyrol / Veneto', description: 'UNESCO pale mountains — Tre Cime, Seceda, Alpe di Siusi, via ferrata routes, alpine meadows.' },
      { name: 'Lake Como', image: '/assets/images/lake-como.jpg', region: 'Lombardy', description: 'Y-shaped glacial lake — Bellagio, Varenna, villa gardens (Balbianello, Melzi), silk heritage.' },
      { name: 'Lake Garda', image: '/assets/images/lake-garda.jpg', region: 'Lombardy / Veneto / Trentino', description: 'Italy\'s largest lake — Sirmione castle, Riva del Garda windsurfing, lemon houses, Monte Baldo cable car.' },
      { name: 'Lake Braies (Pragser Wildsee)', image: '/assets/images/lake-braies.jpg', region: 'South Tyrol', description: 'Emerald alpine lake ringed by Dolomite peaks — rowboat rentals, circular trail, photographer\'s dream.' },
      { name: 'Ortles-Cevedale / Stelvio', image: '/assets/images/stelvio.jpg', region: 'Lombardy / Trentino', description: 'High alpine passes, glaciers, Stelvio Pass 48 hairpins, WWI history, ibex and chamois.' },
      { name: 'Gran Paradiso', image: '/assets/images/gran-paradiso.jpg', region: 'Aosta Valley / Piedmont', description: 'Italy\'s oldest national park — 4,061m peak, ibex sanctuary, alpine huts, multi-day treks.' }
    ],
    whereToTry: [
      { destinationId: 'milan', destinationName: 'Milan (gateway)', note: 'Day trips to Lake Como, Lake Garda, Dolomites (via Bolzano/Trento trains)' },
      { destinationId: 'venice', destinationName: 'Venice (gateway)', note: 'Dolomites access via Cortina d\'Ampezzo, Lake Garda via Verona/Peschiera trains' }
    ]
  }
];

export function getExperienceDetail(id: string): ExperienceDetail | undefined {
  return EXPERIENCE_DETAILS.find(e => e.id === id);
}

export function getAllExperienceIds(): string[] {
  return EXPERIENCE_DETAILS.map(e => e.id);
}