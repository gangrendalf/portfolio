import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FootComponent } from './component/foot/foot.component';
import { BriefComponent } from './component/brief/brief.component';
import { KnowledgeComponent } from './component/knowledge/knowledge.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SectionSeparatorComponent } from './component/section-separator/section-separator.component';
import { AboutAuthorCardComponent } from './component/about-author-card/about-author-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

import { HttpClientModule } from '@angular/common/http';
import { LangMarkupPipe } from './pipes/lang-markup.pipe';
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
