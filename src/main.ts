import Phaser from "phaser";
import mage from "../public/placeholders/mage_placeholder.png";

interface MovementInput {
  up: Phaser.Input.Keyboard.Key;
  down: Phaser.Input.Keyboard.Key;
  left: Phaser.Input.Keyboard.Key;
  right: Phaser.Input.Keyboard.Key;
}

class MainScene extends Phaser.Scene {
  private movementInput!: MovementInput;
  private player!: Phaser.GameObjects.Sprite;

  constructor(){
    super({key: "main-scene"});
  }
  
  public preload(){
    this.load.spritesheet("mage", mage, {frameWidth: 19, frameHeight: 16})
  }
  
  public create(){
    this.movementInput = {
    up: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      left: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
    }
    this.player = this.add.sprite(this.game.config.width as number/2, this.game.config.height as number/2, "mage");
    this.player.scale *= 4;

  }

  public update(_time: number, delta: number){
    const dt = delta / 1000;

    let dx = 0;
    let dy = 0;

    if(this.movementInput.down.isDown){
      dy += 1
    }
    if(this.movementInput.up.isDown){
      dy -= 1
    }
    if(this.movementInput.right.isDown){
      dx += 1
    }
    if(this.movementInput.left.isDown){
      dx -= 1
    }

    if(dx !== 0 && dy !== 0){
      const d = Math.sqrt(2) / 2;
      dx *= d
      dy *= d
    }

    const speed = 120;

    this.player.x += dx * speed * dt;
    this.player.y += dy * speed * dt;
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