import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DarkModeService } from 'angular-dark-mode';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hrefPortfolio = false;
  languageSwitched = false;
  @Input() onePage = false; //@Input() enables to toggle from other components
  @Input() selectedSection = true;
  @Input() darkModeToggle;

  constructor(public router: Router, public scrolling: ScrollingService, private translateService: TranslateService, public darkModeService: DarkModeService) { }

  ngOnInit(): void {
    /* this.darkMode = this.darkModeService.toggleDarkMode(); */
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

  /**
     * This click function changes service variable darkMode to false
     */
 toggleDarkMode() {
  /* console.log('check'); */
  if (this.darkModeToggle) {
    this.darkModeToggle = false;

  } else {
    this.darkModeToggle = true;
  }
}

}