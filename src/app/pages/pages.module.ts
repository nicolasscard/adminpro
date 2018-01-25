import { NgModule } from '@angular/core';

//routes
import {PAGES_ROUTES} from './pages.routes';

//modules
import {SharedModule} from '../shared/shared.module';

//Components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
  imports: [
    SharedModule,
    PAGES_ROUTES
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  providers: []
})
export class PagesModule { }
