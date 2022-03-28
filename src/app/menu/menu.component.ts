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
  languageSwitched = false;f
  @Input() onePage = false; //@Input() enables to change variable outside of this component
  @Input() selectedSection = true;

  constructor(public router: Router, public scrolling: ScrollingService, private translateService: TranslateService, public darkMode: DarkModeService) { }

  ngOnInit(): void {
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

  /**
   * This click function changes service variable darkMode to false
   */
  toggleDarkMode() {
    if (this.darkModeToggle) {
      darkModeToggle = false;
      /* this.src1 = this.darkModeImg; */
      /* element.src = "assets/img/sun-fill.png"; */
     
    } else {
      darkModeToggle = true;
      /* this.src = this.darkModeImages.darkModeImg; */
      /* element.src = "assets/img/moon-fill.png"; */
    }
  }
}