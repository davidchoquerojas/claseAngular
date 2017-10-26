import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';

import { AppService } from './app.service';
import { HttpModule } from '@angular/http';

import {AppRoutingModule} from './app-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
