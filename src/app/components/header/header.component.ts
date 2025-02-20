import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div class="bg-slate-100 px-4 py-3">
      {{ title() }}
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  title = signal('Kiebab');
}
