import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { DarkmodeService } from '../darkmode.service';
import { InViewPortService } from '../in-view-port.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})

export class TechnologiesComponent implements OnInit, AfterViewInit {

  @ViewChild('techTabSwitch') techTabSwitch : ElementRef; //export var to service for menu conditional CSS class

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
      name: 'design-thinking', 
    },
    {
      img: 'icons8-rest-api-80 2.png',
      name: 'Rest API',
    },
    {
      img: 'icons8-test-lab-96 2.png',
      name: 'test-automation',
    },
    {
      img: 'icons8-database-52 2.png',
      name: 'databases',
    },
    {
      img: 'security.png',
      name: 'it-security',
    }
  ];

  darkmodeToggle;

  constructor(
    translate: TranslateService, 
    public darkmodeService: DarkmodeService, 
    public inViewPortService: InViewPortService
    ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  ngAfterViewInit(): void {
    this.inViewPortService.techTabSwitch = this.techTabSwitch.nativeElement;
  }

  ngOnInit(): void {
    Aos.init();
  }

}
