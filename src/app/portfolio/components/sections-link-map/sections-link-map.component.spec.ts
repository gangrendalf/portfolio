import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsLinkMapComponent } from './sections-link-map.component';

describe('SectionsLinkMapComponent', () => {
  let component: SectionsLinkMapComponent;
  let fixture: ComponentFixture<SectionsLinkMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsLinkMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsLinkMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
