import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  stronaZObrazkamiCarouselDataSource = [
    '/assets/projects-presentation/stronaZeSmiesznymiObrazkami/Screenshot_1.png',
    '/assets/projects-presentation/stronaZeSmiesznymiObrazkami/Screenshot_2.png',
    '/assets/projects-presentation/stronaZeSmiesznymiObrazkami/Screenshot_3.png',
    '/assets/projects-presentation/stronaZeSmiesznymiObrazkami/Screenshot_4.png',
    '/assets/projects-presentation/stronaZeSmiesznymiObrazkami/Screenshot_5.png'
  ];

  todoListCarouselDataSource = [
    '/assets/projects-presentation/ToDoApp/Screenshot_1.png',
    '/assets/projects-presentation/ToDoApp/Screenshot_2.png',
    '/assets/projects-presentation/ToDoApp/Screenshot_3.png',
    '/assets/projects-presentation/ToDoApp/Screenshot_4.png',
    '/assets/projects-presentation/ToDoApp/Screenshot_5.png'
  ];

  texts: any = null;

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.projects
    );
  }
}
