import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';
import {
  TURKEY_CULTURE_NOTES,
  TURKEY_OVERVIEW,
  TURKEY_PRACTICAL_FACTS,
  TURKEY_WORLD_HERITAGE,
} from '../../data/turkey-content.data';
import { TURKEY_FACT_SOURCES } from '../../data/turkey-fact-sources.data';

@Component({
  selector: 'app-turkey-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  template: `
    <section class="tr-about">
      <header class="tr-hero">
        <div class="tr-hero__bg"><img src="/images/turkey/destinations/ephesus.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
          <p class="tr-eyebrow">About Türkiye</p>
          <h1 class="tr-title">A country shaped by <span class="tr-accent">many worlds</span></h1>
          <p class="tr-lead">{{ overview.summary }}</p>
        </div>
      </header>

      <div class="tr-body">
        <section class="tr-section tr-two-col" appRevealOnScroll>
          <img src="/images/turkey/destinations/istanbul.jpg" alt="Istanbul skyline and historic architecture" loading="lazy" width="1600" height="1067" />
          <div>
            <p class="tr-kicker">Geography & culture</p>
            <h2>Two continents, one country</h2>
            <p>The Bosphorus divides Istanbul between Europe and Asia, with ferry crossings taking only a few minutes. Beyond the strait, the Anatolian plateau, the Black Sea coast and the Mediterranean shore each have their own landscapes, food and rhythms.</p>
            <p>Visitors can move between grand mosques, ancient ruins, lively bazaars and coastal towns — often within the same trip.</p>
          </div>
        </section>

        <section class="tr-section" appRevealOnScroll aria-labelledby="heritage-title">
          <p class="tr-kicker">World Heritage</p>
          <h2 id="heritage-title">{{ heritage.inscribedProperties }} UNESCO properties</h2>
          <p class="tr-intro">As of {{ heritage.asOf }}, UNESCO lists {{ heritage.cultural }} cultural and {{ heritage.mixed }} mixed properties in Türkiye. A selection is shown below.</p>
          <ul class="tr-heritage">
            @for (site of heritage.sites; track site.id) {
              <li>
                <span class="tr-year">{{ site.inscriptionYear }}</span>
                <span class="tr-site">{{ site.name }}</span>
                <span class="tr-cat">{{ site.category }}</span>
              </li>
            }
          </ul>
        </section>

        <section class="tr-section" appRevealOnScroll aria-labelledby="culture-title">
          <p class="tr-kicker">Culture</p>
          <h2 id="culture-title">Traditions to notice</h2>
          <div class="tr-cards">
            @for (note of notes; track note.id) {
              <article class="tr-info-card">
                @if (note.image) {
                  <img [src]="note.image" [alt]="note.title" loading="lazy" width="1200" height="800" />
                }
                <div>
                  <h3>{{ note.title }}</h3>
                  <p>{{ note.body }}</p>
                </div>
              </article>
            }
          </div>
        </section>

        <section class="tr-section" appRevealOnScroll aria-labelledby="practical-title">
          <p class="tr-kicker">Practical information</p>
          <h2 id="practical-title">Before you go</h2>
          <div class="tr-practical__grid">
            @for (fact of facts; track fact.id) {
              <div>
                <h3>{{ fact.label }}</h3>
                <p>{{ fact.value }}</p>
              </div>
            }
          </div>
        </section>

        <section class="tr-section tr-sources" appRevealOnScroll aria-labelledby="sources-title">
          <h2 id="sources-title">Sources</h2>
          <p>Facts on this page were checked against the following references.</p>
          <ul>
            @for (source of sources; track source.id) {
              <li>
                <a [href]="source.url" target="_blank" rel="noopener noreferrer">{{ source.publisher }} — {{ source.title }} <span aria-hidden="true">↗</span></a>
              </li>
            }
          </ul>
        </section>
      </div>
    </section>
  `,
  styles: [`
    :host{--accent:#b45309;--ink:#1c1917;--muted:#57534e;--line:#e7e2da}
    .tr-about{color:var(--ink)}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;opacity:0;transform:scale(1.05);animation:tr-hero-bg 780ms cubic-bezier(.22,1,.36,1) forwards;transition:transform 1.2s cubic-bezier(.22,1,.36,1)}
    @keyframes tr-hero-bg{to{opacity:1;transform:scale(1)}}
    .tr-hero__content>*{opacity:0;transform:translateY(16px);animation:tr-enter 780ms cubic-bezier(.22,1,.36,1) forwards}
    .tr-hero__content>:nth-child(1){animation-delay:.08s}.tr-hero__content>:nth-child(2){animation-delay:.2s}.tr-hero__content>:nth-child(3){animation-delay:.34s}
    @keyframes tr-enter{to{opacity:1;transform:none}}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%)}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;text-transform:uppercase}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;letter-spacing:-.02em}
    .tr-accent{color:#fbbf24}
    .tr-lead{max-width:48rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem}
    .tr-section{margin-top:3.5rem}
    .tr-kicker{margin:0 0 .5rem;color:var(--accent);font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase}
    .tr-section h2{font-size:clamp(1.6rem,3vw,2.4rem);margin:0 0 1.25rem;letter-spacing:-.02em}
    .tr-section p,.tr-info-card p,.tr-practical p{color:var(--muted);line-height:1.8}
    .tr-intro{max-width:70ch;margin-top:-.5rem!important}
    .tr-two-col{display:grid;grid-template-columns:1fr;gap:1.5rem;align-items:center}
    .tr-two-col img{width:100%;height:360px;object-fit:cover;border-radius:20px}
    .tr-two-col p{margin:0 0 1rem}
    .tr-heritage{margin:0;padding:0;list-style:none;display:grid;gap:.65rem}
    .tr-heritage li{display:grid;grid-template-columns:4.5rem 1fr auto;gap:1rem;align-items:center;padding:.9rem 1.1rem;border:1px solid var(--line);border-radius:12px;background:#fffdf9}
    .tr-year{color:var(--accent);font-weight:800}
    .tr-site{font-weight:600;line-height:1.4}
    .tr-cat{font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
    .tr-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem}
    .tr-info-card{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:#fff;transition:transform 280ms cubic-bezier(.22,1,.36,1),box-shadow 280ms cubic-bezier(.22,1,.36,1)}
    .tr-info-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(15,23,42,.08)}
    .tr-info-card img{width:100%;height:210px;object-fit:cover;display:block}
    .tr-info-card div{padding:1.2rem}
    .tr-info-card h3,.tr-practical h3{margin:0 0 .5rem;font-size:1.15rem}
    .tr-practical__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem}
    .tr-practical__grid div{padding:1.25rem;border:1px solid var(--line);border-radius:16px;background:#fffaf5}
    .tr-practical__grid p{margin:0;font-size:.95rem}
    .tr-sources ul{margin:0;padding:0;list-style:none;display:grid;gap:.6rem}
    .tr-sources a{color:var(--accent);font-size:.92rem;text-decoration:none}
    .tr-sources a:hover{text-decoration:underline}
    a:focus-visible{outline:2px solid var(--accent);outline-offset:3px;border-radius:4px}
    @media(min-width:900px){.tr-two-col{grid-template-columns:1.1fr 1fr}}
    @media(max-width:600px){.tr-hero__content{padding-top:7rem}.tr-heritage li{grid-template-columns:3.5rem 1fr}.tr-cat{grid-column:2}}
    @media(prefers-reduced-motion:reduce){.tr-hero__bg img,.tr-hero__content>*,.tr-info-card{animation:none!important;transition:none!important;transform:none!important;opacity:1!important}}
  `],
})
export class TurkeyAboutComponent {
  readonly overview = TURKEY_OVERVIEW;
  readonly heritage = TURKEY_WORLD_HERITAGE;
  readonly notes = TURKEY_CULTURE_NOTES;
  readonly facts = TURKEY_PRACTICAL_FACTS;
  readonly sources = TURKEY_FACT_SOURCES;
}
