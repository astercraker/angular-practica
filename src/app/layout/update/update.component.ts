import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent {
  route = inject(ActivatedRoute);
  tarjetaForm: FormGroup;
  id: string | null = null;
  tarjeta: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.tarjetaForm = this.fb.group({
      id: this.id,
      titular: ['', Validators.required],
      numero: ['', Validators.required],
      fecha: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Use ActivatedRoute to get the 'id' parameter from the URL
    this.id = this.route.snapshot.paramMap.get('id');
    this.tarjeta = this.route.snapshot.paramMap.get('tarjeta');
    this.tarjeta = JSON.parse(this.tarjeta);
    console.log(this.tarjeta);
    this.initForm();
  }

  initForm() {
    // Create a form model with default values
    const defaultFormValues = {
      _id: this.id,
      titular: this.tarjeta.titular,
      numero: this.tarjeta.numero,
      fecha: this.tarjeta.fecha,
      cvv: this.tarjeta.cvv,
      // Add more form controls with default values as needed
    };

    // Initialize the FormGroup with the default form values
    this.tarjetaForm = this.fb.group(defaultFormValues);
  }

  submitForm() {
    if (this.tarjetaForm.valid) {
      const formData = this.tarjetaForm.value;
      console.log(formData);
      // Realizar la solicitud POST utilizando HttpClient
      this.http
        .put('https://app.gosummus.com/testing/api/tarjeta', formData)
        .subscribe(
          (response) => {
            // Manejar la respuesta del servidor aquí
            alert('Se actualizo');
          },
          (error) => {
            // Manejar errores aquí
            alert('Error al actualizar');
          }
        );
    }
  }
}
