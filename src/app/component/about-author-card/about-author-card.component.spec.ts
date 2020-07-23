import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAuthorCardComponent } from './about-author-card.component';

describe('AboutAuthorCardComponent', () => {
  let component: AboutAuthorCardComponent;
  let fixture: ComponentFixture<AboutAuthorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutAuthorCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAuthorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
