import type { TripPlan, TravelStyle, BudgetRange, ItineraryDay } from '../../pages/plan-your-trip/plan-your-trip.data';

export const SPAIN_DESTINATIONS_FOR_PLANNING = [
  'Madrid',
  'Barcelona',
  'Seville',
  'Valencia',
  'Granada',
  'Mallorca'
];

export function generateSpainItinerary(plan: TripPlan): ItineraryDay[] {
  const activitiesByDestination: Record<string, string[]> = {
    'Madrid': ['Royal Palace', 'Prado Museum', 'Retiro Park', 'Plaza Mayor', 'Tapas tour'],
    'Barcelona': ['Sagrada Familia', 'Park Güell', 'Gothic Quarter', 'La Rambla', 'Beach time'],
    'Seville': ['Alcázar', 'Seville Cathedral', 'Plaza de España', 'Triana flamenco', 'Tapas crawl'],
    'Valencia': ['City of Arts and Sciences', 'Central Market', 'Turia Gardens', 'Paella lunch', 'Beach walk'],
    'Granada': ['Alhambra', 'Albaicín', 'Sacromonte', 'Tapas with drinks', 'Sunset viewpoint'],
    'Mallorca': ['Palma Cathedral', 'Serra de Tramuntana drive', 'Cala Mondragó', 'Sóller tram', 'Beach relax']
  };

  const mealsByBudget: Record<BudgetRange, { breakfast: string; lunch: string; dinner: string }> = {
    'budget': { breakfast: 'Café con leche & pastry', lunch: 'Menú del día', dinner: 'Tapas bar' },
    'mid-range': { breakfast: 'Hotel breakfast', lunch: 'Local restaurant', dinner: 'Nice restaurant with wine' },
    'luxury': { breakfast: 'Gourmet hotel breakfast', lunch: 'Fine dining', dinner: 'Michelin-starred dinner' }
  };

  const activities = activitiesByDestination[plan.destination] || activitiesByDestination['Madrid'];
  const meals = mealsByBudget[plan.budget];
  const activitiesPerDay = plan.travelStyle === 'relaxed' ? 2 : plan.travelStyle === 'balanced' ? 3 : 5;

  const itinerary: ItineraryDay[] = [];
  for (let i = 0; i < plan.days; i++) {
    const dayActivities = activities.slice(i * activitiesPerDay, (i + 1) * activitiesPerDay);
    if (dayActivities.length === 0) {
      const wrapped = activities.slice(0, activitiesPerDay);
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
