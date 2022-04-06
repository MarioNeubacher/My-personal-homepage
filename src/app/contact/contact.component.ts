import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { InViewPortService } from '../in-view-port.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, AfterViewInit {

  @ViewChild('contactTabSwitch') contactTabSwitch : ElementRef; //export var to service for menu conditional CSS class

  constructor(
    public darkmodeService: DarkmodeService,
    public inViewPortService: InViewPortService
  ) { }

  ngAfterViewInit(): void {
    this.inViewPortService.contactTabSwitch = this.contactTabSwitch.nativeElement;
  }

  ngOnInit(): void {
  }

  alert() {
    alert('Your email was sent!');
  }
}