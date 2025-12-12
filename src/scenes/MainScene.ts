import Phaser from "phaser";
import { Boss } from "../sprites/entities/Boss";
import { Player } from "../sprites/entities/Player";
//import type { GameManagerScene } from "./GameManagerScene";

export default class MainScene extends Phaser.Scene {
  private player!: Player;
  private boss!: Boss;

  constructor(){
    super({key: "main-scene"});
  }
  
  public create() {
    //const manager:GameManagerScene = this.scene.get("game-manager-scene") as GameManagerScene;

    this.player = new Player(this, 0,0);
    this.player.x = (this.game.config.width as number) / 4;
    this.player.y = (this.game.config.height as number) / 2;

    this.boss = new Boss(this,0,0);
    this.boss.x = 3 * (this.game.config.width as number) / 4;
    this.boss.y = (this.game.config.height as number) / 2;
    
    console.log(this.player);

    this.player.scale *= 2;

    console.log(this.boss);
    this.physics.add.overlap(this.player,this.boss,this.changeScene,undefined,this);
  }

  private changeScene(){
    this.scene.start("battle-scene");
  }
  public update() {
  }
}