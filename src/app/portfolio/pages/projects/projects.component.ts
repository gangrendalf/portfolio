import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {

  stronaZObrazkamiCarouselDataSource = [
    { url: '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_1.png', alt: 'Overview of waiting-room page'},
    { url: '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_2.png', alt: 'Overview of user screen'},
    { url: '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_3.png', alt: 'Overview of image datail view with example comment'},
    { url: '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_4.png', alt: 'Overview of registration page'},
    { url: '/assets/images/projects/stronaZeSmiesznymiObrazkami/Screenshot_5.png', alt: 'Overview of image upload page'}
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
