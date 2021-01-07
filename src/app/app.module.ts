import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { FootComponent } from './core/foot/foot.component';
import { BriefComponent } from './modules/brief/brief.component';
import { KnowledgeComponent } from './modules/knowledge/knowledge.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SectionSeparatorComponent } from './shared/components/section-separator/section-separator.component';
import { AboutAuthorCardComponent } from './shared/components/about-author-card/about-author-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

import { HttpClientModule } from '@angular/common/http';
import { LangMarkupPipe } from './shared/pipes/lang-markup.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FootComponent,
    BriefComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
    PageNotFoundComponent,
    SectionSeparatorComponent,
    AboutAuthorCardComponent,
    LangMarkupPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
