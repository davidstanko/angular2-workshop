import {Component, OnInit, Input} from '@angular/core';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {Timesheet} from '../shared/Timesheet';
import {TimesheetCompletePipe} from './timesheet-complete.pipe';

@Component({
  selector: 'app-timesheet-detail',
  templateUrl: 'timesheet-detail.component.html',
  styleUrls: ['timesheet-detail.component.scss'],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  pipes: [TimesheetCompletePipe]
})
export class TimesheetDetailComponent {

  @Input()
  timesheet: Timesheet;

  @Input()
  dateFormat: string;

  constructor() {}

}
