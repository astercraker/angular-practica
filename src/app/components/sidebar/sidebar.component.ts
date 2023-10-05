import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {
  faPlus,
  faPenToSquare,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faList = faList;

  searchTerm = new FormControl('');
  http = inject(HttpClient);
  router = inject(Router);

  ngOnInit() {
    this.searchTerm.valueChanges
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((res: any) => {
        this.router.navigate(['/dashboard/busqueda', res]);
        // this.router.navigate(['/dashboard/update', id, JSON.stringify(tarjeta)]);
      });
  }
}
