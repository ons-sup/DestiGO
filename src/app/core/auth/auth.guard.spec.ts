import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('redirects anonymous users to the login page with a returnUrl', () => {
    const result = runGuard('/favorites');

    expect(result).toBeInstanceOf(UrlTree);
    expect((result as UrlTree).toString()).toBe('/auth/login?returnUrl=%2Ffavorites');
  });

  it('allows navigation for authenticated users', () => {
    TestBed.inject(AuthService).register('Ada Lovelace', 'ada@example.com', 'demo-pass-1');

    const result = runGuard('/favorites');

    expect(result).toBe(true);
  });

  function runGuard(url: string): boolean | UrlTree {
    const route = {} as ActivatedRouteSnapshot;
    const state = { url } as RouterStateSnapshot;
    return TestBed.runInInjectionContext(() => authGuard(route, state)) as boolean | UrlTree;
  }
});
