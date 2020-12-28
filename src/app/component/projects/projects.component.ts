import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  stronaZObrazkamiCarouselDataSource = [
    '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_1.png',
    '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_2.png',
    '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_3.png',
    '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_4.png',
    '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_5.png'
  ];

  todoListCarouselDataSource = [
    '/assets/images/projects/ToDoApp/Screenshot_1.png',
    '/assets/images/projects/ToDoApp/Screenshot_2.png',
    '/assets/images/projects/ToDoApp/Screenshot_3.png',
    '/assets/images/projects/ToDoApp/Screenshot_4.png',
    '/assets/images/projects/ToDoApp/Screenshot_5.png'
  ];

  texts: any = null;

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.projects
    );
  }
}
