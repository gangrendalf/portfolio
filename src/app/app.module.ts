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
import { ArticleSeparatorComponent } from './component/article-separator/article-separator.component';
import { AboutAuthorCardComponent } from './component/about-author-card/about-author-card.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment.prod';

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
    ArticleSeparatorComponent,
    AboutAuthorCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
