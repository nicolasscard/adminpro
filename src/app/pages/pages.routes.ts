import { RouterModule, Routes } from '@angular/router';

import {PagesComponent} from './pages.component';

import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Graficas1Component} from './graficas1/graficas1.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {PromesasComponent} from './promesas/promesas.component';
import {RxjsComponent} from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [

      //Con la propiedad 'data' puedo enviar variables a la página, e incluir mucha información a la misma
      {path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' }},
      {path: 'progress', component: ProgressComponent, data: { titulo: 'ProgressBars' }},
      {path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' }},
      {path: 'promesas', component: PromesasComponent, data: { titulo: 'Promesas' }},
      {path: 'rxjs', component: RxjsComponent, data: { titulo: 'RxJs' }},
      {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de Tema' }},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

//cuando no es el archivo principal de las rutas (app.routes)
//en lugar de utilziar forRoot, se utiliza forChild
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
