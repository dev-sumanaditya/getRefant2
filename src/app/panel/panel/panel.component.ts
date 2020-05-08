import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  public showBrand = false;

  @HostListener('window:scroll', [])onWindowScroll() {
    this.checkScrollTop();
 }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public modalService: NgxSmartModalService
  ) {}

  ngOnInit(): void {
  }

  public checkScrollTop() {
    if (this.document.documentElement.scrollTop >= 80) {
      this.showBrand = true;
    } else {
      this.showBrand = false;
    }
  }



}
