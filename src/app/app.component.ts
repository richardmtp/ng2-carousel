import { Component, ViewChild } from '@angular/core';
import { NgxCarouselItem } from './models/ngx-carousel-item.model';
import { NgxCarouselComponent } from './ngx-carousel/ngx-carousel.component';
import { NgxCarouselSetting } from './models/ngx-carousel-setting.model';
import { NgxAnimationType } from './models/ngx-carousel-animation-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<NgxCarouselItem> = []

  setting: NgxCarouselSetting;

  settingx: NgxCarouselSetting;

  setting3: NgxCarouselSetting;

  setting4: NgxCarouselSetting;

  setting5: NgxCarouselSetting;

  setting6: NgxCarouselSetting;

  setting7: NgxCarouselSetting;


  @ViewChild('manualControl', {static: true}) manualControl: NgxCarouselComponent;

  constructor() {
    this.items = []
    this.items.push({src: 'assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.items.push({src: 'assets/animal-animal-photography-blur-145939.jpg'})

    this.setting = {
      autoPlay: true,
      showArrow: false,
      holdTime: 5000,
      showDots: false,
      animation: NgxAnimationType.CARD_IN_LEFT
    }

    this.settingx = {
      autoPlay: true,
      showArrow: false,
      holdTime: 5000,
      showDots: false,
      animation: NgxAnimationType.CARD_IN_RIGHT
    }

    this.setting3 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgxAnimationType.FADE_IN
    }

    this.setting4 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgxAnimationType.FADE_IN_LEFT
    }

    this.setting5 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgxAnimationType.FADE_IN_RIGHT
    }

    this.setting6 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgxAnimationType.ZOOM_IN
    }
    this.setting7 = {
      autoPlay: false,
      showArrow: false,
      holdTime: 5000,
      showDots: true,
      animation: NgxAnimationType.ZOOM_IN
    }

  }

  playNext() {
    this.manualControl.playNext()
  }

  playPrev() {
    this.manualControl.playPrev()
  }

}
