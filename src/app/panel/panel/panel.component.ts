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

  public navmenu = [
    {
      name: 'Home',
      url: '/',
      submenu: null
    },
    {
      name: 'Live',
      url: null,
      submenu: [
        {
          name: 'Health & Fitness',
          url: 'live'
        },
        {
          name: 'Nutrition',
          url: 'live'
        },
        {
          name: 'Pet Care',
          url: 'live'
        }
      ]
    },
    {
      name: 'Love',
      url: null,
      submenu: [
        {
          name: 'Self',
          url: 'love/'
        },
        {
          name: 'Relationships',
          url: 'love/'
        },
        {
          name: 'vacation',
          url: 'love/'
        }
      ]
    },
    {
      name: 'Food',
      url: null,
      submenu: [
        {
          name: 'Recipes',
          url: 'food'
        },
        {
          name: 'Meal Plans',
          url: 'food'
        },
        {
          name: 'Restaurant Reviews',
          url: 'food'
        }
      ]
    },
    {
      name: 'Learn',
      url: null,
      submenu: [
        {
          name: 'Edu-cloud',
          url: 'learn/edu-cloud'
        },
        {
          name: 'E-books',
          url: 'learn/e-books'
        },
        {
          name: 'E-tests',
          url: 'learn/e-tests'
        }
      ]
    },
    {
      name: 'Connect with us',
      url: 'contact',
      submenu: null
    },
  ];

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
