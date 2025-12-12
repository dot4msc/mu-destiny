import MainScene from "./scenes/MainScene";
import BootScene  from "./scenes/BootScene";
import { GameManagerScene } from "./scenes/GameManagerScene";
import Phaser from "phaser";
import BattleScene from "./scenes/BattleScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 240 * 2,
  height: 160 * 2,
  parent: "main",
  pixelArt: true,
  physics: {
    default: "arcade",
  },
  scene: [BootScene, GameManagerScene, MainScene, BattleScene],
};

new Phaser.Game(config);