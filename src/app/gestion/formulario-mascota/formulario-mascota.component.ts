import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";


@Component({
  selector: 'app-formulario-mascota',
  templateUrl: './formulario-mascota.component.html',
  styleUrls: ['./formulario-mascota.component.css'],
})
export class FormularioMascotaComponent implements OnInit{
  mascotaForm: FormGroup = new FormGroup({});
  private listaMascotas: any;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.mascotaForm = this.fb.group({
      nombres: ['', Validators.required],
      duena: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(0)]],
      direccion: [''],
      correo: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.pattern('[0-9]{10}')]],
    });
  }
  guardarMascota() {
    if (this.mascotaForm.valid) {
      // Agregar la mascota a la lista
      this.listaMascotas.push(this.mascotaForm.value);

      // Lógica para guardar la mascota (si es necesario)
      console.log('Mascota guardada:', this.mascotaForm.value);

      // Redirigir a la lista de mascotas
      this.router.navigate(['/lista-mascotas']);
    }
  }
}


