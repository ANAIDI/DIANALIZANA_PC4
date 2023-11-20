import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieAppComponent } from './pie-app/pie-app.component';
import { CabeceraAppComponent } from './cabecera-app/cabecera-app.component';
import { CarruselComponent } from './carrusel/carrusel.component';



@NgModule({
  declarations: [
    PieAppComponent,
    CabeceraAppComponent,
    CarruselComponent
  ],
  exports: [
    PieAppComponent,
    CabeceraAppComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UtilesModule { }
