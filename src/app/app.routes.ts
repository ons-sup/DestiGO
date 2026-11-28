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
    path: 'spain',
    loadChildren: () => import('./features/spain/spain.routes').then((m) => m.SPAIN_ROUTES),
  },
  {
    path: 'spain-old',
    redirectTo: '/spain',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'italy',
    loadComponent: () => import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'destinations',
        loadComponent: () => import('./pages/destinations/destinations.component').then((m) => m.DestinationsComponent),
      },
      {
        path: 'destinations/:id',
        loadComponent: () => import('./features/italy/components/destination-detail/destination-detail.component').then((m) => m.DestinationDetailComponent),
      },
      {
        path: 'experiences',
        loadComponent: () => import('./pages/experiences/experiences.component').then((m) => m.ExperiencesComponent),
      },
      {
        path: 'experiences/:id',
        loadComponent: () => import('./features/italy/components/experience-detail/experience-detail.component').then((m) => m.ExperienceDetailComponent),
      },
      {
        path: 'plan-your-trip',
        loadComponent: () => import('./pages/plan-your-trip/plan-your-trip.component').then((m) => m.PlanYourTripComponent),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites/favorites.component').then((m) => m.FavoritesComponent),
      },
    ],
  },
  { path: 'destinations', redirectTo: 'italy/destinations', pathMatch: 'full' },
  { path: 'destination', redirectTo: 'italy/destinations', pathMatch: 'full' },
  { path: 'destination/:id', redirectTo: 'italy/destinations/:id', pathMatch: 'full' },
  { path: 'experiences', redirectTo: 'italy/experiences', pathMatch: 'full' },
  { path: 'about', redirectTo: 'italy/about', pathMatch: 'full' },
  { path: 'favorites', redirectTo: 'italy/favorites', pathMatch: 'full' },
  { path: 'plan-your-trip', redirectTo: 'italy/plan-your-trip', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
