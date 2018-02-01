import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {SettingsService} from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  /* Realizo un inject del dom para poder tener acceso al mismo y poder hacer cambios en el*/
  constructor(
    @Inject(DOCUMENT) private _document,
    public _ajustes: SettingsService

  ) { }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(tema:string, link:any){

    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  aplicarCheck( link:any){

    // Creo un arreglo de elementos cuya clase es selector
    let selectores: any = document.getElementsByClassName('selector');

    /*Recorremos el selector para eliminar la clase working
      working: es la clase que marca al elemento con el check */
    for(let ref of selectores){
      ref.classList.remove('working');
    }

    //agrego el check al elemento qye seleccionamos
    link.classList.add('working');
  }

  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;

    for(let ref of selectores){
      if(ref.getAttribute('data-theme') === tema){
          ref.classList.add('working');
          break;
      }
    }

  }
}
