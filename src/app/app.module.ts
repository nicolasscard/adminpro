import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import {APP_ROUTES} from './app.routes';

//Modules
import {PagesModule} from './pages/pages.module';
import {FormsModule} from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
//import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
//import {IncrementadorComponent} from './components/incrementador/incrementador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    //GraficoDonaComponent,
    //IncrementadorComponent
  ],
  imports: [  //Guardo todos los modulos que voy utilizando
    BrowserModule,
    APP_ROUTES,
    PagesModule, //SharedModule esta incluido dentro de PagesModule, por lo que no es necesario volverlo a incluir
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
