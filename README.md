An amazing responsive carousel for Angular projects. Which supports auto play, manual controls with lot of animations

### Demo
https://ngx-carousel.s3.us-east-2.amazonaws.com/1.0.0/index.html

### Getting started
`$ npm i ngx-carousel`

#### Import NgxCarouselModule in your app.module.ts
```javascript
    import < NgxCarouselModule > from 'ngx-carousel';
    imports: [
      ...,
       NgxCarouselModule
    ],
```

#### Add ngx-carousel tag in your component html
```
<ngx-carousel [items]="items" [setting]="setting"></ngx-carousel>
```

#### Import following items in your component
```javascript
import < NgxCarouselItem, NgxCarouselSetting, NgxAnimationType > from 'ngx-carousel';

items: Array<NgxCarouselItem> = [];
setting: NgxCarouselSetting;

export class AppComponent {
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: true,
    		showArrow: true,
    		holdTime: 5000,
    		showDots: false,
    		animation: NgxAnimationType.FADE_IN_LEFT
		}
	}
}
```

### MANUAL CONTROL
```
<ngx-carousel #manualControl [items]="items" [setting]="setting"></ngx-carousel> 
```
```javascript
import < NgxCarouselItem, NgxCarouselSetting, NgxAnimationType, NgxCarouselComponent  > from 'ngx-carousel';

items: Array<NgxCarouselItem> = [];
setting: NgxCarouselSetting;

export class AppComponent {
	
	@ViewChild('manualControl', {static: true}) manualControl: NgxCarouselComponent;
	
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: false,
    		showArrow: false,
    		holdTime: 5000,
    		showDots: false,
    		animation: NgxAnimationType.FADE_IN_LEFT
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