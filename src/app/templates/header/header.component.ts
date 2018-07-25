import { Component } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items: MenuItem[];

    /**
     * https://angular.io/guide/router to figure out how to do this
     */

    ngOnInit() {
        this.items = [
            {
                label: 'Home', 
                url: 'index.html'
            },
            {
                label: 'About',
                items: [
                    {label: 'History', url: '/test' },
                    {label: 'Officers', url: 'officers.html'},
                    {label: 'Office Info', url: 'officeinfo.html'},
                    {label: 'FAQs', url: 'faqs.html'},
                    {label: 'Archive', url: 'archive.html'}
                ]
            },
            {
                label: 'Events',
                items: [
                    {label: 'Meetings', url: 'minutes.html'},
                    {label: 'Tutoring', url: 'tutoring.html'},
                    {label: 'Current Activites', url: 'events.html'}
                ]
            },
            {
                label: 'Gallery',
                url: 'gallery.html'
            },
            {
                label: 'Scholarships',
                url: 'scholarships.html'
            },
            {
                label: 'Links',
                url: 'links.html'
            }
        ];
    }

}
