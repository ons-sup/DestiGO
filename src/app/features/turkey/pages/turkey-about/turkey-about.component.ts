import { Component } from '@angular/core';

@Component({
  selector: 'app-turkey-about',
  standalone: true,
  template: `
    <section class="tr-about">
      <header class="tr-hero">
        <div class="tr-hero__bg"><img src="/images/turkey/destinations/ephesus.jpg" alt="" aria-hidden="true" /></div>
        <div class="tr-hero__overlay"></div>
        <div class="tr-hero__content">
        <p class="tr-eyebrow">ABOUT TÃœRKÄ°YE</p>
        <h1 class="tr-title">A country shaped by <span class="tr-accent">many worlds</span></h1>
        <p class="tr-lead">TÃ¼rkiye sits at the crossroads of Europe and Asia, with a heritage shaped by ancient civilizations, Byzantine and Ottoman history, diverse landscapes, and vibrant local traditions.</p>
        </div>
      </header>
      <div class="tr-body">

      <section class="tr-section tr-two-col">
        <img src="/images/turkey/destinations/istanbul.jpg" alt="Istanbul skyline and historic architecture" loading="lazy" />
        <div>
          <h2>Geography & Culture</h2>
          <p>From the Bosphorus in Istanbul to the Mediterranean coast and the Anatolian plateau, TÃ¼rkiyeâ€™s geography is as varied as its culture. Its cities and regions reflect centuries of exchange between cultures, religions, and empires.</p>
          <p>Visitors can experience grand mosques, ancient ruins, lively bazaars, coastal towns, and traditional villagesâ€”often within the same trip.</p>
        </div>
      </section>

      <section class="tr-section">
        <h2>Travel Highlights</h2>
        <div class="tr-cards">
          <article class="tr-info-card"><img src="/images/turkey/destinations/cappadocia.jpg" alt="Hot air balloons over Cappadocia" loading="lazy" /><div><h3>Landscapes</h3><p>Cappadociaâ€™s valleys, Pamukkaleâ€™s terraces, and the Turquoise Coast offer striking natural scenery.</p></div></article>
          <article class="tr-info-card"><img src="/images/turkey/destinations/ephesus.jpg" alt="Library of Celsus in Ephesus" loading="lazy" /><div><h3>History</h3><p>Ephesus, ancient theaters, and Ottoman landmarks reveal TÃ¼rkiyeâ€™s deep historical layers.</p></div></article>
          <article class="tr-info-card"><img src="/images/turkey/experiences/turkish-cuisine.jpg" alt="Turkish baklava and sweets" loading="lazy" /><div><h3>Cuisine</h3><p>Turkish food ranges from meze and kebabs to baklava, simit, and regional specialties.</p></div></article>
        </div>
      </section>

      <section class="tr-section tr-practical">
        <h2>Practical Visitor Information</h2>
        <div class="tr-practical__grid">
          <div><h3>Best Seasons</h3><p>Spring and autumn are generally comfortable for sightseeing in many regions. Summer suits coastal areas, while Cappadocia can be visited year-round with seasonal differences.</p></div>
          <div><h3>Getting Around</h3><p>Major cities are connected by flights and buses. Within cities, trams, ferries, metro lines, and walking are common ways to explore.</p></div>
          <div><h3>Local Etiquette</h3><p>Dress modestly when visiting mosques, remove shoes where required, and be respectful during prayer times and cultural visits.</p></div>
        </div>
      </section>
    </div>
    </section>
  `,
  styles: [`
    .tr-about{color:#1f2937;}
    .tr-hero{position:relative;min-height:52vh;display:flex;align-items:flex-end;overflow:hidden;}
    .tr-hero__bg,.tr-hero__overlay{position:absolute;inset:0;}
    .tr-hero__bg img{width:100%;height:100%;object-fit:cover;display:block;}
    .tr-hero__overlay{background:linear-gradient(180deg,rgba(0,0,0,.25) 0%,rgba(0,0,0,.45) 45%,rgba(0,0,0,.72) 100%);}
    .tr-hero__content{position:relative;z-index:1;max-width:1240px;width:100%;margin:0 auto;padding:8rem 1.5rem 3.5rem;color:#fff;}
    .tr-body{max-width:1240px;margin:0 auto;padding:2.5rem 1.5rem 4rem;}
    .tr-eyebrow{font-size:.78rem;font-weight:700;letter-spacing:.14em;color:#fbbf24;margin:0 0 .75rem;}
    .tr-title{font-size:clamp(2.2rem,5vw,4rem);line-height:1.08;margin:0 0 1rem;font-weight:700;}
    .tr-accent{color:#fbbf24;}
    .tr-lead{max-width:48rem;color:rgba(255,255,255,.92);line-height:1.75;margin:0;font-size:1.05rem;}
    .tr-section{margin-top:3rem;}
    .tr-section h2{font-size:clamp(1.6rem,3vw,2.4rem);margin:0 0 1.25rem;}
    .tr-two-col{display:grid;grid-template-columns:1fr;gap:1.5rem;align-items:center;}
    .tr-two-col img{width:100%;height:360px;object-fit:cover;border-radius:20px;}
    .tr-two-col p,.tr-practical p,.tr-info-card p{color:#4b5563;line-height:1.75;}
    .tr-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.25rem;}
    .tr-info-card{border:1px solid #e5e7eb;border-radius:18px;overflow:hidden;background:#fff;}
    .tr-info-card img{width:100%;height:210px;object-fit:cover;display:block;}
    .tr-info-card div{padding:1.2rem;}
    .tr-info-card h3,.tr-practical h3{margin:0 0 .5rem;font-size:1.15rem;}
    .tr-practical__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.25rem;}
    .tr-practical__grid div{padding:1.25rem;border:1px solid #e5e7eb;border-radius:16px;background:#fffaf5;}
    @media(min-width:900px){.tr-two-col{grid-template-columns:1.1fr 1fr;}}
  `],
})
export class TurkeyAboutComponent {}
