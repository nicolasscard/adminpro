//Angular Modules
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

//Components
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [  //Modules
    RouterModule,
    CommonModule
  ],
  declarations: [ //Componentes
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  providers: [],  //Services
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
