import { NgrxAnimationType } from './ngrx-carousel-animation-type.model';

export interface NgrxCarouselSetting {
  autoPlay: boolean,
  showArrow: boolean,
  showDots: boolean,
  holdTime: number,
  animation: NgrxAnimationType
}