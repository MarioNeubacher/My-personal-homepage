import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bullets = [
    {
      img: 'search-line.png',
      title: 'MY PROFESSIONAL DIRECTION',
      text: 'became clear to me as I discovered my interest for IT in highschool as I signed up for a course called Multimedia, Design and Network management',
    },
    {
      img: 'heart-line.png',
      title: 'MY PASSION DEVELOPED',
      text: 'as I did my research on programming and consumed as much content as humanly possible from tech professionals',
    },
    {
      img: 'walk-line.png',
      title: 'MY JOURNEY BEGAN',
      text: 'as I commited to front-end development. I learned programming at Developer-Akademie in Munich, Germany',
    },
    {
      img: 'flight-takeoff-line.png',
      title: 'MY RIDE STARTS',
      text: 'with the experience and confidence gained from building multiple high quality projects and completing 20+ modules',
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}