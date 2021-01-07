import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/shared/services/language.service';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.sass']
})
export class BriefComponent {
  texts: any = null;

  chapterOneDataSource = [
    '/assets/images/brief/breif_past_1.jpg',
    '/assets/images/brief/breif_past_2.jpg',
    '/assets/images/brief/breif_past_3.jpg',
    '/assets/images/brief/breif_past_4.jpg'
  ]

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.brief
    );
  }
}
