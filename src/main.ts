import Phaser from "phaser";
import mage from "../public/placeholders/mage_placeholder.png";
class MainScene extends Phaser.Scene {
  constructor(){
    super({key: "main-scene"});
  }

  preload(){
    this.load.spritesheet("mage", mage, {frameWidth: 19, frameHeight: 16})
  }

  create(){
    const player = this.add.sprite(this.game.config.width as number/2, this.game.config.height as number/2, "mage");
    player.scale *= 4;
  }
}

const config: Phaser.Types.Core.GameConfig = {
  width: 240 * 2,
  height: 160 * 2,
  parent: "main",
  pixelArt: true,
  scene: [MainScene]
}

new Phaser.Game(config);