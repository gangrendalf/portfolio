import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.sass']
})
export class BriefComponent {
  texts: any = null;

  chapterOneImgsDataSource = [
    { url: '/assets/images/brief/breif_past_1.jpg', alt: 'Workstation in my previus job used to develop simulations' },
    { url: '/assets/images/brief/breif_past_2.jpg', alt: 'One of robotised station which I had to program' },
    { url: '/assets/images/brief/breif_past_3.jpg', alt: 'Customer plant' },
    { url: '/assets/images/brief/breif_past_4.jpg', alt: 'One of the training centers. I had to increase my competencies many times' }
  ]

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.brief
    );
  }
}
