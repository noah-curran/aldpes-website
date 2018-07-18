import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  images: any[];
    
  constructor() {
    this.images = [];
    this.images.push({source:'assets/images/test.jpeg', alt:'Description for Image 1', title:'Title 1'});
    this.images.push({source: 'assets/images/Nature-PNG-Clipart-Image-02.png', alt: '234', title: 'title 2'})
  }
}
