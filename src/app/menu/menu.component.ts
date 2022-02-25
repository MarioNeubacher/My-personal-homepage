import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  scrollDown() {
    this.router.navigate([], { fragment: "projects" });
  }

}
