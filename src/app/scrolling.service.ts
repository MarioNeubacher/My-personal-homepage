import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  firstMenuSectionY = 660;
  secondMenuSectionY = 1792;
  thirdMenuSectionY = 3575;
  fourthMenuSectionY = 3530;
  fifthMenuSectionY = 4462;
  sixthMenuSectionY = 5000;

  portfolioFilterLoaded = false;

  constructor() { }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past first section
   */
  firstMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY < this.firstMenuSectionY;
  }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past first section and not past second section
   */
  secondMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.firstMenuSectionY && window.scrollY < this.secondMenuSectionY;
  }

 /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past second section and not past third section
   */
  thirdMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.secondMenuSectionY && window.scrollY < this.thirdMenuSectionY;
  }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past third section and not past third section
   */
   fourthMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.thirdMenuSectionY && window.scrollY < this.fifthMenuSectionY;
  }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past third section and not past third section
   */
   fifthMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.fifthMenuSectionY && window.scrollY < this.sixthMenuSectionY;
  }
}
