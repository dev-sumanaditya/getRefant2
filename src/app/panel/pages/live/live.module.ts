import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiveRoutingModule } from './live-routing.module';
import { BaseComponent } from './base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    LiveRoutingModule,
    SharedModule
  ]
})
export class LiveModule { }
