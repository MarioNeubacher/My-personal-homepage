import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  targetY!: 10;

  constructor() { }

  reachedTarget() {
    return window.scrollY > this.targetY;
  }
}
