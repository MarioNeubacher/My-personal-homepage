import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() selectedSection = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  firstSection = true;

  @HostListener("document:scroll")
  switchMenuTab() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      !this.firstSection;
    } 
  }
}
