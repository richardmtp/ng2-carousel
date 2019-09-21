An amazing responsive carousel for Angular projects. Which supports auto play, manual controls with lot of animations

### Demo
https://ngrx-carousel.s3.us-east-2.amazonaws.com/1.0.2/index.html

### Getting started
`$ npm i ngrx-carousel`

#### Import NgrxCarouselModule in your app.module.ts
```javascript
    import < NgrxCarouselModule > from 'ngrx-carousel';
    imports: [
      ...,
       NgrxCarouselModule
    ],
```

#### Add ngrx-carousel tag in your component html
```
<ngrx-carousel [items]="items" [setting]="setting"></ngrx-carousel>
```

#### Import following items in your component
```javascript
import < NgrxCarouselItem, NgrxCarouselSetting, NgrxAnimationType > from 'ngrx-carousel';

items: Array<NgrxCarouselItem> = [];
setting: NgrxCarouselSetting;

export class AppComponent {
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: true,
    		showArrow: true,
    		holdTime: 5000,
    		showDots: false,
    		animation: NgrxAnimationType.FADE_IN_LEFT
		}
	}
}
```

### MANUAL CONTROL
```
<ngrx-carousel #manualControl [items]="items" [setting]="setting"></ngrx-carousel> 
```
```javascript
import < NgrxCarouselItem, NgrxCarouselSetting, NgrxAnimationType, NgrxCarouselComponent  > from 'ngrx-carousel';

items: Array<NgrxCarouselItem> = [];
setting: NgrxCarouselSetting;

export class AppComponent {
	
	@ViewChild('manualControl', {static: true}) manualControl: NgrxCarouselComponent;
	
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: false,
    		showArrow: false,
    		holdTime: 5000,
    		showDots: false,
    		animation: NgrxAnimationType.FADE_IN_LEFT
		}
	}
	
	playNext() {
		this.manualControl.playNext()
	}

	playPrev() {
		this.manualControl.playPrev()
	}
}
```