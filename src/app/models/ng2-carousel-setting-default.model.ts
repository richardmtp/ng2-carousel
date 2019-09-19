import { Ng2CarouselSetting } from './ng2-carousel-setting.model'
import { Ng2AnimationType } from './ng2-carousel-animation-type.model'

export const DEFAULT: Ng2CarouselSetting =  {
  autoPlay: false,
  showArrow: true,
  holdTime: 15000,
  showDots: true,
  animation: Ng2AnimationType.FADE_IN
}