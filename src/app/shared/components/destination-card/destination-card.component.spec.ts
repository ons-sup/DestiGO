import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DestinationCardComponent } from './destination-card.component';
import { Destination } from '../../../core/models/destination.model';

const destination: Destination = {
  id: 'rome',
  number: '01',
  name: 'Rome',
  subtitle: 'The Eternal City',
  description: 'Ancient ruins meet vibrant Italian life.',
  imageUrl: '/assets/images/Rome.jfif',
  linkText: 'Discover Rome →',
};

describe('DestinationCardComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [DestinationCardComponent],
      providers: [{ provide: PLATFORM_ID, useValue: 'browser' }, provideRouter([])],
    }).compileComponents();
  });

  function createCard(variant?: 'small' | 'large') {
    const fixture = TestBed.createComponent(DestinationCardComponent);
    fixture.componentRef.setInput('destination', destination);
    if (variant) {
      fixture.componentRef.setInput('variant', variant);
    }
    fixture.detectChanges();
    return fixture;
  }

  it('renders the small variant with an accessible link and favorite button', () => {
    const fixture = createCard('small');
    const element = fixture.nativeElement as HTMLElement;
    const link = element.querySelector('a') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe('/italy/destinations/rome');
    expect(link.getAttribute('aria-label')).toContain('View Rome details');
    expect(element.querySelector('img')?.getAttribute('alt')).toBe('Rome');
    expect(element.querySelector('h3')?.textContent).toContain('Rome');
    expect(element.querySelector('app-favorite-button')).toBeTruthy();
    expect(element.querySelector('.destination-number')).toBeNull();
  });

  it('renders the large variant with number, description, and link text', () => {
    const fixture = createCard('large');
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.destination-number')?.textContent).toContain('01');
    expect(element.querySelector('.destination-info h3')?.textContent).toContain('Rome');
    expect(element.querySelector('.destination-info p')?.textContent).toContain(
      'Ancient ruins meet vibrant Italian life.',
    );
    expect(element.querySelector('.destination-link')?.textContent).toContain('Discover Rome →');
  });

  it('passes the matching favorite button size for each variant', () => {
    const small = createCard('small');
    expect(
      (small.nativeElement.querySelector('.favorite-btn') as HTMLElement).classList.contains(
        'size-small',
      ),
    ).toBe(true);

    const large = createCard('large');
    expect(
      (large.nativeElement.querySelector('.favorite-btn') as HTMLElement).classList.contains(
        'size-medium',
      ),
    ).toBe(true);
  });
});
