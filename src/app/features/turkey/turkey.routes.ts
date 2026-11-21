import { Routes } from '@angular/router';
import { TurkeyComponent } from './turkey.component';
import { TurkeyHomeComponent } from './pages/turkey-home/turkey-home.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';

export const TURKEY_ROUTES: Routes = [
  {
    path: '',
    component: TurkeyComponent,
    children: [
      {
        path: '',
        component: TurkeyHomeComponent,
      },
      {
        path: 'destinations',
        loadComponent: () =>
          import('./pages/turkey-destinations/turkey-destinations.component').then(
            (m) => m.TurkeyDestinationsComponent,
          ),
      },
      {
        path: 'destinations/:id',
        component: DestinationDetailComponent,
      },
      {
        path: 'experiences',
        loadComponent: () =>
          import('./pages/turkey-experiences/turkey-experiences.component').then(
            (m) => m.TurkeyExperiencesComponent,
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/turkey-about/turkey-about.component').then(
            (m) => m.TurkeyAboutComponent,
          ),
      },
      {
        path: 'plan-your-trip',
        loadComponent: () =>
          import('./pages/turkey-plan-your-trip/turkey-plan-your-trip.component').then(
            (m) => m.TurkeyPlanYourTripComponent,
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('../../pages/favorites/favorites.component').then((m) => m.FavoritesComponent),
      },
      {
        path: ':id',
        redirectTo: 'destinations/:id',
        pathMatch: 'full',
      },
    ],
  },
];
