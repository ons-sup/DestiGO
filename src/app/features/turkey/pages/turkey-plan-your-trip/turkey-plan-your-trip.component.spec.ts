import { TestBed } from '@angular/core/testing';
import { TurkeyPlanYourTripComponent } from './turkey-plan-your-trip.component';

describe('TurkeyPlanYourTripComponent', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('generates an itinerary and saves plan', async () => {
    await TestBed.configureTestingModule({ imports: [TurkeyPlanYourTripComponent] }).compileComponents();
    const fixture = TestBed.createComponent(TurkeyPlanYourTripComponent);
    fixture.detectChanges();
    fixture.componentInstance.generate();
    fixture.detectChanges();
    expect(fixture.componentInstance.itinerary().length).toBeGreaterThan(0);
    expect(localStorage.getItem('turkey-trip-plan') ?? '').toContain('istanbul');
  });
});