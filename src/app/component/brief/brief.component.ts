import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.sass']
})
export class BriefComponent {
  texts: any = null;

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.brief
    );
  }
}
