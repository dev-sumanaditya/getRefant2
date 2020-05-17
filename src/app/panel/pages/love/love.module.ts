import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoveRoutingModule } from './love-routing.module';
import { BaseComponent } from './base/base.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    LoveRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class LoveModule { }
