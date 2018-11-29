import { Component, ViewChild } from "@angular/core";

import { NgxImageGalleryComponent, GALLERY_IMAGE, GALLERY_CONF } from "../../changed-source/ngx-image-gallery/src/index";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

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
      url: "../../assets/aldpes photos/display case.png",
      title: "Our display case in Stewart.",
      altText: ""
    },
    {
      url: "../../assets/aldpes photos/volunteering.png",
      title: "Volunteering for the Hunger Run!",
      altText: ""
    },
    {
      url: "../../assets/aldpes photos/volunteering2.png",
      title: "Volunteering for the Hunger Run!",
      altText: ""
    },
    {
      url: "../../assets/aldpes photos/volunteering3.png",
      title: "Volunteering for the Hunger Run!",
      altText: ""
    },
    {
      url: "../../assets/aldpes photos/hc_parade.png",
      title: "Getting ready to march in the homecoming parade.",
      altText: ""
    },
    {
      url: "../../assets/aldpes photos/group_shot2.png",
      title: "Our leadership board.",
      altText: ""
    },
  ];
}
