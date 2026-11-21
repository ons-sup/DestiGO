import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let fixture: ComponentFixture<RegisterComponent>;
  let component: RegisterComponent;
  let element: HTMLElement;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement as HTMLElement;
    fixture.detectChanges();
  });

  it('creates the register component', () => {
    expect(component).toBeTruthy();
  });

  it('wires labels to the form fields', () => {
    const nameLabel = element.querySelector('label[for="register-name"]');
    const nameInput = element.querySelector<HTMLInputElement>('#register-name');
    const emailLabel = element.querySelector('label[for="register-email"]');
    const emailInput = element.querySelector<HTMLInputElement>('#register-email');
    const passwordLabel = element.querySelector('label[for="register-password"]');
    const passwordInput = element.querySelector<HTMLInputElement>('#register-password');

    expect(nameLabel?.textContent).toContain('Full name');
    expect(nameInput?.type).toBe('text');

    expect(emailLabel?.textContent).toContain('Email');
    expect(emailInput?.type).toBe('email');

    expect(passwordLabel?.textContent).toContain('Password');
    expect(passwordInput?.type).toBe('password');
  });

  it('shows validation errors when submitting an empty form', () => {
    const submit = element.querySelector<HTMLButtonElement>('button[type="submit"]');
    submit?.click();
    fixture.detectChanges();

    const errors = Array.from(element.querySelectorAll('.field__error')).map((node) =>
      node.textContent?.trim(),
    );

    expect(errors).toContain('Please enter your name.');
    expect(errors).toContain('Please enter a valid email address.');
    expect(errors).toContain('Password must be at least 6 characters.');
  });

  it('toggles password visibility', () => {
    const passwordInput = element.querySelector<HTMLInputElement>('#register-password');
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
