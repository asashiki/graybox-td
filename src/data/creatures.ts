export interface CreatureDef {id:string; hp:number; speed:number; reward:number;}

export const creatures:Record<string,CreatureDef>={
 skitter:{id:'skitter',hp:40,speed:3,reward:8},
 beetle:{id:'beetle',hp:260,speed:1,reward:20},
 spitter:{id:'spitter',hp:90,speed:2,reward:15},
 elite:{id:'elite',hp:800,speed:2,reward:120}
};
