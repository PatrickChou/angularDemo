import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'index',
    loadChildren: './webapp/webapp.module#WebappModule'
  }
];

