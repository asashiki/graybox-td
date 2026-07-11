import type { BattlefieldState } from '../battlefield';
import { addScrap, type EconomyState } from './economy';

export interface DayEvent {
  type: 'damage-core' | 'creature-dead' | 'tower-fire';
  value?: number;
}

export class DaySim {
  tick = 0;
  events: DayEvent[] = [];

  constructor(public state: BattlefieldState, public economy: EconomyState) {}

  step() {
    this.tick++;
    // Core loop placeholder: all combat calculations remain deterministic.
    if (this.tick % 30 === 0) {
      this.events.push({ type: 'tower-fire' });
    }
  }

  killCreature(reward: number) {
    addScrap(this.economy, reward);
    this.events.push({ type: 'creature-dead', value: reward });
  }
}
