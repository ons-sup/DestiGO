import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  function createEmptyState() {
    const fixture = TestBed.createComponent(EmptyStateComponent);
    fixture.componentRef.setInput('title', 'No Favorites Yet');
    fixture.detectChanges();
    return fixture;
  }

  it('renders the title, message, and icon', () => {
    const fixture = createEmptyState();
    fixture.componentRef.setInput('message', 'Save destinations you love.');
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.empty-state__title')?.textContent).toContain('No Favorites Yet');
    expect(element.querySelector('.empty-state__message')?.textContent).toContain(
      'Save destinations you love.',
    );
    expect(element.querySelector('.empty-state__icon')).toBeTruthy();
  });

  it('renders an action link', () => {
    const fixture = createEmptyState();
    fixture.componentRef.setInput('actionLabel', 'Explore Destinations');
    fixture.componentRef.setInput('actionLink', '/destinations');
    fixture.detectChanges();

    const anchor = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;
    expect(anchor).toBeTruthy();
    expect(anchor.getAttribute('href')).toBe('/destinations');
    expect(anchor.textContent).toContain('Explore Destinations');
  });

  it('emits an action when the action button is clicked', () => {
    const fixture = createEmptyState();
    fixture.componentRef.setInput('actionLabel', 'Retry');
    fixture.detectChanges();

    const emitSpy = vi.spyOn(fixture.componentInstance.action, 'emit');
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    expect(emitSpy).toHaveBeenCalled();
  });
});
