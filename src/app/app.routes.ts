import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListCompareComponent } from './components/list-compare/list-compare.component';

const routes: Routes = [{
    component: HomeComponent,
    path: '',
  },
  {
    component: HomeComponent,
    path: 'foo',
  },
  {
    component: ListCompareComponent,
    path: 'compare',
  },
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
