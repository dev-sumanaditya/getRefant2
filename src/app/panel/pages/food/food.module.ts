import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { BaseComponent } from './base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    FoodRoutingModule,
    SharedModule
  ]
})
export class FoodModule { }
