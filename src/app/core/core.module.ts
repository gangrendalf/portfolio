import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from './components/foot/foot.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LangMarkupPipe } from './pipes/lang-markup.pipe';


@NgModule({
  declarations: [
    NavigationComponent,
    FootComponent,
    NotFoundComponent,
    LangMarkupPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FootComponent,
    NotFoundComponent,
    LangMarkupPipe
  ]
})
export class CoreModule { }
