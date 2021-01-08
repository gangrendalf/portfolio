import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { LangMarkupPipe } from 'src/app/core/pipes/lang-markup.pipe';

@Directive({
  selector: '[portfolioParagraf]'
})
export class PortfolioParagrafDirective implements OnInit {
  @Input() content;
  elementHTMLRef: HTMLElement;
  // langFilePipe = new LangMarkupPipe();

  constructor(private elementRef: ElementRef) { 
    this.elementHTMLRef = elementRef.nativeElement;
  }
  ngOnInit(): void {
    // const transformedContent = this.langFilePipe.transform(this.content);

    // const child = document.createElement('span');
    // child.innerText = transformedContent;

    // this.elementHTMLRef.appendChild(child);
  }



}
