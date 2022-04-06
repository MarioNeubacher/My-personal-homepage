import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { InViewPortService } from '../in-view-port.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

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

  @ViewChild('aboutTabSwitch') aboutTabSwitch: ElementRef; //export var to service for menu conditional CSS class


  constructor(
    public darkmodeService: DarkmodeService,
    public inViewPortService: InViewPortService
  ) { }

  ngAfterViewInit(): void {
    this.inViewPortService.aboutTabSwitch = this.aboutTabSwitch.nativeElement;
  }

  ngOnInit(): void {

  }

}