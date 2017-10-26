import { Component,OnInit } from '@angular/core';
import{ IPersona } from './_models/i-persona';
import { AppService } from './app.service';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit{

  title = 'app';
  
  constructor(private vAppService:AppService,private oFormBuilder:FormBuilder){
   
  }
  ngOnInit() { 
  }
}
