import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: ` <div class="header">{{ title() }}</div> `,
  styles: `

.header {
    background: rgb(0,0,0,.5);
    color: black;
    padding: 1 rem;
  }
  
  `,
})
export class HeaderComponent {
  title = signal('Kiebab');
}
