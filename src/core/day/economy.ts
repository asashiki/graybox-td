export interface EconomyState {
  scrap: number;
}

export const START_SCRAP = 400;

export function createEconomy(): EconomyState {
  return { scrap: START_SCRAP };
}

export function addScrap(state: EconomyState, amount: number) {
  state.scrap += amount;
}

export function spendScrap(state: EconomyState, amount: number): boolean {
  if (state.scrap < amount) return false;
  state.scrap -= amount;
  return true;
}
