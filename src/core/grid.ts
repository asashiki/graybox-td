export type TileType = 'sand' | 'rock' | 'plot' | 'road' | 'coreZone' | 'entrance';

export interface Tile {
  x: number;
  y: number;
  type: TileType;
}

export const GRID_WIDTH = 20;
export const GRID_HEIGHT = 12;

export function neighbors(tile: Tile): Array<[number, number]> {
  return [[tile.x + 1, tile.y], [tile.x - 1, tile.y], [tile.x, tile.y + 1], [tile.x, tile.y - 1]];
}

export function gridToPixel(x: number, y: number, size = 32) {
  return { x: x * size, y: y * size };
}
