import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path: 'pet-care', component: BaseComponent, data: {name: 'Pet Care'}},
  {path: 'nutrition', component: BaseComponent, data: {name: 'Nutrition'}},
  {path: 'health-and-fitness', component: BaseComponent, data: {name: 'Healthcare & Fitness'}},
  {path: '', redirectTo: 'health-and-fitness'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveRoutingModule { }
