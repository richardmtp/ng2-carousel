import { Component, ViewChild } from '@angular/core';
import { NgrxCarouselItem } from './models/ngrx-carousel-item.model';
import { NgrxCarouselComponent } from './ngrx-carousel/ngrx-carousel.component';
import { NgrxCarouselSetting } from './models/ngrx-carousel-setting.model';
import { NgrxAnimationType } from './models/ngrx-carousel-animation-type.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<NgrxCarouselItem> = []

  setting: NgrxCarouselSetting;

  settingrx: NgrxCarouselSetting;

  setting3: NgrxCarouselSetting;

  setting4: NgrxCarouselSetting;

  setting5: NgrxCarouselSetting;

  setting6: NgrxCarouselSetting;

  setting7: NgrxCarouselSetting;


  @ViewChild('manualControl', {static: true}) manualControl: NgrxCarouselComponent;

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
      animation: NgrxAnimationType.CARD_IN_LEFT
    }

    this.settingrx = {
      autoPlay: true,
      showArrow: false,
      holdTime: 5000,
      showDots: false,
      animation: NgrxAnimationType.CARD_IN_RIGHT
    }

    this.setting3 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgrxAnimationType.FADE_IN
    }

    this.setting4 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgrxAnimationType.FADE_IN_LEFT
    }

    this.setting5 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgrxAnimationType.FADE_IN_RIGHT
    }

    this.setting6 = {
      autoPlay: true,
      showArrow: true,
      holdTime: 5000,
      showDots: true,
      animation: NgrxAnimationType.ZOOM_IN
    }
    this.setting7 = {
      autoPlay: false,
      showArrow: false,
      holdTime: 5000,
      showDots: true,
      animation: NgrxAnimationType.ZOOM_IN
    }

  }

  playNext() {
    this.manualControl.playNext()
  }

  playPrev() {
    this.manualControl.playPrev()
  }

}
