import { TestBed } from '@angular/core/testing';
import { LoadingStateComponent } from './loading-state.component';

describe('LoadingStateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingStateComponent],
    }).compileComponents();
  });

  it('exposes a polite status region with a spinner', () => {
    const fixture = TestBed.createComponent(LoadingStateComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const status = element.querySelector('.loading-state');

    expect(status?.getAttribute('role')).toBe('status');
    expect(status?.getAttribute('aria-live')).toBe('polite');
    expect(element.querySelector('.loading-state__spinner')).toBeTruthy();
    expect(element.textContent).toContain('Loading');
  });

  it('renders a custom message', () => {
    const fixture = TestBed.createComponent(LoadingStateComponent);
    fixture.componentRef.setInput('message', 'Fetching destinations…');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Fetching destinations…');
  });
});
