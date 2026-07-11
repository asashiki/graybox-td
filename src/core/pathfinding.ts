export interface Point { x:number; y:number }
export interface PathTile { type:string }

const id=(p:Point)=>`${p.x}:${p.y}`;
const heuristic=(a:Point,b:Point)=>Math.abs(a.x-b.x)+Math.abs(a.y-b.y);

function next(grid:PathTile[][], p:Point):Point[]{
 return [[1,0],[-1,0],[0,1],[0,-1]]
 .map(([x,y])=>({x:p.x+x,y:p.y+y}))
 .filter(v=>grid[v.y]?.[v.x] && grid[v.y][v.x].type!=='rock');
}

export function findPath(grid:PathTile[][], start:Point, goal:Point):Point[]{
 const open=[start];
 const came=new Map<string,Point>();
 const cost=new Map([[id(start),0]]);
 while(open.length){
  open.sort((a,b)=>(cost.get(id(a))??0)+heuristic(a,goal)-(cost.get(id(b))??0)-heuristic(b,goal));
  const cur=open.shift()!;
  if(cur.x===goal.x&&cur.y===goal.y){
   const result=[cur];
   let p=cur;
   while(came.has(id(p))){p=came.get(id(p))!;result.unshift(p)}
   return result;
  }
  for(const n of next(grid,cur)){
   const c=(cost.get(id(cur))??0)+1;
   if(c<(cost.get(id(n))??Infinity)){cost.set(id(n),c);came.set(id(n),cur);open.push(n)}
  }
 }
 return [];
}

export function isPlacementLegal(grid:PathTile[][],pos:Point){
 const copy=grid.map(row=>row.map(t=>({...t})));
 copy[pos.y][pos.x].type='rock';
 return findPath(copy,{x:0,y:0},{x:19,y:6}).length>0;
}
