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
        path: ':id',
        component: DestinationDetailComponent,
      },
    ],
  },
];
