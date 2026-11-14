import { describe, it, expect, beforeEach, vi } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;

  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    });

    TestBed.configureTestingModule({
      providers: [
        FavoritesService,
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should initialize with empty favorites', () => {
    expect(service.favorites()).toEqual([]);
    expect(service.count()).toBe(0);
  });

  it('should add a favorite', () => {
    service.add('rome');
    expect(service.favorites()).toContain('rome');
    expect(service.count()).toBe(1);
    expect(service.isFavorite('rome')).toBe(true);
  });

  it('should not add duplicate favorites', () => {
    service.add('rome');
    service.add('rome');
    expect(service.favorites()).toEqual(['rome']);
    expect(service.count()).toBe(1);
  });

  it('should remove a favorite', () => {
    service.add('rome');
    service.add('venice');
    service.remove('rome');
    expect(service.favorites()).toEqual(['venice']);
    expect(service.count()).toBe(1);
    expect(service.isFavorite('rome')).toBe(false);
  });

  it('should toggle favorite on and off', () => {
    expect(service.isFavorite('rome')).toBe(false);
    service.toggle('rome');
    expect(service.isFavorite('rome')).toBe(true);
    expect(service.count()).toBe(1);
    service.toggle('rome');
    expect(service.isFavorite('rome')).toBe(false);
    expect(service.count()).toBe(0);
  });

  it('should clear all favorites', () => {
    service.add('rome');
    service.add('venice');
    service.clear();
    expect(service.favorites()).toEqual([]);
    expect(service.count()).toBe(0);
  });
});

describe('FavoritesService (SSR)', () => {
  let service: FavoritesService;

  beforeEach(() => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    });

    TestBed.configureTestingModule({
      providers: [
        FavoritesService,
        { provide: PLATFORM_ID, useValue: 'server' }
      ]
    });
    service = TestBed.inject(FavoritesService);
  });

  it('should not use localStorage on server', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    service.add('rome');
    expect(service.favorites()).toContain('rome');
    expect(setItemSpy).not.toHaveBeenCalled();
  });
});