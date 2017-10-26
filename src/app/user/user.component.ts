import { Component,OnInit } from '@angular/core';
import{ IPersona } from '../_models/i-persona';
import { AppService } from '../app.service';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[AppService]
})
export class UserComponent implements OnInit {

  title = 'app';
  oPersona:IPersona; 
  oPersonaForm:FormGroup


  constructor(private vAppService:AppService,private oFormBuilder:FormBuilder){
    this.oPersona = {id:0, nombre:"",apellido:"",edad:0,estado_civil:"",genero:""};
    /*this.vAppService.getPersona().subscribe(data=>{
      console.log(data);
    });*/
  }
  ngOnInit() {
    this.oPersonaForm = this.getForm();
  }
  getForm(){
    return this.oFormBuilder.group({
      id:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      edad:['',Validators.required],
      estado_civil:['',Validators.required],
      genero:['',Validators.required]
    });
  }


  send(oPersona){
    console.log(oPersona);
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
