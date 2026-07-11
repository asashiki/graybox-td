export type NightPhase = 'player' | 'defense';

export class NightSim {
  turn = 1;
  phase: NightPhase = 'player';

  endPlayerPhase() {
    this.phase = 'defense';
  }

  endTurn() {
    this.turn++;
    this.phase = 'player';
  }
}
