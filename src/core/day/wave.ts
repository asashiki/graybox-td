export interface SpawnEntry {
  creatureId: string;
  count: number;
  interval: number;
}

export interface Wave {
  id: number;
  spawns: SpawnEntry[];
}

export const day1Waves: Wave[] = [
  { id: 1, spawns: [{ creatureId: 'skitter', count: 10, interval: 30 }] },
  { id: 2, spawns: [{ creatureId: 'skitter', count: 15, interval: 24 }, { creatureId: 'beetle', count: 2, interval: 90 }] },
  { id: 3, spawns: [{ creatureId: 'skitter', count: 20, interval: 18 }, { creatureId: 'beetle', count: 4, interval: 70 }] }
];
