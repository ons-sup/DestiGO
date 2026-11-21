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

  it('selects a country on hover (mouseenter)', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');

    segments[1].dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    fixture.detectChanges();

    expect(element.querySelector('.wheel__country')?.textContent).toContain('Italy');
    expect(element.querySelector<HTMLButtonElement>('.wheel__explore')?.disabled).toBe(false);
  });

  it('emits the selected available country on segment click', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const emitted: Array<{
      id: string;
      name: string;
      available: boolean;
      color: string;
      route: string;
    }> = [];
    fixture.componentInstance.exploreSelected.subscribe((country) => emitted.push(country));

    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');
    segments[0].dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(emitted).toEqual([
      {
        id: 'turkey',
        name: 'Türkiye',
        available: true,
        color: '#c0392b',
        route: '/turkey',
        tagline: 'Where continents meet.',
      },
    ]);
  });

  it('does not emit on click for unavailable country', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const emitted: unknown[] = [];
    fixture.componentInstance.exploreSelected.subscribe((country) => emitted.push(country));

    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');
    // Select Spain (index 2, unavailable)
    segments[2].dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(emitted.length).toBe(0);
  });

  it('moves the selection with arrow keys', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const segments = element.querySelectorAll<SVGGElement>('.wheel__segment');

    segments[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    fixture.detectChanges();

    expect(element.querySelector('.wheel__country')?.textContent).toContain('Italy');
  });

  it('selects and emits Home when center hub is clicked', () => {
    const fixture = createWheel();
    const element = fixture.nativeElement as HTMLElement;
    const emitted: Array<{ id: string; name: string; available: boolean; route: string }> = [];
    fixture.componentInstance.exploreSelected.subscribe((country) => emitted.push(country));

    const hub = element.querySelector<SVGGElement>('.wheel__hub');
    hub?.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
    fixture.detectChanges();

    expect(element.querySelector('.wheel__country')?.textContent).toContain('Home');
    expect(element.querySelector('.wheel__tagline')?.textContent).toContain('Your starting point');

    hub?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    fixture.detectChanges();

    expect(emitted).toEqual([
      {
        id: 'home',
        name: 'Home',
        tagline: 'Your starting point for all journeys.',
        route: '/',
        available: true,
        color: '#d4a96a',
      },
    ]);
  });
});
