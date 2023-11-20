import { Injectable } from '@angular/core';
import { Mascotas } from './mascotas';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  // Lista inicial de mascotas
  lista = [
    {"id": 1, "nombres": "Mascota1", "dueña": "Dueña1", "edad": 3, "direccion": "Calle 1, Ciudad", "correo": "mascota1@correo.com", "celular": "123-456-7890"},
    {"id": 2, "nombres": "Mascota2", "dueña": "Dueña2", "edad": 5, "direccion": "Calle 2, Ciudad", "correo": "mascota2@correo.com", "celular": "234-567-8901"},
    {"id": 3, "nombres": "Mascota3", "dueña": "Dueña3", "edad": 2, "direccion": "Calle 3, Ciudad", "correo": "mascota3@correo.com", "celular": "345-678-9012"}
  ];

  // Método para agregar una nueva mascota
  agregarMascota(mascota: Mascotas) {
    // Asigna un nuevo id a la mascota
    mascota.id = this.lista.length + 1;

    // Agrega la nueva mascota a la lista
    // @ts-ignore
    this.lista.push(mascota);
  }

  // Método para obtener la lista de mascotas
  obtenerListaMascotas() {
    return this.lista;
  }
}
