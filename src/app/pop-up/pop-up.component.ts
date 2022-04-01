import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(public darkmodeService: DarkmodeService, private translateService: TranslateService) { }

  ngOnInit(): void {
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

}
