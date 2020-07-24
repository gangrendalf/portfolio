import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'brief',
  templateUrl: './brief.component.html',
  styleUrls: ['./brief.component.sass']
})
export class BriefComponent implements OnInit {

  @ViewChild("wrapper", {static: true}) wrapperEl: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit() {
  }

}
