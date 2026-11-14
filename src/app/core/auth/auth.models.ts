export interface User {
  id: string;
  name: string;
  email: string;
}

export interface StoredUser extends User {
  password: string;
}

export type AuthErrorCode =
  'missing-fields' | 'invalid-email' | 'email-taken' | 'unknown-email' | 'wrong-password';

export type AuthResult = { ok: true; user: User } | { ok: false; error: AuthErrorCode };
