import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageHeroComponent } from '../../components/page-hero/page-hero.component';
import { SPAIN_DATA } from '../../data/spain.data';
import { SPAIN_IMAGE_CREDITS } from '../../data/image-credits.data';

@Component({
  selector: 'app-spain-photo-credits',
  standalone: true,
  imports: [RouterLink, PageHeroComponent],
  template: `
    <section class="tr-credits">
      <app-spain-page-hero
        eyebrow="SPAIN PORTAL"
        title="Photo "
        titleAccent="credits"
        lead="Photographs used in the Spain portal, with their Wikimedia Commons sources, authors, and licenses."
        [image]="heroImage"
      />
      <div class="tr-body">
        <p>
          Images in this portal are sourced from Wikimedia Commons under Public domain, CC0, CC BY, or CC BY-SA
          licenses and re-encoded as optimized WebP. Full attribution is also maintained in
          <code>docs/IMAGE-CREDITS-spain.md</code>.
        </p>
        <div class="table-wrap">
          <table>
            <thead><tr><th>File</th><th>Commons title</th><th>Author</th><th>License</th><th>Source</th></tr></thead>
            <tbody>
              @for (c of credits; track c.file) {
                <tr>
                  <td><code>{{ c.file }}</code></td>
                  <td>{{ c.title }}</td>
                  <td>{{ c.author }}</td>
                  <td>{{ c.license }}</td>
                  <td><a [href]="c.sourceUrl" target="_blank" rel="noopener noreferrer">Commons</a></td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <p><a routerLink="/spain" class="tr-back">← Back to Spain</a></p>
      </div>
    </section>
  `,
  styles: `
    .tr-credits { color: #1f2937; }
    .tr-body { max-width: 1240px; margin: 0 auto; padding: 2.5rem 1.5rem 4rem; line-height: 1.6; }
    .tr-body code { background: #f3f4f6; padding: .1rem .35rem; border-radius: 4px; font-size: .85em; }
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: .85rem; }
    th, td { text-align: left; padding: .5rem .6rem; border-bottom: 1px solid #e5e7eb; vertical-align: top; }
    th { background: #f9fafb; }
    .tr-back { color: #b45309; text-decoration: none; font-weight: 600; }
    .tr-back:hover { text-decoration: underline; }
  `,
})
export class SpainPhotoCreditsComponent {
  readonly heroImage = SPAIN_DATA.image;
  readonly credits = SPAIN_IMAGE_CREDITS;
}
