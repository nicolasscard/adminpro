import { Injectable, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  }

  constructor(
    @Inject(DOCUMENT) private _document
  ) {
    this.cargarAjustes();
  }

  guardarAjustes(){

    /*localStorage es una variable de Angular que no hace falta inportar ni declarar para usar
      - setItem: 1er parametro nombre, 2do parametro un string (solo guarda string)
      - JSON.stringify: convierte un objeto en un string (no es necesario importar nada)
    */
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){

    if(localStorage.getItem('ajustes')){

      //JSON.parse: convierte un string en un objeto
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));

      this.aplicarTema(this.ajustes.tema);
    }
    else{
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema:string){
    /* Para cambiar el valor de un atributo de un elemento HTML */
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href', url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
