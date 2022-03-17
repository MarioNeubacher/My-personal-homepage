import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  firstMenuSectionY = 660 / 2;
  secondMenuSectionY = 1920;

  portfolioFilterLoaded = false;

  constructor() { }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past 330px
   */
  firstMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY < this.firstMenuSectionY;
  }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past 330px and not past 1920px
   */
  secondMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.firstMenuSectionY && window.scrollY < this.secondMenuSectionY;
  }
}
