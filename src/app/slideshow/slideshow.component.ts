import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images = ['code.jpg','macbook.jpg'];
  headlines = [
    'Coding: the most important skill in the 21st century',
    'Bringing engineering to the next level'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length; //only as long as images length and begins again
      this.showImage = false;

      setTimeout(() => { //removes image and shows it again to prevent time loading differences in css and setIntervall()
        this.showImage = true;
      }, 10);
    }, 8000);
  }

}
