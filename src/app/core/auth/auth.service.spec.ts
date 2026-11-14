import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

const USERS_KEY = 'destigo_users_v1';
const SESSION_KEY = 'destigo_session_v1';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  describe('register', () => {
    it('creates an account, signs the user in, and never exposes the password', () => {
      const result = service.register('Ada Lovelace', 'Ada@Example.com', 'demo-pass-1');

      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.user.name).toBe('Ada Lovelace');
        expect(result.user.email).toBe('ada@example.com');
        expect('password' in result.user).toBe(false);
      }
      expect(service.isAuthenticated()).toBe(true);
      expect(service.currentUser()?.email).toBe('ada@example.com');
    });

    it('rejects duplicate emails regardless of casing', () => {
      service.register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');
      service.logout();

      const result = service.register('Other Person', 'ADA@example.com', 'another-pass');

      expect(result).toEqual({ ok: false, error: 'email-taken' });
      expect(service.isAuthenticated()).toBe(false);
    });

    it('persists registered users under the shared storage key', () => {
      service.register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');

      const raw = localStorage.getItem(USERS_KEY);
      expect(raw).not.toBeNull();
      const users = raw ? (JSON.parse(raw) as Array<{ email: string }>) : [];
      expect(users).toHaveLength(1);
      expect(users[0]?.email).toBe('ada@example.com');
    });

    it('rejects missing or invalid fields', () => {
      expect(service.register('', 'ada@example.com', 'demo-pass-1')).toEqual({
        ok: false,
        error: 'missing-fields',
      });
      expect(service.register('Ada', 'not-an-email', 'demo-pass-1')).toEqual({
        ok: false,
        error: 'invalid-email',
      });
      expect(service.register('Ada', 'ada@example.com', '')).toEqual({
        ok: false,
        error: 'missing-fields',
      });
    });
  });

  describe('login', () => {
    beforeEach(() => {
      service.register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');
      service.logout();
    });

    it('signs in with matching credentials, ignoring email casing', () => {
      const result = service.login('ADA@example.com', 'demo-pass-1');

      expect(result.ok).toBe(true);
      expect(service.currentUser()?.name).toBe('Ada Lovelace');
      expect(service.isAuthenticated()).toBe(true);
    });

    it('reports unknown emails distinctly from wrong passwords', () => {
      expect(service.login('nobody@example.com', 'demo-pass-1')).toEqual({
        ok: false,
        error: 'unknown-email',
      });
      expect(service.login('ada@example.com', 'wrong-pass')).toEqual({
        ok: false,
        error: 'wrong-password',
      });
    });

    it('rejects empty credentials', () => {
      expect(service.login('', '')).toEqual({ ok: false, error: 'missing-fields' });
    });
  });

  describe('logout', () => {
    it('clears the session but keeps registered users', () => {
      service.register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');

      service.logout();

      expect(service.currentUser()).toBeNull();
      expect(service.isAuthenticated()).toBe(false);
      expect(localStorage.getItem(SESSION_KEY)).toBeNull();
      expect(localStorage.getItem(USERS_KEY)).not.toBeNull();
    });
  });

  describe('session persistence', () => {
    it('restores the session for a new service instance, like a page refresh', () => {
      service.register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({});
      const reloaded = TestBed.inject(AuthService);

      expect(reloaded.isAuthenticated()).toBe(true);
      expect(reloaded.currentUser()).toEqual({
        id: expect.any(String),
        name: 'Ada Lovelace',
        email: 'ada@example.com',
      });
      expect('password' in (reloaded.currentUser() ?? {})).toBe(false);
    });

    it('starts signed out when no session exists', () => {
      expect(service.currentUser()).toBeNull();
      expect(service.isAuthenticated()).toBe(false);
    });

    it('ignores corrupted or dangling storage data', () => {
      localStorage.setItem(USERS_KEY, 'not-json');
      localStorage.setItem(SESSION_KEY, '"missing-user-id"');

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({});
      const reloaded = TestBed.inject(AuthService);

      expect(reloaded.currentUser()).toBeNull();
      expect(reloaded.isAuthenticated()).toBe(false);
    });
  });
});
