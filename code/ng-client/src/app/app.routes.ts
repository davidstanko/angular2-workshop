import { provideRouter, RouterConfig } from '@angular/router';
import { TimesheetListComponent } from './timesheet-list';
import { LoginComponent } from './login';
import { NavigationComponent } from './navigation';
import { ProjectListComponent } from './project-list';
import { EmployeeListComponent } from './employee-list';
import { ProjectNewComponent } from './project-new/project-new.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import {EmployeeNewComponent} from './employee-new/employee-new.component';

export const routes: RouterConfig = [
  {
    path: 'home',
    component: NavigationComponent,
    children: [
      { path: 'projects', component: ProjectListComponent, pathMatch: 'full'},
      { path: 'projects/new', component: ProjectNewComponent, pathMatch: 'full'},
      { path: 'employees', component: EmployeeListComponent, pathMatch: 'full'},
      { path: 'employees/new', component: EmployeeNewComponent },
      { path: 'timesheets', component: TimesheetListComponent, pathMatch: 'full' },
      { path: 'timesheets/:id', component: TimesheetComponent },
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
