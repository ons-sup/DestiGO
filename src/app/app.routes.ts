import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/turkey', pathMatch: 'full' },
  {
    path: 'turkey',
    loadChildren: () =>
      import('./features/turkey/turkey.routes').then((m) => m.TURKEY_ROUTES),
  },
];
