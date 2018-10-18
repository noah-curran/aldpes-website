import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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

import { AppComponent } from './app.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { AboutCardComponent } from './templates/about-card/about-card.component';
import { ScholarshipCardComponent } from './templates/scholarship-card/scholarship-card.component';
import { MeetingsComponent } from './templates/meetings/meetings.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutCardComponent,
    ScholarshipCardComponent,
    MeetingsComponent
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
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
