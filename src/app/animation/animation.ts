import { trigger, state, style, transition, animate, sequence } from '@angular/animations';

export const FadeIn = [
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

export const FadeInLeft = [
  trigger('fadeInLeft', [
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

export const FadeInRight = [
  trigger('fadeInRight', [
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

export const ZoomIn = [
  trigger('zoomIn', [
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

export const CardInLeft = [
  trigger('cardInLeft', [
    state('active', style({ left: '10%', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ left: '-80%', opacity: '1', visibility: 'visible' })),
    transition('active => hidden', [
      sequence([
        animate('0ms 2000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '100%',
        })),
      ])
    ]),
    transition('hidden => active', [
      animate('0ms 2000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
        left: '10%',
      })),
    ])
  ])
];

export const CardInRight = [
  trigger('cardInRight', [
    state('active', style({ left: '10%', opacity: '1', visibility: 'visible' })),
    state('hidden', style({ left: '100%', opacity: '1', visibility: 'visible' })),
    transition('active => hidden', [
      sequence([
        animate('0ms 2000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
          left: '-80%',
        })),
      ])
    ]),
    transition('hidden => active', [
      animate('0ms 2000ms cubic-bezier(0.35, 0, 0.25, 1)', style({
        left: '10%',
      })),
    ])
  ])
];