import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  darkModeToggle = true;

  constructor() { }

/**
     * This click function changes service variable darkMode to false
     */
 toggleDarkMode() {
  /* console.log('check'); */
  if (this.darkModeToggle) {
    this.darkModeToggle = false;

  } else {
    this.darkModeToggle = true;
  }
}

}