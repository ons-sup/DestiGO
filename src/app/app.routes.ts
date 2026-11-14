import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'destinations', loadComponent: () => import('./pages/destinations/destinations.component').then(m => m.DestinationsComponent) },
  { path: 'experiences', loadComponent: () => import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent) },
  { path: 'plan-your-trip', loadComponent: () => import('./pages/plan-your-trip/plan-your-trip.component').then(m => m.PlanYourTripComponent) },
  { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'favorites', loadComponent: () => import('./pages/favorites/favorites.component').then(m => m.FavoritesComponent) },
  { path: '**', redirectTo: '' }
];