export interface RuntimeCreature {id:string; type:string; x:number; y:number; hp:number; pathIndex:number;}

export function createCreature(type:string,x:number,y:number):RuntimeCreature{
 return {id:`${type}-${Date.now()}`,type,x,y,hp:100,pathIndex:0};
}
