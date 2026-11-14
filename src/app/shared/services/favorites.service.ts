import { Injectable, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

const STORAGE_KEY = 'destigo-favorites';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  private _favorites = signal<string[]>([]);
  readonly favorites = this._favorites.asReadonly();

  readonly count = computed(() => this._favorites().length);

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    if (!this.isBrowser) return;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this._favorites.set(parsed);
        }
      }
    } catch {
      // Ignore parsing errors
    }
  }

  private saveToStorage(): void {
    if (!this.isBrowser) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._favorites()));
    } catch {
      // Ignore storage errors (e.g., quota exceeded)
    }
  }

  isFavorite(destinationId: string): boolean {
    return this._favorites().includes(destinationId);
  }

  add(destinationId: string): void {
    this._favorites.update(current => {
      if (current.includes(destinationId)) return current;
      return [...current, destinationId];
    });
    this.saveToStorage();
  }

  remove(destinationId: string): void {
    this._favorites.update(current => current.filter(id => id !== destinationId));
    this.saveToStorage();
  }

  toggle(destinationId: string): void {
    if (this.isFavorite(destinationId)) {
      this.remove(destinationId);
    } else {
      this.add(destinationId);
    }
  }

  clear(): void {
    this._favorites.set([]);
    this.saveToStorage();
  }
}