import { Component } from '@angular/core';
import{ IPersona } from './_models/i-persona';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent {
  title = 'app';
  oPersona:IPersona; 
  constructor(private vAppService:AppService){
    this.oPersona = {id:0, nombre:"",apellido:"",edad:0,estado_civil:"",genero:""};
    /*this.vAppService.getPersona().subscribe(data=>{
      console.log(data);
    });*/
  }
  mostrar(){
    console.log(this.oPersona)
    if(this.oPersona.id > 0){
      this.vAppService.updatePersona(this.oPersona).subscribe(data=>{
        console.log(data);
      });
    }else{
      this.vAppService.postPersona(this.oPersona).subscribe(data=>{
        console.log(data);
      });
    }
    this.oPersona = {id:0, nombre:"",apellido:"",edad:0,estado_civil:"",genero:""};
  }
  recibirDatos(oPersona):void{
    console.log(oPersona);
    this.oPersona = oPersona;
  }
}
