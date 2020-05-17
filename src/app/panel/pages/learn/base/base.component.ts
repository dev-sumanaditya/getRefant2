import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: false,
    fade: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    speed: 700,
    arrows: false
  };

  public slides = [1,1,1];

  public blogs = [1,1,1];

  constructor() { }

  ngOnInit(): void {
  }

}
