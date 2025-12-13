import Phaser from "phaser";
import type { HasStats, Stats } from "../../utilities/Stats";

export class Boss extends Phaser.Physics.Arcade.Sprite implements HasStats{
  private stats: Stats;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene,x,y,"boss");
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.stats = {
      health: 400,
      mana: 200,
      strength: 40,
      intelligence: 30,
      critical: 0.05,
    };
  }

  public getStats(): Stats {
    return this.stats;
  }

  public setStats(stats: Stats){
    this.stats = stats;
  }
}

