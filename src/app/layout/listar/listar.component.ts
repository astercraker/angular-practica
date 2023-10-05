import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  http = inject(HttpClient);
  tarjetas: any[] = [];

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
