import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public trending = [
    'Quick and easy nachos',
    'Chicken and mushroom filo parcels',
    'Slow cooked chicken pad thai',
    'Poached Egg over Spinach and Mushroom',
    'Chinese Chicken Cabbage Salad',
    'Kidney Bean Salad with Mediterranean Dressing',
    'Italian Navy Bean Soup with Rosemary',
  ];

  public blogs = [1,1,1];
  public sub;
  public routeData;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
      .data
      .subscribe(v => this.routeData = v);
  }

}
