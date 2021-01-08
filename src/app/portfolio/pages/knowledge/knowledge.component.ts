import { Component } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.sass']
})
export class KnowledgeComponent {
  texts: any = null;

  constructor(private lang: LanguageService ) { 
    this.lang.textsJson$.subscribe(t => 
      this.texts = t.values.knowledge
    );
  }
}
