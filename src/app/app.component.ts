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
    this.images.push({source:'assets/images/arch.jpg', alt:'Take a picture under the archway.', title:'Welcome to Purdue!'});
    this.images.push({source: 'assets/images/fountain.jpg', alt: 'Run through the fountain!', title: 'Loeb Fountain'});
    this.images.push({source: 'assets/images/flag.jpg', alt: 'Go boilermakers!', title: 'Boiler Up!'});
    this.images.push({source: 'assets/images/dunk.jpg', alt: 'Purdue dunks on another team.', title: 'Hammer Down!'});
    this.images.push({source: 'assets/images/walc.jpg', alt: 'Study hard.', title: 'Hail Purdue.'});
  }
}
