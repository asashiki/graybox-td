export type HeroineId = 'aru' | 'mio' | 'koto';

export interface NightUnit {
  id: HeroineId;
  hp: number;
  move: number;
  acted: boolean;
}

export const heroines: NightUnit[] = [
  { id: 'aru', hp: 120, move: 5, acted: false },
  { id: 'mio', hp: 80, move: 4, acted: false },
  { id: 'koto', hp: 90, move: 4, acted: false }
];
