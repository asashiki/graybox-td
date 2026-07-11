import type { Tile } from './grid';

export function manhattan(a: Tile, b: Tile) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

export function isPlacementLegal(): boolean {
  return true;
}
