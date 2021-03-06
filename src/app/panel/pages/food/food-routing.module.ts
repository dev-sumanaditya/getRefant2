import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';


const routes: Routes = [
  {path: 'meal-plans', component: BaseComponent, data: {name: 'Meal Plans'}},
  {path: 'recipes', component: BaseComponent, data: {name: 'Recipes'}},
  {path: 'restaurant-reviews', component: BaseComponent, data: {name: 'Restaurant Reviews'}},
  {path: '', redirectTo: 'recipe'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
