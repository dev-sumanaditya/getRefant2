import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit, OnDestroy {

  public blgs = [2,2,2,3,3];

  points = [
    'Learn and explore healthcare facts',
    'Quality Reviews of fitness products',
    'Get ready with GetRefant'
  ];

  public featured = [1,1];
  public sub;
  public routeData;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
      .data
      .subscribe(v => this.routeData = v);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
