import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { AccesoireTelephoniqueComponent } from './accesoire-telephonique/accesoire-telephonique.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ContactComponent,
    AccesoireTelephoniqueComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
