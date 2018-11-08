import { Component, Output, EventEmitter } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})

export class MeetingsComponent {

    
    meetings: SelectItem[];

    meeting: string = "meeting2";

    ngOnInit() {
        this.meetings = [
            {label: 'Meeting 2', value: 'meeting2'},
            {label: 'Meeting 3', value: 'meeting3'},
            {label: 'Meeting 4', value: 'meeting4'},
            {label: 'Meeting 5', value: 'meeting5'},
            {label: 'Meeting 7', value: 'meeting7'},
            {label: 'Meeting 8', value: 'meeting8'},
        ];
    }

}
