export interface Stats {
  health: number;
  mana: number;
  strength: number;
  intelligence: number;
  critical: number;
}

export interface HasStats {
  get stats(): Stats;
  applyState(statsPatch:Partial<Stats>): void;

}