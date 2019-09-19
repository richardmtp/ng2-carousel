import { Component, ViewChild } from '@angular/core';
import { Ng2CarouselItem } from './models/ng2-carousel-item.model';
import { Ng2CarouselComponent } from './ng2-carousel/ng2-carousel.component';
import { Ng2CarouselSetting } from './models/ng2-carousel-setting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Array<Ng2CarouselItem> = []

  setting: Ng2CarouselSetting;

  @ViewChild('c1', {static: true}) c1: Ng2CarouselComponent;

  constructor() {
    this.items = []
    this.items.push({src: 'assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.items.push({src: 'assets/animal-animal-photography-blur-145939.jpg'})

    this.setting = {
      autoPlay: true,
      showArrow: false,
      holdTime: 5000,
      showDots: true
    }
  }

  playNext() {
    this.c1.playNext()
  }

  playPrev() {
    this.c1.playPrev()
  }

}
