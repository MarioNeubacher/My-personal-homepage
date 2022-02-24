import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div #id-display>Some text</div>`
})

export class AppComponent {
  
  constructor(public router: Router) { }

}