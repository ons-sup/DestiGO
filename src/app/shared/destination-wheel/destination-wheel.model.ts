export type WheelCountryId = 'turkey' | 'italy' | 'spain';

export interface WheelCountry {
  readonly id: WheelCountryId;
  readonly name: string;
  readonly tagline: string;
  readonly route: string;
  readonly available: boolean;
  readonly color: string;
}

export interface WheelSegment {
  readonly country: WheelCountry;
  readonly path: string;
  readonly labelX: number;
  readonly labelY: number;
  readonly midAngle: number;
}
