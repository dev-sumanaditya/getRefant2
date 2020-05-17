import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { EbooksComponent } from './ebooks/ebooks.component';
import { EtestsComponent } from './etests/etests.component';


const routes: Routes = [
  {path: 'e-books', component: EbooksComponent},
  {path: 'e-tests', component: EtestsComponent},
  {path: 'edu-cloud', component: BaseComponent},
  {path: '', redirectTo: '/learn/edu-cloud'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }
