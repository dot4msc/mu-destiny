import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  width: 240 * 2,
  height: 160 * 2,
  parent: "main",
  scene: {
    preload,
    create,
    update,
  }
}

new Phaser.Game(config);

function preload(){};
function create(){};
function update(){};