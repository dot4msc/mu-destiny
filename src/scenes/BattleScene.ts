import Phaser from "phaser";
import type { Player } from "../sprites/entities/Player";
import type { Boss } from "../sprites/entities/Boss";

export default class BattleScene extends Phaser.Scene {
  private player!: Player;
  private boss!: Boss;
  constructor(){
    super({key: "battle-scene"});
  }

  create(){
    
  }
}