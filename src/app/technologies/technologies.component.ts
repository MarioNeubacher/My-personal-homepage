import { Component, OnInit } from '@angular/core';
import { TranslateCompiler } from '@ngx-translate/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologies = [
    {
      img: 'typescript.png',
      name: 'TypeScript',
    },
    {
      img: 'material.png',
      name: 'Material Design',
    },
    {
      img: 'angular.png',
      name: 'Angular',
    },
    {
      img: 'bootstrap.png',
      name: 'Bootstrap',
    },
    {
      img: 'javascript.png',
      name: 'JavaScript',
    },
    {
      img: 'Group 205.png',
      name: 'CSS',
    },
    {
      img: 'html.png',
      name: 'HTML',
    },
    {
      img: 'scrum.png',
      name: 'SCRUM',
    },
    {
      img: 'Git-Icon-1788C 2.png',
      name: 'Git',
    },
    {
      img: 'Group 20.png',
      name: translate.instant('design-thinking'), //{{ 'design-thinking' | translate }}
    },
    {
      img: 'icons8-rest-api-80 2.png',
      name: 'Rest API',
    },
    {
      img: 'icons8-test-lab-96 2.png',
      name: 'Test automation',
    },
    {
      img: 'icons8-database-52 2.png',
      name: 'Databases',
    },
    {
      img: 'security.png',
      name: 'IT-Security',
    }
  ]

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
