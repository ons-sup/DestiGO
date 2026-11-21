import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;
  let component: LoginComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('wires labels to the shared form fields', () => {
    const emailLabel = element.querySelector('label[for="login-email"]');
    const emailInput = element.querySelector<HTMLInputElement>('#login-email');
    const passwordLabel = element.querySelector('label[for="login-password"]');
    const passwordInput = element.querySelector<HTMLInputElement>('#login-password');

    expect(emailLabel?.textContent).toContain('Email');
    expect(emailInput?.type).toBe('email');
    expect(emailInput?.getAttribute('autocomplete')).toBe('email');

    expect(passwordLabel?.textContent).toContain('Password');
    expect(passwordInput?.type).toBe('password');
  });

  it('shows validation messages after submitting an empty form', () => {
    const submit = element.querySelector<HTMLButtonElement>('button[type="submit"]');
    submit?.click();
    fixture.detectChanges();

    const errors = Array.from(element.querySelectorAll('.field__error')).map((node) =>
      node.textContent?.trim(),
    );

    expect(errors).toContain('Please enter a valid email address.');
    expect(errors).toContain('Password is required.');
  });

  it('toggles password visibility between password and text', () => {
    const passwordInput = element.querySelector<HTMLInputElement>('#login-password');
    const toggleButton = element.querySelector<HTMLButtonElement>('.password-toggle');

    expect(passwordInput?.type).toBe('password');

    toggleButton?.click();
    fixture.detectChanges();
    expect(passwordInput?.type).toBe('text');

    toggleButton?.click();
    fixture.detectChanges();
    expect(passwordInput?.type).toBe('password');
  });
});
