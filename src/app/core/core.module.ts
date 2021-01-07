import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FootComponent } from './components/foot/foot.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from '../shared/shared.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';


@NgModule({
  declarations: [
    NavigationComponent,
    FootComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavigationComponent,
    FootComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
