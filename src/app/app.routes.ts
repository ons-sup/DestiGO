import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'turkey',
    loadChildren: () => import('./features/turkey/turkey.routes').then((m) => m.TURKEY_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'italy',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'italy/destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent),
  },
  {
    path: 'italy/destinations/:id',
    loadComponent: () => import('./features/italy/components/destination-detail/destination-detail.component').then(m => m.DestinationDetailComponent),
  },
  {
    path: 'italy/experiences',
    loadComponent: () => import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent),
  },
  {
    path: 'italy/experiences/:id',
    loadComponent: () => import('./features/italy/components/experience-detail/experience-detail.component').then(m => m.ExperienceDetailComponent),
  },
  {
    path: 'italy/plan-your-trip',
    loadComponent: () => import('./pages/plan-your-trip/plan-your-trip.component').then(m => m.PlanYourTripComponent),
  },
  {
    path: 'italy/about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'italy/favorites',
    loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent),
  },
  {
    path: 'destinations',
    loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent),
  },
  {
    path: 'destinations/:id',
    loadComponent: () => import('./features/italy/components/destination-detail/destination-detail.component').then(m => m.DestinationDetailComponent),
  },
  {
    path: 'experiences',
    loadComponent: () => import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent),
  },
  {
    path: 'experiences/:id',
    loadComponent: () => import('./features/italy/components/experience-detail/experience-detail.component').then(m => m.ExperienceDetailComponent),
  },
  {
    path: 'plan-your-trip',
    loadComponent: () => import('./pages/plan-your-trip/plan-your-trip.component').then(m => m.PlanYourTripComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'favorites',
    loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent),
  },
  { path: '**', redirectTo: '' }
];
