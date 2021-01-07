import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { BriefComponent } from './modules/brief/brief.component';
import { KnowledgeComponent } from './modules/knowledge/knowledge.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { ContactComponent } from './modules/contact/contact.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: 'brief', pathMatch: 'full' },
  { path: 'brief', component: BriefComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent }
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
