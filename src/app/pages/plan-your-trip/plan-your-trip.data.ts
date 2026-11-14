export interface TripPlan {
  destination: string;
  days: number;
  travelStyle: TravelStyle;
  budget: BudgetRange;
  travelers: number;
}

export type TravelStyle = 'relaxed' | 'balanced' | 'packed';
export type BudgetRange = 'budget' | 'mid-range' | 'luxury';

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  meals: string[];
}

export const ITALY_DESTINATIONS_FOR_PLANNING = [
  'Rome',
  'Venice',
  'Florence',
  'Milan',
  'Amalfi Coast',
  'Cinque Terre'
];

export const TRAVEL_STYLES: { value: TravelStyle; label: string; description: string }[] = [
  { value: 'relaxed', label: 'Relaxed', description: 'Plenty of free time, 1-2 activities per day' },
  { value: 'balanced', label: 'Balanced', description: 'Mix of sightseeing and leisure, 3-4 activities per day' },
  { value: 'packed', label: 'Packed', description: 'Full days, 5+ activities, see everything possible' }
];

export const BUDGET_RANGES: { value: BudgetRange; label: string; description: string }[] = [
  { value: 'budget', label: 'Budget', description: 'Hostels, street food, public transport - €50-100/day' },
  { value: 'mid-range', label: 'Mid-Range', description: '3-4 star hotels, restaurants, mixed transport - €150-300/day' },
  { value: 'luxury', label: 'Luxury', description: '5-star hotels, fine dining, private transfers - €400+/day' }
];

export function generateItinerary(plan: TripPlan): ItineraryDay[] {
  const activitiesByDestination: Record<string, string[]> = {
    'Rome': ['Colosseum & Roman Forum', 'Vatican Museums & Sistine Chapel', 'Pantheon & Piazza Navona', 'Trastevere food tour', 'Villa Borghese gardens'],
    'Venice': ['St. Mark\'s Basilica & Doge\'s Palace', 'Grand Canal vaporetto ride', 'Rialto Bridge & Market', 'Murano & Burano islands', 'Dorsoduro art district'],
    'Florence': ['Uffizi Gallery', 'Duomo & Baptistery', 'Ponte Vecchio', 'Accademia (David)', 'Boboli Gardens'],
    'Milan': ['Duomo di Milano', 'Galleria Vittorio Emanuele II', 'La Scala Opera House', 'Sforza Castle', 'Navigli district aperitivo'],
    'Amalfi Coast': ['Positano beach day', 'Amalfi town & cathedral', 'Ravello gardens', 'Boat tour to Capri', 'Path of the Gods hike'],
    'Cinque Terre': ['Riomaggiore to Manarola hike', 'Vernazza harbor', 'Monterosso beach', 'Corniglia wine tasting', 'Sunset at Manarola']
  };

  const mealsByBudget: Record<BudgetRange, { breakfast: string; lunch: string; dinner: string }> = {
    'budget': { breakfast: 'Hotel/Cafe pastry', lunch: 'Street food/Pizza al taglio', dinner: 'Trattoria/Market dinner' },
    'mid-range': { breakfast: 'Hotel breakfast', lunch: 'Local restaurant', dinner: 'Nice restaurant with wine' },
    'luxury': { breakfast: 'Gourmet hotel breakfast', lunch: 'Michelin-starred lunch', dinner: 'Fine dining experience' }
  };

  const activities = activitiesByDestination[plan.destination] || activitiesByDestination['Rome'];
  const meals = mealsByBudget[plan.budget];
  const activitiesPerDay = plan.travelStyle === 'relaxed' ? 2 : plan.travelStyle === 'balanced' ? 3 : 5;

  const itinerary: ItineraryDay[] = [];
  for (let i = 0; i < plan.days; i++) {
    const dayActivities = activities.slice(i * activitiesPerDay, (i + 1) * activitiesPerDay);
    if (dayActivities.length === 0) {
      // Wrap around for extra days
      const remaining = dayActivities.length;
      const wrapped = activities.slice(0, activitiesPerDay - remaining);
      dayActivities.push(...wrapped);
    }

    itinerary.push({
      day: i + 1,
      title: `Day ${i + 1} in ${plan.destination}`,
      activities: dayActivities.length > 0 ? dayActivities : ['Free day to explore'],
      meals: [meals.breakfast, meals.lunch, meals.dinner]
    });
  }

  return itinerary;
}