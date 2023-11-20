import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioCitaComponent} from "./cita/formulario-cita/formulario-cita.component";
import {MascotasComponent} from "./gestion/mascotas/mascotas.component";
import {CarruselComponent} from "./utiles/carrusel/carrusel.component";
import {PagoComponent} from "./cita/pago/pago.component";
import {FormularioMascotaComponent} from "./gestion/formulario-mascota/formulario-mascota.component";

const routes: Routes = [
  { path: '', redirectTo: 'principal', pathMatch: 'full'} ,
  { path: 'principal', component: CarruselComponent},
  { path: 'mascotas', component: MascotasComponent},
  { path: 'cita', component:PagoComponent },
  { path: 'nueva-mascota', component: FormularioMascotaComponent },
  { path: 'lista-mascotas', component: MascotasComponent },
  { path: '**', redirectTo: 'principal' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
