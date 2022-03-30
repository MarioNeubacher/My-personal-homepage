import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public darkmodeService: DarkmodeService) { }

  ngOnInit(): void {
  }

  alert() {
    alert('Your email was sent!');
  }
}