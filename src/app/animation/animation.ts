import { trigger, state, style, transition, animate, group, sequence } from '@angular/animations';

export const FadeInAnimation = [
  trigger('fadeIn', [
    state('active', style({ left: '0%', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ left: '0%', opacity: '0', visibility: 'hidden' })),
    transition('active => hidden', [
      animate('2000ms ease-in')
    ]),
    transition('hidden => active', [
      animate('2000ms ease-in')
    ])
  ])
];

export const ZoomFromCenterAnimation = [
  trigger('zoomFromCenter', [
    state('active', style({ transform: 'scale(1)', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ transform: 'scale(0)', opacity: '0', visibility: 'hidden' })),
    transition('active => hidden', [
      animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)')
    ]),
    transition('hidden => active', [
      animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)')
    ])
  ])
];

export const FlyFromLeftAnimation = [
  trigger('flyFromLeft', [
    state('active', style({ left: '0%', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ left: '-100%', opacity: '0', visibility: 'hidden' })),
    transition('active => hidden', [
      sequence([
        animate('0ms 1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '100%',
          opacity: '0'
        })),
        animate('1000ms 1ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '-100%',
        })),
      ])
    ]),
    transition('hidden => active', [
      animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)')
    ])
  ])
];

export const FlyFromRightAnimation = [
  trigger('flyFromRight', [
    state('active', style({ left: '0%', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ left: '100%', opacity: '0', visibility: 'hidden' })),
    transition('active => hidden', [
      sequence([
        animate('0ms 1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '-100%',
          opacity: '0'
        })),
        animate('1000ms 1ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '100%',
        })),
      ])
    ]),
    transition('hidden => active', [
      animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)')
    ])
  ])
];