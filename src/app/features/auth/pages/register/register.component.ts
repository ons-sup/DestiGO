import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AUTH_ERROR_MESSAGES } from '../../../../core/auth/auth-messages';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  protected readonly showPassword = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly form = inject(FormBuilder).nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected get nameInvalid(): boolean {
    const name = this.form.controls.name;
    return name.invalid && (name.touched || name.dirty);
  }

  protected get emailInvalid(): boolean {
    const email = this.form.controls.email;
    return email.invalid && (email.touched || email.dirty);
  }

  protected get passwordInvalid(): boolean {
    const password = this.form.controls.password;
    return password.invalid && (password.touched || password.dirty);
  }

  protected togglePasswordVisibility(): void {
    this.showPassword.update((visible) => !visible);
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { name, email, password } = this.form.getRawValue();
    const result = this.authService.register(name, email, password);
    if (!result.ok) {
      this.errorMessage.set(AUTH_ERROR_MESSAGES[result.error]);
      return;
    }
    void this.router.navigateByUrl('/');
  }
}
