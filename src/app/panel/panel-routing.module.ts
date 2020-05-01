import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelComponent } from './panel/panel.component';


const routes: Routes = [
  {path: '', component: PanelComponent, children: [
    {path: 'tests', loadChildren: () => import('./pages/tests/tests.module').then(m => m.TestsModule)},
    {path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
