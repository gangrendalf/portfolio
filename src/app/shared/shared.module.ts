import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutAuthorCardComponent } from './components/about-author-card/about-author-card.component';
import { SectionSeparatorComponent } from './components/section-separator/section-separator.component';
import { LangMarkupPipe } from './pipes/lang-markup.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AboutAuthorCardComponent,
    SectionSeparatorComponent,
    LangMarkupPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    AboutAuthorCardComponent,
    SectionSeparatorComponent,
    LangMarkupPipe,
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class SharedModule { }
