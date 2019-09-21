### Demo
https://ng2-carousel.s3.us-east-2.amazonaws.com/1.0.0/index.html
### Getting started

`$ npm i ng2-carousel`

####Import Ng2CarouselModule in your app.module.ts

    import < Ng2CarouselModule > from 'ng2-carousel';
    imports: [
      ...,
       Ng2CarouselModule
    ],

####Add ng2-carousel tag in your component html
```
<ng2-carousel [items]="items" [setting]="setting"></ng2-carousel>
```

####Import following items in your component
```javascript
import < Ng2CarouselItem, Ng2CarouselSetting, Ng2AnimationType > from 'ng2-carousel';

items: Array<Ng2CarouselItem> = [];
setting: Ng2CarouselSetting;

export class AppComponent {
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: true,
    		showArrow: true,
    		holdTime: 5000,
    		showDots: false,
    		animation: Ng2AnimationType.FADE_IN_LEFT
		}
	}
}
```

###MANUAL CONTROL
```
<ng2-carousel #manualControl [items]="items" [setting]="setting"></ng2-carousel> 
```
```javascript
import < Ng2CarouselItem, Ng2CarouselSetting, Ng2AnimationType, Ng2CarouselComponent  > from 'ng2-carousel';

items: Array<Ng2CarouselItem> = [];
setting: Ng2CarouselSetting;

export class AppComponent {
	
	@ViewChild('manualControl', {static: true}) manualControl: Ng2CarouselComponent;
	
	constructor() {
		this.items = [ { src: 'assets/image1.png' }, { src: 'assets/image2.png' }, ... ]
		this.setting = {
    		autoPlay: false,
    		showArrow: false,
    		holdTime: 5000,
    		showDots: false,
    		animation: Ng2AnimationType.FADE_IN_LEFT
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