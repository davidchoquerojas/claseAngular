import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { IPersona } from './_models/i-persona';

@Injectable()
export class AppService {
  oPersonaObserver:Observable<IPersona[]>;

  constructor(private http:Http) { }

  getPersona():Observable<IPersona[]>{
    return this.oPersonaObserver = this.http.get("http://localhost:3000/personas").map(data=>{
      return data.json();
    });
  }

  postPersona(oPersona:IPersona):Observable<IPersona[]>{
    return this.oPersonaObserver = this.http.post("http://localhost:3000/personas",oPersona).map(data=>{
      return data.json();
    });
  }
  deletePersona(idPersona):Observable<IPersona[]>{
    return this.oPersonaObserver = this.http.delete("http://localhost:3000/personas/"+idPersona).map(data=>{
      return data.json();
    });
  }
  updatePersona(oPersona:IPersona):Observable<IPersona[]>{
    return this.oPersonaObserver = this.http.put("http://localhost:3000/personas/"+oPersona.id,oPersona).map(data=>{
      return data.json();
    });
  }
}
