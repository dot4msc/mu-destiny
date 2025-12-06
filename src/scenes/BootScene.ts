import Phaser from "phaser";

export default class BootScene extends Phaser.Scene {
  constructor(){
    super({key: "boot-scene"});
  }

  preload(){
    this.load.spritesheet("mage", "/placeholders/mage_placeholder.png", {
      frameWidth: 19,
      frameHeight: 16,
    });
    this.load.image("boss", "/placeholders/boss_placeholder.png");
  }

  create(){
    this.anims.create({
      key: "walk-left",
      frames: this.anims.generateFrameNumbers("mage", {start: 2, end: 3}),
      frameRate: 8,
      repeat: -1,
    });
    
    this.scene.launch("game-manager-scene");
    this.scene.start("main-scene");
  }
}