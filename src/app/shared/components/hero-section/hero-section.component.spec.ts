import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSectionComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders the detail variant with an image and eyebrow', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('isDetailPage', true);
    fixture.componentRef.setInput('eyebrow', 'The Eternal City');
    fixture.componentRef.setInput('title', 'Rome');
    fixture.componentRef.setInput('subtitle', 'Ancient ruins and vibrant life.');
    fixture.componentRef.setInput('imageSrc', '/assets/images/Rome.jfif');
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.detail-hero')).toBeTruthy();
    expect(element.querySelector('.eyebrow')?.textContent).toContain('The Eternal City');
    expect(element.querySelector('.detail-hero-content h1')?.textContent).toContain('Rome');
    expect(element.querySelector('.detail-hero-bg img')?.getAttribute('src')).toBe(
      '/assets/images/Rome.jfif',
    );
    expect(element.querySelector('.explore-btn')).toBeNull();
  });

  it('renders the video variant with a CTA link', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('videoSrc', '/assets/video/italy.mp4');
    fixture.componentRef.setInput('title', 'Discover ');
    fixture.componentRef.setInput('titleAccent', 'Italy');
    fixture.componentRef.setInput('showCta', true);
    fixture.componentRef.setInput('ctaText', 'Explore Destinations');
    fixture.componentRef.setInput('ctaRoute', '/destinations');
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('video source')?.getAttribute('src')).toBe(
      '/assets/video/italy.mp4',
    );
    const cta = element.querySelector('.explore-btn') as HTMLAnchorElement;
    expect(cta.getAttribute('href')).toBe('/destinations');
    expect(cta.textContent).toContain('Explore Destinations');
  });

  it('renders the image variant without a CTA when showCta is false', () => {
    const fixture = TestBed.createComponent(HeroSectionComponent);
    fixture.componentRef.setInput('imageSrc', '/assets/images/italy-destinations.jpg');
    fixture.componentRef.setInput('title', 'Discover ');
    fixture.componentRef.setInput('titleAccent', 'Italy');
    fixture.componentRef.setInput('ctaText', 'Explore Destinations');
    fixture.componentRef.setInput('ctaRoute', '/destinations');
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.hero.hero-image')).toBeTruthy();
    expect(element.querySelector('.hero-image-bg img')).toBeTruthy();
    expect(element.querySelector('.explore-btn')).toBeNull();
  });
});
