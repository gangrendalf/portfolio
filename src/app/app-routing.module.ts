import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BriefComponent } from './component/brief/brief.component';
import { KnowledgeComponent } from './component/knowledge/knowledge.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', component: BriefComponent },
  { path: 'brief', component: BriefComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
