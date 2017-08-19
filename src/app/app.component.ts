import {Component} from '@angular/core';

@Component({
  selector: 'got-root',
  template: `
    <h1>
      Welcome to Weinseiter
    </h1>

    <got-questionaire></got-questionaire>
  `,
  styles: []
})
export class AppComponent {
}
