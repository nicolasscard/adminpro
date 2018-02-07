import { Component, OnInit } from '@angular/core';
import {Router, ActivationEnd} from '@angular/router';
import {filter} from 'rxjs/operator/filter';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';


@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  //cero una variable para guardar los titulos de página
  label: string = '';

  constructor(
    private router:Router,

    //variable angular para actualizar el titulo en la pestaña del navegador
    public title: Title,

    //variable de angular para gewstionar dinamicamente los metadatos del sitio
    public meta: Meta
   ) {

     // agregar a un servicio!!!
    //llamo a una función para que me devuelva el Observable que utiliza Router para gestionar las rutas
    this.getDataRoute()
      .subscribe( data => {

          //asigno el valor de titulo al label y a la pestaña del navegador
          this.label = data.titulo;
          this.title.setTitle(this.label);

          /*variable angular para guardar toda la información de un metatag
            - creo un arreglo de dicha variable para agregar varios metatags */
          let metaTag: MetaDefinition[] = [
            { name: 'description', content: this.label },
            { name: 'author', content: 'Nicolas Scardilla' }
          ];

          //actualizo el metatag de la pagina con las definiciones del MetaDefiniton
          for (let i = 0; i < metaTag.length; i++) {
              this.meta.updateTag(metaTag[i]);
          }

        });
  }

  getDataRoute(){
    /* Debo acceder al router para poder recoger la variable data que definimos en las propiedades del paginas.router
        - router.event permite acceder a todos los eventos que utilizan los router,
          los mismos son gestionados por Observables
    */
    return this.router.events
        //filtramos por los que se llaman ActivationEnd, son los que contienen la data que necesitamos (debo importarlos tambien, al igual q los filter)
        .filter( (evento) => evento instanceof ActivationEnd)
        .filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null)
        .map( (evento: ActivationEnd, index) => evento.snapshot.data );
  }

  ngOnInit() {
  }

}
