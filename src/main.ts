import MainScene from "./scenes/MainScene";
import BootScene  from "./scenes/BootScene";
import { GameManagerScene } from "./scenes/GameManagerScene";
import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 240 * 2,
  height: 160 * 2,
  parent: "main",
  pixelArt: true,
  scene: [BootScene, GameManagerScene, MainScene],
};

new Phaser.Game(config);