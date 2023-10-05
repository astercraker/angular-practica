import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  http = inject(HttpClient);
  router = inject(Router);
  email = new FormControl('parcial22@eam.edu.co');
  password = new FormControl('654321');

  login() {
    this.http
      .post('https://app.gosummus.com/testing/api/login', {
        email: this.email.value,
        password: this.password.value,
      })
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['/dashboard']);
        },
        error: (e) => {
          console.log(e);
          alert('Error en el logueo');
        },
      });
  }
}
