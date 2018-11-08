import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from './changed-source/ngx-image-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected_tab: string;
    
  // get reference to gallery component
  @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  
  // gallery configuration
  conf: GALLERY_CONF = {
    showCloseControl: false,
    showImageTitle: true,
    inline: true,
    backdropColor: "rgba(76,56,5,0.85)",
  };
    
  // gallery images
  images: GALLERY_IMAGE[] = [
    {
      url: "https://images.pexels.com/photos/669013/pexels-photo-669013.jpeg?w=1260", 
      altText: 'woman-in-black-blazer-holding-blue-cup', 
      title: 'woman-in-black-blazer-holding-blue-cup'
    },
    {
      url: "../../assets/images/arch.jpg",
      title: "test",
      altText: "fds"
    },
  ];

  constructor() {
    this.selected_tab = 'home'
  }

  onSelected(new_tab: string): void {
    this.selected_tab = new_tab;
  }
}
