import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCitaComponent } from './formulario-cita/formulario-cita.component';
import { PagoComponent } from './pago/pago.component';



@NgModule({
  declarations: [
    FormularioCitaComponent,
    PagoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CitaModule { }
