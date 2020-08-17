import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.sass']
})
export class BriefComponent {

  @ViewChild("wrapper", {static: true}) wrapperEl: ElementRef<HTMLDivElement>;

  constructor() { }
}
