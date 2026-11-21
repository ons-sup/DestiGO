import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ErrorStateComponent } from './error-state.component';

describe('ErrorStateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorStateComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createErrorState() {
    const fixture = TestBed.createComponent(ErrorStateComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('renders an alert with a default title', () => {
    const fixture = createErrorState();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.error-state')?.getAttribute('role')).toBe('alert');
    expect(element.querySelector('.error-state__title')?.textContent).toContain(
      'Something went wrong',
    );
  });

  it('renders a custom message', () => {
    const fixture = createErrorState();
    fixture.componentRef.setInput('title', 'Destination Not Found');
    fixture.componentRef.setInput('message', "We couldn't find that destination.");
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.error-state__title')?.textContent).toContain(
      'Destination Not Found',
    );
    expect(element.querySelector('.error-state__message')?.textContent).toContain(
      "We couldn't find that destination.",
    );
  });

  it('renders an action link', () => {
    const fixture = createErrorState();
    fixture.componentRef.setInput('actionLabel', 'Back to Destinations');
    fixture.componentRef.setInput('actionLink', '/destinations');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor).toBeTruthy();
    expect(anchor.getAttribute('href')).toBe('/destinations');
  });
});
