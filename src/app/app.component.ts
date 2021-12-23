import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div #id-display>Some text</div>`
})
export class AppComponent /* implements AfterViewInit */ {
  projects = [
    {
      img: '/assets/img/el-pollo-loco.png',
      id: 'id-javascript'
    },
    {
      img: '/assets/img/homepage.png',
      id: 'id-angular'
    }
  ]

  /* filterProjects() {
    
    @ViewChild('id-display') myDiv: ElementRef;

    ngAfterViewInit() {
      console.log(this.myDiv.nativeElement.innerHTML);
  }

    for (let i = 0; i < projects.length; i++) {
      const placeholder = projects[i];
      if (placeholder['id'].includes('angular')) {
        document.getElementById('id-display').innerHTML += `
          <div id="display" class="div-portfolio">
            <div style="background-image: url(${placeholder})"></div>
            <div style="background-image: url(${placeholder})"></div>
          </div>
        `;
      }if (placeholder['id'].includes('javascript')) {
        document.getElementById('id-display').innerHTML += `
          <div id="display" class="div-portfolio">
            <div style="background-image: url(${placeholder})"></div>
            <div style="background-image: url(${placeholder})"></div>
          </div>
        `;
      } else {
        document.getElementById('id-display').innerHTML += `
            <div id="display" class="div-portfolio">
              <div style="background-image: url(${placeholder})"></div>
              <div style="background-image: url(${placeholder})"></div>
            </div>
          `;
        }
      }
    }
  } */

}