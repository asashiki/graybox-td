export type GameEvent =
  | { type: 'damage'; target: string; amount: number }
  | { type: 'destroy'; target: string }
  | { type: 'resource'; amount: number };

export class EventQueue {
  private events: GameEvent[] = [];
  push(event: GameEvent) { this.events.push(event); }
  drain() { const out = this.events; this.events = []; return out; }
}
