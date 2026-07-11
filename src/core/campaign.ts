export type Phase = 'title' | 'day' | 'night' | 'ending';

export interface CampaignState {
  day: number;
  phase: Phase;
}

export function createCampaign(): CampaignState {
  return { day: 1, phase: 'day' };
}

export function advancePhase(state: CampaignState): CampaignState {
  if (state.phase === 'day') return { ...state, phase: 'night' };
  if (state.phase === 'night' && state.day < 3) return { day: state.day + 1, phase: 'day' };
  return { ...state, phase: 'ending' };
}
