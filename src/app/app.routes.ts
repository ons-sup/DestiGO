import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'DestiGO — Choose your destination',
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
];
