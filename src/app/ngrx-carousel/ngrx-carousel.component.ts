import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgrxCarouselItem } from '../models/ngrx-carousel-item.model';
import { NgrxCarouselSetting } from '../models/ngrx-carousel-setting.model';
import { DEFAULT } from '../models/ngrx-carousel-setting-default.model';
import { NgrxAnimationType } from '../models/ngrx-carousel-animation-type.model';
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn, CardInLeft, CardInRight } from '../animation/animation';

@Component({
  selector: 'ngrx-carousel',
  templateUrl: './ngrx-carousel.component.html',
  styleUrls: ['./ngrx-carousel.component.scss'],
  animations: [
    FadeIn,
    FadeInLeft,
    FadeInRight,
    ZoomIn,
    CardInLeft,
    CardInRight,
  ]
})
export class NgrxCarouselComponent implements OnInit, OnDestroy {

  @Input() items: Array<NgrxCarouselItem>;

  @Input() setting: NgrxCarouselSetting;

  idx: number = -1;

  private timeout: any;

  animation = NgrxAnimationType;
  
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
