import { TestBed } from '@angular/core/testing';
import { DestinationWheelComponent } from './destination-wheel.component';

describe('DestinationWheelComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationWheelComponent],
    }).compileComponents();
  });

  function createWheel() {
    const fixture = TestBed.createComponent(DestinationWheelComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('renders all three country segments', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.wheel__segment').length).toBe(3);
    expect(element.querySelector('.wheel__country')?.textContent).toContain('Türkiye');
  });

  it('selects a country when its segment is clicked', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');

    segments[1].dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(element.querySelector('.wheel__country')?.textContent).toContain('Italy');
    expect(element.querySelector<HTMLButtonElement>('.wheel__explore')?.disabled).toBe(true);
  });

  it('emits the selected available country for the overlay to explore', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const emitted: Array<{ id: string; name: string; available: boolean; color: string; route: string }> = [];
    fixture.componentInstance.exploreSelected.subscribe((country) => emitted.push(country));

    element.querySelector<HTMLButtonElement>('.wheel__explore')?.click();

    expect(emitted).toEqual([
      { id: 'turkey', name: 'Türkiye', available: true, color: '#7a1fa2', route: '/turkey', tagline: 'Where continents meet.' },
    ]);
  });

  it('moves the selection with arrow keys', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');

    segments[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(element.querySelector('.wheel__country')?.textContent).toContain('Italy');
  });
});
