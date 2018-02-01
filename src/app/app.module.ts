//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

//Routes
import {APP_ROUTES} from './app.routes';

//Personals Modules
import {PagesModule} from './pages/pages.module';
/*temporal*/import {FormsModule} from '@angular/forms';

//Services
import {ServiceModule} from './services/service.module';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
//import {IncrementadorComponent} from './components/incrementador/incrementador.component';


@NgModule({
  imports: [  //Guardo modulos
    BrowserModule,
    APP_ROUTES,
    PagesModule, //SharedModule esta incluido dentro de PagesModule, por lo que no es necesario volverlo a incluir
    FormsModule,
    ServiceModule //Como es un módulo debo incluirlo aquí también
  ],
  declarations: [ //Guardo Components
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //GraficoDonaComponent,
    //IncrementadorComponent
  ],
  providers: [],  // Guardo Servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
