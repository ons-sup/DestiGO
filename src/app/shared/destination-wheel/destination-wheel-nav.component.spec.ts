import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { DestinationWheelNavComponent } from './destination-wheel-nav.component';

describe('DestinationWheelNavComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationWheelNavComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  async function createNav() {
    const fixture = TestBed.createComponent(DestinationWheelNavComponent);
    await fixture.whenStable();
    fixture.detectChanges();
    return fixture;
  }

  async function tick(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  async function openNav() {
    const fixture = await createNav();
    const element = fixture.nativeElement as HTMLElement;
    const launcher = element.querySelector<HTMLButtonElement>('.wheel-launcher');
    launcher?.focus();
    launcher?.click();
    await tick();
    fixture.detectChanges();
    return { fixture, element, launcher };
  }

  it('opens and closes the overlay', async () => {
    const { fixture, element } = await openNav();
    expect(element.querySelector('.wheel-overlay')).toBeTruthy();

    element.querySelector<HTMLButtonElement>('.wheel-overlay__close')?.click();
    await tick();
    fixture.detectChanges();

    expect(element.querySelector('.wheel-overlay')).toBeNull();
  });

  it('closes on Escape', async () => {
    const { fixture, element } = await openNav();
    expect(element.querySelector('.wheel-overlay')).toBeTruthy();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await tick();
    fixture.detectChanges();

    expect(element.querySelector('.wheel-overlay')).toBeNull();
  });

  it('closes on backdrop click', async () => {
    const { fixture, element } = await openNav();
    expect(element.querySelector('.wheel-overlay')).toBeTruthy();

    element.querySelector<HTMLElement>('.wheel-overlay__backdrop')?.click();
    await tick();
    fixture.detectChanges();

    expect(element.querySelector('.wheel-overlay')).toBeNull();
  });

  it('restores focus after close', async () => {
    const { fixture, element, launcher } = await openNav();
    element.querySelector<HTMLButtonElement>('.wheel-overlay__close')?.click();
    await tick();
    fixture.detectChanges();

    expect(document.activeElement).toBe(launcher);
  });

  it('navigates to the explored country and closes', async () => {
    const { fixture, element } = await openNav();
    const router = TestBed.inject(Router);
    const navigate = vi.spyOn(router, 'navigateByUrl').mockResolvedValue(true);
    element.querySelector<HTMLButtonElement>('.wheel__explore')?.click();
    await tick();
    fixture.detectChanges();

    expect(navigate).toHaveBeenCalledWith('/turkey');
    expect(element.querySelector('.wheel-overlay')).toBeNull();
  });
});
