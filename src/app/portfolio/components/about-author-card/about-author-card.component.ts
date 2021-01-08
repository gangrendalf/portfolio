import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare, IconDefinition } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'about-author-card',
  templateUrl: './about-author-card.component.html',
  styleUrls: ['./about-author-card.component.sass']
})
export class AboutAuthorCardComponent implements OnInit {
  faLinkedin: IconDefinition = faLinkedin;
  faGithubSquare: IconDefinition = faGithubSquare;
  constructor() { }

  ngOnInit() {
  }

}
