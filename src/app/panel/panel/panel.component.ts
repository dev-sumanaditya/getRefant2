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
          url: 'live/health-and-fitness'
        },
        {
          name: 'Nutrition',
          url: 'live/nutrition'
        },
        {
          name: 'Pet Care',
          url: 'live/pet-care'
        }
      ]
    },
    {
      name: 'Love',
      url: null,
      submenu: [
        {
          name: 'Self Love',
          url: 'love/self-love'
        },
        {
          name: 'Relationships',
          url: 'love/relationships'
        },
        {
          name: 'Vacation',
          url: 'love/vacations'
        }
      ]
    },
    {
      name: 'Food',
      url: null,
      submenu: [
        {
          name: 'Recipes',
          url: 'food/recipes'
        },
        {
          name: 'Meal Plans',
          url: 'food/meal-plans'
        },
        {
          name: 'Restaurant Reviews',
          url: 'food/restaurant-reviews'
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

  openLogin() {
    this.modalService.getModal('signupModal').close();
    this.modalService.getModal('loginModal').open();
  }

  openSignup() {
    this.modalService.getModal('loginModal').close();
    this.modalService.getModal('signupModal').open();
  }


}
