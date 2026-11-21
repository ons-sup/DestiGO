import { Component, computed, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url';

@Component({
  selector: 'app-form-field',
  standalone: true,
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true,
    },
  ],
})
export class FormFieldComponent implements ControlValueAccessor {
  label = input.required<string>();
  inputId = input.required<string>();
  type = input<FormFieldType>('text');
  autocomplete = input<string>('');
  required = input(false);
  error = input<string | null>(null);

  protected readonly value = signal('');
  protected readonly disabled = signal(false);
  protected readonly invalid = computed(() => Boolean(this.error()));
  protected readonly errorId = computed(() => `${this.inputId()}-error`);
  protected readonly describedBy = computed(() => (this.invalid() ? this.errorId() : null));

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value.set(target.value);
    this.onChange(target.value);
  }

  protected handleBlur(): void {
    this.onTouched();
  }
}
