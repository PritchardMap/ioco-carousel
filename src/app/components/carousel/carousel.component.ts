import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  slideItems: any;

  constructor() {}

  ngOnInit(): void {
    this.slideItems = [
      {
        id: 1,
        src: '/assets/images/placeholder.png',
        alt: 'Upgrade',
        title: 'Upgrade',
        url: '/',
      },
      {
        id: 2,
        src: '/assets/images/placeholder.png',
        alt: 'Mobile Internet',
        title: 'Mobile \nInternet',
        url: '/',
      },
      {
        id: 3,
        src: '/assets/images/placeholder.png',
        alt: 'Home Internet',
        title: 'Home \nInternet',
        url: '/',
      },
      {
        id: 4,
        src: '/assets/images/placeholder.png',
        alt: 'Get a device',
        title: 'Get a device',
        url: '/ ',
      },
      {
        id: 5,
        src: '/assets/images/placeholder.png',
        alt: 'Add a phone-line',
        title: 'Add a \nphone-line',
        url: '/',
      },
    ];
  }
}
