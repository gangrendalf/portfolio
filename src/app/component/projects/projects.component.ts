import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent implements OnInit {

  images = [
    '/assets/projects-page/ToDoApp/desktop_list.png',
    '/assets/projects-page/ToDoApp/desktop_alarm.png',
    '/assets/projects-page/ToDoApp/desktop_notification.png',
    '/assets/projects-page/ToDoApp/mobile_list.png',
    '/assets/projects-page/ToDoApp/mobile_menu.png'
  ]

  constructor() { }

  ngOnInit() {
  }

}
