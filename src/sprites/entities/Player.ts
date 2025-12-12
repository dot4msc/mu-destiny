import Phaser from "phaser";
import type { Stats, StatSetGet } from "../../utilities/Stats";

interface MovementInput {
  up: Phaser.Input.Keyboard.Key | null;
  down: Phaser.Input.Keyboard.Key | null;
  left: Phaser.Input.Keyboard.Key | null;
  right: Phaser.Input.Keyboard.Key | null;
}

export class Player extends Phaser.Physics.Arcade.Sprite implements StatSetGet {

  private movementInput: MovementInput;
  private stats: Stats;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, "mage");
    this.movementInput = {
      up: scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP),
      down: scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN),
      left: scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT),
      right: scene.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT),
    };

    this.stats = {
      health: 100,
      mana: 200,
      strength: 10,
      intelligence: 40,
      critical: 0.05,
    };

    scene.add.existing(this);
    scene.physics.add.existing(this);

  }
  public getStats(): Stats {
    return this.stats;
  }

  public setStats(stats: Stats){
    this.stats = stats;
  }
  protected preUpdate(time: number, delta: number): void {
    super.preUpdate(time,delta);
    const dt = delta / 1000;

    let dx = 0;
    let dy = 0;

    if(this.movementInput?.down!.isDown){
      dy += 1;
    }
    if(this.movementInput.up!.isDown){
      dy -= 1;
    }
    if(this.movementInput.right!.isDown){
      dx += 1;
    }
    if(this.movementInput.left!.isDown){
      dx -= 1;
      this.anims.play("walk-left", true);
    }
    else{
      this.anims.stopOnFrame(this.anims.currentAnim?.frames[0] as Phaser.Animations.AnimationFrame);
    }

    if(dx !== 0 && dy !== 0){
      const d = Math.sqrt(2) / 2;
      dx *= d;
      dy *= d;
    }

    const speed = 120;

    this.x += dx * speed * dt;
    this.y += dy * speed * dt;
  }

}