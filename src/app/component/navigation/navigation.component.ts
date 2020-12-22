import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { faHamburger, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faAngular } from "@fortawesome/free-brands-svg-icons";
import { Router, NavigationEnd } from '@angular/router';
import { LanguageService } from 'src/app/services/language.service';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  faHamburger: IconDefinition = faHamburger;
  faAngular: IconDefinition = faAngular;

  languages: string[];
  activeLanguage: string;
  texts: any = null;

  @ViewChild('nav', {static: true}) navEl: ElementRef<HTMLDivElement>;
  @ViewChild('menuToggler', {static: true}) menuTogglerEl: ElementRef<HTMLButtonElement>;
  @ViewChild('logoProfession', {static: true}) logoProfessionEl: ElementRef<HTMLSpanElement>;
  @ViewChild('logoAddon', {static: true}) logoAddonEl: ElementRef<HTMLSpanElement>;

  @HostListener('window:scroll') onScroll() {
    let nav = this.navEl.nativeElement;

    if(window.scrollY > 80)
      nav.classList.add('navigation-bar--short');
    else if(window.scrollY < 10)
      nav.classList.remove('navigation-bar--short');
    }
  
  constructor(private router: Router, private langService: LanguageService ) { 
    router.events.subscribe(e => {
      if(e instanceof NavigationEnd)
        this.menuTogglerEl.nativeElement.classList.remove('active');
    });

    this.languages = langService.languages;
    this.activeLanguage = langService.language;

    this.langService.textsJson$.subscribe(t => 
      this.texts = t.values.navigation
    );
  }

  toggleMenu(content: HTMLDivElement){
    content.classList.toggle('menu-container--hidden');
    this.menuTogglerEl.nativeElement.classList.toggle('active');
  }

  hideMenuWithDelay(content: HTMLDivElement, delay: number){
    setTimeout(() => {
      content.classList.toggle('menu-container--hidden');
      this.menuTogglerEl.nativeElement.classList.remove('active');
    }, delay);
  }

  setLang(lang) {
    this.langService.language = lang;
  }
}
