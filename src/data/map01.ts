import type { TileType } from '../core/grid';

const rows = [
  'E.....P....R.......',
  '......P....R.......',
  '..RR..P............',
  '......P....PP......',
  '......P............',
  '......P....R.......',
  '......P............',
  '......P............',
  '..RR..P............',
  '......P............',
  '......P......CCC...',
  'E.....P......CCC...'
];

export function createMap01(): TileType[][] {
  return rows.map(row => [...row].map(c => {
    if (c === 'R') return 'rock';
    if (c === 'P') return 'plot';
    if (c === 'C') return 'coreZone';
    if (c === 'E') return 'entrance';
    return 'sand';
  }));
}
