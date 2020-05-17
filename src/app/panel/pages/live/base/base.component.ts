import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public blgs = [2,2,2,3,3];

  points = [
    'Learn and explore healthcare facts',
    'Quality Reviews of fitness products',
    'Get ready with GetRefant'
  ];

  public featured = [1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
