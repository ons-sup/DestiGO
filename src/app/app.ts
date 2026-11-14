import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DestinationWheelNavComponent } from './shared/destination-wheel/destination-wheel-nav.component';

@Component({
  imports: [RouterOutlet, DestinationWheelNavComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('DestiGO');
}
