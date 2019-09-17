import { trigger, state, style, transition, animate } from '@angular/animations';

export const FadeInAnimation = [
    trigger('fadeIn', [
      state('active', style({ 'left': '0%', 'opacity': '1', 'visibility': 'visible' })),
      state('hidden', style({ 'left': '0%', 'opacity': '0', 'visibility': 'hidden' })),
      transition('active => hidden', [
        animate(2000)
      ]),
      transition('hidden => active', [
        animate(2000)
      ])
    ])
  ];