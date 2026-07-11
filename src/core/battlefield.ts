export type TileType = 'sand' | 'rock' | 'plot' | 'road' | 'coreZone';
export type TowerStatus = 'active' | 'offline' | 'destroyed';

export interface TileState { type: TileType; occupied?: boolean; }
export interface TowerState { id:string; type:string; x:number; y:number; hp:number; status:TowerStatus; }
export interface PowerNodeState { id:string; x:number; y:number; online:boolean; }
export interface HeroineState { id:string; hp:number; status:'active'|'injured'|'captured'; }

export interface BattlefieldState {
 day:number;
 phase:'day'|'night';
 grid:TileState[][];
 towers:TowerState[];
 powerNodes:PowerNodeState[];
 coreHp:number;
 scrap:number;
 heroines:HeroineState[];
 worldFlags:Record<string,boolean>;
}

export function createInitialState(grid:TileState[][]):BattlefieldState {
 return {day:1,phase:'day',grid,towers:[],powerNodes:[
  {id:'A',x:6,y:4,online:true},{id:'B',x:12,y:6,online:true},{id:'C',x:16,y:9,online:true}
 ],coreHp:100,scrap:400,heroines:[
  {id:'aru',hp:120,status:'active'}, {id:'mio',hp:80,status:'active'}, {id:'koto',hp:90,status:'active'}
 ],worldFlags:{}};
}

export function serializeBattlefield(state:BattlefieldState){return JSON.stringify(state);}
export function deserializeBattlefield(raw:string){return JSON.parse(raw) as BattlefieldState;}
