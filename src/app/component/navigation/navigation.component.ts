import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { faHamburger, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  faHamburger: IconDefinition = faHamburger;
  faAngular: IconDefinition = faAngular;

  @ViewChild('nav', {static: true}) navEl: ElementRef<HTMLDivElement>;
  @ViewChild('logoProfession', {static: true}) logoProfessionEl: ElementRef<HTMLSpanElement>;
  @ViewChild('logoAddon', {static: true}) logoAddonEl: ElementRef<HTMLSpanElement>;

  @HostListener('window:scroll') onScroll() {
    let nav = this.navEl.nativeElement;

    if(window.scrollY > 60)
      nav.classList.add('navigation-bar--short');
    else if(window.scrollY < 20)
      nav.classList.remove('navigation-bar--short');
    }
  
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
