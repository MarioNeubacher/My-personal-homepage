import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from '../darkmode.service';
import { ScrollingService } from '../scrolling.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { InViewPortService } from '../in-view-port.service';

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

  constructor(
    public router: Router,
    public scrolling: ScrollingService,
    private translateService: TranslateService,
    public darkmodeService: DarkmodeService,
    public dialog: MatDialog,
    public inViewPortService: InViewPortService
  ) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(PopUpComponent);


  }

}