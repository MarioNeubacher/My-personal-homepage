import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from '../scrolling.service';
import * as Aos from 'aos';
import { DarkmodeService } from '../darkmode.service';
import { InViewPortService } from '../in-view-port.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit, AfterViewInit {

  currentFilter = '';

  overlay = -1;

  projects = [
    {
      img: 'ring-of-fire.PNG',
      category: 'angular',
      title: 'ring-of-fire',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/ringoffire',
    },
    {
      img: 'homepage.PNG',
      category: 'angular',
      title: 'homepage',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/My-personal-homepage',
    },
    {
      img: 'el-pollo-loco.png',
      category: 'javascript',
      title: 'el-pollo-loco',
      JsDoc: '',
      app_link: 'https://mario-neubacher.developerakademie.com/elpolloloco/index.html',
      github_link: 'https://github.com/MarioNeubacher/El-Pollo-Loco',
    },
    {
      img: 'kanban.png',
      category: 'javascript',
      title: 'kanban',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MelanieKell/Join-Kanban',
    },
    {
      img: 'pokedex.PNG',
      category: 'javascript',
      title: 'pokedex',
      JsDoc: '',
      app_link: 'http://mario-neubacher.developerakademie.com/14.%20Pokedex/pokedex.html',
      github_link: 'https://github.com/MarioNeubacher/Pokedex',
    },
    {
      img: 'tictactoe.PNG',
      category: 'javascript',
      title: 'tic-tac-toe',
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
    }/* ,
    {
      img: 'instagram.PNG',
      category: 'javascript',
      title: 'social-media-plattform',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Social-media-plattform',
    },
    {
      img: 'lieferando.PNG',
      category: 'javascript',
      title: 'lieferando',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Food-delivery-website',
    },
    {
      img: 'photos.PNG',
      category: 'javascript',
      title: 'photos',
      JsDoc: '',
      app_link: '',
      github_link: 'https://github.com/MarioNeubacher/Photo-gallery',
    },
    {
      img: 'notes.PNG',
      category: 'javascript',
      title: 'notes',
      JsDoc: 'http://127.0.0.1:5500/out/index.html',
      app_link: 'https://marioneubacher.github.io/Note-app/',
      github_link: 'https://github.com/MarioNeubacher/Note-app',
    } */
  ]

  visibleProjects = this.projects;
  darkmodeToggle;

  @ViewChild('portfolioTabSwitch') portfolioTabSwitch : ElementRef; //export var to service for menu conditional CSS class


  constructor(
    public scrolling: ScrollingService,
    public darkmodeService: DarkmodeService,
    public inViewPortService: InViewPortService
  ) { }

  ngAfterViewInit(): void {
    this.inViewPortService.portfolioTabSwitch = this.portfolioTabSwitch.nativeElement;
  }

  /**
   * This function loads the functions init if website loads 
   */
  ngOnInit(): void {
    Aos.init();
  }

  /**
   * This click function changes conditional css class based on currentFilter and only shows the projects with the same category 
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