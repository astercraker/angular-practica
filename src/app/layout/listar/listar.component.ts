import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  http = inject(HttpClient);
  router = inject(Router);
  tarjetas: any[] = [];
  faPenToSquare = faPenToSquare;

  redirectToDashboardWithId(id: number, tarjeta: any) {
    // Redirige dinámicamente a la URL deseada
    console.log(tarjeta);
    this.router.navigate(['/dashboard/update', id, JSON.stringify(tarjeta)]);
  }

  ngOnInit(): void {
    this.http.get('https://app.gosummus.com/testing/api/tarjetas').subscribe({
      next: (data: any) => {
        console.log(data);
        this.tarjetas = data.tarjetas;
      },
      error: (e) => {
        console.log(e);
        alert('Error en el logueo');
      },
    });
  }
}
