import { ThisReceiver } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `<div #id-display>Some text</div>`
})
export class AppComponent implements AfterViewInit {

  @ViewChild('id-display') myDiv!: ElementRef; //! necessary to initialize 

  ngAfterViewInit() {
    console.log(this.myDiv.nativeElement.innerHTML);
  }

  portfolioJSON = [
    {
      img: '/assets/img/homepage.PNG',
      language: 'angular'
    },
    {
      img: '/assets/img/el-pollo-loco.png',
      language: 'javascript'
    },
    {
      img: '/assets/img/kanban.png',
      language: 'javascript'
    },
    {
      img: '/assets/img/pokedex.PNG',
      language: 'javascript'
    },
    {
      img: '/assets/img/tictactoe.PNG',
      language: 'javascript'
    },
    {
      img: '/assets/img/lieferando.PNG',
      language: 'javascript'
    },
    {
      img: '/assets/img/quiz.PNG',
      ilanguage: 'javascript'
    },
    {
      img: '/assets/img/instagram.PNG',
      language: 'javascript'
    },
    {
      img: '/assets/img/photos.PNG',
      language: 'javascript'
    },
    {
      img: '/assets/img/notes.PNG',
      language: 'javascript'
    }
  ]

  languagesArr! = any[]; //! says "dont complain if undefined" 

  /**
   * 
   * @string languagesVar - app.component.html
   */
  filter(languagesVar: string) {
    if (languagesVar == 'id-all') {
      this.languagesArr = this.portfolioJSON;
    } else {
      this.languagesArr = this.portfolioJSON.filter(site => site.language == language);
    }
  }

  ngOnInit(): void {
    this.languagesArr = this.portfolioJSON;
  }
}