import { Component, OnInit } from '@angular/core';
import { faHamburger, IconDefinition } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  faHamburger: IconDefinition = faHamburger;

  constructor() { }

  toggleMenu(content: HTMLDivElement){
    content.classList.toggle('menu-container--hidden')
  }

  hideMenuWithDelay(content: HTMLDivElement, delay: number){
    setTimeout(() => {
      content.classList.toggle('menu-container--hidden')
    }, delay);
  }
}
