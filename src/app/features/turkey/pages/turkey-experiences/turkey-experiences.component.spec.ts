import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { TurkeyExperiencesComponent } from './turkey-experiences.component';

describe('TurkeyExperiencesComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurkeyExperiencesComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('renders experience content', () => {
    const fixture = TestBed.createComponent(TurkeyExperiencesComponent);
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Turkish Way');
    expect(text).toContain('Bosphorus Cruise');
    expect(text).toContain('Turkish Cuisine');
  });
});