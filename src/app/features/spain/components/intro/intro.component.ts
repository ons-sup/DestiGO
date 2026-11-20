import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spain-intro',
  standalone: true,
  template: `<section class="intro"><p>{{ text() }}</p></section>`,
  styles: `.intro{padding:1rem 0;line-height:1.6}`,
})
export class IntroComponent {
  readonly text = input.required<string>();
}
