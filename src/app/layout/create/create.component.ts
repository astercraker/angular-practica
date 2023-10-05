import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent {
  tarjetaForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.tarjetaForm = this.fb.group({
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      fecha: ['', Validators.required],
      cvv: ['', Validators.required],
      observaciones: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.tarjetaForm.valid) {
      const formData = this.tarjetaForm.value;

      // Realizar la solicitud POST utilizando HttpClient
      this.http
        .post('https://app.gosummus.com/testing/api/tarjeta', formData)
        .subscribe({
          next: (data: any) => {
            console.log(data);
          },
          error: (e) => {
            alert('Error al crear');
          },
        });
    }
  }
}
