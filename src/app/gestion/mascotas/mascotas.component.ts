import { Component } from '@angular/core';
import { Mascotas } from './mascotas';
import { MascotasService } from "./mascotas.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {
  listaMascotas: Mascotas[] = [];

  constructor(private router: Router) {}

  irAFormulario() {
    this.router.navigate(['/nueva-mascota']);
  }

  guardarMascotaEnLista(mascota: Mascotas) {
    // Agregar la mascota a la lista
    this.listaMascotas.push(mascota);
  }
}
