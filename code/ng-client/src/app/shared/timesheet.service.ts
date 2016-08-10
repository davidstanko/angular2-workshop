import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from './extHttp.service';
import { User } from '../auth';
import { Timesheet } from './Timesheet';
import { TimeUnit } from './TimeUnit';

@Injectable()
export class TimesheetService {

  constructor(private http: ExtHttp) {
  }

  getTimesheets(user: User): Observable<Timesheet[]> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets`).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  getTimesheet(user: User, timesheetId: string): Observable<Timesheet> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}`).subscribe((response) => {
        observer.next(new Timesheet(response.json()));
      });
    });
  }

  getTimeUnits(user: User, timesheetId: string): Observable<any> {
    return Observable.create((observer) => {
      this.http.get(`/users/${user.id}/timesheets/${timesheetId}/timeunits`).subscribe((response) => {
        let units = response.json().map((data) => {
          let unit = new TimeUnit(data);
          return unit;
        });
        observer.next(units);
      });
    });
  }
}
