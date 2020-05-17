import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path: 'self-love', component: BaseComponent, data: {name: 'Self Love'}},
  {path: 'relationships', component: BaseComponent, data: {name: 'Relationships'}},
  {path: 'vacations', component: BaseComponent, data: {name: 'Vacations'}},
  {path: '', redirectTo: 'self-love'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoveRoutingModule { }
