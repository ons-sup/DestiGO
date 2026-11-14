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

export const DESTINATION_DETAILS: DestinationDetail[] = [
  {
    id: 'rome',
    name: 'Rome',
    tagline: 'The Eternal City',
    heroImage: '/assets/images/Rome.jfif',
    about: [
      'Rome is a living museum where ancient history meets vibrant modern life. Walk through the Forum where Julius Caesar once spoke, toss a coin into the Trevi Fountain, and marvel at the Pantheon\'s perfect dome — all within streets that have witnessed 2,700 years of civilization.',
      'Beyond the monuments, Rome lives in its neighborhoods: Trastevere\'s ivy-clad trattorias, Monti\'s vintage boutiques, Testaccio\'s authentic food scene. Every piazza has its rhythm, every church hides a masterpiece, and every meal is a celebration of cucina romana — carbonara, cacio e pepe, supplì — made with reverence for tradition.',
      'The city rewards slow exploration. Pause for espresso at a marble bar, watch the sunset from the Janiculum Hill, lose yourself in the Vatican Museums\' endless corridors. Rome doesn\'t just show you history; it lets you live inside it.'
    ],
    famousPlaces: [
      { name: 'Colosseum', image: '/assets/images/colosseum.jpg', description: 'The iconic amphitheater where gladiators once battled, standing as Rome\'s most recognizable symbol.' },
      { name: 'Trevi Fountain', image: '/assets/images/trevi-fountain.jpg', description: 'Baroque masterpiece where visitors toss coins over their shoulders to ensure a return to Rome.' },
      { name: 'Vatican City', image: '/assets/images/vatican.jpg', description: 'The world\'s smallest sovereign state, home to St. Peter\'s Basilica, the Sistine Chapel, and priceless art collections.' },
      { name: 'Pantheon', image: '/assets/images/pantheon.jpg', description: 'Ancient temple turned church, featuring the world\'s largest unreinforced concrete dome with its famous oculus.' },
      { name: 'Roman Forum', image: '/assets/images/roman-forum.jpg', description: 'The political and social heart of ancient Rome, where temples, basilicas, and arches tell the story of the Republic and Empire.' }
    ],
    food: [
      { name: 'Carbonara', image: '/assets/images/carbonara.jpg', description: 'Silky pasta with guanciale, egg yolks, Pecorino Romano, and black pepper — no cream, ever.' },
      { name: 'Cacio e Pepe', image: '/assets/images/cacio-e-pepe.jpg', description: 'Minimalist perfection: tonnarelli, Pecorino Romano, and freshly cracked black pepper emulsified into silk.' },
      { name: 'Supplì', image: '/assets/images/suppli.jpg', description: 'Fried rice balls with a molten mozzarella center, the ultimate Roman street food snack.' }
    ],
    neighborhoods: [
      { name: 'Trastevere', description: 'Cobblestone lanes, ivy-draped buildings, and lively piazzas packed with authentic trattorias and wine bars.' },
      { name: 'Monti', description: 'Rome\'s creative quarter near the Colosseum, blending vintage shops, artisan workshops, and hidden courtyards.' },
      { name: 'Testaccio', description: 'Former slaughterhouse district turned foodie paradise, home to the market where Roman cuisine was born.' },
      { name: 'Prati', description: 'Elegant grid of streets near the Vatican, known for upscale shopping, pastry shops, and refined dining.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'April–June and September–October for pleasant weather and manageable crowds.',
      recommendedStay: '4–5 days to see the major sites without rushing; a week allows deeper exploration.',
      tips: [
        'Book Vatican Museums and Colosseum tickets online weeks in advance to skip long lines.',
        'Dress modestly (covered shoulders and knees) for entry into churches, including the Pantheon.',
        'Tap water from Rome\'s 2,500+ nasoni fountains is cold, clean, and free — bring a reusable bottle.',
        'Validate paper bus/tram tickets in the yellow machines onboard; contactless payment works on metro gates.'
      ]
    }
  },
  {
    id: 'venice',
    name: 'Venice',
    tagline: 'The City of Canals',
    heroImage: '/assets/images/Venice.jfif',
    about: [
      'Venice floats on a lagoon like a dream — 118 islands stitched together by 400 bridges, where canals replace streets and gondolas glide past palaces that have stood for centuries. There are no cars, no scooters, only the lapping of water against ancient foundations and the echo of footsteps on stone.',
      'Beyond St. Mark\'s Square lies a city of quiet campi (squares), hidden courtyards, and artisan workshops where glassblowers, mask-makers, and bookbinders keep centuries-old crafts alive. Each sestiere (district) has its character: San Marco\'s grandeur, Cannaregio\'s local rhythm, Dorsoduro\'s art scene, Castello\'s maritime soul.',
      'Venice is fragile and eternal. The acqua alta floods the piazzas, the tourism crowds the calli, yet the city endures. Visit in the early morning or late evening when the day-trippers have gone, and you\'ll hear Venice breathe — the creak of a gondola\'s oar, the chime of a distant campanile, the scent of brine and cicchetti from a bacaro doorway.'
    ],
    famousPlaces: [
      { name: 'St. Mark\'s Square', image: '/assets/images/st-marks-square.jpg', description: 'Venice\'s drawing room, framed by the Basilica, Campanile, and Doge\'s Palace — the ceremonial heart of the Republic.' },
      { name: 'Rialto Bridge', image: '/assets/images/rialto-bridge.jpg', description: 'The oldest bridge spanning the Grand Canal, lined with shops and offering iconic views of the waterway.' },
      { name: 'Grand Canal', image: '/assets/images/grand-canal.jpg', description: 'Venice\'s main artery, a reverse-S curve lined with palazzi showcasing Gothic, Renaissance, and Baroque facades.' },
      { name: 'Doge\'s Palace', image: '/assets/images/doges-palace.jpg', description: 'Gothic masterpiece that was the seat of Venetian power, connected to the prisons by the Bridge of Sighs.' },
      { name: 'Burano', image: '/assets/images/burano.jpg', description: 'Colorful fishing island famous for lace-making and vibrant houses that guide fishermen home through fog.' }
    ],
    food: [
      { name: 'Cicchetti', image: '/assets/images/cicchetti.jpg', description: 'Venetian tapas — small bites like baccalà mantecato, sarde in saor, or polpette — eaten standing at a bacaro with a glass of wine.' },
      { name: 'Sarde in Saor', image: '/assets/images/sarde-in-saor.jpg', description: 'Sweet-and-sour sardines with onions, raisins, and pine nuts — a Venetian classic born from preservation needs.' },
      { name: 'Risotto al Nero di Seppia', image: '/assets/images/risotto-nero.jpg', description: 'Jet-black risotto colored with cuttlefish ink, rich, briny, and unmistakably Venetian.' }
    ],
    neighborhoods: [
      { name: 'Dorsoduro', description: 'Artistic district with the Accademia Gallery, Peggy Guggenheim Collection, and lively student bars near Campo Santa Margherita.' },
      { name: 'Cannaregio', description: 'Authentic residential area with the historic Jewish Ghetto, quiet canals, and excellent neighborhood bacari.' },
      { name: 'Castello', description: 'Venice\'s largest sestiere, home to the Arsenale shipyard, Biennale gardens, and everyday Venetian life.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'April–June and September–October; avoid July–August (heat, crowds) and November (acqua alta season).',
      recommendedStay: '3–4 nights to experience Venice beyond the day-trip circuit; 2 nights minimum for highlights.',
      tips: [
        'Stay overnight — Venice reveals its true character after the last vaporetto of day-trippers departs.',
        'Wear comfortable shoes with good grip; you\'ll walk miles on uneven stone and cross hundreds of bridges.',
        'Use vaporetti (water buses) for longer distances; buy a multi-day ACTV pass for unlimited rides.',
        'Reserve restaurants early, especially for dinner; many popular bacari don\'t take reservations but fill by 7 PM.'
      ]
    }
  },
  {
    id: 'florence',
    name: 'Florence',
    tagline: 'The Art City',
    heroImage: '/assets/images/florence.jpg',
    about: [
      'Florence is the cradle of the Renaissance, a compact city where every street corner reveals a masterpiece. The Duomo\'s red dome dominates the skyline, Brunelleschi\'s engineering marvel watching over streets that Michelangelo, Leonardo, and Dante once walked. Art isn\'t confined to museums here — it\'s in the piazzas, the church facades, the very pavement.',
      'The Arno River splits the city, crossed by the Ponte Vecchio where goldsmiths have traded for centuries. On the north bank: the Uffizi, the Accademia, the Medici chapels. On the south (Oltrarno): artisan workshops, hidden gardens, and a slower, more local rhythm. This is a city to savor — long lunches of bistecca alla fiorentina, sunset aperitivi overlooking the rooftops, evenings wandering lamp-lit streets.',
      'Florence rewards intimacy. The scale is human, the distances walkable, the concentration of beauty almost overwhelming. Give it time: climb to Piazzale Michelangelo at dawn, lose yourself in the Boboli Gardens, find a tiny enoteca where the owner pours Chianti Classico from a fiasco. Florence doesn\'t just show you the Renaissance — it lets you live in its aftermath.'
    ],
    famousPlaces: [
      { name: 'Duomo (Santa Maria del Fiore)', image: '/assets/images/duomo.jpg', description: 'Cathedral with Brunelleschi\'s revolutionary dome, Giotto\'s campanile, and the Baptistery\'s golden Gates of Paradise.' },
      { name: 'Ponte Vecchio', image: '/assets/images/ponte-vecchio.jpg', description: 'Medieval bridge spanning the Arno, lined with goldsmith shops since 1593 — the only Florentine bridge spared in WWII.' },
      { name: 'Uffizi Gallery', image: '/assets/images/uffizi.jpg', description: 'World-class museum housing Botticelli\'s Birth of Venus, Leonardo\'s Annunciation, and countless Renaissance masterpieces.' },
      { name: 'Piazzale Michelangelo', image: '/assets/images/piazzale-michelangelo.jpg', description: 'Panoramic terrace offering the iconic postcard view of Florence\'s rooftops, dome, and towers against the Tuscan hills.' },
      { name: 'Boboli Gardens', image: '/assets/images/boboli-gardens.jpg', description: 'Vast Medici gardens behind Palazzo Pitti, an open-air museum of sculpture, grottoes, and manicured landscapes.' }
    ],
    food: [
      { name: 'Bistecca alla Fiorentina', image: '/assets/images/bistecca.jpg', description: 'Thick-cut Chianina T-bone steak, grilled rare over charcoal, seasoned only with salt, pepper, and olive oil.' },
      { name: 'Ribollita', image: '/assets/images/ribollita.jpg', description: 'Hearty Tuscan bread soup with cannellini beans, kale, and vegetables — literally "reboiled" for deeper flavor.' },
      { name: 'Lampredotto', image: '/assets/images/lampredotto.jpg', description: 'Slow-cooked fourth stomach of cow, served in a crusty roll with salsa verde — Florence\'s ultimate street food.' }
    ],
    neighborhoods: [
      { name: 'Oltrarno', description: '"Beyond the Arno" — artisan quarter with workshops, antique shops, Santo Spirito piazza, and authentic Florentine life.' },
      { name: 'Santa Croce', description: 'Vibrant district around the basilica where Michelangelo and Galileo rest, known for leather markets and nightlife.' },
      { name: 'San Lorenzo', description: 'Market district with the Mercato Centrale food hall, Medici chapels, and the Basilica of San Lorenzo.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'April–June and September–October for mild weather; July–August is hot and crowded.',
      recommendedStay: '3–4 days for major museums and sites; 5+ days for day trips to Siena, Pisa, or Chianti.',
      tips: [
        'Book Uffizi and Accademia tickets months ahead for timed entry; walk-ins face hours-long waits.',
        'Many museums close on Mondays (Uffizi, Accademia, Palazzo Pitti); plan accordingly.',
        'The historic center is a ZTL (limited traffic zone) — avoid driving; park outside and walk or bus in.',
        'Drink tap water from public fountains; it\'s excellent and saves buying bottled water.'
      ]
    }
  },
  {
    id: 'milan',
    name: 'Milan',
    tagline: 'Fashion & Design Capital',
    heroImage: '/assets/images/milan.jpg',
    about: [
      'Milan is Italy\'s forward-looking metropolis — where Gothic spires meet glass towers, where Leonardo\'s Last Supper shares space with Prada\'s latest runway. The city moves fast: finance, fashion, design, and innovation converge in streets that have hosted emperors, artists, and entrepreneurs for two millennia.',
      'The Duomo\'s forest of marble pinnacles anchors the center, while the Galleria Vittorio Emanuele II — the world\'s oldest shopping arcade — gleams nearby. Brera\'s cobbled lanes hide art galleries and aperitivo bars; Navigli\'s canals pulse with nightlife; Porta Nuova\'s vertical forest towers redefine urban green space. Milan doesn\'t just follow trends; it sets them.',
      'Yet beneath the glamour lies deep tradition: saffron risotto perfected over generations, panettone baked in historic pasticcerie, neighborhood markets where nonne shop for the freshest produce. Milan rewards those who look beyond the surface — who venture into a courtyard workshop, linger over a long lunch, discover the city\'s quiet intensity.'
    ],
    famousPlaces: [
      { name: 'Duomo di Milano', image: '/assets/images/milan-duomo.jpg', description: 'Vast Gothic cathedral with 3,400 statues, 135 spires, and a rooftop you can walk among the pinnacles.' },
      { name: 'Galleria Vittorio Emanuele II', image: '/assets/images/galleria.jpg', description: '19th-century glass-vaulted arcade connecting Duomo to La Scala, housing luxury boutiques and historic cafés.' },
      { name: 'La Scala Opera House', image: '/assets/images/la-scala.jpg', description: 'Legendary opera theater where Verdi, Puccini, and Callas made history — visit the museum or catch a performance.' },
      { name: 'Santa Maria delle Grazie', image: '/assets/images/last-supper.jpg', description: 'Church housing Leonardo\'s Last Supper in its refectory — booking months ahead is essential.' },
      { name: 'Sforza Castle', image: '/assets/images/sforza-castle.jpg', description: 'Renaissance fortress housing Michelangelo\'s unfinished Rondanini Pietà and several civic museums.' }
    ],
    food: [
      { name: 'Risotto alla Milanese', image: '/assets/images/risotto-milanese.jpg', description: 'Golden saffron risotto slow-cooked with beef broth, bone marrow, and Parmigiano — Milan\'s signature dish.' },
      { name: 'Cotoletta alla Milanese', image: '/assets/images/cotoletta.jpg', description: 'Bone-in veal cutlet breaded and fried in butter until golden — the original Milanese, not to be confused with Wiener schnitzel.' },
      { name: 'Panettone', image: '/assets/images/panettone.jpg', description: 'Tall, dome-shaped sweet bread studded with candied fruit and raisins — Christmas tradition born in Milan.' }
    ],
    neighborhoods: [
      { name: 'Brera', description: 'Artistic heart with the Pinacoteca, antique shops, cobblestone lanes, and the city\'s best aperitivo scene.' },
      { name: 'Navigli', description: 'Canal district transformed from industrial to bohemian — vintage markets, street art, and vibrant nightlife.' },
      { name: 'Porta Venezia', description: 'Elegant liberty-style architecture, Indro Montanelli gardens, and Milan\'s historic LGBTQ+ quarter.' },
      { name: 'Isola', description: 'Former working-class island now a design hub with the Bosco Verticale towers and contemporary galleries.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'April–June and September–October; February (Fashion Week) and April (Design Week) are exciting but pricey and booked solid.',
      recommendedStay: '2–3 days for city highlights; 4+ days with day trips to Lake Como, Bergamo, or Franciacorta.',
      tips: [
        'Book Last Supper tickets 2–3 months in advance via the official website; only 25 people allowed per 15-minute slot.',
        'Duomo rooftop access requires a separate ticket; buy online to skip the line.',
        'Aperitivo (buy a drink, access the buffet) is a Milanese institution — go 7–9 PM for the best spreads.',
        'Metro is efficient but doesn\'t run 24/7; night buses (N lines) cover after-hours transport.'
      ]
    }
  },
  {
    id: 'amalfi',
    name: 'Amalfi Coast',
    tagline: 'Mediterranean Paradise',
    heroImage: '/assets/images/amalfi.jpg',
    about: [
      'The Amalfi Coast unfurls like a ribbon along southern Italy\'s cliffs — a UNESCO landscape of vertical villages, lemon terraces, and turquoise waters that has seduced travelers since Roman emperors built villas here. The SS163 road clings to the precipice, offering heart-stopping views at every hairpin turn.',
      'Each town has its soul: Amalfi\'s maritime grandeur, Positano\'s pastel cascade, Ravello\'s lofty gardens, Praiano\'s quiet authenticity. Boats zip between them, revealing sea caves, hidden beaches, and the silhouette of the coast glowing at sunset. This is la dolce vita at its most photogenic — but also a place of real communities, fishing traditions, and agriculture clinging to impossibly steep slopes.',
      'The coast rewards slowing down. Swim from a rocky cove, hike the Path of the Gods along the ridge, sip limoncello in a pergola scented with jasmine and citrus. Stay long enough to learn the rhythm of the ferries, to find the bakery where locals buy sfogliatelle, to watch the light change on the water from your terrace. The Amalfi Coast isn\'t just seen — it\'s felt.'
    ],
    famousPlaces: [
      { name: 'Positano', image: '/assets/images/positano.jpg', description: 'Vertical village of pastel houses tumbling to a pebble beach — the coast\'s most iconic and photogenic town.' },
      { name: 'Ravello', image: '/assets/images/ravello.jpg', description: 'Clifftop retreat famous for Villa Rufolo and Villa Cimbrone gardens, infinity views, and the Ravello Festival.' },
      { name: 'Amalfi Town', image: '/assets/images/amalfi-town.jpg', description: 'Former maritime republic with a striking striped cathedral, paper-making heritage, and vibrant piazza.' },
      { name: 'Path of the Gods', image: '/assets/images/path-of-gods.jpg', description: 'Spectacular ridge trail from Bomerano to Nocelle with panoramic views over the coast and Capri.' },
      { name: 'Fiordo di Furore', image: '/assets/images/furore-fjord.jpg', description: 'Hidden fjord-like inlet with a tiny fishing beach beneath a soaring bridge — a natural wonder off the main road.' }
    ],
    food: [
      { name: 'Scialatielli ai Frutti di Mare', image: '/assets/images/scialatielli.jpg', description: 'Thick handmade pasta with fresh seafood in a light tomato broth — the coast\'s signature pasta dish.' },
      { name: 'Delizia al Limone', image: '/assets/images/delizia-limone.jpg', description: 'Lemon sponge cake soaked in limoncello syrup, topped with lemon cream — a celebration of the coast\'s prized Sfusato Amalfitano lemons.' },
      { name: 'Alici di Cetara', image: '/assets/images/alici-cetara.jpg', description: 'Anchovies from the fishing village of Cetara, cured in salt or preserved in olive oil — umami essence of the Mediterranean.' }
    ],
    neighborhoods: [
      { name: 'Positano', description: 'Glamorous, vertical, and pedestrian-only — boutique hotels, linen shops, and restaurants with terrace views.' },
      { name: 'Ravello', description: 'Quiet, elevated, and cultural — gardens, concerts, and a pace that feels suspended above the coast\'s bustle.' },
      { name: 'Praiano', description: 'Authentic and less touristy — local fishing culture, genuine trattorias, and stunning sunsets over the Li Galli islands.' },
      { name: 'Maiori/Minori', description: 'Adjacent towns with the coast\'s longest beaches, Roman villa ruins, and a more relaxed, family-oriented atmosphere.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'May–June and September–October for swimming weather without peak crowds; July–August is packed and hot.',
      recommendedStay: '4–5 nights minimum to explore multiple towns; 7 nights allows boat trips to Capri and relaxed pacing.',
      tips: [
        'Do not rent a car — parking is nightmare, roads are terrifying; use SITA buses and ferries (Travelmar, NLG) instead.',
        'Book hotels and ferries months ahead for summer; many close November–March.',
        'Carry cash — many smaller restaurants, taxis, and beach clubs don\'t accept cards.',
        'Wear sturdy sandals or sneakers; the terrain is steep, stepped, and slippery when wet.'
      ]
    }
  },
  {
    id: 'cinque-terre',
    name: 'Cinque Terre',
    tagline: 'Colorful Seaside Villages',
    heroImage: '/assets/images/cinque-terre.jpg',
    about: [
      'Five centuries-old fishing villages cling to the Ligurian coast — Monterosso, Vernazza, Corniglia, Manarola, Riomaggiore — connected by trails, trains, and boats, but no cars. Terraced vineyards cascade down to the sea, dry-stone walls stitch the hillsides, and pastel houses cluster around tiny harbors. It\'s a UNESCO landscape shaped by human persistence against gravity.',
      'Each village has its character: Monterosso\'s sandy beach and resort feel, Vernazza\'s perfect harbor and castle, Corniglia\'s cliff-top perch (100m up, no direct sea access), Manarola\'s wine-scientist vibe and lovers\' walk, Riomaggiore\'s steep alleys and dramatic railway arrival. The Sentiero Azzurro trail links them all, offering views that define the Italian Riviera.',
      'Cinque Terre is fragile — overtourism threatens its charm, and climate change erodes its trails. Visit respectfully: stay overnight (day-trippers flood 10 AM–4 PM), hike early, eat at family-run trattorias, buy local wine (Sciacchetrà, Vermentino). The magic reveals itself at 7 AM on the trail, at sunset in Vernazza\'s piazza, in the taste of pesto made with basil from these very terraces.'
    ],
    famousPlaces: [
      { name: 'Vernazza Harbor', image: '/assets/images/vernazza.jpg', description: 'Natural amphitheater of colorful houses around a tiny pier — the most photographed spot in Cinque Terre.' },
      { name: 'Manarola\'s Via dell\'Amore', image: '/assets/images/via-amore.jpg', description: 'Lovers\' walk carved into the cliff between Manarola and Riomaggiore — romantic, scenic, currently partially closed for safety.' },
      { name: 'Monterosso Beach', image: '/assets/images/monterosso.jpg', description: 'The only proper sandy beach in the five villages, with a promenade, umbrellas, and gentle swimming.' },
      { name: 'Corniglia\'s Terrace', image: '/assets/images/corniglia.jpg', description: 'Cliff-top village reached by 382 steps (or shuttle) — quiet, elevated, with stunning vineyard views.' },
      { name: 'Riomaggiore Sunset', image: '/assets/images/riomaggiore.jpg', description: 'Steep alleys descending to a dramatic harbor — the classic golden-hour photo spot from the railway overpass.' }
    ],
    food: [
      { name: 'Trofie al Pesto', image: '/assets/images/trofie-pesto.jpg', description: 'Short twisted pasta with Genovese pesto — basil, pine nuts, Parmigiano, Pecorino, garlic, and Ligurian olive oil.' },
      { name: 'Anchovies (Acciughe)', image: '/assets/images/anchovies.jpg', description: 'Fresh or salt-cured anchovies from the Ligurian Sea — marinated, fried, or in torta di acciughe with potatoes and onions.' },
      { name: 'Farinata', image: '/assets/images/farinata.jpg', description: 'Chickpea flour flatbread baked in wood ovens — crisp edges, creamy center, best eaten hot with black pepper.' }
    ],
    neighborhoods: [
      { name: 'Vernazza', description: 'The jewel — car-free harbor, castle ruins, cliffside cemetery, and the most complete village experience.' },
      { name: 'Manarola', description: 'Wine country — Sciacchetrà production, swimming from rocks, and the iconic view from Nessun Dorma terrace.' },
      { name: 'Monterosso al Mare', description: 'Largest village with hotels, beach clubs, lemon groves, and the only vehicle access (limited).' },
      { name: 'Corniglia', description: 'The quiet one — perched high, surrounded by vineyards, reached by stairs or shuttle, authentically local.' }
    ],
    goodToKnow: {
      bestTimeToVisit: 'April–June and September–October; July–August is extremely crowded and hot; some trails close in winter.',
      recommendedStay: '3–4 nights to hike between villages and swim; 2 nights minimum for highlights (but you\'ll miss the magic).',
      tips: [
        'Buy the Cinque Terre Card (train + trails) or Treno MS Card for unlimited regional trains between La Spezia and Levanto.',
        'Hike early (7–9 AM) or late (after 5 PM) to avoid heat and crowds on the Sentiero Azzurro; check trail status online.',
        'Stay in Levanto or La Spezia for better value and train access if village hotels are full or overpriced.',
        'Bring a reusable water bottle — refill at fountains; plastic bottles are discouraged in the national park.'
      ]
    }
  }
];

export function getDestinationDetail(id: string): DestinationDetail | undefined {
  return DESTINATION_DETAILS.find(d => d.id === id);
}

export function getAllDestinationIds(): string[] {
  return DESTINATION_DETAILS.map(d => d.id);
}

export function getPreviousDestinationId(id: string): string | undefined {
  const index = DESTINATION_DETAILS.findIndex(d => d.id === id);
  if (index <= 0) return undefined;
  return DESTINATION_DETAILS[index - 1].id;
}

export function getNextDestinationId(id: string): string | undefined {
  const index = DESTINATION_DETAILS.findIndex(d => d.id === id);
  if (index < 0 || index >= DESTINATION_DETAILS.length - 1) return undefined;
  return DESTINATION_DETAILS[index + 1].id;
}