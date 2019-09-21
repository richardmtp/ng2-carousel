import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ng2CarouselItem } from '../models/ng2-carousel-item.model';
import { Ng2CarouselSetting } from '../models/ng2-carousel-setting.model';
import { DEFAULT } from '../models/ng2-carousel-setting-default.model';
import { Ng2AnimationType } from '../models/ng2-carousel-animation-type.model';
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn, CardInLeft, CardInRight } from '../animation/animation';

@Component({
  selector: 'ng2-carousel',
  templateUrl: './ng2-carousel.component.html',
  styleUrls: ['./ng2-carousel.component.scss'],
  animations: [
    FadeIn,
    FadeInLeft,
    FadeInRight,
    ZoomIn,
    CardInLeft,
    CardInRight,
  ]
})
export class Ng2CarouselComponent implements OnInit, OnDestroy {

  @Input() items: Array<Ng2CarouselItem>;

  @Input() setting: Ng2CarouselSetting;

  idx: number = -1;

  private timeout: any;

  animation = Ng2AnimationType;
  
  constructor() {
  }
  
  ngOnInit() {
    if(!this.setting) {
      this.setting = Object.assign({}, DEFAULT);
    } else {
      let _DEFAULT = JSON.parse(JSON.stringify(DEFAULT))
      this.setting = Object.assign(_DEFAULT, this.setting);
    }
    this.start();
  }

  private start() {
    this.playNext();
  }

  private checkAutoPlay() {
    if(this.setting.autoPlay) {
      this.timeout = setTimeout(() => {
        this.playNext();
      }, this.setting.holdTime);
    }
  }

  playNext() {
    if(!this.items) {
      return;
    }
    if(this.timeout) {
      window.clearTimeout(this.timeout)
    }
    this.idx += 1;
    if(this.idx >= this.items.length) {
      this.idx = 0;
    }
    this.checkAutoPlay(); 
  }

  playPrev() {
    if(!this.items) {
      return;
    }
    if(this.idx <= 0) {
      this.idx = this.items.length - 1
      return;
    }
    if(this.timeout) {
      window.clearTimeout(this.timeout)
    }
    this.idx -= 1;
    this.checkAutoPlay();
  }

  ngOnDestroy() {
    if(this.timeout) {
      window.clearTimeout(this.timeout)
    }
  }

}
