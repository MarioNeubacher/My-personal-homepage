import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  currentFilter = '';
  filter = `
    < div[class.div - projectFilter]="">
      <div id="id-all"[class.active] = "currentFilter === ''"(click) = "updateFilter()" class="div-projectsLanguage" > All < /div>
      < div id = "id-angular"[class.active] = "currentFilter === 'Angular'"(click) = "updateFilter('Angular')" class="div-projectsLanguage" > Angular < /div>
      < div id = "id-javascript"[class.active] = "currentFilter === 'JavaScript'"(click) = "updateFilter('JavaScript')" class="div-projectsLanguage" > Java Script < /div>
    < /div>
  `;

  projects = [
    {
      img: 'ring-of-fire.PNG',
      category: 'angular',
    },
    {
      img: 'homepage.PNG',
      category: 'angular',
    },
    {
      img: 'el-pollo-loco.png',
      category: 'javascript',
    },
    {
      img: 'kanban.png',
      category: 'javascript',
    },
    {
      img: 'pokedex.PNG',
      category: 'javascript',
    },
    {
      img: 'tictactoe.PNG',
      category: 'javascript',
    },
    {
      img: 'quiz.PNG',
      icategory: 'javascript',
    },
    {
      img: 'instagram.PNG',
      category: 'javascript',
    },
    {
      img: 'lieferando.PNG',
      category: 'javascript',
    },
    {
      img: 'photos.PNG',
      category: 'javascript',
    },
    {
      img: 'notes.PNG',
      category: 'javascript',
    }
  ]

  visibleProjects = this.projects;

  constructor(public scrolling: ScrollingService) { }

  ngOnInit(): void {
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