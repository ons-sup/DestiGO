import { Routes } from '@angular/router';
import { SpainComponent } from './spain.component';
import { SpainHomeComponent } from './pages/spain-home/spain-home.component';
import { DestinationDetailComponent } from './pages/destination-detail/destination-detail.component';

export const SPAIN_ROUTES: Routes = [
  {
    path: '',
    component: SpainComponent,
    children: [
      { path: '', component: SpainHomeComponent },
      { path: ':id', component: DestinationDetailComponent },
    ],
  },
];
