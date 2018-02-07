import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  // Permite guardar las subscripciones a observer para poder habilitarlas o deshabilitarlas
  subscription: Subscription;

  constructor() {

    /*
      utilizo una función para que genere el Observer y me lo devuelva
      asigno la subscripción a la variable subscription para controlarla
      .subscribe: Para poder recibir la información del observer me tengo que subcribir
    */
    this.subscription = this.regresaObservable()
      //.retry() - puedo uilizar el retry aquí si fuera necesario
      .subscribe(
      numero => console.log( 'Subs', numero),   //parametro q recibo del next
      error => console.log('Error en el obs', error), // parametro para contemplar el error
      () => console.log('El observador termino!!!!!!')  //parametro para contemplar finalización con exito
    );


  }

  ngOnInit() {
  }

  /*
    Este metodo se ejecuta automaticamente cuando nosotros salimos de una pagina,
    Es decir, estamos navegando en la pagina, y de repente nos vamos a otra.
    Esto permite que podamos detener Observers q esten activos hasta q regresemos.
  */
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  regresaObservable():Observable<any>{
    /*
      Observable: Para procesos asíncronos complejos (debo importar libreria)
        - solo utiliza un parametro que es el mismo observer con el código que necesitamos
    */
    return new Observable( observer => {
      let contador = 0;

      // setInterval: es un contador temporal
      let intervalo = setInterval( () => {
        contador += 1;

        let salida = {
          valor: contador
        };

        /* next: Permite poner el codigo que queremos q ocurra algo,
          en este caso, cada segundo q transcurre en el intervalo
          - este valor es el que se envia por parametros al map
        */
        observer.next( salida );


        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete(); //.complete() finaliza el observer
        // }

        // if(contador === 2){
        //   clearInterval(intervalo);
        //   observer.error('Auxilio'); //.error() para contemplar un error
        // }

      }, 500 );
    })
      /*  .retry: permite solicitar que se vuelva a intentar antes de mostrar un error
            - el parametro indica la cantidad de intentos que volvera a ejecutar el codigo
          .map: Permite enviar un valor especifico dentro de un objeto y no todo el objeto
            - Recibe lo que esta emitiendo el observador (observer.next)
          .filter: permite filtrar los valores que vamos recibiendo,
            una vez que ya fueron procesados por el .map
            - parametros:
              1 - el valor q mostrara el observer en cuestion
              2 - la cantidad de veces q se ha ejecutado en next
      */
      .retry(2)
      .map( (resp: any) => {
        return resp.valor;
      })
      .filter( (valor, index) => {

        if(valor % 2 === 1){
          //impar
          return true;
        }
        else {
          //par
          return false;
        }
      });

  }

}
