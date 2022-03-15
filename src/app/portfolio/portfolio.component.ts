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
      github_link: '',
    },
    {
      img: 'homepage.PNG',
      category: 'angular',
      title: 'Personal homepage',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'el-pollo-loco.png',
      category: 'javascript',
      title: 'Jump-and-run game based on object-oriented programming',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'kanban.png',
      category: 'javascript',
      title: 'Project management tool',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'pokedex.PNG',
      category: 'javascript',
      title: 'Pokémon encyclopedia based on RESTful API',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'tictactoe.PNG',
      category: 'javascript',
      title: 'Tic tac toe',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'quiz.PNG',
      icategory: 'javascript',
      title: 'Quiz',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'instagram.PNG',
      category: 'javascript',
      title: 'Social media plattform',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'lieferando.PNG',
      category: 'javascript',
      title: 'E-commerce food delivery',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'photos.PNG',
      category: 'javascript',
      title: 'Photo gallery',
      JsDoc: '',
      app_link: '',
      github_link: '',
    },
    {
      img: 'notes.PNG',
      category: 'javascript',
      title: 'Note app',
      JsDoc: '',
      app_link: '',
      github_link: '',
    }
  ]

  visibleProjects = this.projects;

  constructor(public scrolling: ScrollingService) { }

  ngOnInit(): void {
    Aos.init();
  }

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