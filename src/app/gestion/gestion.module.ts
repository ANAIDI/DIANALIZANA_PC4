import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from './mascotas/mascotas.component';
import { HistorialClinicaComponent } from './historial-clinica/historial-clinica.component';

import {ReactiveFormsModule} from "@angular/forms";
import {FormularioMascotaComponent} from "./formulario-mascota/formulario-mascota.component";

@NgModule({
  declarations: [
    MascotasComponent,
    HistorialClinicaComponent,
    FormularioMascotaComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ],
  exports: [
    MascotasComponent,
    HistorialClinicaComponent,
    FormularioMascotaComponent


  ]
})
export class GestionModule { }
