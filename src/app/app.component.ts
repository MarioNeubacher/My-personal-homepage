import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from './scrolling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  constructor(public router: Router, public scrolling: ScrollingService) { }
 
  /**
   * This function is necessary for window.scroll query in scrolling.service 
   * @param event - This variable determines which scroll direction 
   */
  @HostListener('window:scroll', ['$event'])  // needs to be in component.ts not service
  onScroll(event: any) {
    console.log(window.scrollY);
  }
}