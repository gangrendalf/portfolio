import { Component, OnInit } from '@angular/core';
import { faLinkedin, faGithubSquare, faGoogle, IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { faAt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithubSquare;
  faGoogle: IconDefinition = faGoogle;
  faMail: IconDefinition = faAt;

  constructor() { }

  ngOnInit() {
  }

}
