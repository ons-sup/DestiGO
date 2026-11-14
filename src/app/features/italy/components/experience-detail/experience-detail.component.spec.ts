import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceDetailComponent } from './experience-detail.component';
import { ActivatedRoute } from '@angular/router';
import { provideRouter } from '@angular/router';

describe('ExperienceDetailComponent', () => {
  let component: ExperienceDetailComponent;
  let fixture: ComponentFixture<ExperienceDetailComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => 'food-wine'
      }
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have notFound signal', () => {
    expect(component.notFound).toBeDefined();
  });

  it('should have experience signal', () => {
    expect(component.experience).toBeDefined();
  });

  it('should have getCategoryLabel method', () => {
    expect(typeof component.getCategoryLabel).toBe('function');
  });

  it('should have trackByName method', () => {
    expect(typeof component.trackByName).toBe('function');
  });
});