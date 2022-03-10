import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  targetY = 10;

  constructor() { }

  reachedTarget() {
/*     console.log('service works'); */
    return window.scrollY > this.targetY;
  }
}
