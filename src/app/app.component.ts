import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgxImageGalleryComponent, GALLERY_CONF, GALLERY_IMAGE } from './changed-source/src/ngx-image-gallery.conf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selected_tab: string;
    
  // // get reference to gallery component
  // @ViewChild(NgxImageGalleryComponent) ngxImageGallery: NgxImageGalleryComponent;
  
  // // gallery configuration
  // conf: GALLERY_CONF = {
  //   showCloseControl: false,
  //   showImageTitle: true,
  //   inline: true,
  //   backdropColor: "rgba(76,56,5,0.85)",
  // };
    
  // // gallery images
  // images: GALLERY_IMAGE[] = [
  //   {
  //     url: "http://static1.squarespace.com/static/55d20195e4b06f17b400345c/t/5b4cab7b2b6a28b683134367/1531751294660/ald+web+logo+banner+-+updated+2018.jpg?format=1500w", 
  //     title: 'Alpha Lambda Delta'
  //   },
  //   {
  //     url: "https://sites.google.com/site/phietasigmaiup/_/rsrc/1504928598581/home/phi_eta_sigma_header_logo.jpg",
  //     title: 'Phi Eta Sigma'
  //   },
  //   {
  //     url: "../../assets/images/arch.jpg",
  //     title: "Purdue University!"
  //   },
  // ];

  constructor() {
    this.selected_tab = 'home'
  }

  onSelected(new_tab: string): void {
    this.selected_tab = new_tab;
  }
}
