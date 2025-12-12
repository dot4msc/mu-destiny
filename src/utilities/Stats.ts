export interface Stats {
  health: number;
  mana: number;
  strength: number;
  intelligence: number;
  critical: number;
}

export interface StatSetGet {
  setStats(stats: Stats):void;
  getStats(): Stats;

}