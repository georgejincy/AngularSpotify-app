import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { SearchComponent }  from './components/search.component';
import { AboutComponent }  from './components/about.component';
import { AlbumComponent }  from './components/album.component';
import { ArtistComponent }  from './components/artist.component';
 
const routes: Routes = [
  { 
  	path: '', 
  	component: SearchComponent 
  },
  { 
  	path: 'about',  
  	component: AboutComponent
  },
  { 
  	path: 'artist/:id', 
  	component: ArtistComponent
  },
  { 
  	path: 'album/:id',     
  	component: AlbumComponent 
  }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}