import { AuthErrorCode } from './auth.models';

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  'missing-fields': 'Please fill in all fields.',
  'invalid-email': 'Please enter a valid email address.',
  'email-taken': 'An account with this email already exists. Try logging in instead.',
  'unknown-email': 'No account found with this email. Create an account first.',
  'wrong-password': 'Incorrect password. Please try again.',
};
