import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('id-display') myDiv!: ElementRef; //! necessary to initialize 

  constructor (private router: Router) {}

  scrollDown() {
    console.log("scrollDown");
    this.router.navigate([], { fragment: "projects" });
  }

  ngOnInit(): void {
    this.router.navigate(["/"]);
    this.languages = this.portfolioJSON;
  }

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

  languages!: any[]; //! says "dont complain if undefined" 

  filter(language: string) {
    if (language == 'all') {
      this.languages = this.portfolioJSON;
    } else {
      this.languages = this.portfolioJSON.filter(site => site.language == language);
    }
  }
}
