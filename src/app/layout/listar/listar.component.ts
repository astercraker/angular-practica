import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css'],
})
export class ListarComponent {
  http = inject(HttpClient);
  @Input() data: any;

  ngOnInit(): void {
    this.http
      .get('https://app.gosummus.com/testing/api/tarjetas')
      .subscribe((response) => {
        this.data = response;
      });
  }
}
