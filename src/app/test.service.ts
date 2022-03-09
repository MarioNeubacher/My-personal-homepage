import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {

  firstSection = true;
  secondSection = false;

  constructor() { }

  ngOnInit(): void {
    switchMenuTab();
  }

  window.onscroll = switchMenuTab;

  switchMenuTab() {
    if (scrolledPastFirstSection()) {
      !firstSection;
      secondSection;
    } 
  }

  scrolledPastFirstSection() {
    return window.scrollY > 250;
  }
}