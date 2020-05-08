import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel/panel.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  declarations: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    NgxSmartModalModule.forChild()
  ]
})
export class PanelModule { }
