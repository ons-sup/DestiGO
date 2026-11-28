import { Component, ElementRef, computed, inject, input, output, signal } from '@angular/core';
import { DESTINATION_WHEEL_COUNTRIES, HOME_DESTINATION } from './destination-wheel.data';
import { WheelCountry, WheelSegment } from './destination-wheel.model';

const VIEWBOX_CENTER = 200;
const OUTER_RADIUS = 172;
const INNER_RADIUS = 80;
const LABEL_RADIUS = 128;
const SEGMENT_GAP_DEGREES = 3;

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

  readonly countries = input<readonly WheelCountry[]>(DESTINATION_WHEEL_COUNTRIES);
  readonly countrySelected = output<WheelCountry>();
  readonly exploreSelected = output<WheelCountry>();

  protected readonly homeDestination = HOME_DESTINATION;
  protected readonly isHomeSelected = signal(false);
  protected readonly wheelTitleId = `${this.instanceId}-title`;
  protected readonly hintId = `${this.instanceId}-hint`;
  protected readonly selectedIndex = signal(0);

  protected readonly segments = computed<readonly WheelSegment[]>(() =>
    this.buildSegments(this.countries()),
  );

  protected readonly compassTicks = Array.from({ length: 36 }, (_, i) => {
    const angle = i * 10;
    const isMajor = i % 3 === 0;
    const inner = this.polar(isMajor ? 179 : 182, angle);
    const outer = this.polar(isMajor ? 189 : 187, angle);
    return { x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y, isMajor };
  });

  protected readonly selectedCountry = computed<WheelCountry | null>(() => {
    if (this.isHomeSelected()) {
      return this.homeDestination;
    }
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

  protected segmentAriaLabel(country: WheelCountry): string {
    return country.available ? country.name : `${country.name}, coming soon`;
  }

  protected onSegmentEnter(index: number): void {
    this.isHomeSelected.set(false);
    this.selectIndex(index);
  }

  protected onSegmentClick(index: number): void {
    this.isHomeSelected.set(false);
    const country = this.countries()[index];
    if (country?.available) {
      this.exploreSelected.emit(country);
    }
  }

  protected onHomeEnter(): void {
    this.isHomeSelected.set(true);
    this.countrySelected.emit(this.homeDestination);
  }

  protected onHomeClick(): void {
    this.isHomeSelected.set(true);
    this.exploreSelected.emit(this.homeDestination);
  }

  protected onHomeKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.onHomeClick();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.isHomeSelected.set(false);
      this.selectIndex(0);
      this.focusSegment(0);
    }
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
      case 'h':
      case 'H':
        event.preventDefault();
        this.onHomeEnter();
        this.focusHome();
        return;
      case 'End':
        nextIndex = count - 1;
        break;
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.onSegmentClick(index);
        return;
      default:
        return;
    }
    event.preventDefault();
    this.isHomeSelected.set(false);
    const normalized = ((nextIndex % count) + count) % count;
    this.selectIndex(normalized);
    this.focusSegment(normalized);
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
    this.countrySelected.emit(country);
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

  private focusHome(): void {
    const hub = this.host.nativeElement.querySelector<SVGGElement>('.wheel__hub');
    if (hub && typeof hub.focus === 'function') {
      hub.focus();
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
