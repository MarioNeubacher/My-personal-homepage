import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  firstMenuSectionY = 660 / 2;
  portfolioFilterSeeableY = 210;
  secondMenuSectionY = 1920;

  portfolioFilterLoaded = false;

  constructor() { }

  firstMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY < this.firstMenuSectionY;
  }

  portfolioFilterSeeable() {
    /*     console.log('service works'); */
    this.portfolioFilterLoaded;
    return window.scrollY > this.portfolioFilterSeeableY;
  }

  secondMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.firstMenuSectionY && window.scrollY < this.secondMenuSectionY;
  }
}
