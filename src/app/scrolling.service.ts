import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  firstMenuSectionY = 660 / 2;
  secondMenuSectionY = 1920;

  constructor() { }

  firstMenuSection() {
/*     console.log('service works'); */
    return window.scrollY < this.firstMenuSectionY;
  }

  secondMenuSection() {
    /*     console.log('service works'); */
        return window.scrollY > this.firstMenuSectionY && window.scrollY < this.secondMenuSectionY;
      }
}
