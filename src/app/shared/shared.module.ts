import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
  ],
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
  providers: [],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent
  ],
})
export class SharedModule { }
