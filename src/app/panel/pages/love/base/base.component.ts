import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  slides = [
    {
      name: 'Relax',
      des: ''
    },
    {
      name: 'Rejuvenate',
      des: ''
    },
    {
      name: 'Revive',
      des: ''
    },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    dots: false,
    fade: true,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    speed: 500,
    arrows: false
  };

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
