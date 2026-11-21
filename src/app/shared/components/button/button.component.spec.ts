import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ButtonComponent } from './button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `<app-button>Save changes</app-button>`,
})
class ButtonHostComponent {}

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent, ButtonHostComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createButton() {
    const fixture = TestBed.createComponent(ButtonComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('renders a native button by default', () => {
    const fixture = createButton();
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;

    expect(button).toBeTruthy();
    expect(button.getAttribute('type')).toBe('button');
    expect(fixture.nativeElement.querySelector('a')).toBeNull();
  });

  it('applies variant and size classes', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.componentRef.setInput('size', 'lg');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList.contains('btn--secondary')).toBe(true);
    expect(button.classList.contains('btn--lg')).toBe(true);
  });

  it('supports the text variant and full width', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('variant', 'text');
    fixture.componentRef.setInput('fullWidth', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.classList.contains('btn--text')).toBe(true);
    expect(button.classList.contains('btn--full')).toBe(true);
    expect(fixture.nativeElement.classList.contains('btn-host--full')).toBe(true);
  });

  it('disables the native button when disabled', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    expect((fixture.nativeElement.querySelector('button') as HTMLButtonElement).disabled).toBe(
      true,
    );
  });

  it('shows a spinner and disables while loading', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('loading', true);
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    expect(button.getAttribute('aria-busy')).toBe('true');
    expect(button.querySelector('.btn__spinner')).toBeTruthy();
  });

  it('renders an anchor when a link is provided', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('link', '/destinations');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor).toBeTruthy();
    expect(anchor.getAttribute('href')).toBe('/destinations');
    expect(fixture.nativeElement.querySelector('button')).toBeNull();
  });

  it('prevents navigation for an inactive link', () => {
    const fixture = createButton();
    fixture.componentRef.setInput('link', '/destinations');
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor.getAttribute('aria-disabled')).toBe('true');
    expect(anchor.getAttribute('tabindex')).toBe('-1');

    const event = {
      preventDefault: vi.fn(),
      stopPropagation: vi.fn(),
    } as unknown as Event;
    (
      fixture.componentInstance as unknown as { handleLinkClick(event: Event): void }
    ).handleLinkClick(event);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('projects label content', () => {
    const fixture = TestBed.createComponent(ButtonHostComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Save changes');
  });
});
