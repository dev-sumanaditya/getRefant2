import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { BaseComponent } from './base/base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EbooksComponent } from './ebooks/ebooks.component';
import { EtestsComponent } from './etests/etests.component';


@NgModule({
  declarations: [BaseComponent, EbooksComponent, EtestsComponent],
  imports: [
    CommonModule,
    LearnRoutingModule,
    SharedModule,
    SlickCarouselModule
  ]
})
export class LearnModule { }
