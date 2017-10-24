import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { IPersona } from '../_models/i-persona';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  oListPersonas:IPersona[]=[];
  @Output() enviarDatos = new EventEmitter();
  
  constructor(private oAppService:AppService) { }

  ngOnInit() {
    this.getPersona();
  }

  getPersona(){
    this.oAppService.getPersona().subscribe(data=>
      this.oListPersonas = data
    );
  }

  eliminarPersona(idPersona):void{
    if(confirm("Esta seguro de eliminar") == true){
      this.oAppService.deletePersona(idPersona).subscribe(data=>
        this.getPersona()
      );
    }
  }

  editarPersonaPersona(oPersona):void{
    console.log(oPersona);
    this.enviarDatos.emit(oPersona);
  }

}
