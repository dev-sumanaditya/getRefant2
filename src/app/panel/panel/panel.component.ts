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
      url: 'live',
      submenu: [
        {
          name: 'Health & Fitness',
          url: 'health-and-fitness'
        },
        {
          name: 'Nutrition',
          url: 'nutrition'
        },
        {
          name: 'Pet Care',
          url: 'pet-care'
        }
      ]
    },
    {
      name: 'Love',
      url: 'love',
      submenu: [
        {
          name: 'Self',
          url: 'self-love'
        },
        {
          name: 'Relationships',
          url: 'relationships'
        },
        {
          name: 'vacation',
          url: 'vacation'
        }
      ]
    },
    {
      name: 'Food',
      url: 'food',
      submenu: [
        {
          name: 'Recipes',
          url: 'recipes'
        },
        {
          name: 'Meal Plans',
          url: 'meal-plans'
        },
        {
          name: 'Restaurant Reviews',
          url: 'restaurant-reviews'
        }
      ]
    },
    {
      name: 'Learn',
      url: 'learn',
      submenu: [
        {
          name: 'Edu-cloud',
          url: 'edu-cloud'
        },
        {
          name: 'E-books',
          url: 'e-books'
        },
        {
          name: 'E-tests',
          url: 'e-tests'
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
