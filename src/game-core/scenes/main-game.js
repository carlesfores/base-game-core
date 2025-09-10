import Phaser from "phaser";
import Player from "@/game-core/objects/player";

export default class MainGameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainGameScene' });
  }

  create() {
    const {width, height} = this.scale;
    this.add.text(width * 0.1, height * 0.1, "Main Game Scene");
    const worldWidth = 1280;
    const worldHeight = 480;

    const map = this.make.tilemap({ key: "map" });
    const tileset = map.addTilesetImage("super-mario-nes-arrow-32px", "tiles");
    
    const background = map.createLayer("background", tileset, 0, 0);
    const ground = map.createLayer("ground", tileset, 0, 0);
    ground.setCollisionByProperty({ collides: true });

    this.player = new Player(this, width / 2, height / 2, 'player');

    this.physics.add.collider(this.player, ground);

    this.cameras.main.startFollow(this.player);
    this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
  }

  update() {
    this.player.update();
  }
}