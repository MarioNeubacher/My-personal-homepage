import { AotSummaryResolver } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from './scrolling.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  constructor(public router: Router, public scrolling: ScrollingService) { }

  ngOnInit(): void {

  }

  // needs to be in component.ts not service
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    console.log(window.scrollY);
  }
}