import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './components/navbar.component';
import { SearchComponent }  from './components/search.component';
import { AboutComponent }  from './components/about.component';
import { AlbumComponent }  from './components/album.component';
import { ArtistComponent }  from './components/artist.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, 
  					NavbarComponent,
  					SearchComponent,
  					AboutComponent,
  					AlbumComponent,
  					ArtistComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
