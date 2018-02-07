import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {



    /*
      then: codigo que se ejecuta cuando termina la promesa
        - puedo recibir como parametro un mensaje del resolve
      En este caso estoy llamando a una funcion qm devuelve una promesa,
      por lo cual, puedo acceder a los metodos then y catch
     */
    this.contarTres().then(
      mensaje => console.log('Termino Promesa: ',mensaje)
    )// catch: codigo que se ejecuta cuando hubo un error en la promesa
    .catch( error => console.error('Error en la promesa: ', error));

   }

   contarTres():Promise<boolean>{
     /* PROMESAS: Para realizar tareas pequeña en forma asíncrona
         - resolve: funcion q se llama cuando termino correctamente
         - reject: funcion q se llama cuando hubo un error (se puede programar manual)
      */
     return new Promise( (resolve, reject) => {
       let contador = 0;

       /* setInterval: Ejecutar repetitivamente codigo cada cierto tiempo
           - como parametro debemos agregar una función con el código q queremos q ejecute
       */
       let intervalo = setInterval( () => {
         contador +=1;
         console.log(contador);

         if(contador == 3){

           //indico que termina la promesa, puedo enviar un parametro
           resolve(true);

           //Puedo establecer un error con un mensaje
           //reject('Hubo un error programado');

           //esto linpia el interval y lo detiene (debo declararlo en una variable)
           clearInterval(intervalo);
         }
       },1000 );

     });

   }

  ngOnInit() {
  }

}
