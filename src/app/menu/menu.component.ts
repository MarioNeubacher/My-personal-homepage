import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DarkModeService } from 'angular-dark-mode';
import { DarkmodeService } from '../darkmode.service';
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
  darkmodeToggle;

  constructor(public router: Router, public scrolling: ScrollingService, private translateService: TranslateService, public darkmodeService: DarkmodeService) { }

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
    if (this.darkmodeService.darkmodeToggle) {
      this.darkmodeService.darkmodeToggle = false;

    } else {
      this.darkmodeService.darkmodeToggle = true;
    }
  }

  const modal = document.querySelector("#modal");
  const openModal = document.querySelector(".open-button");
  const closeModal = document.querySelector(".close-button");

  openModal.addEventListener("click", () => {
    modal.showModal();
  });

  closeModal.addEventListener("click", () => {
    modal.close();
  });
}