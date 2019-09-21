import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgxCarouselItem } from '../models/ngx-carousel-item.model';
import { NgxCarouselSetting } from '../models/ngx-carousel-setting.model';
import { DEFAULT } from '../models/ngx-carousel-setting-default.model';
import { NgxAnimationType } from '../models/ngx-carousel-animation-type.model';
import { FadeIn, FadeInLeft, FadeInRight, ZoomIn, CardInLeft, CardInRight } from '../animation/animation';

@Component({
  selector: 'ngx-carousel',
  templateUrl: './ngx-carousel.component.html',
  styleUrls: ['./ngx-carousel.component.scss'],
  animations: [
    FadeIn,
    FadeInLeft,
    FadeInRight,
    ZoomIn,
    CardInLeft,
    CardInRight,
  ]
})
export class NgxCarouselComponent implements OnInit, OnDestroy {

  @Input() items: Array<NgxCarouselItem>;

  @Input() setting: NgxCarouselSetting;

  idx: number = -1;

  private timeout: any;

  animation = NgxAnimationType;
  
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
