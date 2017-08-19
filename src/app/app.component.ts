import { Component } from '@angular/core';

@Component({
  selector: 'got-root',
  template: `
    <h1>
      Welcome to {{title}}!!
    </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'got';
}
