import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InViewPortService {

  homeTabSwitch!: any;
  techTabSwitch!: any;
  portfolioTabSwitch!: any;
  aboutTabSwitch!: any;
  contactTabSwitch!: any;

  constructor() { }
  /**
   * This will check if the element is entirely visible in the current viewport:
   * Quelle: https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
   */
  elementInViewport(el: any) {
    if (el) { //if condition necessary otherwise header doesnt appear when reloading page in footer
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        top + height <= window.pageYOffset + window.innerHeight &&
        left + width <= window.pageXOffset + window.innerWidth
      );
    } else {
      return false;
    }
  }
  /**
   * You could modify this simply to determine if any part of the element is visible in the viewport:
   * Quelle: https://stackoverflow.com/questions/123999/how-can-i-tell-if-a-dom-element-is-visible-in-the-current-viewport
   */
  elementInViewport2(el: any) {
    if (el) { //if condition necessary otherwise header doesnt appear when reloading page in footer
      var top = el.offsetTop;
      var left = el.offsetLeft;
      var width = el.offsetWidth;
      var height = el.offsetHeight;

      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
      }

      return (
        top < window.pageYOffset + window.innerHeight &&
        left < window.pageXOffset + window.innerWidth &&
        top + height > window.pageYOffset &&
        left + width > window.pageXOffset
      );
    } else {
      return false;
    }
  }
  
}