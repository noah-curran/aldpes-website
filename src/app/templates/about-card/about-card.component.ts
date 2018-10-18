import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-card',
  templateUrl: './about-card.component.html',
  styleUrls: ['./about-card.component.css']
})
export class AboutCardComponent {

  @Input() name: string = '';

  @Input() position: string = '';

  @Input() picture: string = '';

  @Input() majors: string[];

  @Input() email: string = '';

  @Input() hometown: string = ''; 
}
