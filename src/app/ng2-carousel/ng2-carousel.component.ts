import { Component, OnInit, Input } from '@angular/core';
import { FadeInAnimation } from '../animation/fade-in-animation';
import { Ng2CarouselItem } from '../models/ng2-carousel-item.model';

@Component({
  selector: 'ng2-carousel',
  templateUrl: './ng2-carousel.component.html',
  styleUrls: ['./ng2-carousel.component.scss'],
  animations: [
    FadeInAnimation
  ]
})
export class Ng2CarouselComponent implements OnInit {

  @Input() items: Array<Ng2CarouselItem>;

  idx: number = -1;

  interval: number = 5000;

  timeout: any;
  
  constructor() { 
  }
  
  ngOnInit() {
    

    this.play()
  }

  play() {
    this.idx += 1;
    if(this.idx >= this.items.length) {
      this.idx = 0
    }
    this.timeout = setTimeout(() => {
      this.play()
    }, this.interval);
  }

}
