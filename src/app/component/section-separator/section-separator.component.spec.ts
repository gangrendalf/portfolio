import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSeparatorComponent } from './section-separator.component';

describe('ArticleSeparatorComponent', () => {
  let component: ArticleSeparatorComponent;
  let fixture: ComponentFixture<ArticleSeparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleSeparatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
