import {
  Component,
  OnDestroy,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SiteFooterComponent, RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnDestroy {
  protected readonly auth = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly heroVisible = signal(true);

  ngOnDestroy(): void {}

  protected openWheel(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const launcher = document.querySelector<HTMLButtonElement>('.wheel-launcher');
    launcher?.click();
  }
}
