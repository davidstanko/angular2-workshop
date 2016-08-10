import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation';
import { ProjectListComponent } from './project-list';
import { EmployeeListComponent } from './employee-list';

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      { path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    redirectTo: '/home/projects',
    pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
