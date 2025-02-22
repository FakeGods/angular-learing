import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
<<<<<<< HEAD
    <div class="bg-slate-100 px-4 py-3 shadow-md">
      <span>My store </span>
=======
    <div class="bg-slate-100 px-4 py-3">
      {{ title() }}
>>>>>>> f1a9ba229ac8d4fbef325f190570dc352b4c649e
    </div>
  `,
  styles: ``,
})
<<<<<<< HEAD
export class HeaderComponent {}
=======
export class HeaderComponent {
  title = signal('Kiebab');
}
>>>>>>> f1a9ba229ac8d4fbef325f190570dc352b4c649e
