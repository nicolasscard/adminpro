import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
  El objetivo de este módulo es simplemente incluir en un solo lugar el 'providers' de todos los servicios,
  para que en un futuro yo puede moverlos de directorio sin tener que andar modificando sus dependencias
*/
import {
  SettingsService,
  SharedService,
  SidebarService
} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    SidebarService
  ],
  declarations: []
})
export class ServiceModule { }
