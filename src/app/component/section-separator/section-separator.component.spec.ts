import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Section4SeparatorComponent } from './section-separator.component';

describe('ArticleSeparatorComponent', () => {
  let component: Section4SeparatorComponent;
  let fixture: ComponentFixture<Section4SeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section4SeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section4SeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
