import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  darkModeToggle; 

  constructor(public darkMode: DarkModeService) { }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

}
