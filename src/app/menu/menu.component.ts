import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from '../scrolling.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  hrefPortfolio = false;

  @Input() selectedSection = true;

  constructor(private router: Router, public scrolling: ScrollingService) { }

  ngOnInit(): void {
  }

  hrefPortfolioClicked() {
    !this.hrefPortfolio;
  }

}
