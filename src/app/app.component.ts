import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
  host: {
    class: 'bg-primary-bg block h-screen w-screen',
  },
})
export class AppComponent {
  title = 'Web Design Slicing Practice with Angular 19';
}
