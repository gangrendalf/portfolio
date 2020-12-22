import { Component, OnInit } from '@angular/core';
import { faAsterisk, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'section-separator',
  templateUrl: './section-separator.component.html',
  styleUrls: ['./section-separator.component.sass']
})
export class ArticleSeparatorComponent implements OnInit {
  faAsterisk: IconDefinition = faAsterisk;

  constructor() { }

  ngOnInit() {
  }

}
