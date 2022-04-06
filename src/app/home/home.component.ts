import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import * as Aos from 'aos';
import { DarkmodeService } from '../darkmode.service';
import { InViewPortService } from '../in-view-port.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('homeTabSwitch') homeTabSwitch : ElementRef; //export var to service for menu conditional CSS class

  constructor(
    public darkmodeService: DarkmodeService,
    public inViewPortService: InViewPortService
    ) { }

  ngAfterViewInit(): void {
    this.inViewPortService.homeTabSwitch = this.homeTabSwitch.nativeElement;
  }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

}
