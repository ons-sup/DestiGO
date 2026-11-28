import { Routes } from '@angular/router';
import { SpainComponent } from './spain.component';
import { SpainHomeComponent } from './pages/spain-home/spain-home.component';
import { DestinationDetailComponent } from './components/destination-detail/destination-detail.component';

export const SPAIN_ROUTES: Routes = [
  {
    path: '',
    component: SpainComponent,
    children: [
      { path: '', component: SpainHomeComponent },
      {
        path: 'destinations',
        loadComponent: () =>
          import('./pages/spain-destinations/spain-destinations.component').then(
            (m) => m.SpainDestinationsComponent,
          ),
      },
      { path: 'destinations/:id', component: DestinationDetailComponent },
      {
        path: 'experiences',
        loadComponent: () =>
          import('./pages/spain-experiences/spain-experiences.component').then(
            (m) => m.SpainExperiencesComponent,
          ),
      },
      {
        path: 'experiences/:id',
        loadComponent: () =>
          import('./pages/spain-experience-detail/spain-experience-detail.component').then(
            (m) => m.SpainExperienceDetailComponent,
          ),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/spain-about/spain-about.component').then((m) => m.SpainAboutComponent),
      },
      {
        path: 'plan-your-trip',
        loadComponent: () =>
          import('./pages/spain-plan-your-trip/spain-plan-your-trip.component').then(
            (m) => m.SpainPlanYourTripComponent,
          ),
      },
      {
        path: 'favorites',
        loadComponent: () =>
          import('./pages/spain-favorites/spain-favorites.component').then(
            (m) => m.SpainFavoritesComponent,
          ),
      },
      {
        path: 'photo-credits',
        loadComponent: () =>
          import('./pages/spain-photo-credits/spain-photo-credits.component').then(
            (m) => m.SpainPhotoCreditsComponent,
          ),
      },
    ],
  },
];
