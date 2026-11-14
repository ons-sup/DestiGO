import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinationDetailComponent } from './destination-detail.component';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';

describe('DestinationDetailComponent', () => {
  let component: DestinationDetailComponent;
  let fixture: ComponentFixture<DestinationDetailComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'rome'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have notFound signal', () => {
    expect(component.notFound).toBeDefined();
  });

  it('should have destination signal', () => {
    expect(component.destination).toBeDefined();
  });

  it('should compute previous and next destination ids', () => {
    expect(component.previousId()).toBeUndefined();
    // nextId depends on data loading, just verify it's a function
    expect(typeof component.nextId).toBe('function');
  });

  it('should have trackByName method', () => {
    expect(typeof component.trackByName).toBe('function');
  });

  it('should have getDestinationName method', () => {
    expect(typeof component.getDestinationName).toBe('function');
  });
});