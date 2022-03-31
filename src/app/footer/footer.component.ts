import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
   /*  this.copyrightYearAutomatically(); */
  }

/*   copyrightYearAutomatically() {
    const year = new Date().getFullYear();

    document.getElementById('id-copyright').innerHTML = `` + year;
  } */

}