import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefComponent } from './pages/brief/brief.component';
import { ContactComponent } from './pages/contact/contact.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { SectionSeparatorComponent } from './components/section-separator/section-separator.component';
import { AboutAuthorCardComponent } from './components/about-author-card/about-author-card.component';
import { SectionsLinkMapComponent } from './components/sections-link-map/sections-link-map.component';
import { CoreModule } from '../core/core.module';
import { PortfolioParagrafDirective } from './directives/portfolio-paragraf.directive';


@NgModule({
  declarations: [
    BriefComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
    SectionSeparatorComponent,
    AboutAuthorCardComponent,
    SectionsLinkMapComponent,   
    PortfolioParagrafDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    BriefComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
  ]
})
export class PortfolioModule { }
