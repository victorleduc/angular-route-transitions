import {
    trigger,
    style,
    transition,
    query,
    animateChild,
    group,
    animate
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        // Transition Splash vers n'importe quel component
        transition('Splash => *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    top: 0,
                    transform: 'translateY(0%)',
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ transform: 'translateY(-100%)', })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('1000ms ease-out', style({ transform: 'translateY(100%)', }))
                ]),
                query(':enter', [
                    animate('0ms ease-out', style({ transform: 'translateY(0%)', }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
    ]);
