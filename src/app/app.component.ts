import { Component } from '@angular/core';

import { SpotifyService } from './services/spotify.service';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
  providers: [SpotifyService]
})
export class AppComponent  { name = 'Angular'; }
