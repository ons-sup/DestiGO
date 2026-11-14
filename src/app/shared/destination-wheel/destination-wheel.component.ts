import { Component, ElementRef, computed, inject, input, output, signal } from '@angular/core';
import { DESTINATION_WHEEL_COUNTRIES } from './destination-wheel.data';
import { WheelCountry, WheelSegment } from './destination-wheel.model';

const VIEWBOX_CENTER = 200;
const OUTER_RADIUS = 172;
const INNER_RADIUS = 64;
const LABEL_RADIUS = 112;
const SEGMENT_GAP_DEGREES = 2;
const DRAG_THRESHOLD_DEGREES = 4;

let nextWheelId = 0;

@Component({
  selector: 'app-destination-wheel',
  standalone: true,
  templateUrl: './destination-wheel.component.html',
  styleUrl: './destination-wheel.component.css',
})
export class DestinationWheelComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly instanceId = `destination-wheel-${nextWheelId++}`;

  private pointerId: number | null = null;
  private pointerLastAngle = 0;
  private dragDistance = 0;
  private dragged = false;

  readonly countries = input<readonly WheelCountry[]>(DESTINATION_WHEEL_COUNTRIES);
  readonly countrySelected = output<WheelCountry>();
  readonly exploreSelected = output<WheelCountry>();

  protected readonly wheelTitleId = `${this.instanceId}-title`;
  protected readonly hintId = `${this.instanceId}-hint`;
  protected readonly glowId = `${this.instanceId}-glow`;
  protected readonly selectedIndex = signal(0);
  protected readonly rotation = signal(0);
  protected readonly dragging = signal(false);
  protected readonly labelRotation = computed(() => -this.rotation());
  protected readonly segments = computed<readonly WheelSegment[]>(() =>
    this.buildSegments(this.countries()),
  );
  protected readonly selectedCountry = computed<WheelCountry | null>(() => {
    const countries = this.countries();
    return countries[this.selectedIndex()] ?? countries[0] ?? null;
  });
  protected readonly selectedAnnouncement = computed(() => {
    const country = this.selectedCountry();
    if (!country) {
      return '';
    }
    return `${country.name} selected. ${
      country.available ? 'Explore is available.' : 'This portal is coming soon.'
    }`;
  });

  protected flagClipId(countryId: string): string {
    return `${this.instanceId}-flag-${countryId}`;
  }

  protected segmentAriaLabel(country: WheelCountry): string {
    return country.available ? country.name : `${country.name}, coming soon`;
  }

  protected onPointerDown(event: PointerEvent): void {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }
    const svg = event.currentTarget as SVGSVGElement;
    svg.setPointerCapture(event.pointerId);
    this.pointerId = event.pointerId;
    this.pointerLastAngle = this.pointerAngle(event, svg);
    this.dragDistance = 0;
    this.dragged = false;
    this.dragging.set(true);
  }

  protected onPointerMove(event: PointerEvent): void {
    if (this.pointerId !== event.pointerId || !this.dragging()) {
      return;
    }
    const svg = event.currentTarget as SVGSVGElement;
    const angle = this.pointerAngle(event, svg);
    const delta = this.shortestDelta(angle - this.pointerLastAngle);
    this.pointerLastAngle = angle;
    if (Math.abs(delta) < 0.01) {
      return;
    }
    this.dragDistance += Math.abs(delta);
    if (this.dragDistance >= DRAG_THRESHOLD_DEGREES) {
      this.dragged = true;
    }
    this.rotation.update((rotation) => rotation + delta);
  }

  protected onPointerUp(event: PointerEvent): void {
    if (this.pointerId !== event.pointerId) {
      return;
    }
    const svg = event.currentTarget as SVGSVGElement;
    if (svg.hasPointerCapture(event.pointerId)) {
      svg.releasePointerCapture(event.pointerId);
    }
    this.pointerId = null;
    this.dragging.set(false);
    if (this.dragged) {
      this.snapToNearest();
    }
  }

  protected onPointerCancel(event: PointerEvent): void {
    if (this.pointerId !== event.pointerId) {
      return;
    }
    const svg = event.currentTarget as SVGSVGElement;
    if (svg.hasPointerCapture(event.pointerId)) {
      svg.releasePointerCapture(event.pointerId);
    }
    this.pointerId = null;
    this.dragging.set(false);
    if (this.dragged) {
      this.snapToNearest();
    }
    this.dragged = false;
  }

  protected onSegmentClick(index: number): void {
    if (this.dragged) {
      this.dragged = false;
      return;
    }
    this.selectIndex(index);
  }

  protected onSegmentKeydown(event: KeyboardEvent, index: number): void {
    const count = this.segments().length;
    if (!count) {
      return;
    }
    let nextIndex: number | null = null;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        nextIndex = index + 1;
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        nextIndex = index - 1;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = count - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.selectIndex(index);
        return;
      default:
        return;
    }
    event.preventDefault();
    this.selectIndex(nextIndex);
    this.focusSegment(nextIndex);
  }

  protected explore(): void {
    const country = this.selectedCountry();
    if (!country?.available) {
      return;
    }
    this.exploreSelected.emit(country);
  }

  private selectIndex(index: number): void {
    const countries = this.countries();
    if (!countries.length) {
      return;
    }
    const normalized = ((index % countries.length) + countries.length) % countries.length;
    const country = countries[normalized];
    if (!country) {
      return;
    }
    this.selectedIndex.set(normalized);
    this.rotation.set(this.targetRotation(normalized, this.rotation()));
    this.countrySelected.emit(country);
  }

  private snapToNearest(): void {
    const segments = this.segments();
    if (!segments.length) {
      return;
    }
    let nearest = 0;
    let nearestDistance = Infinity;
    for (let index = 0; index < segments.length; index += 1) {
      const segment = segments[index];
      if (!segment) {
        continue;
      }
      const distance = Math.abs(this.shortestDelta(segment.midAngle + this.rotation()));
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearest = index;
      }
    }
    this.selectIndex(nearest);
  }

  private targetRotation(index: number, from: number): number {
    const segment = this.segments()[index];
    if (!segment) {
      return from;
    }
    return from + this.shortestDelta(-segment.midAngle - from);
  }

  private shortestDelta(degrees: number): number {
    return ((((degrees + 180) % 360) + 360) % 360) - 180;
  }

  private pointerAngle(event: PointerEvent, svg: SVGSVGElement): number {
    const bounds = svg.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;
    return (Math.atan2(event.clientX - centerX, centerY - event.clientY) * 180) / Math.PI;
  }

  private focusSegment(index: number): void {
    const count = this.segments().length;
    if (!count) {
      return;
    }
    const normalized = ((index % count) + count) % count;
    const segment = this.host.nativeElement.querySelector<SVGGElement>(
      `[data-wheel-index="${normalized}"]`,
    );
    if (segment && typeof segment.focus === 'function') {
      segment.focus();
    }
  }

  private buildSegments(countries: readonly WheelCountry[]): readonly WheelSegment[] {
    if (!countries.length) {
      return [];
    }
    const sweep = 360 / countries.length;
    const gap = Math.min(SEGMENT_GAP_DEGREES, sweep / 4);
    return countries.map((country, index) => {
      const start = index * sweep - sweep / 2 + gap / 2;
      const end = index * sweep + sweep / 2 - gap / 2;
      const mid = index * sweep;
      const outerStart = this.polar(OUTER_RADIUS, start);
      const outerEnd = this.polar(OUTER_RADIUS, end);
      const innerEnd = this.polar(INNER_RADIUS, end);
      const innerStart = this.polar(INNER_RADIUS, start);
      const largeArc = sweep - gap > 180 ? 1 : 0;
      const label = this.polar(LABEL_RADIUS, mid);
      return {
        country,
        path: [
          `M ${outerStart.x} ${outerStart.y}`,
          `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
          `L ${innerEnd.x} ${innerEnd.y}`,
          `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
          'Z',
        ].join(' '),
        labelX: label.x,
        labelY: label.y,
        midAngle: mid,
      };
    });
  }

  private polar(radius: number, degrees: number): { x: number; y: number } {
    const radians = (degrees * Math.PI) / 180;
    return {
      x: this.round(VIEWBOX_CENTER + radius * Math.sin(radians)),
      y: this.round(VIEWBOX_CENTER - radius * Math.cos(radians)),
    };
  }

  private round(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
