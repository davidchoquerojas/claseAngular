import { Component } from '@angular/core';
import{ IPersona } from './_models/i-persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  oPersona:IPersona; 
  constructor(){
    this.oPersona = {nombre:"",apellido:"",edad:0,estado:"",genero:""};
  }
  mostrar(){
    console.log(this.oPersona);
  }
}
