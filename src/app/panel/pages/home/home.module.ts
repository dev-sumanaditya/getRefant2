import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DefaultComponent } from './default/default.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SlickCarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
