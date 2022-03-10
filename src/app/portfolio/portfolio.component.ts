import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  allActive = false;
  angularActive = false;
  javascriptActive = false;

  @ViewChild('id-display') myDiv!: ElementRef; //! necessary to initialize 

  constructor(private router: Router) { }

  scrollDown() {
    console.log("scrollDown");
    this.router.navigate([], { fragment: "projects" });
  }

  ngOnInit(): void {
    this.router.navigate(["/"]);
    this.filtered = this.allProjects;
  }

  ngAfterViewInit() {
    console.log(this.myDiv.nativeElement.innerHTML);
  }

  allProjects = [
    {
      img: '/assets/img/ring-of-fire.PNG',
      language: 'angular',
    },
    {
      img: '/assets/img/homepage.PNG',
      language: 'angular',
    },
    {
      img: '/assets/img/el-pollo-loco.png',
      language: 'javascript',
    },
    {
      img: '/assets/img/kanban.png',
      language: 'javascript',
    },
    {
      img: '/assets/img/pokedex.PNG',
      language: 'javascript',
    },
    {
      img: '/assets/img/tictactoe.PNG',
      language: 'javascript',
    },
    {
      img: '/assets/img/quiz.PNG',
      ilanguage: 'javascript',
    },
    {
      img: '/assets/img/instagram.PNG',
      language: 'javascript',
    },
    {
      img: '/assets/img/lieferando.PNG',
      language: 'javascript',
    },
    {
      img: '/assets/img/photos.PNG',
      language: 'javascript',
    },
    {
      img: '/assets/img/notes.PNG',
      language: 'javascript',
    }
  ]

  filtered: any; //! says "dont complain if undefined" 

  showAll() {
    !this.allActive;
    this.angularActive;
    this.javascriptActive;
    this.filtered = this.allProjects;
  }

  showAngular(category: any) {
    this.allActive;
    !this.angularActive;
    this.javascriptActive;
   /*  this.filtered = this.allProjects.filter(project => project.category === category); */
  }

  showJavascript(category: any) {
    this.allActive;
    this.angularActive;
    !this.javascriptActive;
    /*  this.filtered = this.allProjects.filter(project => project.category === category); */
   }
}