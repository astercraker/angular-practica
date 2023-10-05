import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
})
export class BusquedaComponent {
  tarjetas: any = [];
  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  ngOnInit(): void {
    //this.tarjetas = this.route.snapshot.paramMap.get('tarjetas');
    let busqueda = this.route.snapshot.paramMap.get('tarjetas');
    this.http
      .get('https://app.gosummus.com/testing/api/tarjeta/' + busqueda)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.tarjetas = data.tarjeta;
        },
        error: (e) => {
          console.log(e);
          alert('Error en el logueo');
        },
      });
  }
}
