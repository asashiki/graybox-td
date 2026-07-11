export interface TowerDef { id:string; cost:number; hp:number; damage:number; range:number; cooldown:number; }

export const towers:Record<string,TowerDef>={
 gun:{id:'gun',cost:100,hp:300,damage:12,range:3.5,cooldown:.4},
 cannon:{id:'cannon',cost:220,hp:350,damage:55,range:4.5,cooldown:1.8},
 slow:{id:'slow',cost:140,hp:250,damage:0,range:3,cooldown:0},
 repair:{id:'repair',cost:180,hp:200,damage:0,range:2.5,cooldown:1},
 wall:{id:'wall',cost:30,hp:500,damage:0,range:0,cooldown:0}
};
