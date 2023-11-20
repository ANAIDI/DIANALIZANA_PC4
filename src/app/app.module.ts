import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UtilesModule} from "./utiles/utiles.module";
import {CitaModule} from "./cita/cita.module";
import {GestionModule} from "./gestion/gestion.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UtilesModule,
    CitaModule,
    GestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
