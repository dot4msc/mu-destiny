import Phaser from "phaser";
import type { Stats } from "../utilities/Stats";

export class GameManagerScene extends Phaser.Scene {
  private _playerStats: Stats = {
    health: 100,
    mana: 200,
    strength: 10,
    intelligence: 40,
    critical: 0.05,
  };

  private _bossStatsState: Stats = {
    health: 400,
    mana: 200,
    strength: 40,
    intelligence: 30,
    critical: 0.05,
  };

  constructor(){
    super({key: "game-manager-scene"});
  }

  get playerStats():Stats {
    return this._playerStats;
  }
  
  get bossStats(): Stats {
    return this._bossStatsState;
  }
}