import Phaser from "phaser";
export class Boss extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene,x,y,"boss");
    scene.add.existing(this);
  }
}

