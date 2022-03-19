import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bullets = [
    {
      img: 'walk-line.png',
      title: 'MY JOURNEY BEGAN',
      text: 'placeholder',
    },
    {
      img: '',
      title: '',
      text: '',
    },
    {
      img: '',
      title: '',
      text: '',
    },
    {
      img: '',
      title: '',
      text: '',
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}