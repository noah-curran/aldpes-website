import { Component, Output, EventEmitter, Input } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-scholarship-card',
  templateUrl: './scholarship-card.component.html',
  styleUrls: ['./scholarship-card.component.css']
})
export class ScholarshipCardComponent {

    @Input() name: string;

    @Input() descriptions: string[];

}
