import { Component, OnInit } from '@angular/core';
import { FadeInAnimation } from '../animation/fade-in-out';

@Component({
  selector: 'ng2-carousel',
  templateUrl: './ng2-carousel.component.html',
  styleUrls: ['./ng2-carousel.component.scss'],
  animations: [
    FadeInAnimation
  ]
})
export class Ng2CarouselComponent implements OnInit {

  data = [];

  idx: number = -1;

  interval: number = 5000;

  timeout: any;
  
  constructor() { 
  }
  
  ngOnInit() {
    this.data = []
    this.data.push({thumb: '/assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.data.push({thumb: '/assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.data.push({thumb: '/assets/animal-animal-photography-blur-145939.jpg'})
    this.data.push({thumb: '/assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.data.push({thumb: '/assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.data.push({thumb: '/assets/animal-animal-photography-blur-145939.jpg'})
    this.data.push({thumb: '/assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.data.push({thumb: '/assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.data.push({thumb: '/assets/animal-animal-photography-blur-145939.jpg'})

    this.play()
  }

  play() {
    this.idx += 1;
    if(this.idx >= this.data.length) {
      this.idx = 0
    }
    this.timeout = setTimeout(() => {
      this.play()
    }, this.interval);
  }

}
