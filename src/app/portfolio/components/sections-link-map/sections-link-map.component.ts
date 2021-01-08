import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/core/services/language.service';

@Component({
  selector: 'sections-link-map',
  templateUrl: './sections-link-map.component.html',
  styleUrls: ['./sections-link-map.component.sass']
})
export class SectionsLinkMapComponent {
  @Input() currentURL: string;
  @Input() linksMap: { content: string[] };

  constructor() { }
}
