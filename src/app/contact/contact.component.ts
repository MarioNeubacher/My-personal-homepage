import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertAndClear() {
    alert('Your email was sent!');
    /* setTimeout(() => {
      document.getElementById('id-form')?.innerHTML = `
        action="http://mario-neubacher.developerakademie.com/send_mail.php"
      `;
    }, 1000); */
  }
}