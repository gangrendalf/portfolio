import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
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
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ]
})
export class SharedModule { }
