import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public slides = [
    {
      name: '',
      image: '/assets/banner/1.jpg'
    },
    {
      name: '',
      image: '/assets/banner/2.jpg'
    },
    {
      name: '',
      image: '/assets/banner/3.jpg'
    },
    {
      name: '',
      image: '/assets/banner/4.png'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300,
    dots: true,
    fade: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    speed: 500,
    arrows: false
  };

  public blog = [
    '/assets/blog/1.jpg',
    '/assets/blog/2.jpg',
    '/assets/blog/3.jpg',
    '/assets/blog/4.jpg',
    '/assets/blog/5.jpg',
    '/assets/blog/6.jpg',
    '/assets/blog/7.jpg',
    '/assets/blog/8.jpg',
    '/assets/blog/9.jpg',
  ];

  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log('slick initialized');
  }
}
