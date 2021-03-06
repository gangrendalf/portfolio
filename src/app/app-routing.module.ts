import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BriefComponent } from './portfolio/pages/brief/brief.component';
import { KnowledgeComponent } from './portfolio/pages/knowledge/knowledge.component';
import { ProjectsComponent } from './portfolio/pages/projects/projects.component';
import { ContactComponent } from './portfolio/pages/contact/contact.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: 'brief', pathMatch: 'full' },
  { path: 'brief', component: BriefComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent },
];

export  const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
