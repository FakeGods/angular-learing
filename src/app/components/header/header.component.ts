import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <div class="header">{{ title() }}</div> `,
  styles: `
  .header {
    background: rgb(255, 255, 255);
    color: black;

  }`,
})
export class HeaderComponent {
  title = signal('Me me Mario');
}
