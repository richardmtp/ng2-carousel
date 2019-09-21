import { NgxCarouselSetting } from './ngx-carousel-setting.model'
import { NgxAnimationType } from './ngx-carousel-animation-type.model'

export const DEFAULT: NgxCarouselSetting =  {
  autoPlay: true,
  showArrow: true,
  holdTime: 15000,
  showDots: true,
  animation: NgxAnimationType.FADE_IN
}