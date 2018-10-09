import { Component, Output, EventEmitter } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    @Output() selected = new EventEmitter<string>();

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', 
                command: () => {
                    this.selected.emit('home') 
                }
            },
            {
                label: 'About',
                items: [
                    {label: 'History', command: () => {
                            this.selected.emit('history') 
                        }
                    },
                    {label: 'Officers', command: () => {
                            this.selected.emit('officers') 
                        }
                    },
                    {label: 'Office Hours', command: () => {
                            this.selected.emit('office hours') 
                        }
                    },
                    {label: 'FAQs', command: () => {
                            this.selected.emit('faqs') 
                        }
                    },
                    {label: 'Archive', command: () => {
                            this.selected.emit('archive') 
                        }
                    },
                ]
            },
            {
                label: 'Events',
                items: [
                    {label: 'Meetings', command: () => {
                        this.selected.emit('meetings') 
                    }},
                    {label: 'Tutoring', command: () => {
                        this.selected.emit('tutoring') 
                    }},
                    {label: 'Current Activites', command: () => {
                        this.selected.emit('events') 
                    }}
                ]
            },
            {
                label: 'Gallery', command: () => {
                    this.selected.emit('gallery')
                }
            },
            {
                label: 'Scholarships',
                command: () => {
                    this.selected.emit('scholarships') 
                }
            },
            {
                label: 'Links',
                command: () => {
                    this.selected.emit('links') 
                }
            }
        ];
    }

}
