import { Component } from '@angular/core';

import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home', 
                url: 'index.html'
            },
            {
                label: 'About',
                items: [
                    {label: 'History', url: 'about.html'},
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
