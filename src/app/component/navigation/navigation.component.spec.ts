import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module'
import { BriefComponent } from '../brief/brief.component';
import { KnowledgeComponent } from '../knowledge/knowledge.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

declare const viewport: any;

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NavigationComponent,
        BriefComponent,
        KnowledgeComponent,
        ProjectsComponent,
        ContactComponent,
        PageNotFoundComponent
      ],
      imports: [
        FontAwesomeModule,
        RouterTestingModule.withRoutes(routes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have inital path as root', () => {
    let initialLocation = location.path();
    expect(initialLocation).toBe('');
  });

  it('should navigate into brief page root/brief', fakeAsync(()=> {
    let buttonEl: DebugElement = fixture.debugElement.query(By.css('#brief-button'));
    let initalPath = location.path();

    buttonEl.triggerEventHandler('click', null);
    tick();
    let resultPath = location.path();

    expect(initalPath).toBe('');
    expect(resultPath).toBe('/brief');
  }));

  it('should navigate into knowledge page root/knowledge', fakeAsync(()=> {
    let buttonEl: DebugElement = fixture.debugElement.query(By.css('#knowledge-button'));
    let initalPath = location.path();

    buttonEl.triggerEventHandler('click', null);
    tick();
    let resultPath = location.path();

    expect(initalPath).toBe('');
    expect(resultPath).toBe('/knowledge');
  }));

  it('should navigate into projects page root/projects', fakeAsync(()=> {
    let buttonEl: DebugElement = fixture.debugElement.query(By.css('#projects-button'));
    let initalPath = location.path();

    buttonEl.triggerEventHandler('click', null);
    tick();
    let resultPath = location.path();

    expect(initalPath).toBe('');
    expect(resultPath).toBe('/projects');
  }));

  it('should navigate into contact page root/contact', fakeAsync(()=> {
    let buttonEl: DebugElement = fixture.debugElement.query(By.css('#contact-button'));
    let initalPath = location.path();

    buttonEl.triggerEventHandler('click', null);
    tick();
    let resultPath = location.path();

    expect(initalPath).toBe('');
    expect(resultPath).toBe('/contact');
  }));

  it('should toggle menu-container', () => {
    viewport.set('mobile');

    let buttonEl: DebugElement = fixture.debugElement.query(By.css('#menu-toggler'));
    let menuContainerEl: DebugElement = fixture.debugElement.query(By.css('#menu-container'));


    let initalDim = {
      width: menuContainerEl.nativeElement.clientWidth,
      height: menuContainerEl.nativeElement.clientHeight
    };

    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    let openDim = {
      width: menuContainerEl.nativeElement.clientWidth,
      height: menuContainerEl.nativeElement.clientHeight
    };

    buttonEl.triggerEventHandler('click', null);
    fixture.detectChanges();

    let closeDim = {
      width: menuContainerEl.nativeElement.clientWidth,
      height: menuContainerEl.nativeElement.clientHeight
    };

    expect(initalDim).toEqual({width: 0, height: 0});
    expect(openDim.height).toBeGreaterThan(0);
    expect(openDim.width).toBeGreaterThan(0);
    expect(closeDim).toEqual({width: 0, height: 0})
  })
});
