import { Injectable, OnInit, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit {

  firstSection = true;
  secondSection = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  switchMenuTab() {
    if (this.scrolledPastFirstSection()) {
      !this.firstSection;
      this.secondSection;
    } 
  }

  scrolledPastFirstSection() {
    return document.body.scrollTop > 100;
  }
}