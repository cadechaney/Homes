import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:
    `<main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/house.png" alt="logo" aria-hidden="true" height=50>
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
`,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Homes';
}
