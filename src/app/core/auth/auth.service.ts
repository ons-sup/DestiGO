import { Injectable, computed, signal } from '@angular/core';
import { AuthResult, StoredUser, User } from './auth.models';

const USERS_STORAGE_KEY = 'destigo_users_v1';
const SESSION_STORAGE_KEY = 'destigo_session_v1';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Demo-only authentication backed by localStorage. Credentials are stored in
 * plain text by design; this must never be connected to real user accounts.
 */
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly users = signal<readonly StoredUser[]>([]);
  private readonly sessionUser = signal<User | null>(null);

  readonly currentUser = this.sessionUser.asReadonly();
  readonly isAuthenticated = computed(() => this.sessionUser() !== null);

  constructor() {
    this.users.set(this.readUsers());
    this.sessionUser.set(this.readSession());
  }

  register(name: string, email: string, password: string): AuthResult {
    const trimmedName = name.trim();
    const normalizedEmail = email.trim().toLowerCase();
    if (!trimmedName || !normalizedEmail || !password) {
      return { ok: false, error: 'missing-fields' };
    }
    if (!EMAIL_PATTERN.test(normalizedEmail)) {
      return { ok: false, error: 'invalid-email' };
    }
    if (this.users().some((user) => user.email === normalizedEmail)) {
      return { ok: false, error: 'email-taken' };
    }
    const storedUser: StoredUser = {
      id: this.createId(),
      name: trimmedName,
      email: normalizedEmail,
      password,
    };
    this.users.update((users) => [...users, storedUser]);
    this.writeUsers();
    const user = this.toPublicUser(storedUser);
    this.startSession(user);
    return { ok: true, user };
  }

  login(email: string, password: string): AuthResult {
    const normalizedEmail = email.trim().toLowerCase();
    if (!normalizedEmail || !password) {
      return { ok: false, error: 'missing-fields' };
    }
    const storedUser = this.users().find((user) => user.email === normalizedEmail);
    if (!storedUser) {
      return { ok: false, error: 'unknown-email' };
    }
    if (storedUser.password !== password) {
      return { ok: false, error: 'wrong-password' };
    }
    const user = this.toPublicUser(storedUser);
    this.startSession(user);
    return { ok: true, user };
  }

  logout(): void {
    this.sessionUser.set(null);
    this.removeStorage(SESSION_STORAGE_KEY);
  }

  private startSession(user: User): void {
    this.sessionUser.set(user);
    this.writeStorage(SESSION_STORAGE_KEY, JSON.stringify(user.id));
  }

  private readUsers(): readonly StoredUser[] {
    const value = this.readStorage(USERS_STORAGE_KEY);
    if (!Array.isArray(value)) {
      return [];
    }
    return value.filter((item): item is StoredUser => this.isStoredUser(item));
  }

  private readSession(): User | null {
    const value = this.readStorage(SESSION_STORAGE_KEY);
    if (typeof value !== 'string') {
      return null;
    }
    const storedUser = this.users().find((user) => user.id === value);
    return storedUser ? this.toPublicUser(storedUser) : null;
  }

  private writeUsers(): void {
    this.writeStorage(USERS_STORAGE_KEY, JSON.stringify(this.users()));
  }

  private readStorage(key: string): unknown {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    try {
      const raw = localStorage.getItem(key);
      return raw === null ? null : JSON.parse(raw);
    } catch {
      return null;
    }
  }

  private writeStorage(key: string, value: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    try {
      localStorage.setItem(key, value);
    } catch {
      return;
    }
  }

  private removeStorage(key: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch {
      return;
    }
  }

  private isStoredUser(value: unknown): value is StoredUser {
    if (typeof value !== 'object' || value === null) {
      return false;
    }
    const candidate = value as Partial<StoredUser>;
    return (
      typeof candidate.id === 'string' &&
      typeof candidate.name === 'string' &&
      typeof candidate.email === 'string' &&
      typeof candidate.password === 'string'
    );
  }

  private toPublicUser(user: StoredUser): User {
    return { id: user.id, name: user.name, email: user.email };
  }

  private createId(): string {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
    return `user-${Date.now()}-${Math.round(Math.random() * 1_000_000_000)}`;
  }
}
