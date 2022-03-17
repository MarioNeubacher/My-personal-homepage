import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from '../scrolling.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  currentFilter = '';

  projects = [
    {
      img: 'ring-of-fire.PNG',
      category: 'angular',
      title: 'Drinking card game',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/ringoffire',
    },
    {
      img: 'homepage.PNG',
      category: 'angular',
      title: 'Personal homepage',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/My-personal-homepage',
    },
    {
      img: 'el-pollo-loco.png',
      category: 'javascript',
      title: 'Jump-and-run game based on object-oriented programming',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/El-Pollo-Loco',
    },
    {
      img: 'kanban.png',
      category: 'javascript',
      title: 'Project management tool',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MelanieKell/Join-Kanban',
    },
    {
      img: 'pokedex.PNG',
      category: 'javascript',
      title: 'Pokémon encyclopedia based on RESTful API',
      JsDoc: '',
      app_link: 'http://mario-neubacher.developerakademie.com/14.%20Pokedex/pokedex.html',
      github_link: 'https://github.com/MarioNeubacher/Pokedex',
    },
    {
      img: 'tictactoe.PNG',
      category: 'javascript',
      title: 'Tic tac toe',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/tictactoe',
    },
    {
      img: 'quiz.PNG',
      icategory: 'javascript',
      title: 'Quiz',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Quiz-App',
    },
    {
      img: 'instagram.PNG',
      category: 'javascript',
      title: 'Social media plattform',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Social-media-plattform',
    },
    {
      img: 'lieferando.PNG',
      category: 'javascript',
      title: 'Food delivery',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Food-delivery-website',
    },
    {
      img: 'photos.PNG',
      category: 'javascript',
      title: 'Photo gallery',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Photo-gallery',
    },
    {
      img: 'notes.PNG',
      category: 'javascript',
      title: 'Note app',
      JsDoc: 'http://127.0.0.1:5500/out/index.html',
      app_link: 'https://marioneubacher.github.io/Note-app/',
      github_link: 'https://github.com/MarioNeubacher/Note-app',
    }
  ]

  visibleProjects = this.projects;

  constructor(public scrolling: ScrollingService) { }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

  /**
   * This function changes conditional css class based on currentFilter and only shows the projects with the same category 
   * @param newFilter - This variable is one of the project array categories 
   */
  updateFilter(newFilter?: string) {
    if (newFilter == undefined) {
      this.currentFilter = '';
      this.visibleProjects = this.projects;
    } else if (newFilter == 'Angular') {
      this.currentFilter = 'Angular';
      this.visibleProjects = this.projects.filter(project => project.category == 'angular');
    } else if (newFilter == 'JavaScript') {
      this.currentFilter = 'JavaScript';
      this.visibleProjects = this.projects.filter(project => project.category == 'javascript');
    }
  }

}