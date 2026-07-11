export interface WaveEntry { type: string; count: number; }

export const waves = {
  day1: [
    [{ type: 'skitter', count: 8 }],
    [{ type: 'skitter', count: 12 }],
    [{ type: 'beetle', count: 3 }],
  ] as WaveEntry[][]
};
