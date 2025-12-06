import Phaser from "phaser";
import { Boss } from "../sprites/entities/Boss";
import { Player } from "../sprites/entities/Player";

export class GameManagerScene extends Phaser.Scene {
  private player!: Player;
  private boss!: Boss;

  constructor(){
    super({key: "game-manager-scene"});
  }

  create(){
    this.player = new Player(this,0,0);
    this.boss = new Boss(this,0,0);
  }

  public getPlayer(): Player {
    return this.player;
  }

  public getBoss(): Boss {
    return this.boss;
  }
}