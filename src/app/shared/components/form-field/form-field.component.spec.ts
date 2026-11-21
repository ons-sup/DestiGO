import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormFieldComponent } from './form-field.component';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, FormFieldComponent],
  template: `
    <form [formGroup]="form">
      <app-form-field
        label="Email"
        inputId="email"
        type="email"
        autocomplete="email"
        [required]="true"
        [error]="errorMessage()"
        formControlName="email"
      />
    </form>
  `,
})
class FormFieldHostComponent {
  readonly errorMessage = signal<string | null>(null);
  form = new FormGroup({ email: new FormControl('') });
}

describe('FormFieldComponent', () => {
  let fixture: ComponentFixture<FormFieldHostComponent>;
  let host: FormFieldHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFieldHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormFieldHostComponent);
    host = fixture.componentInstance;
    fixture.detectChanges();
  });

  function input(): HTMLInputElement {
    return fixture.nativeElement.querySelector('input') as HTMLInputElement;
  }

  it('renders a label and input wired by id', () => {
    const label = fixture.nativeElement.querySelector('label') as HTMLLabelElement;
    const field = input();

    expect(label.textContent).toContain('Email');
    expect(label.getAttribute('for')).toBe('email');
    expect(field.id).toBe('email');
    expect(field.type).toBe('email');
    expect(field.getAttribute('autocomplete')).toBe('email');
    expect(field.hasAttribute('required')).toBe(true);
    expect(field.getAttribute('aria-required')).toBe('true');
    expect(fixture.nativeElement.querySelector('.field__required')).toBeTruthy();
  });

  it('renders validation errors with an accessible description', () => {
    host.errorMessage.set('Please enter a valid email address.');
    fixture.detectChanges();

    const error = fixture.nativeElement.querySelector('.field__error') as HTMLParagraphElement;
    expect(error.textContent).toContain('Please enter a valid email address.');
    expect(error.id).toBe('email-error');
    expect(input().getAttribute('aria-invalid')).toBe('true');
    expect(input().getAttribute('aria-describedby')).toBe('email-error');
  });

  it('clears the accessible error state when the error is removed', () => {
    host.errorMessage.set('Please enter a valid email address.');
    fixture.detectChanges();

    host.errorMessage.set(null);
    fixture.detectChanges();

    expect(input().hasAttribute('aria-invalid')).toBe(false);
    expect(input().hasAttribute('aria-describedby')).toBe(false);
    expect(fixture.nativeElement.querySelector('.field__error')).toBeNull();
  });

  it('updates the form control when the user types', () => {
    const field = input();
    field.value = 'traveler@example.com';
    field.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(host.form.controls.email.value).toBe('traveler@example.com');
  });

  it('writes the form control value to the input', () => {
    host.form.controls.email.setValue('hello@example.com');
    fixture.detectChanges();

    expect(input().value).toBe('hello@example.com');
  });

  it('marks the control touched on blur', () => {
    expect(host.form.controls.email.touched).toBe(false);

    input().dispatchEvent(new Event('blur'));

    expect(host.form.controls.email.touched).toBe(true);
  });

  it('reflects the disabled state from the form control', () => {
    host.form.controls.email.disable();
    fixture.detectChanges();

    expect(input().disabled).toBe(true);
  });
});
