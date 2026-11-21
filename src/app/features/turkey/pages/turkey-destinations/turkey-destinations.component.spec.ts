import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TurkeyDestinationsComponent } from './turkey-destinations.component';

describe('TurkeyDestinationsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurkeyDestinationsComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders destination cards from Turkey data', () => {
    const fixture = TestBed.createComponent(TurkeyDestinationsComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Istanbul');
    expect(text).toContain('Cappadocia');
    expect(text).toContain('Pamukkale');
    expect(text).toContain('Ephesus');
  });
});