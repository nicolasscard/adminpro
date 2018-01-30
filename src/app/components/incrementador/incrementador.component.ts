import { Component, OnInit, Input, Output, ViewChild, ElementRef,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    /*
    El parametro indica el nombre que le dimos al elemento utilizando #,
    luego va el nombre de variable que quiero utilizar
    Al final, va el tipo de variable que es ElementRef (debo importarlo)
    */
    @ViewChild('txtProgress') txtProgress:ElementRef;

    /* Input-Output:
        - Si no le envío nada, se utilizara los valores definidos por defecto en la construccion
        - Si le pongo un string como parametro, estoy cambiando de nombre a la variable en HTML,
            esto me obliga a tener q cambiar 'leyenda' por 'nombre' en el HTML del padre
    */
    @Input('nombre') leyenda: string = 'Leyenda';
    @Input() progreso: number = 50;

    @Output('actualizarValor') cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChanges(newValor:number){
      //console.log(this.txtProgress.nativeElement.value);

      if(newValor >=100){
          this.progreso=100;
      }
      else if(newValor <=0){
          this.progreso = 0;
      }
      else{
          this.progreso=newValor;
      }

      //Con esto evito que se escriba cualquier cosa en el input y se actualiza para todos los elementos
      this.txtProgress.nativeElement.value = this.progreso;

      /*esta instruccion es la que definitivamente actualiza el valor en la Barra
        ya que emite el evento que hace esta modificacion
      */
      this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor:number){
      if(this.progreso >=100 && valor > 0){
          this.progreso = 100;
          return;
      }
      if(this.progreso <=0 && valor < 0){
          this.progreso = 0;
          return;
      }

      this.progreso = this.progreso + valor;
      this.cambioValor.emit(this.progreso);

      //esto permite poner foco en el elemento para que se pueda escribir rapidamente un valor 
      this.txtProgress.nativeElement.focus();
  }

}
