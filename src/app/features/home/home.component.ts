import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { SiteFooterComponent } from '../../layout/site-footer/site-footer.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SiteFooterComponent, RevealOnScrollDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  protected readonly auth = inject(AuthService);
  private readonly platformId = inject(PLATFORM_ID);

  protected openWheel(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    const launcher = document.querySelector<HTMLButtonElement>('.wheel-launcher');
    launcher?.click();
  }
}
