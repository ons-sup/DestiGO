import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { FavoriteButtonComponent } from './favorite-button.component';
import { FavoritesService } from '../../services/favorites.service';

describe('FavoriteButtonComponent', () => {
  let fixture: ComponentFixture<FavoriteButtonComponent>;
  let component: FavoriteButtonComponent;
  let favoritesService: FavoritesService;

  beforeEach(async () => {
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(() => null),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn()
    });

    await TestBed.configureTestingModule({
      imports: [FavoriteButtonComponent],
      providers: [
        { provide: PLATFORM_ID, useValue: 'browser' }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteButtonComponent);
    component = fixture.componentInstance;
    favoritesService = TestBed.inject(FavoritesService);
    
    // Set required input
    fixture.componentRef.setInput('destinationId', 'rome');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show empty heart when not favorite', () => {
    expect(favoritesService.isFavorite('rome')).toBe(false);
    expect(component.isFavorite()).toBe(false);
    
    const heartIcon = fixture.nativeElement.querySelector('.heart-icon');
    expect(heartIcon.getAttribute('fill')).toBe('none');
    expect(heartIcon.getAttribute('stroke')).toBe('currentColor');
  });

  it('should show filled heart when favorite', () => {
    favoritesService.add('rome');
    fixture.detectChanges();
    
    expect(component.isFavorite()).toBe(true);
    
    const heartIcon = fixture.nativeElement.querySelector('.heart-icon');
    expect(heartIcon.getAttribute('fill')).toBe('currentColor');
    expect(heartIcon.getAttribute('stroke')).toBe('none');
  });

  it('should toggle favorite on click', () => {
    expect(component.isFavorite()).toBe(false);
    
    const button = fixture.nativeElement.querySelector('.favorite-btn');
    button.click();
    fixture.detectChanges();
    
    expect(component.isFavorite()).toBe(true);
    expect(favoritesService.isFavorite('rome')).toBe(true);
    
    button.click();
    fixture.detectChanges();
    
    expect(component.isFavorite()).toBe(false);
    expect(favoritesService.isFavorite('rome')).toBe(false);
  });

  it('should emit toggled event on click', () => {
    const emitSpy = vi.spyOn(component.toggled, 'emit');
    
    const button = fixture.nativeElement.querySelector('.favorite-btn');
    button.click();
    fixture.detectChanges();
    
    expect(emitSpy).toHaveBeenCalledWith(true);
    
    button.click();
    fixture.detectChanges();
    
    expect(emitSpy).toHaveBeenCalledWith(false);
  });

  it('should have correct aria-pressed attribute', () => {
    const button = fixture.nativeElement.querySelector('.favorite-btn');
    expect(button.getAttribute('aria-pressed')).toBe('false');
    
    button.click();
    fixture.detectChanges();
    
    expect(button.getAttribute('aria-pressed')).toBe('true');
  });

  it('should apply size classes', () => {
    fixture.componentRef.setInput('size', 'small');
    fixture.detectChanges();
    const btn = fixture.nativeElement.querySelector('.favorite-btn');
    expect(btn.classList.contains('size-small')).toBe(true);
    
    fixture.componentRef.setInput('size', 'large');
    fixture.detectChanges();
    expect(btn.classList.contains('size-large')).toBe(true);
  });

  it('should prevent default and stop propagation on click', () => {
    const event = new MouseEvent('click');
    const preventDefaultSpy = vi.spyOn(event, 'preventDefault');
    const stopPropagationSpy = vi.spyOn(event, 'stopPropagation');
    
    component.onClick(event);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(stopPropagationSpy).toHaveBeenCalled();
  });
});