import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import * as Aos from 'aos';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public darkmodeService: DarkmodeService) { }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

}
