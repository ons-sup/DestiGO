import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationDetailComponent } from './destination-detail.component';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';

describe('DestinationDetailComponent', () => {
  let fixture: ComponentFixture<DestinationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: (k: string) => 'madrid' } } } },
        provideRouter([]),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DestinationDetailComponent);
    fixture.detectChanges();
  });

  it('renders madrid', () => {
    expect(fixture.nativeElement.textContent).toContain('Madrid');
  });
});
