import { NgrxCarouselSetting } from './ngrx-carousel-setting.model'
import { NgrxAnimationType } from './ngrx-carousel-animation-type.model'

export const DEFAULT: NgrxCarouselSetting =  {
  autoPlay: true,
  showArrow: true,
  holdTime: 15000,
  showDots: true,
  animation: NgrxAnimationType.FADE_IN
}