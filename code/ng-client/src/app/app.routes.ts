import { provideRouter, RouterConfig } from '@angular/router';
import { NavigationComponent } from './navigation';
import { ProjectListComponent } from './project-list';
import {EmployeeListComponent} from './employee-list/employee-list.component';

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'}
    ]
  },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
