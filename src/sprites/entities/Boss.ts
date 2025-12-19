import Phaser from "phaser";
import type { HasStats, Stats } from "../../utilities/Stats";

export class Boss extends Phaser.Physics.Arcade.Sprite implements HasStats{
  private _stats: Stats;

  constructor(scene: Phaser.Scene, x: number, y: number, stats?: Stats) {
    super(scene,x,y,"boss");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this._stats = stats ? stats : { health: 400, mana: 200, strength: 40, intelligence: 30, critical: 0.05 };
  }

  applyState(statsPatch: Partial<Stats>): void {
    Object.assign(this.stats, statsPatch);
  }

  get stats(): Stats {
    return this._stats;
  }
}

