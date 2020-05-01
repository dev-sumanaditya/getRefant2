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
      image: 'https://d2ct9xspam8wud.cloudfront.net/blog/2019/05/20170646/banner_standard_sizes-1024x525.png'
    },
    {
      name: '',
      image: 'https://kinsta.com/wp-content/uploads/2018/09/best-google-fonts.png'
    },
    {
      name: '',
      image: 'https://kinsta.com/wp-content/uploads/2018/09/best-google-fonts.png'
    },
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
    speed: 500
  };


  constructor() { }

  ngOnInit(): void {
  }

  slickInit(e) {
    console.log('slick initialized');
  }
}
