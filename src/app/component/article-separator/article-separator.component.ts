import { Component, OnInit } from '@angular/core';
import { faAsterisk, IconDefinition } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'article-separator',
  templateUrl: './article-separator.component.html',
  styleUrls: ['./article-separator.component.sass']
})
export class ArticleSeparatorComponent implements OnInit {
  faAsterisk: IconDefinition = faAsterisk;

  constructor() { }

  ngOnInit() {
  }

}
