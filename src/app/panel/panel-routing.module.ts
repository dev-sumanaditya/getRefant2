import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'contact', loadChildren: () => import('./pages/contact/contact-routing.module').then(m => m.ContactRoutingModule)},
    {path: 'learn', loadChildren: () => import('./pages/learn/learn.module').then(m => m.LearnModule)},
    {path: 'food', loadChildren: () => import('./pages/food/food.module').then(m => m.FoodModule)},
    {path: 'love', loadChildren: () => import('./pages/love/love.module').then(m => m.LoveModule)},
    {path: 'live', loadChildren: () => import('./pages/live/live.module').then(m => m.LiveModule)},
    {path: 'tests', loadChildren: () => import('./pages/tests/tests.module').then(m => m.TestsModule)},
    {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
