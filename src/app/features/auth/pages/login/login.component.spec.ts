import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('wires labels to the shared form fields', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const emailLabel = element.querySelector('label[for="login-email"]');
    const emailInput = element.querySelector<HTMLInputElement>('#login-email');

    expect(emailLabel?.textContent).toContain('Email');
    expect(emailInput?.type).toBe('email');
    expect(emailInput?.getAttribute('autocomplete')).toBe('email');
  });

  it('shows validation messages after submitting an empty form', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const submit = element.querySelector<HTMLButtonElement>('button[type="submit"]');
    submit?.click();
    fixture.detectChanges();

    const errors = Array.from(element.querySelectorAll('.field__error')).map((node) =>
      node.textContent?.trim(),
    );

    expect(errors).toContain('Please enter a valid email address.');
    expect(errors).toContain('Password is required.');
  });
});
