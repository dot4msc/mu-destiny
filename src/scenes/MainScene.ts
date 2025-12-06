import Phaser from "phaser";
import { Boss } from "../sprites/entities/Boss";
import { Player } from "../sprites/entities/Player";
import type { GameManagerScene } from "./GameManagerScene";

export default class MainScene extends Phaser.Scene {

  constructor(){
    super({key: "main-scene"});
  }
  
  public create() {
    const manager:GameManagerScene = this.scene.get("game-manager-scene") as GameManagerScene;

    const player: Player = manager.getPlayer();
    const boss: Boss = manager.getBoss();

    this.add.existing(player);
    this.add.existing(boss);
    boss.scene = this;
    console.log(player);

    player.scale *= 2;
    player.setDepth(1);

    console.log(boss);
    boss.setDepth(0);
  }

  public update() {
  }
}