import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  tarjetaForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.tarjetaForm = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      fecha: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.tarjetaForm.valid) {
      const formData = this.tarjetaForm.value;

      // Realizar la solicitud POST utilizando HttpClient
      this.http
        .put('https://app.gosummus.com/testing/api/tarjeta', formData)
        .subscribe(
          (response) => {
            // Manejar la respuesta del servidor aquí
            console.log('Respuesta del servidor:', response);
          },
          (error) => {
            // Manejar errores aquí
            console.error('Error en la solicitud:', error);
          }
        );
    }
  }
}
