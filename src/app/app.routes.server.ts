import { RenderMode, ServerRoute } from '@angular/ssr';
import { getAllDestinationIds } from './features/italy/data/destination-details.data';
import { getAllExperienceIds } from './features/italy/data/experience-details.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'destinations/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const destinationIds = getAllDestinationIds();
      return destinationIds.map(id => ({ id }));
    }
  },
  {
    path: 'experiences/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const experienceIds = getAllExperienceIds();
      return experienceIds.map(id => ({ id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
