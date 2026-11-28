import { RenderMode, ServerRoute } from '@angular/ssr';
import { getAllDestinationIds } from './features/italy/data/destination-details.data';
import { getAllExperienceIds } from './features/italy/data/experience-details.data';
import { getAllDestinationIds as getAllSpainDestinationIds } from './features/spain/data/destination-details.data';
import { SPAIN_EXPERIENCES } from './features/spain/data/spain-experiences.data';
import { getAllExperienceIds as getAllSpainExperienceIds } from './features/spain/data/experience-details.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'italy/destinations/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const destinationIds = getAllDestinationIds();
      return destinationIds.map(id => ({ id }));
    }
  },
  {
    path: 'italy/experiences/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const experienceIds = getAllExperienceIds();
      return experienceIds.map(id => ({ id }));
    }
  },
  {
    path: 'spain/destinations/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const destinationIds = getAllSpainDestinationIds();
      return destinationIds.map(id => ({ id }));
    }
  },
  {
    path: 'spain/experiences/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const ids = [...SPAIN_EXPERIENCES.map((e) => e.id), ...getAllSpainExperienceIds()];
      return ids.map((id) => ({ id }));
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
