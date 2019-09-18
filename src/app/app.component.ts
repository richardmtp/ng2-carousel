import { Component } from '@angular/core';
import { Ng2CarouselItem } from './models/ng2-carousel-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng2-carousel';

  items: Array<Ng2CarouselItem> = []

  constructor() {
    this.items = []
    this.items.push({src: 'assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.items.push({src: 'assets/animal-animal-photography-blur-145939.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.items.push({src: 'assets/animal-animal-photography-blur-145939.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-afterglow-beach-2834758.jpg'})
    this.items.push({src: 'assets/4k-wallpaper-astronomy-astrophotography-2666598.jpg'})
    this.items.push({src: 'assets/animal-animal-photography-blur-145939.jpg'})
  }

}
