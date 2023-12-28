import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector : 'app-root',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css'],
    animations:[
      trigger('slideDown', [
        state('in', style({
          transform: 'translateY(0)',
          opacity: 1,
        })),
        transition('void => *', [
          style({
            transform: 'translateY(-100%)',
            opacity: 0,
          }),
          animate('300ms ease-in'),
        ]),
        transition('* => void', [
          animate('300ms ease-out', style({
            transform: 'translateY(-100%)',
            opacity: 0,
          })),
        ]),
      ]),
    ],
  })
  


 export class AppComponent{
  aboutState: string = 'out';

  toggleAbout() {
    this.aboutState = this.aboutState === 'out' ? 'in' : 'out';
  }
 

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started');
      }
  
      if (event instanceof NavigationEnd) {
        console.log('Navigation ended');
      }
      
    });
    

  
}
 }


