import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  renderAboutme() {
    document.getElementById('id-aboutMe').innerHTML = `
      <div style="display: flex; flex-direction: column;">
        <div>placeholder</div>
        <div>MY JOURNEY BEGAN</div>
        <div>placeholder</div>
      </div>
    `;
  }

}