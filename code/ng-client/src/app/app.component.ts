import { Component } from '@angular/core';
import {ProjectListComponent} from './project-list/project-list.component';

@Component({
  selector: 'app-root',
  directives: [ProjectListComponent],
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Hello MidwestJS!';
}
