import { Component } from '@angular/core';
import {
  faPlus,
  faPenToSquare,
  faList,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  faPlus = faPlus;
  faPenToSquare = faPenToSquare;
  faList = faList;
}
