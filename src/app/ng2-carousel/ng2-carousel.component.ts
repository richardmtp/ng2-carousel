import { Component, OnInit, Input } from '@angular/core';
import { FadeInAnimation } from '../animation/fade-in-animation';
import { Ng2CarouselItem } from '../models/ng2-carousel-item.model';
import { Ng2CarouselSetting } from '../models/ng2-carousel-setting.model';
import { DEFAULT } from '../models/ng2-carousel-setting-default.model';

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

  @Input() setting: Ng2CarouselSetting;

  idx: number = -1;

  interval: number = 5000;

  timeout: any;
  
  constructor() {
  }
  
  ngOnInit() {
    console.log(this.setting)
    if(!this.setting) {
      console.log(DEFAULT)
      this.setting = Object.assign({}, DEFAULT);
    } else {
      let _DEFAULT = JSON.parse(JSON.stringify(DEFAULT))
      this.setting = Object.assign(_DEFAULT, this.setting);
    }
    console.log(this.setting)
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

}
