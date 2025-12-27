import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
Swiper.use([Autoplay, Navigation, Pagination]);


@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.html',
  styleUrl: './slider.css',
})
export class Slider {
ngAfterViewInit(): void {
    new Swiper('.swiper', {
      loop: true,
      
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      
       grabCursor: true,   
      allowTouchMove: true
      
    });
  }   
}
