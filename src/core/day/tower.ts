export interface RuntimeTower {id:string; type:string; x:number; y:number; hp:number; cooldown:number;}

export function createTower(type:string,x:number,y:number):RuntimeTower{
 return {id:`${type}-${x}-${y}`,type,x,y,hp:100,cooldown:0};
}
