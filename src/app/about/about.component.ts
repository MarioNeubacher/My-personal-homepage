import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bullets = [
    {
      img: 'search-line.png',
      title: 'my-professional-direction',
      text: 'text1',
    },
    {
      img: 'heart-line.png',
      title: 'my-passion-developed',
      text: 'text2',
    },
    {
      img: 'walk-line.png',
      title: 'my-journey-began',
      text: 'text3',
    },
    {
      img: 'flight-takeoff-line.png',
      title: 'my-ride-starts',
      text: 'text4',
    }
  ]

  constructor(public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {

  }

}