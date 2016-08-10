import { Component, OnInit } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list/list';
import { Project } from '../shared';

@Component({
  selector: 'app-project-list',
  templateUrl: 'project-list.component.html',
  styleUrls: ['project-list.component.scss'],
  directives: [MD_LIST_DIRECTIVES],
  providers: []
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  ngOnInit() {
    this.projects = [
      new Project({name: 'Some Project', description: 'So cool'}),
      new Project({name: 'Another Project', description: 'This one is cool too'}),
      new Project({name: 'Bad Project', description: 'This one sucks'})
    ];
  }

}
