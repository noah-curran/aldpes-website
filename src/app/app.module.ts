import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/** Main Component */
import { AppComponent } from './app.component';

/** PrimeNG Modules */
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {PanelModule} from 'primeng/panel';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {GalleriaModule} from 'primeng/galleria';
import {LightboxModule} from 'primeng/lightbox';
import {TabMenuModule} from 'primeng/tabmenu';
import {DropdownModule} from 'primeng/dropdown';

/** Templates */
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AboutCardComponent } from './templates/about-card/about-card.component';
import { ScholarshipCardComponent } from './templates/scholarship-card/scholarship-card.component';

/** Pages */
import { OfficersComponent } from './pages/officers/officers.component';
import { OfficeHoursComponent } from './pages/office-hours/office-hours.component';
import { HistoryComponent } from './pages/history/history.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ScholarshipsComponent } from './pages/scholarships/scholarships.component';
import { LinksComponent } from './pages/links/links.component';

/** Hammerjs */
import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/** NGX Image Gallery */
import { NgxImageGalleryModule } from './changed-source/ngx-image-gallery/src/index';

@NgModule({
  declarations: [
    /** Templates */
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutCardComponent,
    ScholarshipCardComponent,
    
    /** Pages */
    OfficersComponent,
    OfficeHoursComponent,
    HistoryComponent,
    MeetingsComponent,
    FaqsComponent,
    GalleryComponent,
    ScholarshipsComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    MenubarModule,
    PanelModule,
    CardModule,
    ScrollPanelModule,
    GalleriaModule,
    LightboxModule,
    TabMenuModule,
    DropdownModule,
    FormsModule,
    NgxImageGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
