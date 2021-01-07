import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BriefComponent } from './brief/brief.component';
import { ContactComponent } from './contact/contact.component';
import { KnowledgeComponent } from './knowledge/knowledge.component';
import { ProjectsComponent } from './projects/projects.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    BriefComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    BriefComponent,
    KnowledgeComponent,
    ProjectsComponent,
    ContactComponent,
  ]
})
export class PortfolioModule { }
