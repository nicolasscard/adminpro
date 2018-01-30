import { NgModule } from '@angular/core';

//routes
import {PAGES_ROUTES} from './pages.routes';

/* MODULES */
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
//ng2-charts
import { ChartsModule } from 'ng2-charts';

/* COMPONENTS */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  providers: []
})
export class PagesModule { }
