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
  darkMode;

  constructor(public router: Router, public scrolling: ScrollingService, private translateService: TranslateService, public darkModeServiceVar: DarkModeService) { }

  ngOnInit(): void {
    this.darkMode = this.darkModeServiceVar.toggleDarkMode();
  }

  public selectLanguage(event: any) {
    this.translateService.use(event.target.value);
  }

}