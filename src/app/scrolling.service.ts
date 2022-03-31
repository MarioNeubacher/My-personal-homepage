import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  firstMenuSectionY = 660;
  secondMenuSectionY = 1779;
  thirdMenuSectionY = 3556;
  fourthMenuSectionY = 4426;
  fifthMenuSectionY = 5000;

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
    return window.scrollY > this.thirdMenuSectionY && window.scrollY < this.fourthMenuSectionY;
  }

  /**
   * This function checks for the menu tab css changes if scrolled past certan pixel amount
   * @returns - true if scrolled past third section and not past third section
   */
   fifthMenuSection() {
    /*     console.log('service works'); */
    return window.scrollY > this.fourthMenuSectionY && window.scrollY < this.fifthMenuSectionY;
  }
}
